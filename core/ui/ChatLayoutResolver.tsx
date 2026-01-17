"use client";

import { useUI } from "./UIProviders";
import { DefaultChatLayout } from "./ChatLayout";

export function ChatLayoutResolver(props: any) {
  const ui = useUI();
  const ChatLayout = ui.ChatLayout || DefaultChatLayout;
  return <ChatLayout {...props} />;
}
