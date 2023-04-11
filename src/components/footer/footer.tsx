import React from "react";
import Button from '@mui/material/Button';

import './_Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <Button className="footer-previous" variant="text">Previous</Button>
            <Button className="footer-next" variant="contained">Next</Button>
        </div>
    )
}

export default Footer