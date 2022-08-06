import styled from "styled-components";
import { postLogin } from "../../services/tracklt";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Login({setLoginInfos}) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function login(e) {
        e.preventDefault();

        if (userEmail === "") {
            alert("Favor inserir seu email.");
        }
        if (userPassword === "") {
            alert("Favor escolher uma senha.");
        } else {
            setLoading(false);

            const login = {
                email: userEmail,
                password: userPassword
            }

            postLogin(login).then((res) => {
                setLoginInfos([res.data]);
                console.log(res.data);
                navigate("/hoje", res.data);
            });

            postLogin(login).catch(() => {
                alert("Falha ao fazer login, favor tentar novamente.");
                setLoading(true);
            })
        }

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
                    onChange={e => setUserEmail(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"} />

                <input
                    className="inputBar"
                    type="password"
                    value={userPassword}
                    placeholder="senha"
                    onChange={e => setUserPassword(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"} />
                
                {(loading) ? <button type="submit" className="button">Fazer login</button>
                    : <button className="button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
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
    display: flex;
    justify-content: center;
    align-items: center;
}
.link {
    font-size: 15px;
    color: #52B6FF;
    text-decoration-line: underline;
}
`;