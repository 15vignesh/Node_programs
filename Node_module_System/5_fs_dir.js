const fs=require('fs')
// to create directory
//fs.mkdirSync('myDirectory')

//check the content inside the directory

let folderpath='C:\\Users\\HP\\Desktop\\Node_programs\\Node_module_System\\myDirectory'
let foldercontent=fs.readdirSync(folderpath)
console.log("Folder Content", foldercontent)

//check whether dir exist or not

let doesexist=fs.existsSync('myDirectory')
console.log(doesexist)


//remove dir 

fs.rmdirSync('myDirectory')