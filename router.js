// 相對此前從請求處理程序中取得回傳值，這次取而代之的是直接傳遞response物件。如果沒有對應的請求處理器處理，我們就直接回傳 "404" 錯誤。
function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;