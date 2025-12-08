import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/categories';
import { getCategoryQuestionCount } from '../data/quizQuestions';

export default function CategorySelect() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '2rem', color: '#fff' }}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '1rem', textAlign: 'center' }}
            >
                カテゴリを選ぶ
            </motion.h1>

            <p style={{
                textAlign: 'center',
                marginBottom: '2rem',
                opacity: 0.8,
                fontSize: '0.9rem'
            }}>
                学びたいトピックを選んでね
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                {CATEGORIES.map((category, index) => {
                    const questionCount = getCategoryQuestionCount(category.id);

                    return (
                        <motion.button
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(`/quiz/${category.id}`)}
                            style={{
                                background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                                border: 'none',
                                borderRadius: '16px',
                                padding: '2rem',
                                cursor: 'pointer',
                                textAlign: 'left',
                                color: '#fff',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Background Pattern */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                fontSize: '6rem',
                                opacity: 0.1,
                                lineHeight: 1
                            }}>
                                {category.icon}
                            </div>

                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '0.5rem'
                                }}>
                                    {category.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    {category.name}
                                </h3>

                                <p style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.9,
                                    marginBottom: '1rem'
                                }}>
                                    {category.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTop: '1px solid rgba(255,255,255,0.3)',
                                    paddingTop: '1rem'
                                }}>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '12px'
                                    }}>
                                        {questionCount}問
                                    </span>

                                    <span style={{ fontSize: '1.5rem' }}>→</span>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Random quiz option */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ textAlign: 'center', marginTop: '3rem' }}
            >
                <button
                    onClick={() => navigate('/quiz/random')}
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '2px dashed rgba(255,255,255,0.3)',
                        borderRadius: '12px',
                        padding: '1rem 2rem',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span style={{ fontSize: '1.5rem' }}>🎲</span>
                    ランダムに学習
                </button>
            </motion.div>
        </div>
    );
}
