
/*
 * @module dallmo-util-github
 */

////////////////////////////////////////////////
// import interfaces
import type {

  Commit_Info,
  Access_Info,

} from "./etc/interfaces.ts";
//////////////////////////////////////////////////////////////
/**
 * an util function to format timestamp
 * ---------------------------
 * @function format_timestamp
 * @param {string} input_time_string: the raw input timestamp
 * @returns {string} the formatted timestamp
 */
function format_timestamp( input_time_string: string ): string {

  const date = new Date(input_time_string); // parse as UTC

  // Convert to GMT+8 by adding 8 hours (8 * 60 * 60 * 1000 ms)
  const gmt8Time = new Date(date.getTime() + 8 * 60 * 60 * 1000);

  const year = gmt8Time.getUTCFullYear();
  const month = String(gmt8Time.getUTCMonth() + 1).padStart(2, "0"); // months 0-11
  const day = String(gmt8Time.getUTCDate()).padStart(2, "0");

  const hours = String(gmt8Time.getUTCHours()).padStart(2, "0");
  const minutes = String(gmt8Time.getUTCMinutes()).padStart(2, "0");
  const seconds = String(gmt8Time.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}`;

}; // format_timestamp
//////////////////////////////////////////////////////////////
/**
 * using the github API to get commit info
 * ---------------------------------
 * @function get_commit_info
 * @param {Access_Info} access_info defined as an custom object 
 * @returns {Promise<Commit_Info>} formatted commit info
 */
async function get_commit_info( access_info:Access_Info ): Promise<Commit_Info>{

  const owner: string = access_info.owner;
  const repo: string = access_info.repo;
  const branch: string = access_info.branch;
  const token: string = access_info.token;

    const url = `https://api.github.com/repos/${owner}/${repo}/commits/${branch}`;

  let commit_hash: string, commit_timestamp: string,
      commit_hash_raw: string, commit_timestamp_raw: string;
      commit_hash_raw = commit_timestamp_raw = "";

  //--------------------------------------------------
  try{
    // fetch response via http
    const response = await fetch(url, {
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github.v3+json",
      },
    }); // fetch response

    // catch error
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    
    // parse response
    const data = await response.json();
    
    // assign acquired values
    commit_hash_raw = data.sha;
    commit_timestamp_raw = data.commit.committer.date;

    // format the acquired values
    commit_hash = commit_hash_raw.substring(0, 6);
    commit_timestamp = format_timestamp( commit_timestamp_raw );

  }catch(error: any){

    console.error( "dallmo-util-github : get_commit_info : error message : ", error.message );
    commit_hash      = "---";
    commit_timestamp = "---";

  }; // try catch
  
  //---------------------------------
  // define the final return object 
  const commit_info: Commit_Info = {

    hash:      commit_hash,
    hash_raw:  commit_hash_raw,
    timestamp:     commit_timestamp,
    timestamp_raw: commit_timestamp_raw,

  }; // commit_info

  return commit_info;

}; // get_commit_info
//////////////////////////////////////////////////////////////
/**
 * test connecting to this child module from parent
 * --------------
 * @function test
 * @returns {string}
 */
function test(): string{

  return "ok";

}// function test
//////////////////////////////////////////////////////////////
export {

  get_commit_info,
  test,

}; // export
