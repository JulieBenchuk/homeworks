import { AppStoreType } from "./store"

const initState = {
    isLoading: false
}
export type initStateType = typeof initState

const SET_LOADING = "SET_LOADING"
export const loadingReducer = (state: initStateType = initState, action: setLoadingActionType): initStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}
type setLoadingActionType = {type: "SET_LOADING", isLoading: boolean}
export const loadingAC = (isLoading: boolean): setLoadingActionType => {
    return {type: "SET_LOADING", isLoading: isLoading}
}