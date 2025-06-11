
//////////////////////////////////////////////////////////////
// deno test and util methods
import {

  assert,
  assertEquals,

} from "../etc/deps.ts";

// the methods of this module to be tested
import * as dallmo_util_github from "../mod.ts";

//////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-github", () => {

  assertEquals( dallmo_util_github.test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
