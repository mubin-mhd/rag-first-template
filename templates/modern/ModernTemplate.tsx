"use client";

import { useRef } from "react";

export function ModernTemplate(props) {
  const { config, features, t } = props;
  const { chat } = features;
  const { messages, input, setInput, loading, error, partial, handleSend } =
    chat;

  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <h1>{t(config.app.nameKey)}</h1>
      <div ref={listRef}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <b>{msg.role === "user" ? t("user") : t("assistant")}:</b>{" "}
            {msg.content}
          </div>
        ))}
        {loading && (
          <div>
            <b>{t("assistant")}:</b> {partial}
            <span> {t("loading")}...</span>
          </div>
        )}
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("chat.input.placeholder")}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          {t("chat.button.send")}
        </button>
      </div>
      {error && (
        <div>
          {t("chat.input.error")}: {error}
        </div>
      )}
    </div>
  );
}
