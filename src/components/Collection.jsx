import React, { useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { ITEMS } from '../data/items';
import { motion } from 'framer-motion';

export default function Collection() {
    const { state, placeItem } = useGame();
    const { unlockedItemIds, placedItems } = state;

    // Filter ITEMS to get full objects for unlocked items
    const unlockedItems = ITEMS.filter(item => unlockedItemIds.includes(item.id));

    // Calculate room grade based on unlocked items count
    const getRoomGrade = () => {
        const count = unlockedItemIds.length;
        if (count >= 5) return { bg: 'linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%)', name: 'プロフェッショナルデスク' };
        if (count >= 3) return { bg: 'linear-gradient(180deg, #f1f8e9 0%, #dcedc8 100%)', name: '整理されたデスク' };
        return { bg: 'linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%)', name: '基本デスク' };
    };

    const roomGrade = getRoomGrade();

    // Generate consistent random positions for placed items
    const itemPositions = useMemo(() => {
        const positions = {};
        Object.keys(placedItems).forEach((itemId, index) => {
            // Use itemId as seed for consistent positioning
            const hash = itemId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            positions[itemId] = {
                top: (30 + (hash % 40)) + '%',
                left: (20 + ((hash * 17) % 50)) + '%'
            };
        });
        return positions;
    }, [placedItems]);

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '1rem',
                color: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h2 style={{ margin: 0 }}>学習スペース</h2>
                <span style={{
                    fontSize: '0.8rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '10px'
                }}>
                    {roomGrade.name}
                </span>
            </div>

            {/* Room View */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    flex: 1,
                    background: roomGrade.bg,
                    borderRadius: '16px',
                    marginBottom: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.1)'
                }}
            >
                {/* Background elements */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ position: 'absolute', bottom: '20px', fontSize: '5rem' }}
                >
                    👨‍🏫
                </motion.div>

                {/* Placed Items */}
                {Object.keys(placedItems).map((itemId, index) => {
                    const item = ITEMS.find(i => i.id === itemId);
                    if (!item) return null;

                    const position = itemPositions[itemId];

                    return (
                        <motion.div
                            key={itemId}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: 'spring',
                                delay: index * 0.1,
                                damping: 12
                            }}
                            style={{
                                position: 'absolute',
                                top: position.top,
                                left: position.left,
                                fontSize: '3rem',
                                cursor: 'pointer',
                                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
                            }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item.icon}
                        </motion.div>
                    );
                })}</motion.div>

            {/* Inventory */}
            <div style={{ height: '40%', overflowY: 'auto' }}>
                <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>持っているアイテム</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '0.5rem' }}>
                    {unlockedItems.map((item, index) => {
                        const isPlaced = placedItems[item.id];
                        return (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => placeItem(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '8px',
                                    backgroundColor: isPlaced ? 'var(--color-moon-cream)' : 'rgba(255,255,255,0.2)',
                                    border: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.2rem',
                                    color: isPlaced ? 'var(--color-night-navy)' : '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                                <span style={{ fontSize: '0.7rem' }}>{item.name}</span>
                            </motion.button>
                        );
                    })}
                    {unlockedItems.length === 0 && (
                        <p style={{ color: 'rgba(255,255,255,0.7)', gridColumn: '1 / -1', textAlign: 'center' }}>
                            まだアイテムを持っていません。<br />レッスンを受けてゲットしよう！
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
