import React, { useState, useRef } from 'react';

export default function SwipeCard({ item, onSwipe, style }) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const startPos = useRef({ x: 0, y: 0 });

    const handleStart = (clientX, clientY) => {
        setIsDragging(true);
        startPos.current = { x: clientX, y: clientY };
    };

    const handleMove = (clientX, clientY) => {
        if (!isDragging) return;
        const dx = clientX - startPos.current.x;
        const dy = clientY - startPos.current.y;
        setOffset({ x: dx, y: dy });
    };

    const handleEnd = () => {
        setIsDragging(false);
        const threshold = 100; // Swipe threshold
        if (offset.x > threshold) {
            onSwipe('right');
        } else if (offset.x < -threshold) {
            onSwipe('left');
        } else {
            setOffset({ x: 0, y: 0 }); // Reset
        }
    };

    const handleClick = (e) => {
        // Only flip if not dragging (small movement)
        if (Math.abs(offset.x) < 5 && Math.abs(offset.y) < 5) {
            setIsFlipped(!isFlipped);
        }
    };

    // Touch events
    const onTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchEnd = () => handleEnd();

    // Mouse events
    const onMouseDown = (e) => handleStart(e.clientX, e.clientY);
    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onMouseUp = () => handleEnd();
    const onMouseLeave = () => { if (isDragging) handleEnd(); };

    const rotation = offset.x * 0.1;
    const opacity = 1 - Math.abs(offset.x) / 500;

    return (
        <div
            style={{
                ...style,
                position: 'absolute',
                width: '300px',
                height: '400px',
                perspective: '1000px',
                cursor: 'grab',
                transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`,
                opacity: opacity,
                transition: isDragging ? 'none' : 'transform 0.3s ease',
                userSelect: 'none',
                zIndex: 10
            }}
            onClick={handleClick}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
        >
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s'
            }}>
                {/* Card Front */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}>
                    <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>{item.icon}</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>{item.english}</h2>
                    <p style={{ color: '#999', fontSize: '0.9rem', textAlign: 'center' }}>タップして裏返す</p>
                </div>

                {/* Card Back */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'var(--color-pillow-blue)',
                    borderRadius: '20px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    transform: 'rotateY(180deg)'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-night-navy)' }}>
                        {item.japanese}
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--color-night-navy)',
                        textAlign: 'center',
                        lineHeight: '1.6',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        padding: '1rem',
                        borderRadius: '8px'
                    }}>
                        {item.nuance}
                    </p>
                </div>
            </div>

            {/* Overlay for swipe direction hint */}
            {offset.x > 50 && (
                <div style={{
                    position: 'absolute', top: '20px', left: '20px',
                    border: '4px solid #4CAF50', color: '#4CAF50',
                    padding: '10px', borderRadius: '8px', fontSize: '2rem', fontWeight: 'bold',
                    transform: 'rotate(-15deg)',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    zIndex: 20
                }}>
                    覚えた！
                </div>
            )}
            {offset.x < -50 && (
                <div style={{
                    position: 'absolute', top: '20px', right: '20px',
                    border: '4px solid #FF5252', color: '#FF5252',
                    padding: '10px', borderRadius: '8px', fontSize: '2rem', fontWeight: 'bold',
                    transform: 'rotate(15deg)',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    zIndex: 20
                }}>
                    あとで
                </div>
            )}
        </div>
    );
}
