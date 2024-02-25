const fs = require('fs');

let username = document.getElementById("uname");
console.log(username);


fs.readFile('login.rtf', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file: ' + err);
    return;
  }
  console.log('File contents:', data);
});



