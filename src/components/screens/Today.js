import Navbar from "../Navbar";
import Menu from "../Menu";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getHabits } from "../../services/tracklt";
import LoginContext from "../../contexts/LoginContexts";

import NewHabits from "./NewHabit";

export default function Today() {
    const {loginInfos} = useContext(LoginContext);
    const token = loginInfos[0].token;
    const habitsAuth = { headers: {"Authorization": "Bearer " + token}};
    
    const [habits, setHabits] = useState(0);
    const [addNew, setAddNew] = useState(false);
    
    const noHabits = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
    console.log(habits);

    useEffect((res) => {
        getHabits(habitsAuth).then(() => {
            console.log(res)
            setHabits(res)
        });
    })

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
                {(addNew) ? <NewHabits setAddNew={setAddNew} /> : ""}
                {(habits === undefined) ? <div className="noHabit"> {noHabits} </div> : <div>Habitos</div>}
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