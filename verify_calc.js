const assert = require("assert");
const { calcNetwork } = require("./app.js");
const r = calcNetwork(1000, 35, 2);
assert(r.cable.includes("Cat.6A"));
assert.strictEqual(r.mesh, 2);
console.log("ROUTER_CABLE_TESTS_PASSED");