import React, {useState} from "react";
import s from "./style.module.scss";

export function WelcomePage() {
    const [state, setState] = useState<number>(0);
    const handleClick = () => setState(state + 1);

    return(
        <div className={s.page}>
            <h1 className={s.title} onClick={handleClick}>Barcelona</h1>
            <p>{state}</p>
        </div>
    )
}