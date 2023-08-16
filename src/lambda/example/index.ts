import * as pawsx from "@pulumi/awsx";
import axios from "axios";

export const handler = async (event: any) => {

    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    return {
        statusCode: 200,
        body: "Hello, Pulumi!"
    };
}