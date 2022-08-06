import Navbar from "../Navbar";
import Menu from "../Menu";
import { useContext, useState, useEffect } from "react";
import { getHabitsHistory } from "../../services/tracklt";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import LoginContext from "../../contexts/LoginContexts";
import styled from "styled-components";

export default function Historic() {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};

    const [habits, setHabits] = useState([]);
    const noHistoric = "Em breve você poderá ver o histórico dos seus hábitos aqui!";

    useEffect(() => {
        getHabitsHistory(habitsAuth).then((res) => {
            setHabits(res.data);
            console.log(res.data);
        })
    }, []);

    return(
        <HistoricStyled>
            <Navbar />
                {(habits.length === 0) ? <div className="noHabit"> {noHistoric} </div>
                        : ""}
                {habits.map((hab) => (
                    <>
                        <div>
                            <p className="todayTitle">{dayjs(hab.day).locale("pt").format("dddd, DD/MM").charAt(0).toUpperCase() + dayjs(hab.day).locale("pt").format("dddd, DD/MM").slice(1)}</p>
                        </div>
                        {hab.habits.map((resp) => (
                            <div className="historicCard">
                                <h1 className="habitName">
                                    {resp.name}
                                </h1>
                            </div>
                        ))}
                    </>
                ))}
            <Menu />
        </HistoricStyled>
    );
}

const HistoricStyled = styled.div`
    margin: 0 20px 0 20px;
.todayTitle{
    font-size: 25px;
    color: #126BA5;
    margin-bottom:10px;
    padding-top: 30px;
}
.historicCard{
    width: 90vw;
    margin-bottom: 20px;

    background-color: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    position: relative;
}
.habitName {
    font-size: 20px;
    margin: 20px 20px 20px 20px
}
.noHabit {
    padding-top: 20px;
    font-size: 20px;
}
`