import React, { ChangeEventHandler, useState } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import { api } from './api';
import s from "./HW13.module.css"


export const Request = () => {
    let [checked, setChecked]= useState<boolean>(false)
    let [status, setStatus]=useState<string>("")
    const onButtonClick = ()=> {
        api.request(checked)
            .then((response) => {
                console.log(response.data)
                setStatus(response.data.errorText)
            })
            .catch((error) => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                setStatus(error.response.data.errorText)
            })
    }
    const onChangeChecked = (checked: boolean)=> {
        console.log(checked)
        setChecked(checked)
    }
    return (
        <div className={s.request}>
            <SuperButton onClick={onButtonClick}>click!</SuperButton>
            <SuperCheckbox value={"click!"}  onChangeChecked={onChangeChecked}/>
            <div className={status==="...всё ок)" ? s.okay : s.error}>{status}</div>
        </div>
    );
};