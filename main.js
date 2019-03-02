const simpleGit = require('simple-git')('./');
console.log(simpleGit);
function doAdd(){
    // alert("alert");
    // let filetoadd= document.getElementById("file1")
    simpleGit.add(['main.js']);
    console.log("file added");
}
doAdd();