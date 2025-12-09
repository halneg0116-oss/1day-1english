import React, { createContext, useContext, useState, useEffect } from 'react';
import { ITEMS } from '../data/items';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

// Rank logic
const calculateRank = (quizCount) => {
    if (quizCount >= 50) return { name: '博士', icon: '🎓' };
    if (quizCount >= 30) return { name: '達人', icon: '👑' };
    if (quizCount >= 10) return { name: 'ベテラン', icon: '⭐' };
    if (quizCount >= 3) return { name: 'ルーキー', icon: '🔰' };
    return { name: 'ビギナー', icon: '🥚' };
};

// Calculate next unlock milestone
const getNextMilestone = (quizCount) => {
    // Milestones every 5 questions
    const nextTarget = Math.ceil((quizCount + 1) / 5) * 5;

    // Find what reward corresponds to this target
    // For MVP, we cycle through rewards or just show "New Item"
    return {
        type: 'quiz',
        current: quizCount,
        count: nextTarget,
        reward: '新しいインテリア'
    };
};

export function GameProvider({ children }) {
    // Initial state
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('koala_english_data');
        return saved ? JSON.parse(saved) : {
            unlockedItemIds: ['desk', 'chair'], // Initial items
            placedItems: [
                { id: 'desk', x: 50, y: 50 },
                { id: 'chair', x: 60, y: 60 }
            ],
            stats: {
                quizCount: 0,
                correctCount: 0,
                consecutiveDays: 1,
                lastLoginDate: new Date().toISOString().split('T')[0],
                loginDays: 1 // Total login days
            },
            reviewState: {
                rememberedIds: [],
                laterIds: []
            },
            settings: {
                bgmVolume: 50,
                seVolume: 50,
                notificationsEnabled: true
            }
        };
    });

    const [newUnlock, setNewUnlock] = useState(null);

    // Persist to localStorage
    useEffect(() => {
        localStorage.setItem('koala_english_data', JSON.stringify(state));
    }, [state]);

    // Login logic (simplified)
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        if (state.stats.lastLoginDate !== today) {
            setState(prev => ({
                ...prev,
                stats: {
                    ...prev.stats,
                    lastLoginDate: today,
                    loginDays: prev.stats.loginDays + 1,
                    // Basic consecutive logic
                    consecutiveDays:
                        new Date(prev.stats.lastLoginDate).getTime() === new Date(today).getTime() - 86400000
                            ? prev.stats.consecutiveDays + 1
                            : 1
                }
            }));
            // Check login rewards could go here
        }
    }, []);

    const unlockItem = (itemId) => {
        if (!state.unlockedItemIds.includes(itemId)) {
            setState(prev => ({
                ...prev,
                unlockedItemIds: [...prev.unlockedItemIds, itemId]
            }));
            setNewUnlock(ITEMS.find(i => i.id === itemId));
        }
    };

    const clearNewUnlock = () => setNewUnlock(null);

    const placeItem = (itemId, x, y) => {
        setState(prev => ({
            ...prev,
            placedItems: [
                ...prev.placedItems.filter(i => i.id !== itemId), // Move if exists
                { id: itemId, x, y }
            ]
        }));
    };

    const removeItem = (itemId) => {
        setState(prev => ({
            ...prev,
            placedItems: prev.placedItems.filter(i => i.id !== itemId)
        }));
    };

    const markAsRemembered = (itemId) => {
        setState(prev => ({
            ...prev,
            reviewState: {
                ...prev.reviewState,
                rememberedIds: [...prev.reviewState.rememberedIds, itemId],
                laterIds: prev.reviewState.laterIds.filter(id => id !== itemId)
            }
        }));
    };

    const markAsLater = (itemId) => {
        setState(prev => {
            if (prev.reviewState.laterIds.includes(itemId)) return prev;
            return {
                ...prev,
                reviewState: {
                    ...prev.reviewState,
                    laterIds: [...prev.reviewState.laterIds, itemId],
                    rememberedIds: prev.reviewState.rememberedIds.filter(id => id !== itemId)
                }
            };
        });
    };

    const incrementQuizCount = () => {
        setState(prev => {
            const newCount = prev.stats.quizCount + 1;
            checkUnlockConditions(newCount, prev.unlockedItemIds);
            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    quizCount: newCount
                }
            };
        });
    };

    // New: Update Settings
    const updateSettings = (key, value) => {
        setState(prev => ({
            ...prev,
            settings: {
                ...prev.settings,
                [key]: value
            }
        }));
    };

    // New: Reset Data
    const resetAllData = () => {
        localStorage.removeItem('koala_english_data');
        window.location.reload();
    };

    const checkUnlockConditions = (quizCount, currentUnlocked) => {
        // Unlock logic: Every 5 questions
        if (quizCount % 5 === 0 && quizCount > 0) {
            // Find an item that hasn't been unlocked yet
            // Prioritize items that specifically match the count if we want, or just random/sequential

            // Map specific milestones for flavor
            let targetItemId = null;

            if (quizCount === 5) targetItemId = 'plant_starter';
            else if (quizCount === 10) targetItemId = 'coffee_set';
            else if (quizCount === 15) targetItemId = 'cactus';
            else if (quizCount === 20) targetItemId = 'bookshelf';
            else if (quizCount === 25) targetItemId = 'rug';
            else if (quizCount === 30) targetItemId = 'curtain';
            else if (quizCount === 35) targetItemId = 'glasses';
            else {
                // For other outcomes, find ANY locked item
                const allItemIds = ITEMS.map(i => i.id);
                targetItemId = allItemIds.find(id => !currentUnlocked.includes(id));
            }

            if (targetItemId && !currentUnlocked.includes(targetItemId)) {
                unlockItem(targetItemId);
            }
        }
    };

    const value = {
        state,
        newUnlock,
        unlockItem,
        clearNewUnlock,
        placeItem,
        removeItem,
        markAsRemembered,
        markAsLater,
        incrementQuizCount,
        updateSettings,
        resetAllData,
        getRank: () => calculateRank(state.stats.quizCount),
        getNextMilestone: () => getNextMilestone(state.stats.quizCount)
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}
