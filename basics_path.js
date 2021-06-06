console.log(" Started Index Js");

var path = "c:/sandeep/integration/files";
path = path.replace("/sandeep/integration", "");
console.log(`1 : PATH ${path}`);
path = path.replace("//sandeep//integration", "");
console.log(`2 : PATH ${path}`);

console.log("*************************************************");
var path = "c:/sandeep/integration/files";
console.log(`1 : PATH ${path.replace("/sandeep/integration", "")}`);

if (path.indexOf("//sandeep//integration") !== -1) {
    console.log(`2 : NEW PATH ${path.replace("//sandeep//integration", "")}`);
}
