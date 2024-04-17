import React from "react";
import ErrorPage from "../../components/error-page/ErrorPage";
import { Helmet } from 'react-helmet';

export default function errorPage(){
    console.log("ErrorPage component rendered");
    return(
        <>
        <Helmet>
        <title>Error 404 (Not Found)</title>
        </Helmet>
        <ErrorPage/>
        </>
    )
}