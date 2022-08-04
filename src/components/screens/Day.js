import { useState } from "react";

export default function Day({day, key}) {
    const [chosenDay, setChosenDay] = useState("diaDaSemana");

    function choseDay() {
        if (chosenDay === "diaDaSemana") {
            setChosenDay("diaDaSemana selecionado");
        }
        if (chosenDay === "diaDaSemana selecionado") {
            setChosenDay("diaDaSemana");
        }
    }

    return (
        <div className={chosenDay} onClick={choseDay} id={key}>{day}</div>
    );
}