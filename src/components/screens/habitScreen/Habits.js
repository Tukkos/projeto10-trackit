import Navbar from "../../Navbar";
import Menu from "../../Menu";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getHabits } from "../../../services/tracklt";
import LoginContext from "../../../contexts/LoginContexts";

import NewHabits from "./NewHabit";
import HabitsCard from "./HabitsCard";

export default function Habits() {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};
    
    const [habits, setHabits] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const noHabits = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"

    useEffect(() => {
        getHabits(habitsAuth).then((res) => {
            setHabits(res.data);
            console.log(res.data);
        });
    }, [""]);

    function showNewHabit() {
        setAddNew(true);
    }

    return(
        <>
            <Navbar />
            <TodayScreen>
                <div className="head">
                    Meus hábitos
                    <div className="button" onClick={showNewHabit}>+</div>
                </div>

                {(addNew) ? <NewHabits setAddNew={setAddNew} setHabits={setHabits} /> : ""}

                {(habits.length === 0) ? <div className="noHabit"> {noHabits} </div>
                    : ""}
                
                {habits.map((hab) => (
                    <HabitsCard habitName={hab.name} habitDays={hab.days} habitId={hab.id} setHabits={setHabits} />
                ))}
            </TodayScreen>
            <Menu />
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