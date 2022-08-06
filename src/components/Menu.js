import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Menu({habToDo, habDone}) {
    const needDominantBaselineFix = true;

    return (
        <MenuScreen>
            <Link to="/habitos" >Habitos</Link>
            <Link to="/hoje" className="progress">
                <CircularProgressbar value={habDone} maxValue={habToDo} text={<tspan dx={needDominantBaselineFix ? -27 : 0} dy={needDominantBaselineFix ? 8 : 0}>Hoje</tspan>} styles={buildStyles({
                        strokeLinecap: "round",
                        textSize: "25px",
                        pathTransitionDuration: "1",
                        pathColor: "#ffffff",
                        textColor: "#ffffff",
                        trailColor: "#52B6FF",
                        backgroundColor: "#52B6FF"
                    })}/>
            </Link>
            <Link to="/historico" >Historico</Link>
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
    border-radius: 45px;
    margin-bottom: 45px;
    padding: 5px 5px 5px 5px;

    background-color: #52B6FF;

    display: flex;
    justify-content: center;
    align-items: center;
}
`;