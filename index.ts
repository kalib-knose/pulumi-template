import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as apigateway from "@pulumi/aws-apigateway";



// A Lambda function to invoke
const fn = new aws.lambda.CallbackFunction("fn", {
    callback: async (ev, ctx) => {
        return {
            statusCode: 200,
            body: new Date().toISOString(),
        };
    }
})

const fn2 = new aws.lambda.CallbackFunction("fn2",{
    callback:async (ev, ctx) => {
        return {
            statusCode:200,
            body: "function 2sddddssssssssssssssss"
        }
    }
})

// A REST API to route requests to HTML content and the Lambda function
const api = new apigateway.RestAPI("api", {
    routes: [
        { path: "/", localPath: "www"},
        { path: "/date", method: "GET", eventHandler: fn },
        {path: "/test" , method: "GET", eventHandler: fn2}
    ]
});

// The URL at which the REST API will be served.
export const url = api.url;
