import React from "react";
import Button from '@mui/material/Button';

import './_Footer.scss'

interface IChildComponentProps {
    nextContent: string
}

const Footer: React.FC<IChildComponentProps> = (props) => {
    return (
        <div className="footer">
            <Button className="footer-previous" variant="text">Previous</Button>
            <Button className="footer-next" variant="contained">{props.nextContent}</Button>
        </div>
    )
}

export default Footer