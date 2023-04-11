import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}

export default Footer