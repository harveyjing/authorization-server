import { Issuer } from "openid-client";

export function GithubIssuer() {
    return new Issuer({
        issuer: "https://github.com",
        authorization_endpoint: "https://github.com/login/oauth/authorize",
        token_endpoint: "https://github.com/login/oauth/access_token",
        userinfo_endpoint: "https://api.github.com/user",
    });
}

export function GithubClient(githubIssuer: Issuer) {
    return new githubIssuer.Client({
        client_id: "ee8c323606f53878a036",
        client_secret: "385c7db670094e628621641b6f699063dccc6799",
        redirect_uris: ["http://localhost:3000/api/callback/github"],
        response_types: ["code"],
    });
}
