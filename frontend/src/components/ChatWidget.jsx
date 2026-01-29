import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.maxansistemas.com/webhook/db073ecd-f9b4-4602-804c-c057ce8d32b5/chat",
      mode: "window",
      open: true,
      showWelcomeScreen: false,
      initialMessages: [
        "Hola 👋 Soy el asistente virtual de Maxan Sistemas",
        "Cuéntame en qué te puedo ayudar 👇",
      ],
      i18n: {
        es: {
          welcomeTitle: "Hola 👋",
          welcomeSubtitle: "Estamos listos para ayudarte",
          title: "Soporte Maxan Sistemas",
          subtitle: "Atención automática",
          inputPlaceholder: "Escribe tu mensaje…",
        },
      },
    });
  }, []);

  return <div></div>;
}

export default ChatWidget;
