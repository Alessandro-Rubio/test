// src/chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hola") || lowerCaseMessage.includes("buenos dias")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("ayuda") || lowerCaseMessage.includes("problema")) {
        this.actionProvider.handleHelp();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;