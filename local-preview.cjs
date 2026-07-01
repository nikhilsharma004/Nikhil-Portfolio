const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".pdf": "application/pdf"
};

http
  .createServer((request, response) => {
    const cleanUrl = decodeURIComponent(request.url.split("?")[0]);
    const target = cleanUrl === "/" ? "index.html" : cleanUrl.replace(/^\/+/, "");
    const filePath = path.resolve(root, target);

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
      });
      response.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Portfolio preview: http://127.0.0.1:${port}`);
  });
