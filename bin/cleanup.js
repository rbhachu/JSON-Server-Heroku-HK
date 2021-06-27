// pass source and destination file props
const copyFile = ( file1, file2 ) => {

  // include the fs and path modules
  const fs = require('fs');
  const path = require('path');

  // set source file and destination file
  const source = fs.createReadStream(path.resolve(file1));
  const dest = fs.createWriteStream(path.resolve(file2));

  source.pipe(dest);
  source.on('end', function() { console.log('Succesfully copied'); }); // if sucessful
  source.on('error', function(err) { console.log(err); }); // if error

};

// get source file and overwrite destination file
copyFile('./data/db-source.json', './data/db.json');