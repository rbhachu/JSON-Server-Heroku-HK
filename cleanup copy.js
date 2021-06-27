//console.log("test rishi")

// kill all ?


// delete file
// add check if file exists?
const fs = require('fs')
const path = './data/db.json'

try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}


//
//copy the $file to $dir2
const copyFile = (file1, file2) => {
    //include the fs, path modules
    const fs = require('fs');
    const path = require('path');
  
    //copy file1 to file2 and rename
    const dir1 = path.basename('./data/'); // source directory path
    const f1 = path.basename(file1); // source file name
    const dir2 = path.basename('./data/'); // destination directory path
    const f2 = path.basename(file2); // destination file name

    const source = fs.createReadStream(path.resolve(dir1, f1));  
    const dest = fs.createWriteStream(path.resolve(dir2, f2));  

    source.pipe(dest);
    source.on('end', function() { console.log('Succesfully copied'); });
    source.on('error', function(err) { console.log(err); });
  };
  
  // source file to copy from, destination file to copy to 
  copyFile('db-source.json', 'db.json');