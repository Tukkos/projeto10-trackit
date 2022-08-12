import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginContext from "../contexts/LoginContexts";
import HabitTracker from "../contexts/HabitsTracker";
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
    const [percent, setPercent] = useState(0);

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <BrowserRouter>
                    <LoginContext.Provider value={{loginInfos}} >
                        <HabitTracker.Provider value={{habToDo, setHabToDo, habDone, setHabDone, percent, setPercent}} >
                            <Routes>
                                <Route path="/" element={<Login setLoginInfos={setLoginInfos}/>} />

                                <Route path="/cadastro" element={<Register />} />
                                
                                <Route path="/hoje" element={<Today />} />

                                <Route path="/habitos" element={<Habits />} />

                                <Route path="/historico" element={<Historic />}/>
                                
                            </Routes>
                        </HabitTracker.Provider>
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