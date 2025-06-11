# @dallmo/util-github

# overview

- functions make use of the github API to retrieve info ; 
- published on [jsr][link-2] ; 


# list of available methods

- get_commit_info


# usage

1. create the file `test-via-jsr.ts` with these contents :  

```
import { dallmo_util_github } from "jsr:@dallmo/util-github";

  // define related info of the repo you want to access here
  const access_info:Access_Info = {
    owner: owner,
    repo: repo,
    branch: branch,
    token: token,
  }; // access_info

const commit_info:Commit_Info = await dallmo_util_github.get_commit_info( access_info );
      console.log( "commit_info : ", commit_info );
```

in which, it assumes 2 [interfaces, namely Access_Info and Commit_Info][link-3].



2. run the test file
```
deno run --allow-read test-via-jsr.ts
```


# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test the local files : 
  - run `deno task test` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 


## notes on "import / deno add"
in the sample code above, the module is imported via :
```
import { [method name] } from "jsr:@[module name]";
```

in case the import is done with this instead : 
```
import { [method name] } from "@[module name]";
```

i.e. without the "jsr:" prefix, then the module has to be added with this command in CLI :
```
deno add jsr:@[module name]
```

if the module has been manually added in the CLI, import with the "jsr:" prefix inside the app is also ok.

updates have therefore been made to add the "jsr:" prefix to both the sample codes above and the test file `test-via-jsr.ts` for simple copy-n-paste.


[comments]: --------------------------------------------------
[link-2]: https://jsr.io/@dallmo/util-github
[link-3]: https://github.com/dallmo/deno-dallmo-util-github/blob/main/etc/interfaces.ts

# updates
## 2025-06-11
- initial publish
