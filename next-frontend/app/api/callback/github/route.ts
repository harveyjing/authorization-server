import { GithubClient, GithubIssuer } from "@/utils/Issuer";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
    console.log(request);
    
    const code = request.nextUrl.searchParams.get('code')
    console.log('code', code);
    
    const issuer = GithubIssuer()
    const client = GithubClient(issuer)
    const params = client.callbackParams(request as any);
    // const tokenSet = await client.callback('https://client.example.com/callback', params, { code_verifier });

    console.log(params);
    
}