// http -> library to create http server for APIs in node.js

const http = require("http"); // importing http library (default library)
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (req.method === "GET") {
    if (pathname === "/user") {
      res.statusCode = 200;

      res.end(
        JSON.stringify({
          name: "John",
          email: "john@gmail.com",
          city: "Chennai, India",
        })
      );
    } else {
      res.statusCode = 200;
      res.end("Hello World");
    }
  }
});

server.listen(4000, () => {
  console.log("App is running at PORT 4000");
});

// http://localhost:4000
// http://localhost:4000/user
// http://localhost:4000/profile
