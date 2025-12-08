import React from 'react';
import { useGame } from '../context/GameContext';

export default function Settings() {
    const { state, updateSettings, resetAllData, getRank } = useGame();
    const { settings } = state;
    const rank = getRank();

    return (
        <div style={{ padding: '2rem', color: '#fff' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>設定</h1>

            {/* BGM Volume */}
            <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    🎵 BGM音量: {settings.bgmVolume}%
                </label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={settings.bgmVolume}
                    onChange={(e) => updateSettings('bgmVolume', parseInt(e.target.value))}
                    style={{ width: '100%' }}
                />
            </div>

            {/* SE Volume */}
            <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    🔔 効果音音量: {settings.seVolume}%
                </label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={settings.seVolume}
                    onChange={(e) => updateSettings('seVolume', parseInt(e.target.value))}
                    style={{ width: '100%' }}
                />
            </div>

            {/* Notifications */}
            <div style={{
                marginBottom: '2rem',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <label style={{ fontWeight: 'bold' }}>
                    📬 通知を受け取る
                </label>
                <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
                    <input
                        type="checkbox"
                        checked={settings.notificationsEnabled}
                        onChange={(e) => updateSettings('notificationsEnabled', e.target.checked)}
                        style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: settings.notificationsEnabled ? 'var(--color-eucalyptus-green)' : '#ccc',
                        transition: '0.4s',
                        borderRadius: '34px'
                    }}>
                        <span style={{
                            position: 'absolute',
                            content: '',
                            height: '26px',
                            width: '26px',
                            left: settings.notificationsEnabled ? '30px' : '4px',
                            bottom: '4px',
                            backgroundColor: 'white',
                            transition: '0.4s',
                            borderRadius: '50%'
                        }}></span>
                    </span>
                </label>
            </div>

            <div style={{
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                margin: '2rem 0'
            }}></div>

            {/* Stats Display */}
            <div style={{
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '12px'
            }}>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📊 現在の記録
                </h3>

                {/* Rank */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.8rem',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    marginBottom: '0.5rem'
                }}>
                    <span>現在のランク</span>
                    <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{rank.icon}</span>
                        {rank.name}
                    </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem' }}>
                    <span>クイズクリア数</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-moon-cream)' }}>
                        {state.stats.quizCount} 回
                    </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem' }}>
                    <span>総ログイン日数</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-moon-cream)' }}>
                        {state.stats.loginDays} 日
                    </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem' }}>
                    <span>連続ログイン</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-eucalyptus-green)' }}>
                        🔥 {state.stats.consecutiveDays} 日
                    </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem' }}>
                    <span>獲得アイテム</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-moon-cream)' }}>
                        {state.unlockedItemIds.length} 個
                    </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem' }}>
                    <span>覚えた単語</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-eucalyptus-green)' }}>
                        {state.reviewState.rememberedIds.length} 個
                    </span>
                </div>
            </div>

            {/* Data Reset */}
            <div style={{ marginTop: '3rem' }}>
                <button
                    onClick={resetAllData}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: '#ff6b6b',
                        color: '#fff',
                        borderRadius: '8px',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    ⚠️ 全てのデータをリセット
                </button>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', textAlign: 'center' }}>
                    ※この操作は取り消せません
                </p>
            </div>

            {/* App Info */}
            <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                <p>Natsumu English v1.0.0</p>
                <p>© 2025 Natsumu English</p>
            </div>
        </div>
    );
}
