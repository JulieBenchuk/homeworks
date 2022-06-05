import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
       setShow(false)
    }

    const stringTime = date.toTimeString().substring(0,8) // fix with date
    const stringDate = date.toDateString().substring(4) // fix with date

    return (
        <div className={s.clock}>
            <div className={s.clockInside}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={s.time}>
                    {stringTime}
                </div>

                {show && (
                    <div className={s.date}>
                        {stringDate}
                    </div>
                )}

                <div className={s.buttons}>
                    <SuperButton onClick={start}>start</SuperButton>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>
            </div>

        </div>
    )
}

export default Clock
