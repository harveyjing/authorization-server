import { GithubClient, GithubIssuer } from "@/utils/Issuer";
import { redirect } from "next/navigation";
import { Issuer, generators } from "openid-client";

export async function GET(request: Request) {

  const githubIssuer = GithubIssuer()
  console.log("Discovered issuer %s %O", githubIssuer.issuer, githubIssuer.metadata);
  const client = GithubClient(githubIssuer)

  const code_verifier = generators.codeVerifier();

  const code_challenge = generators.codeChallenge(code_verifier);

  const url = client.authorizationUrl({
    scope: "user:email",
    // resource: "https://my.api.example.com/resource/32178",
    code_challenge,
    code_challenge_method: "S256",
  });
  console.log(url);

  return redirect(url);
}
