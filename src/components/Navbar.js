import styled from "styled-components";

export default function Navbar() {
    return (
        <NavbarStyle>
            <div className="appTitle">TrackIt</div>
            <img src="https://i.pinimg.com/originals/3c/cb/3d/3ccb3d22e082f67a5b97858f3cf5793f.png" alt="" className="userImg" />
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
