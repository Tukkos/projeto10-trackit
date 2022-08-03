import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import GlobalStyles from "../styles/GlobalStyles";
import LoginContext from "../contexts/LoginContexts";

import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Today from "./Today";

export default function App() {
    const [loginInfos, setLoginInfos] = useState([]);

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <BrowserRouter>
                    <LoginContext.Provider value={{loginInfos}} >
                        <Routes>
                            <Route path="/" element={<Login setLoginInfos={setLoginInfos}/>} />

                            <Route path="/cadastro" element={<Register />} />
                            
                            <Route path="/hoje" element={<Today />} />
                            
                        </Routes>
                    </LoginContext.Provider>
                </BrowserRouter>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 100px;
`;