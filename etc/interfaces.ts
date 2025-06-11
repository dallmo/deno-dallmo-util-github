
/////////////////////////////////
interface Commit_Info{

  hash: string,
  hash_raw: string,
  timestamp: string,
  timestamp_raw: string,

}; // Commit_Info
/////////////////////////////////
interface Access_Info{

    owner: string,
    repo: string,
    branch: string,
    token: string

}; // Access_Info
/////////////////////////////////
export type {

  Commit_Info,
  Access_Info,

}; //
