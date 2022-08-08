import { useEffect, useState } from "react";

export default function Day({day, id, weekdays, setWeekdays, loading}) {
    const [chosenDay, setChosenDay] = useState("diaDaSemana");

    useEffect(() => {
        setChosenDay("diaDaSemana");
    }, [weekdays]);

    function choseDay() {
        if (chosenDay === "diaDaSemana") {
            setChosenDay("diaDaSemana selecionado");
            setWeekdays(weekdays.push(id));
            setWeekdays(weekdays.sort());
            console.log(weekdays);
        }

        if (chosenDay === "diaDaSemana selecionado") {
            setChosenDay("diaDaSemana");
            for (let i = 0; i < weekdays.length; i++) {
                if (weekdays[i] === id) {
                    setWeekdays(weekdays.splice(i,1));
                }
            };
            setWeekdays(weekdays.sort());
            console.log(weekdays);
        }
    }

    return (
        (loading) ? <div className={chosenDay} onClick={choseDay} id={id}>{day}</div>
            : <div className={chosenDay} id={id}>{day}</div>
    );
}