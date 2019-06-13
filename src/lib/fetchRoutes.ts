const parseString = require("xml2js").parseString;

import {agency} from "./agency";
import { IRoute } from './route';

export function fetchRoutes(fetch : typeof window.fetch) : Promise<Array<IRoute> | undefined>
{
    return new Promise<Array<IRoute> | undefined>((resolve : (val : Array<IRoute> | undefined) => void) => {
        fetch(`http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=${agency}`)
        .then((res : Response) => {
            return res.text();
        }).then((body : string | undefined) => {
            if(body)
            {
                parseString(body,function(err : any,result : any){
                    let raw = result;

                    let res = new Array<IRoute>();

                    let rawRoutes = raw.body.route;

                    for(let i = 0; i != rawRoutes.length; ++i)
                    {
                        if(rawRoutes[i] && rawRoutes[i].$)
                        {
                            res.push({
                                tag : rawRoutes[i].$.tag,
                                title : rawRoutes[i].$.title
                            });
                        }
                    }

                    return resolve(res);
                });
            }
        })
    });
}