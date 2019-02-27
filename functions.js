const simpleGit = require('simple-git');
document.getElementById("btnAdd").addEventListener("click", addFile());
function addFile(){
    let filetoadd= document.getElementById("file1")
    simpleGit.add([filetoadd]);
}