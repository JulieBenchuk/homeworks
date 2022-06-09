import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {initStateType, loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import { Preloader } from './Preloader';

function HW10() {
    // useSelector, useDispatch
    let loading = useSelector<AppStoreType, boolean>(state=>state.loading.isLoading)
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Preloader/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
