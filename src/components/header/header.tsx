import React from "react";
import './_Header.scss'
import Button from '@mui/material/Button';

import close from '../../assets/svg/close.svg'

interface IChildComponentProps {
    headerContent: string
}

const Header: React.FC<IChildComponentProps> = (props) => {
    const closeTab = () => {
        console.log("Close");
    }

    return (
        <>
            <div className="header">
                <div className="header-title">
                    {props.headerContent}
                </div>
                <div className="header-close">
                    <Button onClick={closeTab} variant="text">
                        <img src={close} alt="" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Header