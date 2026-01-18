"use client";

import { Sidebar } from "./components/organism/Sidebar";
import { DocumentManager } from "./components/organism/DocumentManager";
import { ChatPanel } from "./components/organism/ChatPanel";
import { useUser } from "@/core/hooks/useUser";
import { useNavigation } from "@/core/hooks/useNavigation";
import { useFiles } from "@/core/hooks/useFIles";

export const ModernTemplate = (props) => {
  const { messages, input, setInput, loading, error, partial, handleSend } =
    props.features.chat;
  const { user } = useUser();
  const { activeNav, setActiveNav } = useNavigation();
  const { files } = useFiles();

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar user={user} activeNav={activeNav} onNavClick={setActiveNav} />

      <DocumentManager
        files={files}
        onAddNew={() => alert("Add new document")}
        onUpload={() => alert("Upload document")}
      />

      <ChatPanel
        messages={messages}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        loading={loading}
        error={error}
        partial={partial}
      />
    </div>
  );
};
