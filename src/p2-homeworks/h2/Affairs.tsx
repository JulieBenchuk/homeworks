import React from 'react'
import Affair from './Affair'
import {AffairType, filterAffairs, FilterType} from './HW2'
import classes from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        return props.setFilter('all');
    } // need to fix
    const setHigh = () => {
        return props.setFilter('high');
    }
    const setMiddle = () => {
        return props.setFilter('middle');
    }
    const setLow = () => {
        return props.setFilter('low');
    }

    return (
        <div className={classes.all}>
            <div className={classes.affairsAllandButtonsDelete}>
                {mappedAffairs}
            </div>
            <div className={classes.sortButtons}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
