import styled from "styled-components";
import { useContext } from "react";

import LoginContext from "../contexts/LoginContexts";

export default function Navbar() {
    const {loginInfos} = useContext(LoginContext);

    return (
        <NavbarStyle>
            <div className="appTitle">TrackIt</div>
            <img src={loginInfos[0].image} alt="" className="userImg" />
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #126BA5;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;

.userImg {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin-right: 20px;
}
.appTitle {
    font-family: 'Playball', cursive;
    font-size: 40px;
    margin-left: 20px;
    color: #ffffff;
}
`
