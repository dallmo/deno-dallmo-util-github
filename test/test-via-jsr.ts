
const div: string = "-".repeat(60);
console.info("testing from test-jsr, starts : ");
console.info( div );

////////////////////////////////////////////////
// import interfaces
import type {
  
  Commit_Info,
  Access_Info,
  
} from "../etc/interfaces.ts";

////////////////////////////////////////////////
// import from jsr after initial publish
import * as dallmo_util_github from "jsr:@dallmo/util-github"

  const owner: string = "dallmo";
  const repo: string = "pw66.pw";
  const branch: string = "main"; // or "master"

  // auth code defined in env var
  const token: any = Deno.env.get("PW66_COMMIT_INFO_AUTH");  

  const access_info:Access_Info = {
    owner: owner,
    repo: repo,
    branch: branch,
    token: token,
  }; // access_info

const commit_info:Commit_Info = await dallmo_util_github.get_commit_info( access_info );
      console.log( "commit_info : ", commit_info );

console.info( div );
console.info("testing from test-jsr, ends. ");
