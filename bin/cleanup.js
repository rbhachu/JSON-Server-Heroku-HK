//copy the $file to $dir2 and rename
const copyFile = (file, dir2)=>{
  //include the fs, path modules
  const fs = require('fs');
  const path = require('path');

  //gets file name and adds it to dir2
  const f = path.basename('db.json'); // new copeid file name

  const source = fs.createReadStream(file);
  const dest = fs.createWriteStream(path.resolve(dir2, f));

  source.pipe(dest);
  source.on('end', function() { console.log('Succesfully copied'); });
  source.on('error', function(err) { console.log(err); });
};

//example, copy file1.htm from 'test/dir_1/' to 'test/'
//copyFile('./data1/db.json', './data/');
copyFile('./data/db-source.json', './data/');