const WebscoketService = require("./WebsocketService.js");
const { Header, ResponseBody, Message } = require("../Components/Message");

class AdapterService {
  constructor() {
    this.websocketService = new WebscoketService(this);
  }

  processRequest(message) {
    this.websocketService.sendRequest(message);
  }

  processResponse(message) {
    var responseBody = JSON.parse(message["data"]);
    responseBody = new ResponseBody(responseBody); 
    console.log(responseBody);
  }
}

module.exports = AdapterService;
