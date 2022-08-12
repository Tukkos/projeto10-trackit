import { useContext, useEffect, useState } from "react"

import LoginContext from "../../../contexts/LoginContexts";
import HabitTracker from "../../../contexts/HabitsTracker";
import { postHabitsAsDone, postHabitsAsUndone } from "../../../services/tracklt";

import styled from "styled-components"

export default function TodayCards({currentSequence, highestSequence, done, habitId, name}) {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};

    const {habToDo, habDone, setPercent} = useContext(HabitTracker);

    const [doneIcon, setDoneIcon] = useState("");
    const [doneText, setDoneText] = useState("");
    const [doneRecord, setDoneRecord] = useState("");

    useEffect(() => {
        if (done === true) {
            habitIsDone()
        }
        if (done === false) {
            habitIsUndone()
        }
    }, []);

    function markAsDone() {
        if (done === false) {
            postHabitsAsDone(habitId, habitsAuth).then(() => {
                habitIsDone()
            })
        }

        if (done === true) {
            postHabitsAsUndone(habitId, habitsAuth).then(() => {
                habitIsUndone()
            })
        }
    }

    function habitIsDone() {
        setDoneIcon("greenBackground");
        setDoneText("greenColor");
        setPercent(() => habDone/habToDo*100);
        if (highestSequence >= currentSequence) {
            setDoneRecord("greenColor");
        }
    }

    function habitIsUndone() {
        setDoneIcon("");
        setDoneText("");
        setPercent(() => habDone/habToDo*100);
        setDoneRecord("");
    }

    return (
        <TodayCardStyled key={habitId}>
            <h1 className="habitName">
                {name}
            </h1>
            <p>
                Sequencia atual: <span className={doneText}>{currentSequence} dias</span>
            </p>
            <p>
                Seu recorde: <span className={doneRecord}>{highestSequence} dias</span>
            </p>
            <span className="space" />
            <div className={doneIcon}>
                <ion-icon name="checkmark-outline" class="ion" onClick={markAsDone}></ion-icon>
            </div>
        </TodayCardStyled>
    )
}

const TodayCardStyled = styled.div`
    width: 90vw;
    margin-bottom: 20px;

    background-color: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    position: relative;
>p{
    font-size: 13px;
    margin: 5px 20px 0 20px
}
>div{
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background-color: #EBEBEB;

    position: absolute;
    top: 20px;
    right: 20px;
}
.space{
    height:20px;
}
.habitName {
    font-size: 20px;
    margin: 20px 20px 20px 20px
}
.ion{
    width: 70px;
    height: 70px;
    color: #ffffff;
}
.greenColor{
    color: #8FC549;
}
.greenBackground{
    background-color:#8FC549;
}
`