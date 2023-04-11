
import React, { FC, Component, MouseEvent } from 'react';
import './_SelectableLabel.scss'

interface iOption {
    label: string;
    slug: string;
}

interface IChildComponentProps {
    payOptions: iOption[]
    payOption: string
    setPayOption: (value: string) => void
}
interface SyntheticEvent<T> {
    currentTarget: EventTarget & T;
}

const SelectableLabel: React.FC<IChildComponentProps> = (props) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
        props.setPayOption(e.target.value)
    }
    return (
        <>
            <div className="selectable-labels" >
                {props.payOptions.map(item => (
                    <label key={item.slug} htmlFor={item.slug} className="selectable-labels-item checked">
                        <input checked={props.payOption == item.slug} onChange={change} name='option' type="radio" value={item.slug} id={item.slug} />
                        <div className="checked">{item.label}</div>
                    </label>
                ))}
            </div>
        </>
    )
}

export default SelectableLabel