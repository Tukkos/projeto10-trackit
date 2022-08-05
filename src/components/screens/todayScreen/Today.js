import Navbar from "../../Navbar";
import Menu from "../../Menu";
import TodayCards from "./TodayCards";
import styled from "styled-components";
import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt";


export default function Today() {
    const [sSomethingDone, setSSomethingDone] = useState(false);
    let now = dayjs().locale("pt").format("dddd, DD/MM");
    console.log(now)

    return(
        <TodayStyled>
            <Navbar />
            <div>
                <p className="todayTitle">{now.charAt(0).toUpperCase() + now.slice(1)}</p>
                {(sSomethingDone) ? <p className="todayProgress">67% dos hábitos concluídos!!</p>
                    : <p className="nothingDone">Nenhum hábito concluído ainda. :/</p>}
            </div>
            <div>
                <TodayCards setSSomethingDone={setSSomethingDone} />
                <TodayCards setSSomethingDone={setSSomethingDone} />
                <TodayCards setSSomethingDone={setSSomethingDone} />
            </div>
            <Menu />
        </TodayStyled>
    );
}

const TodayStyled = styled.div`
    margin: 0 20px 0 20px;
.todayTitle{
    font-size: 25px;
    color: #126BA5;
    margin-bottom:10px;
    padding-top: 30px;
}
.nothingDone{
    font-size: 20px;
    color: #bababa;
    margin-bottom: 20px;
}
.todayProgress{
    font-size:20px;
    color: #8fc549;
    margin-bottom: 20px;
}
`