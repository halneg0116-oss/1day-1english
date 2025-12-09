import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';

export default function AudioButton({ text, size = 'medium', color = '#fff' }) {
    const { state } = useGame();
    // Use SE volume for TTS for now, or could share BGM volume, but SE is more appropriate
    const volume = state.settings.seVolume / 100;

    const [speaking, setSpeaking] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState(null);

    useEffect(() => {
        // Function to select the best voice
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // Prioritize: Google US English > Samantha (Mac) > other en-US > any en
            const bestVoice = voices.find(v => v.name === 'Google US English') ||
                voices.find(v => v.name === 'Samantha') ||
                voices.find(v => v.lang === 'en-US' && v.name.includes('Premium')) ||
                voices.find(v => v.lang === 'en-US') ||
                voices.find(v => v.lang.startsWith('en'));

            setSelectedVoice(bestVoice);
        };

        // Load immediately
        loadVoices();

        // And wait for async load (Chrome requires this)
        window.speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const speak = (e) => {
        e.stopPropagation();
        if (!text) return;

        // Cancel any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.volume = volume;
        utterance.rate = 1.0; // Normal speed for natural flow
        utterance.pitch = 1.0;

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

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
