const { SyncHook } = require("tapable");
const queue = new SyncHook(["arg1", "arg2", "arg3"]);

queue.tap("1", (name, age, location) => {
  console.log("==1==>", name, age, location);
});
queue.tap("2", (name, age, location) => {
  console.log("==2==>", name, age, location);
});
queue.tap("3", (name, age, location) => {
  console.log("==3==>", name, age, location);
});

queue.call("Tom", 20, "ShangHai");
