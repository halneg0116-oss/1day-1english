import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Layout from './components/Layout';
import Home from './components/Home';
import CategorySelect from './components/CategorySelect';
import Quiz from './components/Quiz';
import Review from './components/Review';
import Collection from './components/Collection';
import Settings from './components/Settings';

function App() {
    return (
        <GameProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="categories" element={<CategorySelect />} />
                        <Route path="review" element={<Review />} />
                        <Route path="collection" element={<Collection />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="/quiz/:categoryId" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </GameProvider>
    );
}

export default App;
