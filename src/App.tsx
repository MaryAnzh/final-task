import React from 'react';
import './App.css';
import {
    Routes,
    Link,
    Route,
    Router,
    BrowserRouter,
} from 'react-router-dom';
import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { About } from './pages/about/About';
import { Info } from './pages/info/Info';
import { NotFoundPage } from './pages/not-found/NotFoundPage';

export const App = (): JSX.Element => {
    const navList: string[] = ['about', 'info'];

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header navList={navList} />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                < Footer />
            </div>
        </BrowserRouter>
    )
}
