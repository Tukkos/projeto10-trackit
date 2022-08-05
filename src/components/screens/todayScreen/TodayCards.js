import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { postHabitsAsDone, postHabitsAsUndone, getTodayHabits } from "../../../services/tracklt";
import LoginContext from "../../../contexts/LoginContexts";

export default function TodayCards({setSSomethingDone, setHabits, currentSequence, highestSequence, done, habitId, name}) {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};

    const [sDone, setSDone] = useState(done)
    const [doneIcon, setDoneIcon] = useState("");
    const [doneText, setDoneText] = useState("");
    const [doneRecord, setDoneRecord] = useState("");

    useEffect(() => {
        if (done === true) {
            setDoneIcon("greenBackground");
            setDoneText("greenColor");
            if (highestSequence >= currentSequence) {
                setDoneRecord("greenColor");
            }
        }

        if (done === false) {
            setDoneIcon("");
            setDoneText("");
            setDoneRecord("");
        }
    }, [""]);

    function refresHabits(habitsAuth) {
        getTodayHabits(habitsAuth).then((res) => {
            setHabits(res.data);
        })
    }

    console.log(habitsAuth);
    console.log(habitId);

    function markAsDone() {
        if (done === false) {
            postHabitsAsDone(habitId, habitsAuth).then(() => {
                refresHabits(habitsAuth);
                setSSomethingDone(true);
                console.log(habitsAuth);
                console.log(habitId);
            })
            
        }

        if (sDone === true) {
            postHabitsAsUndone(habitId, habitsAuth).then(() => {
                refresHabits(habitsAuth);
                console.log(habitsAuth);
                console.log(habitId);
            })
        }
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