import { InitialStateType, UserType } from "../HW8"
type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: InitialStateType, action: ActionType): InitialStateType => { // need to fix any
    let compareFnUp = (a: UserType, b: UserType) => {
       if (a.name > b.name) {
           return 1;
       } else if (a.name < b.name) {
           return -1
       } else return 0
    }
    
    switch (action.type) {
        case 'sort': {
            if (action.payload==='up') {
                return [...state].sort(compareFnUp)
            } else if (action.payload==='down') {
                return [...state].sort(compareFnUp).reverse()
            } else return state
        }
        case 'check': {
            return [...state].filter(u=>u.age>=action.payload)
        }
        default: return state
    }
}