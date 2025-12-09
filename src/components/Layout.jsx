import { useRef, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Package, Settings as SettingsIcon } from 'lucide-react';
import { useGame } from '../context/GameContext';

export default function Layout() {
    const location = useLocation();
    const { state, getRank } = useGame();
    const rank = getRank();
    const audioRef = useRef(null);

    // Update volume when settings change
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = state.settings.bgmVolume / 100;
        }
    }, [state.settings.bgmVolume]);

    // Attempt to play BGM (might be blocked by browser policy until interaction)
    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    // Only play if volume is > 0
                    if (state.settings.bgmVolume > 0) {
                        await audioRef.current.play();
                    } else {
                        audioRef.current.pause();
                    }
                } catch (err) {
                    console.log("BGM autoplay blocked or failed:", err);
                    // Expected behavior in some browsers until user interacts
                }
            }
        };
        playAudio();

        // Add a click listener to start audio if it was blocked
        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused && state.settings.bgmVolume > 0) {
                audioRef.current.play().catch(e => console.log(e));
            }
        };

        window.addEventListener('click', handleInteraction, { once: true });
        return () => window.removeEventListener('click', handleInteraction);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="container">
            <audio
                ref={audioRef}
                src="/bgm.mp3"
                loop
                style={{ display: 'none' }}
            />
            <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-moon-cream)' }}>
                    📚 Kum English
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        fontSize: '0.9rem',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                    }}>
                        <span>{rank.icon}</span>
                        <span>{rank.name}</span>
                    </div>
                    <Link to="/settings" style={{ color: '#fff' }}>
                        <SettingsIcon size={24} />
                    </Link>
                </div>
            </header>

            <main style={{ paddingBottom: '80px', minHeight: 'calc(100vh - 140px)' }}>
                <Outlet />
            </main>

            <nav style={{
                position: 'fixed',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '480px',
                backgroundColor: 'rgba(44, 62, 80, 0.95)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '1rem 0',
                zIndex: 100
            }}>
                <Link to="/" style={{ color: isActive('/') ? 'var(--color-moon-cream)' : '#8899a6', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <Home size={24} />
                    <span style={{ fontSize: '0.7rem' }}>ホーム</span>
                </Link>
                <Link to="/review" style={{ color: isActive('/review') ? 'var(--color-moon-cream)' : '#8899a6', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <BookOpen size={24} />
                    <span style={{ fontSize: '0.7rem' }}>復習帳</span>
                </Link>
                <Link to="/collection" style={{ color: isActive('/collection') ? 'var(--color-moon-cream)' : '#8899a6', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <Package size={24} />
                    <span style={{ fontSize: '0.7rem' }}>部屋</span>
                </Link>
            </nav>
        </div>
    );
}
