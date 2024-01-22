import * as React from 'react';
import { Box, Radio, RadioGroup, Sheet, Typography } from '@mui/joy';


export default function RadioSheet(props) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            height: 56,
            my: .5, mr: 1,
            '& > div': {
                py: .3,
                px: (props.label ? 2 : 0.3),
                borderRadius: 'md',
                display: 'flex'
            }
        }}>
            <Sheet variant="outlined" sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>

                {/* Label */}
                {(props.label) && <Typography id="segmented-controls-example" fontSize="sm">{props.label}</Typography>}



                <RadioGroup
                    orientation="horizontal"
                    aria-labelledby="segmented-controls-example"
                    name="training"
                    value={props.value}
                    onChange={props.onChange}
                    sx={{
                        minHeight: 48,
                        padding: '4px',
                        borderRadius: '12px',
                        bgcolor: 'neutral.softBg',
                        '--RadioGroup-gap': '4px',
                        '--Radio-actionRadius': '8px',
                    }}
                >
                    {props.values.map((item) => (
                        <Radio
                            key={item[0]}
                            color="neutral"
                            value={item[0]}
                            disableIcon
                            label={item[1]}
                            variant="plain"
                            sx={{
                                px: 2,
                                alignItems: 'center',
                            }}
                            slotProps={{
                                action: ({ checked }) => ({
                                    sx: {
                                        ...(checked && {
                                            bgcolor: 'background.surface',
                                            boxShadow: 'sm',
                                            '&:hover': {
                                                bgcolor: 'background.surface',
                                            },
                                        }),
                                    },
                                }),
                            }}
                        />
                    ))}
                </RadioGroup>

            </Sheet>
        </Box>

    );
}