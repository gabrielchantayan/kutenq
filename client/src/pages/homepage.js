import { Icon } from "@iconify/react";
import { Button, Container, Typography } from "@mui/joy";
import React, { useEffect } from "react";

import * as api from '../assets/js/api.js';
// import HomepageItem from "../components/HomepageItem.js";
import { getCookie } from "../assets/js/util.js";
import * as account from '../assets/js/account.js';

import { useNavigate } from "react-router-dom";


export default function Homepage(params) {

    const [pages, setPages] = React.useState(null);

    const navigate = useNavigate();
    // useEffect(() => {

    //     async function getData() {
    //         let ret = await account.getListOfAllPermissiblePages();

    //         ret.sort((a, b) => a.sort - b.sort);

    //         setPages(ret);
    //     }

    //     getData();

    // }, [])


    const goToLogin = () => {
        navigate('/login');
    }

    // const lll = await api.post(['accounts', 'listAllPermissiblePages'], { 'username': username, 'token': ret.token });
    // console.log(lll)




    return (
        <Container>
            <Typography level='h1' sx={{ mt: 3 }}>Internal Tools</Typography>
            <Typography level='subtitle1'>Various tools and quick links to speed up workflow</Typography>

            <Button Button sx={{ mt: 3 }} onClick={goToLogin} variant="contained">
                Log In  <Icon className="icon" icon={"mdi:account"} />
            </Button>


            {/* {
                pages && (

                    pages.map(page => {


                        return (

                            <HomepageItem data={
                                {
                                    name: page.name,
                                    icon: page.icon,
                                    permissions: page.permissions,
                                    description: page.description,
                                    url: page.url
                                }} />
                        )

                    })
                )
            } */}


        </Container>
    )
}