const WebSocket = require("ws");

class WebsocketService {
  isConnected = false;

  constructor(adapterService) {
    this.adapterService = adapterService;
    this.socket = new WebSocket("ws://localhost:8080/websocket/events");

    this.socket.onopen = () => {
      this.isConnected = true;
      console.log("Listening to WebSocket");
    };

    this.socket.onmessage = (result) => {
      this.adapterService.processResponse(result);
    };
  }

  sendRequest(message) {
    this.socket.send(JSON.stringify(message));
  }
}

module.exports = WebsocketService;
