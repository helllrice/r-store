import './Auth.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(
        "Почта должна быть заполнена!"
    );
    const [passwordError, setPasswordError] = useState(
        "Пароль должен быть заполнен!"
    );
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректная Почта");
        } else {
            setEmailError("");
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        const specRe = /\W/;
        const passRe = /((?=.*[A-Z]).{6})/;
        if (
            passRe.test(String(e.target.value)) &&
            !specRe.test(String(e.target.value))
        ) {
            setPasswordError("");
        } else {
            setPasswordError(
                "не менее 6 символов, должна быть как минимум одна большая буква, без спец. символов"
            );
        }
    };

    useEffect(() => {
        if (localStorage) {
            const value = JSON.parse(localStorage.getItem("isLogedin"));
            value && navigate("/", { replace: true });
        }
    }, []);

    const setLogin = () => {
        if (localStorage) {
            localStorage.setItem("isLogedin", JSON.stringify(true));
            navigate("/", { replace: true });
        }
    };

    return (
        <div className="auth">
            <form>
                <div className="auth-box">
                    <div className="auth-title">
                        <h2>R-STORE</h2>
                    </div>
                    <h1>Вход</h1>
                    <div className="auth-input">
                        {emailError && (
                            <div style={{ color: "red" }}>{emailError}</div>
                        )}
                        <input
                            onChange={(e) => emailHandler(e)}
                            value={email}
                            name="email"
                            type="text"
                            placeholder="Введите вашу Почту"
                        />
                        {passwordError && (
                            <div style={{ color: "red" }}>{passwordError}</div>
                        )}
                        <input
                            onChange={(e) => passwordHandler(e)}
                            value={password}
                            name="password"
                            type="password"
                            placeholder="Пароль"
                        />
                    </div>
                    <button
                        disabled={!formValid}
                        type="submit"
                        className="auth-btn"
                        onClick={setLogin}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};
