/// <reference types="jest" />

const nodeFetch = require("node-fetch");

import {fetchRoutes} from "../src/lib/fetchRoutes";

it("Should fetch and validate routes",async () => {
    let routes = await fetchRoutes(nodeFetch);

    expect(routes).toBeDefined();

    expect(typeof routes).toBe("object");

    if(routes)
    {
        for(let i = 0; i != routes.length; ++i)
        {
            expect(routes[i].tag).toBeDefined();
            expect(typeof routes[i].tag).toBe("string");
            expect(routes[i].title).toBeDefined();
            expect(typeof routes[i].title).toBe("string");
        }
    }
});