const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello how are you!!");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Ordering Iced tea");
  } else {
     res.statusCode = 404;
     res.setHeader("Content-Type", "text/plain");
     res.end("not found!");
  }
});

server.listen(port, () => {
  console.log(`Server is listending at http://${hostname}:${port}`);
});
