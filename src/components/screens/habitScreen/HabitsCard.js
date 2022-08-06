import { useContext } from "react";
import styled from "styled-components";
import LoginContext from "../../../contexts/LoginContexts";
import { deleteHabits, getHabits } from "../../../services/tracklt";

export default function HabitsCard({habitName, habitDays, habitId, setHabits}) {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};

    function deleteHabit() {
        if (window.confirm("Você realmente deseja deletar esse hábito?")) {
            deleteHabits(habitId, habitsAuth).then(() => {
                getHabits(habitsAuth).then((response) => {
                    setHabits(response.data)
                });
            })
        }
    }

    return (
        <HabitCardStyled>
            <div className="habitName">{habitName}</div>
            <div className="semana">
                {(habitDays.includes(0)) ? <div className="diaDaSemana selecionado" id="0">D</div>
                : <div className="diaDaSemana" id="0">D</div>}

                {(habitDays.includes(1)) ? <div className="diaDaSemana selecionado" id="1">S</div>
                : <div className="diaDaSemana" id="1">S</div>}

                {(habitDays.includes(2)) ? <div className="diaDaSemana selecionado" id="2">T</div>
                : <div className="diaDaSemana" id="2">T</div>}

                {(habitDays.includes(3)) ? <div className="diaDaSemana selecionado" id="3">Q</div>
                : <div className="diaDaSemana" id="3">Q</div>}

                {(habitDays.includes(4)) ? <div className="diaDaSemana selecionado" id="4">Q</div>
                : <div className="diaDaSemana" id="4">Q</div>}

                {(habitDays.includes(5)) ? <div className="diaDaSemana selecionado" id="5">S</div>
                : <div className="diaDaSemana" id="5">S</div>}

                {(habitDays.includes(6)) ? <div className="diaDaSemana selecionado" id="6">S</div>
                : <div className="diaDaSemana" id="6">S</div>}
            </div>
            <ion-icon name="trash-outline" class="trashIcon" onClick={deleteHabit} ></ion-icon>
        </HabitCardStyled>
    );
}

const HabitCardStyled = styled.div`
    width: 90vw;
    margin-bottom: 20px;

    background-color: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    position: relative;
.habitName {
    font-size: 20px;
    margin: 20px 20px 20px 20px
}
.semana {
    display:flex;
    justify-content: flex-start;
    align-items:center;

    margin-left: 5vw;
    margin-bottom: 20px;
}
.diaDaSemana {
    width:30px;
    height:30px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;

    color:#d4d4d4;
    font-size:20px;

    display:flex;
    justify-content:center;
    align-items:center;
}
.selecionado {
    color: #ffffff;
    background-color: #d4d4d4;
}
.trashIcon {
    height: 15px;

    position: absolute;
    top: 10px;
    right: 10px;
}
`