import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from './Root';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise';
import About from './pages/About';

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Root>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/menu'} element={<Menu />} />
                    <Route path={'/franchise'} element={<Franchise />} />
                    <Route path={'/about'} element={<About />} />       
                </Routes>
            </Root>
        </BrowserRouter>
    )
}

export default MyRouter;