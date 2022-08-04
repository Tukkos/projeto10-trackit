import { useState } from "react"
import styled from "styled-components"

export default function TodayCards() {
    const [doneIcon, setDoneIcon] = useState("");
    const [doneText, setDoneText] = useState("");
    const [doneRecord, setDoneRecord] = useState("");

    function markAsDone() {
        if (doneIcon === "") {
            setDoneIcon("greenBackground");
            setDoneText("greenColor");
            setDoneRecord("greenColor");
        }

        if (doneIcon === "greenBackground") {
            setDoneIcon("");
            setDoneText("");
            setDoneRecord("");
        }
    }

    return (
        <TodayCardStyled>
            <h1 className="habitName">
                Ler 1 capitulo de livro
            </h1>
            <p>
                Sequencia atual: <span className={doneText}>3 dias</span>
            </p>
            <p>
                Seu recorde: <span className={doneRecord}>5 dias</span>
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