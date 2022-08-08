import { useContext, useEffect, useState } from "react";

import { getHabits } from "../../../services/tracklt";
import LoginContext from "../../../contexts/LoginContexts";

import Navbar from "../../Navbar";
import Menu from "../../Menu";
import NewHabits from "./NewHabit";
import HabitsCard from "./HabitsCard";

import styled from "styled-components";

export default function Habits({habToDo, habDone}) {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};
    
    const [habits, setHabits] = useState([]);
    const [addNew, setAddNew] = useState("newHabitCard hidden");
    const noHabits = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"

    useEffect(() => {
        getHabits(habitsAuth).then((res) => {
            setHabits(res.data);
        });
    }, []);

    function showNewHabit() {
        setAddNew("newHabitCard");
    }

    return(
        <>
            <Navbar />
            <TodayScreen>
                <div className="head">
                    Meus hábitos
                    <div className="button" onClick={showNewHabit}>+</div>
                </div>

                <NewHabits setAddNew={setAddNew} setHabits={setHabits} addNew={addNew} />

                {(habits.length === 0) ? <div className="noHabit"> {noHabits} </div>
                    : ""}
                
                {habits.map((hab) => (
                    <HabitsCard habitName={hab.name} habitDays={hab.days} habitId={hab.id} setHabits={setHabits} />
                ))}
            </TodayScreen>
            <Menu
                habToDo={habToDo}
                habDone={habDone}
            />
        </>
    );
}

const TodayScreen = styled.div`
    margin: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
.head{
    width: 88vw;
    height: 100px;

    font-size: 25px;
    color: #126ba5;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.button {
    width: 40px;
    height: 35px;
    border-radius: 5px;

    background-color: #52B6FF;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
}
.noHabit {
    margin-left: 2vw;
}
`