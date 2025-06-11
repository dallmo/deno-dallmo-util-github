
const div: string = "-".repeat(60);
console.info("testing from test-local, starts : ");
console.info( div );

////////////////////////////////////////////////
// import interfaces
import type {
  
  Commit_Info,
  Access_Info,
  
} from "../etc/interfaces.ts";

////////////////////////////////////////////////
// import from the local mod.ts
import * as dallmo_util_github from "../mod.ts"

  const PW66_COMMIT_INFO_AUTH = Deno.env.get("PW66_COMMIT_INFO_AUTH");  
  const owner: string = "dallmo";
  const repo: string = "pw66.pw";
  const branch: string = "main"; // or "master"
  const token: unknown = PW66_COMMIT_INFO_AUTH; // Store your token securely

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
