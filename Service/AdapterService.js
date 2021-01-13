const WebscoketService = require("./WebsocketService.js");

class AdapterService {
  constructor() {
    this.websocketService = new WebscoketService(this);
  }

  processRequest(message) {
    this.websocketService.sendRequest(message);
  }

  processResponse(message) {
    var responseBody = JSON.parse(message["data"]);
    if (responseBody["body"]["event_id"] =="lena.resources.tool.EventToolDataUpdate") {
      console.log(responseBody);
    }
  }
}

module.exports = AdapterService;
