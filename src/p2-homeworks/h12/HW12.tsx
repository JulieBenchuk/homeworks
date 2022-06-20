import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect, {SuperSelectPropsType} from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some', 'yellow', 'white'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.background); // useSelector
    let dispatch = useDispatch();  // useDispatch,
    function onChangeOption(newValue: string) {
        dispatch(changeThemeC(newValue))
    }

    return (
        <div className={s.all}>
            <div className={s[theme]}>
                <hr/>
                <div className={s[theme + '-text']}>
                    homeworks 12
                </div>
                <SuperSelect options={themes} onChangeOption={onChangeOption}/>
                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <hr/>
            </div>


        </div>
    );
}

export default HW12;


