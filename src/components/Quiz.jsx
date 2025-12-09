import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getQuestionsByCategory, getRandomQuestions, getQuestionById } from '../data/quizQuestions';
import { useGame } from '../context/GameContext';
import QuizComplete from './QuizComplete';

export default function Quiz() {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const { incrementQuizCount, newUnlock, clearNewUnlock } = useGame();

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [finished, setFinished] = useState(false);
    const [history, setHistory] = useState([]);
    const [showUnlockModal, setShowUnlockModal] = useState(false);

    // Initialize Quiz
    useEffect(() => {
        let qs = [];
        if (categoryId === 'random') {
            qs = getRandomQuestions(5);
        } else {
            qs = getQuestionsByCategory(categoryId, 5); // 5 questions per session
        }
        setQuestions(qs);
    }, [categoryId]);

    // Handle Unlocks
    useEffect(() => {
        if (newUnlock) {
            setShowUnlockModal(true);
        }
    }, [newUnlock]);

    const handleOptionSelect = (optionId) => {
        if (showResult) return; // Prevent double clicks
        setSelectedOption(optionId);

        const currentQ = questions[currentIndex];
        const correct = optionId === currentQ.correctId;
        setIsCorrect(correct);
        setShowResult(true);

        // Record history
        setHistory(prev => [...prev, {
            question: currentQ,
            userChoice: optionId,
            isCorrect: correct
        }]);
    };

    const handleNext = useCallback(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowResult(false);
        } else {
            // Quiz Finished
            incrementQuizCount(); // Increment count in context
            setFinished(true);
        }
    }, [currentIndex, questions.length, incrementQuizCount]);

    const handleCloseUnlock = () => {
        setShowUnlockModal(false);
        clearNewUnlock();
        // Delay navigation slightly to allow modal close animation if we were animating it
        setTimeout(() => {
            navigate('/collection');
        }, 50);
    };

    if (finished) {
        const correctCount = history.filter(h => h.isCorrect).length;
        const formattedResults = history.map(h => ({
            question: h.question.text, // Extract text string
            correct: h.isCorrect
        }));

        return (
            <QuizComplete
                totalQuestions={questions.length}
                correctCount={correctCount}
                results={formattedResults}
                newUnlock={newUnlock} // Pass newUnlock from context if needed
                onPlayAgain={() => {
                    setFinished(false);
                    setHistory([]);
                    setCurrentIndex(0);
                    // Shuffle new questions
                    let qs = [];
                    if (categoryId === 'random') {
                        qs = getRandomQuestions(5);
                    } else {
                        qs = getQuestionsByCategory(categoryId, 5);
                    }
                    setQuestions(qs);
                }}
                categoryName={categoryId === 'random' ? 'ランダム学習' : questions[0]?.category}
            />
        );
    }

    if (questions.length === 0) return <div style={{ color: '#fff', textAlign: 'center', paddingTop: '2rem' }}>Loading...</div>;

    const question = questions[currentIndex];

    // Card Animation Variants
    const cardVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
            {/* Progress Bar */}
            <div style={{
                marginBottom: '2rem',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '10px',
                height: '6px',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                    style={{ height: '100%', backgroundColor: 'var(--color-moon-cream)' }}
                />
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    {/* Question Card */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '20px',
                        padding: '2rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        color: 'var(--color-night-navy)'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                            {question.icon}
                        </div>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                            {question.text}
                        </h2>

                        {/* Situation nuance */}
                        <div style={{
                            fontSize: '0.9rem',
                            color: '#666',
                            backgroundColor: '#f0f4f8',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            {question.situation}
                        </div>

                        {/* Options */}
                        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                            {question.options.map((option) => {
                                let bgColor = '#f8f9fa';
                                let borderColor = 'transparent';

                                if (showResult) {
                                    if (option.id === question.correctId) {
                                        bgColor = '#d4edda'; // Green for correct
                                        borderColor = '#28a745';
                                    } else if (option.id === selectedOption) {
                                        bgColor = '#f8d7da'; // Red for wrong
                                        borderColor = '#dc3545';
                                    }
                                }

                                return (
                                    <motion.button
                                        key={option.id}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleOptionSelect(option.id)}
                                        disabled={showResult}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            border: `2px solid ${borderColor}`,
                                            backgroundColor: bgColor,
                                            cursor: showResult ? 'default' : 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            textAlign: 'left',
                                            color: 'var(--color-night-navy)',
                                            transition: 'background-color 0.3s'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.5rem' }}>{option.icon}</span>
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{option.text}</div>
                                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{option.nuance}</div>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Feedback Area */}
                    <AnimatePresence>
                        {showResult && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                style={{
                                    backgroundColor: isCorrect ? 'rgba(76, 175, 80, 0.9)' : 'rgba(255, 107, 107, 0.9)',
                                    color: '#fff',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    marginBottom: '2rem',
                                    backdropFilter: 'blur(5px)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem' }}>{isCorrect ? '✅ 正解！' : '😢 残念...'}</div>
                                </div>
                                <p style={{ fontSize: '1rem', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                                    {question.explanation}
                                </p>
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontStyle: 'italic',
                                    opacity: 0.9,
                                    borderTop: '1px solid rgba(255,255,255,0.3)',
                                    marginTop: '0.5rem',
                                    paddingTop: '0.5rem'
                                }}>
                                    {question.englishText}
                                </p>
                                <button
                                    onClick={handleNext}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        marginTop: '1rem',
                                        backgroundColor: '#fff',
                                        color: isCorrect ? '#2e7d32' : '#c62828',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    次へ進む
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>

            {/* Unlock Modal */}
            <AnimatePresence>
                {showUnlockModal && newUnlock && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '2rem',
                                borderRadius: '24px',
                                textAlign: 'center',
                                maxWidth: '320px',
                                width: '100%'
                            }}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎁</div>
                            <h2 style={{ color: 'var(--color-night-navy)', marginBottom: '0.5rem' }}>
                                新しいアイテム！
                            </h2>
                            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                                素敵なアイテムを手に入れました
                            </p>

                            <div style={{
                                backgroundColor: '#f0f4f8',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                marginBottom: '2rem'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                                    {newUnlock.icon}
                                </div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
                                    {newUnlock.name}
                                </div>
                            </div>

                            <button
                                onClick={handleCloseUnlock}
                                className="breathing"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--color-moon-cream)',
                                    color: 'var(--color-night-navy)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                早速飾る！
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
