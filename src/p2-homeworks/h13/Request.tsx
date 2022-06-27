import React, { ChangeEventHandler, useState } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import { api } from './api';


export const Request = () => {
    let [checked, setChecked]= useState<boolean>(false)
    const onButtonClick = ()=> {
        api.request(checked)
    }
    const onChangeChecked = (checked: boolean)=> {
        console.log(checked)
        setChecked(checked)
    }
    return (
        <div>
            <button onClick={onButtonClick}>click!</button>
            <SuperCheckbox onChangeChecked={onChangeChecked}/>
        </div>
    );
};