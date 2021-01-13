class Header {
  constructor(action, type) {
    this.action = action;
    this.type = type;
  }
}

class MessageBody {
  constructor(eventId,data) {
    this.event_id = eventId;
    this.data = data;
  }
}

class RequestBody extends MessageBody {
  constructor(eventId, data) {
    super(eventId, data);
  }
}

class ResponseBody extends MessageBody{
    constructor(response){
      super(response["body"]["event_id"], response["body"]["data"]);
      this.severity = response["body"]["severity"];
      this.thread = response["body"]["thread"];
      this.fire_time = response["body"]["fire_time"];
      this.event_name = response["body"]["event_name"];
      this.message_count = response["body"]["message_count"];
      this.source = response["body"]["source"];
      this.notify = response["body"]["notify"];
      this.notify_desc = response["body"]["notify_desc"];
    }
}

class Message {
  constructor(header, body) {
    this.header = header;
    this.body = body;
  }
}

module.exports = {
    Header, RequestBody, Message, ResponseBody
}