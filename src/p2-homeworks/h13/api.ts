import axios from 'axios';

type ResponseType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}
export const api = {
    request(checked: boolean) {
        const promise = axios.post<ResponseType>("https://neko-cafe-back.herokuapp.com/auth/test/", {success: checked})
        return promise
    }
}

