import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";

export const ChatMessage = ({ content, role = "user", timestamp }) => {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 flex-shrink-0">
          <Icon name="mic" size={20} className="text-purple-600" />
        </div>
      )}

      <div
        className={`flex flex-col gap-2 max-w-xl ${isUser ? "items-end" : "items-start"}`}
      >
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? "bg-purple-600 text-white rounded-tr-sm"
              : "bg-gray-100 text-gray-800 rounded-tl-sm"
          }`}
        >
          {typeof content === "string" ? (
            <Text
              variant="body"
              className={isUser ? "text-white" : "text-gray-800"}
            >
              {content}
            </Text>
          ) : (
            content
          )}
        </div>
        {timestamp && <Text variant="tiny">{timestamp}</Text>}
      </div>

      {isUser && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 flex-shrink-0">
          <span className="text-white text-sm font-medium">MT</span>
        </div>
      )}
    </div>
  );
};
