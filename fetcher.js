const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');


const arg = process.argv.slice(2)
const url = arg[0]
const filePath = arg[1]

function fetcher(url,filePath){
  const file = fs.createWriteStream(filePath);
  const request = http.get(url, function(response) {
    let howManyBytes = (response.headers['content-length'])
    response.pipe(file);
    console.log(`Downloaded and saved ${howManyBytes} bytes to ${filePath}`)
  });
}

fetcher(url,filePath)