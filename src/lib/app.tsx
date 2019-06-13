import * as React from "react";

import {AppBar, Toolbar, IconButton, InputBase} from "@material-ui/core";
import {Menu, Search} from "@material-ui/icons";

import { IRoute } from './route';

interface AppState
{
    routes? : Array<IRoute>;
}

export class App extends React.Component<{},AppState>
{
    public constructor()
    {
        super({});

        this.state = {} as AppState;
    }
    
    public render() : JSX.Element
    {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start">
                        <Menu />
                    </IconButton>
                    <div>
                        <Search />
                    </div>
                    <InputBase
                        placeholder="Find a Route"
                    />
                </Toolbar>
                
            </AppBar>
        );
    }
}