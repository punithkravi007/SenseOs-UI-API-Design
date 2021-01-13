const WebscoketService = require("./WebsocketService.js");
const { ResponseBody } = require("../Components/Message");
const { Nozzel, Bed } = require("../Components/ThermalResource");

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
    switch(responseBody["event_name"]){
      case "EventToolDataUpdate":
        Nozzel.setCurrentTemperature(responseBody);
        break;
    }
  }
}

module.exports = AdapterService;
