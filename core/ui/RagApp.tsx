import { useAppConfig } from "../hooks/useAppConfig";
import { ChatLayoutResolver } from "./ChatLayoutResolver";
import { Chat } from "@/features/chat/Chat";

export function RagApp() {
  const config = useAppConfig();
  const components = config.components;

  return (
    <ChatLayoutResolver components={components}>
      <Chat />
    </ChatLayoutResolver>
  );
}
