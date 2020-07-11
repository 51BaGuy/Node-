// 相對此前從route()函數取得回傳值的做法，這次我們將response物件作為第三個參數傳遞給route()函數，並且，我們將onRequest()處理程序中所有有關response的函數調都移除，因為我們希望這部分工作讓route()函數來完成。
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;