import { useState } from "react";
import { Message } from "@/features/chat/types";
import { useStreamingChat } from "@/features/chat/useStreamingChat";

export function useChatController() {
    const { loading, error, sendMessage, partial } = useStreamingChat();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: Date.now(),
        };

        setMessages((m) => [...m, userMsg]);
        setInput("");

        await sendMessage(
            { messages: [{ role: "user", content: userMsg.content }] },
            (token) => {
                setMessages((msgs) => {
                    const last = msgs[msgs.length - 1];
                    if (last?.role === "assistant") {
                        return [...msgs.slice(0, -1), { ...last, content: last.content + token }];
                    }
                    return [
                        ...msgs,
                        {
                            id: Date.now().toString() + "-a",
                            role: "assistant",
                            content: token,
                            timestamp: Date.now(),
                        },
                    ];
                });
            }
        );
    };

    return {
        messages,
        input,
        setInput,
        loading,
        error,
        partial,
        handleSend,
    };
}
