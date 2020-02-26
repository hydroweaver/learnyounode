const fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

//change buf to string file

const buf_str = buf.toString().split('\n').length;

console.log(buf_str-1);




