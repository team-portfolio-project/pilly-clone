import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import './styles/reset.scss';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />}  ></Route>
        </Routes>
    );
}

export default App;
