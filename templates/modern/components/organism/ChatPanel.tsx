import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Input } from "../atoms/Input";
import { Text } from "../atoms/Text";
import { ChatMessage } from "../molecules/ChatMessage";
import { StatusIndicator } from "../molecules/StatusIndicator";

export const ChatPanel = ({
  messages,
  input,
  setInput,
  handleSend,
  loading,
  error,
  partial,
}) => {
  return (
    <div className="w-96 bg-gradient-to-br from-purple-50 to-pink-50 border-l border-purple-100 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600">
            <Icon name="mic" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <Text variant="h3">AI Assistant</Text>
            <StatusIndicator status="active" label="RAC Active" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            icon={<Icon name="plus" size={18} />}
          />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-purple-100 bg-white/70 backdrop-blur-sm">
        <div className="flex gap-2">
          <Input
            placeholder="Ask a question about your documents..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button
            variant="primary"
            size="md"
            icon={<Icon name="send" size={18} />}
            onClick={handleSend}
          />
        </div>
        <Text variant="tiny" className="mt-2 text-center">
          AI can make mistakes. Verify important information.
        </Text>
      </div>
    </div>
  );
};
