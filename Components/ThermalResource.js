const { Header, RequestBody, Message } = require("./Message.js");

class ThermalResource {
  constructor(toolId, targetTemperature) {
    this.tool_name = toolId;
    this.temp = targetTemperature;
  }

  setTargetTemperature(event, adapterService) {
    let requestHeader = new Header("fire", "Request");
    let setTempReqBody = new RequestBody(event, this);
    let setTempMessage = new Message(requestHeader, setTempReqBody);
    adapterService.processRequest(setTempMessage);
  }
}

class Nozzel extends ThermalResource {

  constructor(toolId, targetTemperature) {
    super(toolId, targetTemperature);
  }

  static setCurrentTemperature(responseBody){
    console.log(responseBody);
  }
}

class Bed extends ThermalResource {
  constructor(toolId, targetTemperature) {
    super(toolId, targetTemperature);
  }
}

module.exports = { Nozzel, Bed };
