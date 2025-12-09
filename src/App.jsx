```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Collection from './components/Collection';
import Review from './components/Review';
import Settings from './components/Settings';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <GameProvider>
            <Router>
                <div className="app-container">
                    <Layout>
                        <ErrorBoundary>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/quiz/:categoryId" element={<Quiz />} />
                                <Route path="/collection" element={<Collection />} />
                                <Route path="/review" element={<Review />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </ErrorBoundary>
                    </Layout>
                </div>
            </Router>
        </GameProvider>
    );
}

export default App;
```
