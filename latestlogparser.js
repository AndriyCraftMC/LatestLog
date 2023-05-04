const fs = require('fs');

// Change this to the path of your latest.log file
const logFilePath = './latest.log';

const readStream = fs.createReadStream(logFilePath, { encoding: 'utf8' });

readStream.on('data', function (chunk) {
  // Split the chunk into lines
  const lines = chunk.split('\n');
  
  // Loop through each line
  lines.forEach(function (line) {
    // Check if the line contains the keyword
    if (line.includes('[FlameCord]')) {
      console.log(line);
    }
  });
});
