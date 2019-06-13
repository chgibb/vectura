import * as React from "react";

import {AppBar, Toolbar, IconButton} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

interface AppState
{

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
                </Toolbar>

            </AppBar>
        );
    }
}