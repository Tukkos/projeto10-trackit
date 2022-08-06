import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginContext from "../contexts/LoginContexts";
import GlobalStyles from "../styles/GlobalStyles";

import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Today from "./screens/todayScreen/Today";
import Habits from "./screens/habitScreen/Habits";
import Historic from "./screens/Historic";

import styled from "styled-components";

export default function App() {
    const [loginInfos, setLoginInfos] = useState([]);
    const [habToDo, setHabToDo] = useState(0);
    const [habDone, setHabDone] = useState(0);

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <BrowserRouter>
                    <LoginContext.Provider value={{loginInfos}} >
                        <Routes>
                            <Route path="/" element={<Login setLoginInfos={setLoginInfos}/>} />

                            <Route path="/cadastro" element={<Register />} />
                            
                            <Route path="/hoje" element={
                                <Today
                                    habToDo={habToDo}
                                    habDone={habDone}
                                    setHabToDo={setHabToDo}
                                    setHabDone={setHabDone
                                } />} />

                            <Route path="/habitos" element={
                                <Habits
                                habToDo={habToDo}
                                habDone={habDone}
                            />} />

                            <Route path="/historico" element={
                                <Historic
                                    habToDo={habToDo}
                                    habDone={habDone}
                                />}/>
                            
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