import styled from "styled-components";
import { postRegister } from "../../services/tracklt";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
    const [loading, setLoading] = useState(true);

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userImg, setUserImg] = useState("");

    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();

        if (userEmail === "") {
            alert("Favor inserir seu email.");
        }
        if (userPassword === "") {
            alert("Favor escolher uma senha.");
        }
        if (userName === "") {
            alert("Favor colocar como deseja ser chamado.")
        }
        if (userImg === "") {
            alert("Favor colocar um link de uma imagem para perfil.")
        } else {
            setLoading(false);

            const userInfo = {
                email: userEmail,
                name: userName,
                image: userImg,
                password: userPassword
            }

            postRegister(userInfo).then(() => {navigate("/", {})});
            postRegister(userInfo).catch(() => {
                alert("Falha ao fazer cadastro, favor rever seus dados.");
                setLoading(true);
            });
        }
    }
    
    return (
        <LoginScreen>
            <img src="https://i.imgur.com/FLN6clJ.png" alt="" className="logo" />
            <form onSubmit={register} className="form">
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

                <input
                    className="inputBar"
                    type="text"
                    value={userName}
                    placeholder="nome"
                    onChange={e => setUserName(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"} />

                <input
                    className="inputBar"
                    type="text"
                    value={userImg}
                    placeholder="foto"
                    onChange={e => setUserImg(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"} />

                {(loading) ? <button type="submit" className="button">Cadastrar</button>
                    : <button className="button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
            </form>
            <Link to="/"><span className="link">Já tem uma conta? Faça login!</span></Link >
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