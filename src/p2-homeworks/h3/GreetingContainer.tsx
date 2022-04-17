import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(' '); // need to fix any
    const [error, setError] = useState<string>(''); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setError("");
        // need to fix
    }
    const addUser = (name: string) => {
        name = name.trim();
        name && alert(`Hellov ${name}!`);
        name ? addUserCallback(name) : setError("Input is invalid!");
        setName("");
    }
    let totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={() => addUser(name)}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
