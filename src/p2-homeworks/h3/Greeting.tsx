import React, {ChangeEvent, KeyboardEvent, ChangeEventHandler} from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Greeting.module.css'

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ? s.someClass : s.error; // need to fix with (?:)
    const onKeyPresHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addUser();
    }

    return (
        <div className={s.HW3}>
            <SuperInputText placeholder={"Enter your name..."} value={name} onChange={setNameCallback}
                   onKeyPress={onKeyPresHandler}/>
            <SuperButton onClick={addUser}>ADD</SuperButton>
            <div className={s.totalAll}>
                <span className={s.total}>TOTAL</span>
                <span className={s.totalUsers}>{totalUsers}</span>
            </div>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
