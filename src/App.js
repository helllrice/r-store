import './App.css'
import { useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { Auth } from './components/Auth/Auth'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
    const [isLogedin, setIsLogedin] = useState(false);

    useEffect(() => {
        if (localStorage) {
            const value = JSON.parse(localStorage.getItem("isLogedin"));
            setIsLogedin(value);
        }
    }, []);

    return (
        <div className="container">
            <Routes>
                {isLogedin ? (
                    <Route path="/" element={<Layout />} exact />
                ) : (
                    <Route path="/auth" element={<Auth />} exact />
                )}
                <Route path="*" element={<Auth />} />
            </Routes>
        </div>
    );
};
