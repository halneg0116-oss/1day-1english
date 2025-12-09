import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    handleReset = () => {
        if (window.confirm("学習データをリセットして復旧しますか？")) {
            localStorage.removeItem('koala_english_data');
            window.location.href = '/';
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: '#1a1c2c',
                    color: '#fff'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😵</div>
                    <h2>申し訳ありません</h2>
                    <p style={{ marginBottom: '2rem' }}>予期せぬエラーが発生しました。</p>

                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '1rem 2rem',
                            marginBottom: '1rem',
                            borderRadius: '12px',
                            border: 'none',
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            width: '200px'
                        }}
                    >
                        再読み込み
                    </button>

                    <button
                        onClick={this.handleReset}
                        style={{
                            padding: '1rem 2rem',
                            borderRadius: '12px',
                            border: '1px solid #ff6b6b',
                            backgroundColor: 'transparent',
                            color: '#ff6b6b',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            width: '200px'
                        }}
                    >
                        データをリセットして復旧
                    </button>

                    <details style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.8rem', textAlign: 'left', maxWidth: '300px' }}>
                        <summary>詳細エラー</summary>
                        {this.state.error && this.state.error.toString()}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
