import { useState, useRef, useCallback } from 'react';
import { getApiConfig } from '../../config/api.config';
import { RagChatRequest, RagChatResponse } from '../../types/rag.api.contract';

export interface UseStreamingChatOptions {
  endpoint?: string;
}

export interface StreamingChatState {
  loading: boolean;
  error: string | null;
  partial: string;
  isFinal: boolean;
}

export function useStreamingChat(options?: UseStreamingChatOptions) {
  const [state, setState] = useState<StreamingChatState>({
    loading: false,
    error: null,
    partial: '',
    isFinal: false,
  });
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (payload: RagChatRequest, onToken: (token: string) => void) => {
      setState({ loading: true, error: null, partial: '', isFinal: false });
      abortRef.current = new AbortController();
      const endpoint = options?.endpoint || getApiConfig().baseUrl + '/chat';
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({ ...payload, stream: true }),
          headers: { 'Content-Type': 'application/json' },
          signal: abortRef.current.signal,
        });
        if (!res.body) throw new Error('No response body');
        const reader = res.body.getReader();
        let partial = '';
        let isFinal = false;
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = new TextDecoder().decode(value);
          // Assume each chunk is a JSON line (SSE or chunked JSON)
          chunk.split('\n').forEach(line => {
            if (!line.trim()) return;
            try {
              const data: RagChatResponse = JSON.parse(line);
              if (data.message?.content) {
                partial += data.message.content;
                onToken(data.message.content);
              }
              if (data.isFinal) isFinal = true;
            } catch {
              // Ignore malformed lines
            }
          });
        }
        setState({ loading: false, error: null, partial, isFinal });
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        setState(s => ({ ...s, loading: false, error: err.message }));
      }
    },
    [options]
  );

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    setState(s => ({ ...s, loading: false }));
  }, []);

  return { ...state, sendMessage, cancel };
}
