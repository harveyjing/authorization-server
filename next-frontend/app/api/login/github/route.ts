import { redirect } from "next/navigation";
import { Issuer, generators } from "openid-client";

export async function GET(request: Request) {
  const githubIssuer = await Issuer.discover(
    "https://token.actions.githubusercontent.com/.well-known/openid-configuration"
  );
  githubIssuer["authorization_endpoint"] = "https://github.com/login/oauth/authorize"
  console.log("Discovered issuer %s %O", githubIssuer.issuer, githubIssuer);

  const client = new githubIssuer.Client({
    client_id: "ee8c323606f53878a036",
    client_secret: "385c7db670094e628621641b6f699063dccc6799",
    redirect_uris: ["http://localhost:3000/callback"],
    response_types: ["code"],
    // id_token_signed_response_alg (default "RS256")
    // token_endpoint_auth_method (default "client_secret_basic")
  });

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

// Issuer.discover("http://localhost:3000/oidc").then(function (oidcIssuer) {
//   var client = new oidcIssuer.Client({
//     client_id: "oidcCLIENT",
//     client_secret: "client_super_secret",
//     redirect_uris: ["http://localhost:8080/login/callback"],
//     response_types: ["code"],
//   });
//   passport.use(
//     "oidc",
//     new Strategy(
//       { client, passReqToCallback: true },
//       (req, tokenSet, userinfo, done) => {
//         console.log("tokenSet", tokenSet);
//         console.log("userinfo", userinfo);
//         // do whatever you want with tokenset and userinfo
//         req.session.tokenSet = tokenSet;
//         req.session.userinfo = userinfo;

//         return done(null, tokenSet.claims());
//       }
//     )
//   );
// });
