import styled from "styled-components";

export default function Menu() {
    return (
        <MenuScreen>
            <div>Habitos</div>
            <div className="progress">Hoje</div>
            <div>Historico</div>
        </MenuScreen>
    );
}

const MenuScreen = styled.div`
    height: 70px;
    width: 100vw;
    font-size: 20px;

    background-color: #ffffff;
    color: #52B6FF;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position:fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

.progress{
    height: 90px;
    width: 90px;

}
`;