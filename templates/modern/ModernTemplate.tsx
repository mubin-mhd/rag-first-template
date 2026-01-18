"use client";

import { Sidebar } from "./components/organism/Sidebar";
import { DocumentManager } from "./components/organism/DocumentManager";
import { ChatPanel } from "./components/organism/ChatPanel";
import { useChatController } from "@/core/hooks/useChatController";
import { useNavigation } from "@/core/hooks/useNavigation";
import { useFiles } from "@/core/hooks/useFIles";
import { useUser } from "@/core/hooks/useUser";
import { useT } from "@/core/i18n/I18nProvider";

export const ModernTemplate = ({ config }) => {
  const { messages, input, setInput, loading, error, partial, handleSend } =
    useChatController();
  const { user } = useUser();
  const { activeNav, setActiveNav } = useNavigation();
  const { files } = useFiles();
  const t = useT();

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {config.features.enableSidebar && (
        <Sidebar
          user={user}
          activeNav={activeNav}
          onNavClick={setActiveNav}
          t={t}
        />
      )}

      {config.features.enableUpload && (
        <DocumentManager
          files={files}
          onAddNew={() => alert("Add new document")}
          onUpload={() => alert("Upload document")}
          t={t}
        />
      )}
      {config.features.enableStreaming && (
        <ChatPanel
          messages={messages}
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          loading={loading}
          error={error}
          partial={partial}
          t={t}
        />
      )}
    </div>
  );
};
