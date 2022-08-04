import styled from "styled-components";
import Day from "./Day";

export default function NewHabits({setAddNew}) {
    const days = [
    {
        id: 0,
        day: "D"
    },
    {
        id: 1,
        day: "S"
    },
    {
        id: 2,
        day: "T"
    },
    {
        id: 3,
        day: "Q"
    },
    {
        id: 4,
        day: "Q"
    },
    {
        id: 5,
        day: "S"
    },
    {
        id: 6,
        day: "S"
    }];

    function hideNewHabit() {
        setAddNew(false);
    }

    return (
        <NewHabitStyled>
            <input
                className="inputBar"
                type="text"
                // value={habitName}
                placeholder="nome do hábito"
                // onChange={e => setUserEmail(e.target.value)}
            ></input>
            <div className="semana">
                {days.map((day) => (
                    <Day 
                        day={day.day}
                        key={day.id}
                    />
                ))}
            </div>
            <div>
                <button className="cancelar" onClick={hideNewHabit} >Cancelar</button>
                <button className="salvar">Salvar</button>
            </div>
        </NewHabitStyled>
    );
}

const NewHabitStyled = styled.div`
    width: 90vw;
    height:180px;
    margin-bottom: 20px;

    background-color: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    position: relative;
.semana {
    display:flex;
    justify-content: flex-start;
    align-items:center;

    margin-left: 5vw;
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
.cancelar {
    width: 85px;
    height: 35px;

    background-color: #ffffFF;
    color: #52B6FF;
    font-size: 15px;
    border: 0;
    border-radius: 5px;

    position: absolute;
    bottom: 20px;
    right: 125px;
}
.salvar {
    width: 85px;
    height: 35px;

    background-color: #52B6FF;
    color: #ffffff;
    font-size: 15px;
    border: 0;
    border-radius: 5px;

    position: absolute;
    bottom: 20px;
    right: 20px;
}
.inputBar {
    width: 80vw;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin: 15px 5vw 15px 5vw;

    font-size: 20px;

    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #d5d5d5;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #d5d5d5;
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #d5d5d5;
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #d5d5d5;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #d5d5d5;
    }

    ::placeholder { /* Most modern browsers support this now. */
        color: #d5d5d5;
    }
}
`