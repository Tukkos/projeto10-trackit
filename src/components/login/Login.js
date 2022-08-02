import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function login(e) {
        e.preventDefault();

        console.log(userEmail, userPassword)
    }

    return (
        <LoginScreen>
            <img src="https://i.imgur.com/FLN6clJ.png" alt="" className="logo" />
            <form onSubmit={login} className="form">
                <input
                    className="inputBar"
                    type="email"
                    value={userEmail}
                    placeholder="email"
                    onChange={e => setUserEmail(e.target.value)} />
                <input
                    className="inputBar"
                    type="password"
                    value={userPassword}
                    placeholder="senha"
                    onChange={e => setUserPassword(e.target.value)} />
                <button type="submit" className="button">Fazer login</button>
            </form>
            <Link to="/cadastro"><span className="link">Não tem uma conta? Cadastre-se!</span></Link >
        </LoginScreen>
    );
}

const LoginScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e5e5e5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
.logo {
    width: 180px;
    height: 180px ;
}
.form {
    display: flex;
    flex-direction: column;
}
.inputBar {
    width: 300px;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 5px;

    font-size: 20px;

    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #d5d5d5;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #d5d5d5;
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #d5d5d5;
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #d5d5d5;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #d5d5d5;
    }

    ::placeholder { /* Most modern browsers support this now. */
        color: #d5d5d5;
    }
}
.button {
    width: 300px;
    height: 45px;
    color: #ffffff;
    background-color: #52B6FF;
    border: 0;
    border-radius: 5px;
    margin-bottom: 25px;

    font-size: 20px;
}
.link {
    font-size: 15px;
    color: #52B6FF;
    text-decoration-line: underline;
}
`;