import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function QuizComplete({
    totalQuestions,
    correctCount,
    results,
    newUnlock,
    onPlayAgain,
    categoryName
}) {
    const navigate = useNavigate();
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const getMessage = () => {
        if (percentage === 100) return { text: 'パーフェクト！', emoji: '🏆', color: '#FFD700' };
        if (percentage >= 80) return { text: 'すごい！', emoji: '⭐', color: '#4ECDC4' };
        if (percentage >= 60) return { text: 'よくできました！', emoji: '👍', color: '#96CEB4' };
        return { text: '頑張りました！', emoji: '💪', color: '#A8DADC' };
    };

    const message = getMessage();

    return (
        <div style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            color: '#fff'
        }}>
            {/* Celebration emoji */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 10 }}
                style={{ fontSize: '6rem', marginBottom: '1rem' }}
            >
                {message.emoji}
            </motion.div>

            {/* Message */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem',
                    color: message.color
                }}
            >
                {message.text}
            </motion.h1>

            {/* Category name */}
            {categoryName && (
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '2rem' }}>
                    {categoryName} - レッスン完了
                </p>
            )}

            {/* Score */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '2rem',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    minWidth: '250px'
                }}
            >
                <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {correctCount} / {totalQuestions}
                </div>
                <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                    正解率: {percentage}%
                </div>
            </motion.div>

            {/* Results list */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    marginBottom: '2rem'
                }}
            >
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>結果詳細</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                borderLeft: `4px solid ${result.correct ? '#4CAF50' : '#FF6B6B'}`
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>
                                {result.correct ? '✅' : '❌'}
                            </span>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.9rem' }}>問題 {index + 1}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                                    {typeof result.question === 'object' ? result.question.text : result.question}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* New unlock notification */}
            {newUnlock && (
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1, type: 'spring' }}
                    style={{
                        backgroundColor: 'var(--color-moon-cream)',
                        color: 'var(--color-night-navy)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        boxShadow: '0 4px 20px rgba(253, 253, 150, 0.4)',
                        maxWidth: '300px'
                    }}
                >
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                        {newUnlock.icon}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
                        新しいアイテム！
                    </div>
                    <div style={{ fontSize: '1rem' }}>
                        {newUnlock.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>
                        {newUnlock.description}
                    </div>
                </motion.div>
            )}

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: 'var(--color-moon-cream)',
                        color: 'var(--color-night-navy)',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    ホームに戻る
                </motion.button>

                {onPlayAgain && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onPlayAgain}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderRadius: '12px',
                            padding: '1rem 2rem',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        もう一度
                    </motion.button>
                )}
            </div>
        </div>
    );
}
