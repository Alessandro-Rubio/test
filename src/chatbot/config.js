// src/chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'AsistenteVirtual';

const config = {
  initialMessages: [createChatBotMessage(`¡Hola! Soy tu ${botName}. ¿En qué puedo ayudarte?`)],
  botName: botName,
};

export default config;