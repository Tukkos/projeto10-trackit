import Navbar from "../../Navbar";
import Menu from "../../Menu";
import TodayCards from "./TodayCards";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import { getTodayHabits } from "../../../services/tracklt";
import LoginContext from "../../../contexts/LoginContexts";


export default function Today({habToDo, habDone, setHabToDo, setHabDone}) {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};

    const [habits, setHabits] = useState([]);
    const [percent, setPercent] = useState(0);
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
    }, [percent, habits]);

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
                        setHabits={setHabits}
                        currentSequence={hab.currentSequence}
                        highestSequence={hab.highestSequence}
                        done={hab.done}
                        habitId={hab.id}
                        name={hab.name}
                        habToDo={habToDo}
                        habDone={habDone}
                        setHabToDo={setHabToDo}
                        setHabDone={setHabDone}
                        setPercent={setPercent}
                    />
                ))}
            </div>
            <Menu
                habToDo={habToDo}
                habDone={habDone}
            />
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