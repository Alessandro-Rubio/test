// src/chatbot/ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Acción para saludar
  greet() {
    const greetingMessage = this.createChatBotMessage("¡Hola! Un placer saludarte.");
    this.updateChatbotState(greetingMessage);
  }

  // Acción para ofrecer ayuda
  handleHelp() {
    const helpMessage = this.createChatBotMessage(
      "Si tienes problemas con tu código de verificación, asegúrate de que no haya expirado y que lo hayas copiado correctamente."
    );
    this.updateChatbotState(helpMessage);
  }

  // Acción para respuestas desconocidas
  handleUnknown() {
    const message = this.createChatBotMessage(
      "Lo siento, no entendí tu pregunta. Intenta preguntar por 'ayuda'."
    );
    this.updateChatbotState(message);
  }


  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;