import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { REVIEW_ITEMS } from '../data/reviewItems';
import SwipeCard from './SwipeCard';

export default function Review() {
    const { state, markAsRemembered, markAsLater } = useGame();
    const [queue, setQueue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        // Initialize queue: items not yet remembered
        // Prioritize 'laterIds' if we wanted, but for now just all non-remembered items
        const remembered = state.reviewState.rememberedIds;
        const remaining = REVIEW_ITEMS.filter(item => !remembered.includes(item.id));
        setQueue(remaining);
    }, []); // Run once on mount (or depend on state if we want real-time updates)

    const handleSwipe = (direction) => {
        const currentItem = queue[currentIndex];
        if (!currentItem) return;

        if (direction === 'right') {
            markAsRemembered(currentItem.id);
        } else {
            markAsLater(currentItem.id);
        }

        // Move to next card
        if (currentIndex < queue.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished || queue.length === 0) {
        return (
            <div className="flex-center" style={{ height: '100%', flexDirection: 'column', color: '#fff' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎉</div>
                <h2>今日の復習は完了！</h2>
                <p>また明日も頑張ろう。</p>
                <button
                    onClick={() => window.location.reload()} // Simple reload to reset for demo
                    style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.2)', color: '#fff' }}
                >
                    もう一度（デモ用リセット）
                </button>
            </div>
        );
    }

    // Show current card and maybe next one underneath for depth
    const currentItem = queue[currentIndex];
    const nextItem = queue[currentIndex + 1];

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ color: '#fff', marginBottom: '2rem', zIndex: 20 }}>復習カード ({currentIndex + 1} / {queue.length})</h2>

            <div style={{ position: 'relative', width: '300px', height: '400px' }}>
                {/* Next Card (Background) */}
                {nextItem && (
                    <div style={{
                        position: 'absolute',
                        width: '300px',
                        height: '400px',
                        backgroundColor: '#fff',
                        borderRadius: '20px',
                        transform: 'scale(0.95) translateY(10px)',
                        opacity: 0.5,
                        zIndex: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '3rem' }}>{nextItem.icon}</span>
                    </div>
                )}

                {/* Current Card (Foreground) */}
                {currentItem && (
                    <SwipeCard
                        key={currentItem.id}
                        item={currentItem}
                        onSwipe={handleSwipe}
                    />
                )}
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', zIndex: 20 }}>
                <button onClick={() => handleSwipe('left')} style={{ fontSize: '2rem', background: 'transparent', border: 'none', color: '#ff6b6b' }}>
                    ✕ あとで
                </button>
                <button onClick={() => handleSwipe('right')} style={{ fontSize: '2rem', background: 'transparent', border: 'none', color: '#4CAF50' }}>
                    ○ 覚えた
                </button>
            </div>
        </div>
    );
}
