
const div: string = "-".repeat(60);
console.info("testing from test-local, starts : ");
console.info( div );

////////////////////////////////////////////////
// import from the local mod.ts
import * as dallmo_util_github from "../mod.ts"

  type Commit_Info = dallmo_util_github.types.Commit_Info;
  type Access_Info = dallmo_util_github.types.Access_Info;

  const owner: string = "dallmo";
  const repo: string = "pw66.pw";
  const branch: string = "main"; // or "master"

  // auth code defined in env var
  const token: any = Deno.env.get("PW66_ACCESS_INFO_TOKEN");  

  const access_info:Access_Info = {
    owner: owner,
    repo: repo,
    branch: branch,
    token: token,
  }; // access_info

const commit_info:Commit_Info = await dallmo_util_github.get_commit_info( access_info );
      console.log( "commit_info : ", commit_info );

console.info( div );
console.info("testing from test-local, ends. ");
