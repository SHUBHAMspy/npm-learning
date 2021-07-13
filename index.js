var _ = require('underscore')

//  Checks for Core Modules
// Then for file/Folder in the current folder(if./ is mentioned)
// At last checks in Node Modules as in this case there was no mention of ./

var result = _.contains(["banana","mango","apple"],"banana")
console.log("result",result);