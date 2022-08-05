import { useState } from "react"
import styled from "styled-components"

export default function TodayCards({setSSomethingDone, currentSequence, highestSequence, done, id, name}) {
    const [sDone, setSDone] = useState(done)
    const [doneIcon, setDoneIcon] = useState("");
    const [doneText, setDoneText] = useState("");
    const [doneRecord, setDoneRecord] = useState("");

    function markAsDone() {
        if (sDone === false) {
            
            setDoneIcon("greenBackground");
            setDoneText("greenColor");
            setSSomethingDone(true);
            setSDone(true);

            if (highestSequence >= currentSequence) {
                setDoneRecord("greenColor");
            }
        }

        if (sDone === true) {
            setDoneIcon("");
            setDoneText("");
            setSSomethingDone(true);
            setSDone(false);
            setDoneRecord("");
        }
    }

    return (
        <TodayCardStyled key={id}>
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