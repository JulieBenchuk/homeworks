import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState, useEffect} from 'react'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const [checked, setChecked] = useState<boolean>(false)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        let newValue = e.currentTarget.name
        onChangeOption(newValue)
        console.log(newValue)
       /* setChecked(!checked)
       */
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                value={value}
                name={o}
                onChange={onChangeCallback}
                checked={value===o}


                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
