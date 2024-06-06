//files
const fs=require('fs');

//reading a file

let filecontent=fs.readFileSync('f1.txt');
console.log('data of file 1-> '+filecontent)

//writing in a file

fs.writeFileSync('f2.txt'," This is file 2")

//append a file

fs.appendFileSync('f3.txt'," Iam file 3 man")

//delete a file

fs.unlinkSync('f2.txt')