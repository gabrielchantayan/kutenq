import { Icon } from '@iconify/react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import IconButton from "@mui/joy/IconButton";
import Typography from '@mui/joy/Typography';
import * as React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import SvgIcon from '@mui/joy/SvgIcon';
import { applySolidInversion } from "@mui/joy/colorInversion";

import { ReactComponent as KutenqLogoLat } from '../assets/images/logos/kutenq-lat-it.svg'
import { ReactComponent as KutenqLogoArm } from '../assets/images/logos/kutenq-arm-it.svg'


export default function SearchAppBar() {

    const [drawerOpen, setDrawerOpen] = React.useState(false)

    const [cookies, setCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    const toggleDrawer =
        (inOpen) => (event) => {
            if (
                event.type === 'keydown' &&
                ((event).key === 'Tab' ||
                    (event).key === 'Shift')
            ) {
                return;
            }

            setDrawerOpen(inOpen);
        };

    return (
        <Box id="toolbar" >
            <Grid conatiner sx={[{

                display: 'flex',
                flexGrow: 1,
                px: 3,
                pt: 2,
                background: (theme) =>
                    `linear-gradient(45deg, ${theme.vars.palette.neutral[900]}, ${theme.vars.palette.neutral[800]})`,
            }, applySolidInversion('neutral')]} xs={12}>
                <Grid
                    sx={{
                        display: 'flex', alignItems: 'baseline'
                    }}
                >

                    <IconButton
                        // variant="plain"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                        size="lg"
                    >
                        <Icon className="icon" icon={"mdi:menu"} />
                    </IconButton>
                    <KutenqLogoLat height="45" fill="#ffffff" />
                </Grid>

                <Grid
                    sx={{
                        display: 'flex-right',
                        flexGrow: 1,
                        ml: 'auto',
                        textAlign: 'right'
                    }}
                >
                    {
                        !cookies.fullName &&
                        <>

                            <Button onClick={() => { navigate('/login') }}>Login</Button>

                        </>
                    }

                    {
                        cookies.fullName &&
                        <>

                            <Button color="inherit" onClick={() => { navigate('/account') }}>{cookies.fullName}</Button>

                        </>
                    }

                </Grid>






            </Grid>


        </Box>
    );
}