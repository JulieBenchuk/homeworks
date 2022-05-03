import React from 'react'
import {AffairType} from './HW2'
import classes from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={classes.affairOneButton}>
            <div className={classes.affairOne}>
                <div>
                    {props.affair.name}
                </div>
                <div className={props.affair.priority === "high" ? classes.highPriority
                    : props.affair.priority === "middle" ? classes.middlePriority
                        : props.affair.priority === "low" ? classes.lowPriority
                            : ""}>
                    {props.affair.priority}
                </div>
            </div>
            <div className={classes.buttonDeleteOne}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
