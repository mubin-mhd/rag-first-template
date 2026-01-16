import { useEffect, useRef } from "react";
import { Chat } from "../chat/Chat";
import { getAppConfig } from "../../config/app.config";
import { getWidgetConfig } from "./widget.config";
import { useTranslation } from "../widgets/useTranslation";

interface EmbedChatProps {
  hideBranding?: boolean;
}

export function EmbedChat({ hideBranding }: EmbedChatProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { appName, logo, footerText } = getAppConfig();
  const { mode } = getWidgetConfig();
  const { t } = useTranslation("chat");

  // Auto-resize for iframe embedding
  useEffect(() => {
    function postHeight() {
      if (window.parent && containerRef.current) {
        window.parent.postMessage(
          {
            type: "embed-chat-resize",
            height: containerRef.current.offsetHeight,
          },
          "*"
        );
      }
    }
    postHeight();
    window.addEventListener("resize", postHeight);
    return () => window.removeEventListener("resize", postHeight);
  }, []);

  if (mode !== "embed") return null;

  return (
    <div
      ref={containerRef}
      style={{
        minWidth: 320,
        maxWidth: 480,
        margin: "0 auto",
        border: "1px solid var(--color-border-light)",
        borderRadius: 8,
        background: "var(--color-bg-light)",
      }}
    >
      {!hideBranding && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 8,
            borderBottom: "1px solid var(--color-border-light)",
          }}
        >
          {logo && (
            <img
              src={logo}
              alt={appName}
              style={{ height: 24, marginRight: 8 }}
            />
          )}
          <span style={{ fontWeight: 600 }}>{appName}</span>
        </div>
      )}
      <div style={{ padding: 8 }}>
        <Chat />
      </div>
      {!hideBranding && (
        <div
          style={{
            fontSize: 12,
            color: "var(--color-border-dark)",
            textAlign: "center",
            borderTop: "1px solid var(--color-border-light)",
            padding: 6,
          }}
        >
          {footerText}
        </div>
      )}
    </div>
  );
}
