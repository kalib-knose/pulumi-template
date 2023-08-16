"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaRole = void 0;
const aws = require("@pulumi/aws");
exports.lambdaRole = new aws.iam.Role("example", {
    assumeRolePolicy: {
        Version: "2012-10-17",
        Statement: [
            {
                Action: "sts:AssumeRole",
                Principal: {
                    Service: "lambda.amazonaws.com",
                },
                Effect: "Allow",
                Sid: "",
            },
        ],
    },
});
const lambdaRoleAttachment = new aws.iam.RolePolicyAttachment("lambdaRoleAttachment", {
    role: exports.lambdaRole,
    policyArn: aws.iam.ManagedPolicy.AWSLambdaBasicExecutionRole,
});
//# sourceMappingURL=example.js.map