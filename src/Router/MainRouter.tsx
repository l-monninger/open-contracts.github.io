import React, {FC, ReactElement} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { HomePage } from '../Pages';

export type MainRouterProps = {}

export const MainRouter : FC<MainRouterProps>  = () =>{

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="">
                    <HomePage/>
                </Route>
                <Route path="/dapp/:id">

                </Route>
            </Switch>
        </BrowserRouter>

    )

}