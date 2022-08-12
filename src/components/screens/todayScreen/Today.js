import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt";

import LoginContext from "../../../contexts/LoginContexts";
import HabitTracker from "../../../contexts/HabitsTracker";
import { getTodayHabits } from "../../../services/tracklt";

import Navbar from "../../Navbar";
import Menu from "../../Menu";
import TodayCards from "./TodayCards";

import styled from "styled-components";

export default function Today() {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};

    const {setHabDone, setHabToDo, setPercent, habDone, habToDo, percent} = useContext(HabitTracker);

    const [habits, setHabits] = useState([]);
    let now = dayjs().locale("pt").format("dddd, DD/MM");

    useEffect(() => {
        getTodayHabits(habitsAuth).then((res) => {
            setHabits(res.data);
            setHabToDo(res.data.length);
            setHabDone(0);
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].done === true) {
                    setHabDone(count => count +1);
                }
            }
            setPercent(() => habDone/habToDo*100);
        })
    }, [habits]);

    return(
        <TodayStyled>
            <Navbar />
            <div>
                <p className="todayTitle">{now.charAt(0).toUpperCase() + now.slice(1)}</p>
                {(percent > 0) ? <p className="todayProgress">{percent.toFixed(0)}% dos hábitos concluídos!!</p>
                    : <p className="nothingDone">Nenhum hábito concluído ainda. :/</p>}
            </div>
            <div>
                {habits.map((hab) => (
                    <TodayCards
                        currentSequence={hab.currentSequence}
                        highestSequence={hab.highestSequence}
                        done={hab.done}
                        habitId={hab.id}
                        name={hab.name}
                        setHabits={setHabits}
                    />
                ))}
            </div>
            <Menu />
        </TodayStyled>
    );
}

const TodayStyled = styled.div`
    margin: 0 20px 0 20px;
.todayTitle{
    font-size: 25px;
    color: #126BA5;
    margin-bottom:10px;
    padding-top: 30px;
}
.nothingDone{
    font-size: 20px;
    color: #bababa;
    margin-bottom: 20px;
}
.todayProgress{
    font-size:20px;
    color: #8fc549;
    margin-bottom: 20px;
}
`