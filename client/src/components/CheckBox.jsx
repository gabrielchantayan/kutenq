import * as React from 'react';
import { Box, Checkbox, Sheet } from '@mui/joy';


export default function CheckBox(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 250,
                height: 56,
                my: .5, mr: 1,
                '& > div': { p: 2, borderRadius: 'md', display: 'flex' },
            }}
        >
            <Sheet variant="outlined">
                <Checkbox overlay
                    checked={props.value}
                    onChange={props.onChange}
                    label={props.label} />
            </Sheet>
        </Box>

    );
}