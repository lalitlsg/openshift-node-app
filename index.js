const http = require("http");
const fs = require("fs");

const APP_MSG = process.env.APP_MSG;
let fileData = null;

fs.readFile("/opt/app-root/secure/myapp.sec", "utf-8", (secerr, secdata) => {
  fileData = secdata ? secdata : secerr;
});

const server = http.createServer((req, res) => {
  res.write(`APP_MSG : ${APP_MSG}\n`);
  res.write(`File Data : ${fileData}`);
  res.end();
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on 8000");
});
