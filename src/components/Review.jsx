import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { REVIEW_ITEMS } from '../data/reviewItems';
import SwipeCard from './SwipeCard';
import { motion } from 'framer-motion';

export default function Review() {
    const { state, markAsRemembered, markAsLater } = useGame();
    const [queue, setQueue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [isReviewMode, setIsReviewMode] = useState(false);

    useEffect(() => {
        // Initialize queue: items not yet remembered
        const remembered = state.reviewState.rememberedIds;
        const remaining = REVIEW_ITEMS.filter(item => !remembered.includes(item.id));
        setQueue(remaining);
    }, [state.reviewState.rememberedIds]);

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

    if (isReviewMode) {
        if (finished || queue.length === 0) {
            return (
                <div className="flex-center" style={{ height: '100%', flexDirection: 'column', color: '#fff' }}>
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎉</div>
                    <h2>復習完了！</h2>
                    <p style={{ marginBottom: '2rem' }}>素晴らしい進捗です。</p>
                    <button
                        onClick={() => { setIsReviewMode(false); setFinished(false); }}
                        style={{ padding: '1rem 2rem', borderRadius: '12px', border: 'none', background: 'var(--color-moon-cream)', color: 'var(--color-night-navy)', fontWeight: 'bold' }}
                    >
                        リストに戻る
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{ marginTop: '1rem', background: 'transparent', border: 'none', color: '#fff', textDecoration: 'underline' }}
                    >
                        ホームへ戻る
                    </button>
                </div>
            );
        }

        const currentItem = queue[currentIndex];
        const nextItem = queue[currentIndex + 1];

        return (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 2rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <button onClick={() => setIsReviewMode(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem' }}>← 戻る</button>
                    <h2 style={{ color: '#fff', margin: 0 }}>復習カード ({currentIndex + 1} / {queue.length})</h2>
                    <div style={{ width: '40px' }}></div>
                </div>

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
                        ✕
                    </button>
                    <button onClick={() => handleSwipe('right')} style={{ fontSize: '2rem', background: 'transparent', border: 'none', color: '#4CAF50' }}>
                        ○
                    </button>
                </div>
                <p style={{ color: '#fff', marginTop: '1rem', opacity: 0.7 }}>スワイプまたはボタンで操作</p>
            </div>
        );
    }

    // List View
    const rememberedItems = REVIEW_ITEMS.filter(item => state.reviewState.rememberedIds.includes(item.id));
    const upcomingItems = REVIEW_ITEMS.filter(item => !state.reviewState.rememberedIds.includes(item.id));

    return (
        <div style={{ padding: '1rem', height: '100%', display: 'flex', flexDirection: 'column', color: '#fff' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>復習帳</h1>

            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>
                    暗記済み: {rememberedItems.length} / {REVIEW_ITEMS.length}
                </p>
                {upcomingItems.length > 0 ? (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsReviewMode(true)}
                        className="breathing"
                        style={{
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            border: 'none',
                            backgroundColor: 'var(--color-moon-cream)',
                            color: 'var(--color-night-navy)',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                    >
                        復習を始める ({upcomingItems.length}語)
                    </motion.button>
                ) : (
                    <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                        すべての単語をマスターしました！🎉
                    </div>
                )}
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                    単語リスト
                </h3>
                <div style={{ display: 'grid', gap: '0.8rem' }}>
                    {REVIEW_ITEMS.map((item) => {
                        const isRemembered = state.reviewState.rememberedIds.includes(item.id);
                        return (
                            <div key={item.id} style={{
                                backgroundColor: isRemembered ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                borderLeft: isRemembered ? '4px solid #4CAF50' : '4px solid transparent'
                            }}>
                                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 'bold' }}>{item.text}</div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{item.meaning}</div>
                                </div>
                                {isRemembered && <span style={{ color: '#4CAF50' }}>✓</span>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
