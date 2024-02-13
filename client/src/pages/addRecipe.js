import { Icon } from '@iconify/react';
import { Container, FormControl, Grid, InputLabel, LinearProgress, TextField, Typography } from "@mui/joy";
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { t } from '../assets/js/locale.js';

import * as api from '../assets/js/api.js';
import FloatingLabelInput from '../components/LabelInput.jsx';
import { getSchemas } from '../assets/js/web.js';

// Grösse zusammengeklappt mit Schiebehilfe gefaltet und heruntergeklappt und ohne Fussstützen und Sitz - & Rückenkissen(B × T × H): 37 × 70 × 75 cm


const isTextFilledOut = (input) => {

    if (input === undefined || input === '') return false;
    else return true;
}


export default function AddRecipe(params) {

    const [showPassword, setShowPassword] = React.useState(false);          // Show the password or not
    const handleClickShowPassword = () => setShowPassword((show) => !show); // Show or hide password on click
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // This has been deprecated in favour of redirecting to the account page
    // const [showSuccess, setShowSuccess] = React.useState(false);                // Show a success message ?
    // const [successMessage, setShowSuccessMessage] = React.useState('Success');  // What is the success message ?
    const [showError, setShowError] = React.useState(false);                // Show an error message ?
    const [errorMessage, setErrorMessage] = React.useState('Error');        // What is the error message ?

    const [recipeURL, setRecipeURL] = React.useState('');     // Username
    const [password, setPassword] = React.useState('');     // Password
    const [cookies, setCookie] = useCookies(["user"]);      // Any cookies

    const [loading, setLoading] = React.useState(false);    // Loading bar

    const navigate = useNavigate(); // Redirecting

    // Attempt to log in
    const getRecipe = async () => {

        // setShowSuccess(false);
        // Hide any error messages
        setShowError(false);

        // Set the loading to true
        setLoading(true);


        // POST the data then wait for a return
        const ret = await getSchemas(recipeURL);

        console.log(ret)

        setLoading(false)

        // // If successfull
        // if (ret.success) {

        //     // Set cookies
        //     setCookie("username", recipeURL.trim(), { path: "/" });
        //     setCookie("token", ret.token, { path: "/" });
        //     setCookie("fullName", ret.fullName, { path: "/" });

        //     // Redirect to the main page
        //     navigate('/')


        //     // setShowSuccessMessage(ret.reason);
        //     // setShowSuccess(true);


        // }
        // else {
        //     setErrorMessage(ret.reason);
        //     setShowError(true);
        // }
    }

    return (

        <Container>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid xs={12}>
                    <Typography level="h1">{t('add_recipe')}</Typography>
                </Grid>


                {/* Basic Options */}
                <Grid container xs={12} >


                    <form onSubmit={(event) => {
                        event.preventDefault();
                        getRecipe();
                    }}>
                        <Grid container>

                            <FloatingLabelInput
                                value={recipeURL}
                                type="url"
                                onChange={(e) => { setRecipeURL(e.target.value); }}
                                label={t('recipe_url')}
                                width={500}
                                required
                            />


                            <Button sx={{ my: 1 }} type='submit' >
                                {t('search')}  <Icon className="icon" icon={"material-symbols:manage-search-rounded"} />
                            </Button>
                        </Grid>

                    </form>


                    {/* Loading bar */}
                    {
                        loading &&

                        <Grid xs={12} sx={{ mt: 1, width: 510 }} >
                            <LinearProgress />
                        </Grid>
                    }

                    {/* Error */}
                    {
                        showError &&
                        <>
                            <Grid xs={12} sx={{ mt: 1, width: 510 }} >
                                <Typography variant="errorHead" color="error">ERROR</Typography>
                            </Grid>
                            <Grid xs={12} sx={{ mt: 0, width: 510 }} >
                                <Typography variant="error">{errorMessage}</Typography>
                            </Grid>
                        </>
                    }

                    {/* Error
                    {
                        showSuccess &&
                        <>
                            <Grid xs={12} sx={{ mt: 1, width: 510 }} >
                                <Typography variant="errorHead" color="success">SUCCESS</Typography>
                            </Grid>
                            <Grid xs={12} sx={{ mt: 0, width: 510 }} >
                                <Typography variant="error">{successMessage}</Typography>
                            </Grid>
                        </>
                    } */}

                </Grid>




            </Grid>


        </Container>

    )
}