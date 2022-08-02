import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./Navbar";
import Login from "../components/login/Login";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Wrapper>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 100px;
`;