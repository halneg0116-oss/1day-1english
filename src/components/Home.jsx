import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export default function Home() {
    const { getRank, getNextMilestone, state } = useGame();
    const rank = getRank();
    const milestone = getNextMilestone();

    // Get time-based greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'おはよう';
        if (hour < 18) return 'こんにちは';
        return 'お疲れ様';
    };

    const getMessage = () => {
        const hour = new Date().getHours();
        const { quizCount } = state.stats;

        if (quizCount === 0) {
            return '今日から始めよう。\n気軽に楽しんでね。';
        }
        if (hour >= 22) {
            return '今日もお疲れ様。\n寝る前に少しだけどう？';
        }
        if (quizCount >= 50) {
            return 'すごいね！\nもう博士レベルだよ！';
        }
        return 'まったり英語に触れよう。\n無理せずマイペースでね。';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', color: '#fff' }}>
            {/* Rank Badge */}
            <div className="fade-in" style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem'
            }}>
                <span style={{ fontSize: '1.5rem' }}>{rank.icon}</span>
                <span style={{ fontWeight: 'bold' }}>{rank.name}</span>
            </div>

            {/* Teacher Character */}
            <div className="slide-in-up" style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem',
                border: '2px solid var(--color-pillow-blue)'
            }}>
                <span style={{ fontSize: '5rem' }}>👨‍🏫</span>
            </div>

            {/* Message Bubble */}
            <div className="fade-in" style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '2rem',
                maxWidth: '85%',
                textAlign: 'center',
                position: 'relative'
            }}>
                <p style={{ fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
                    {getGreeting()}！{getMessage()}
                </p>
                {/* Speech bubble tail */}
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '10px solid rgba(255,255,255,0.15)'
                }}></div>
            </div>

            {/* Progress to Next Milestone */}
            {milestone && (
                <div className="slide-in-up" style={{
                    width: '85%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: '12px',
                    marginBottom: '2rem'
                }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.8 }}>
                        次の報酬まで
                    </p>
                    <div style={{
                        width: '100%',
                        height: '10px',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        marginBottom: '0.5rem'
                    }}>
                        <div style={{
                            width: `${(milestone.current / milestone.count) * 100}%`,
                            height: '100%',
                            backgroundColor: 'var(--color-eucalyptus-green)',
                            transition: 'width 0.5s ease'
                        }}></div>
                    </div>
                    <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                        {milestone.type === 'quiz' ? 'レッスン' : 'ログイン'} {milestone.current} / {milestone.count}
                        <span style={{ marginLeft: '0.5rem', color: 'var(--color-moon-cream)' }}>
                            → {milestone.reward}
                        </span>
                    </p>
                </div>
            )}

            {/* Start Button */}
            <Link to="/categories" className="breathing" style={{
                backgroundColor: 'var(--color-moon-cream)',
                color: 'var(--color-night-navy)',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 20px rgba(253, 253, 150, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none'
            }}>
                <span style={{ fontSize: '2rem' }}>📖</span>
                レッスンを始める
            </Link>

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                5問でサクッと完了
            </p>

            {/* Stats Summary */}
            <div style={{
                marginTop: '3rem',
                display: 'flex',
                gap: '2rem',
                fontSize: '0.85rem',
                opacity: 0.6
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>📝</div>
                    <div>{state.stats.quizCount}回</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>🏆</div>
                    <div>{state.unlockedItemIds.length}個</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>🔥</div>
                    <div>{state.stats.consecutiveDays}日</div>
                </div>
            </div>
        </div>
    );
}
