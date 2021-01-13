class Header {
  constructor(action, type) {
    this.action = action;
    this.type = type;
  }
}

class MessageBody {
  constructor(data) {
    this.data = data;
  }
}

class RequestBody extends MessageBody {
  constructor(eventId, data) {
    super(data);
    this.event_id = eventId;
  }
}

class Message {
  constructor(header, body) {
    this.header = header;
    this.body = body;
  }
}

module.exports = {
    Header, RequestBody, Message
}