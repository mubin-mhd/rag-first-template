import { useState, useRef } from 'react';
import { useStreamingChat } from './useStreamingChat';
import { useTranslation } from '../widgets/useTranslation';
import { Message } from './types';

export function Chat() {
  const { t } = useTranslation('chat');
  const { loading, error, sendMessage, partial } = useStreamingChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    await sendMessage(
      { messages: [{ role: 'user', content: userMsg.content }] },
      (token) => {
        setMessages(msgs => {
          const last = msgs[msgs.length - 1];
          if (last && last.role === 'assistant') {
            // Append to last assistant message
            return [
              ...msgs.slice(0, -1),
              { ...last, content: last.content + token },
            ];
          } else {
            // Add new assistant message
            return [
              ...msgs,
              {
                id: Date.now().toString() + '-a',
                role: 'assistant',
                content: token,
                timestamp: Date.now(),
              },
            ];
          }
        });
      }
    );
  };

  return (
    <div>
      <div ref={listRef}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <b>{msg.role === 'user' ? t('user') : t('assistant')}:</b> {msg.content}
          </div>
        ))}
        {loading && (
          <div>
            <b>{t('assistant')}:</b> {partial}
            <span> {t('loading')}...</span>
          </div>
        )}
      </div>
      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t('inputPlaceholder')}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          {t('send')}
        </button>
      </div>
      {error && <div>{t('error')}: {error}</div>}
    </div>
  );
}
