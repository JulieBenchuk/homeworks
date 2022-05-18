import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {
    useState
} from "../../../../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

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
        onChangeOption(e.currentTarget.value)
        setChecked(true)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                value={o}
                name={o}
                onChange={onChangeCallback}
                checked={true}
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
