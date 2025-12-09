import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';

export default function AudioButton({ text, size = 'medium', color = '#fff' }) {
    const { state } = useGame();
    // Use SE volume for TTS for now, or could share BGM volume, but SE is more appropriate
    const volume = state.settings.seVolume / 100;

    const [speaking, setSpeaking] = useState(false);

    const speak = (e) => {
        e.stopPropagation();
        if (!text) return;

        // Cancel any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.volume = volume;
        utterance.rate = 0.9; // Slightly slower for clarity

        utterance.onstart = () => setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = () => setSpeaking(false);

        window.speechSynthesis.speak(utterance);
    };

    const iconSize = size === 'small' ? '1rem' : size === 'large' ? '2rem' : '1.5rem';

    return (
        <button
            onClick={speak}
            disabled={speaking}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: speaking ? 0.7 : 1,
                transition: 'opacity 0.2s'
            }}
            title="発音を聞く"
        >
            <span style={{ fontSize: iconSize, filter: speaking ? 'none' : 'grayscale(0%)' }}>
                {speaking ? '🔊' : '🔈'}
            </span>
        </button>
    );
}
