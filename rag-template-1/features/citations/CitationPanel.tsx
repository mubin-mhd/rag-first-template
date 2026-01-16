import { useState } from "react";
import { Citation } from "../chat/types";
import { getFeaturesConfig } from "../../config/features.config";

interface CitationPanelProps {
  citations: Citation[];
}

export function CitationPanel({ citations }: CitationPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const { citations: showCitations } = getFeaturesConfig();

  if (!showCitations || !citations?.length) return null;

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 4,
        padding: 8,
        margin: "8px 0",
      }}
    >
      <button onClick={() => setExpanded((e) => !e)}>
        {expanded ? "Hide Citations" : "Show Citations"} ({citations.length})
      </button>
      {expanded && (
        <ul style={{ marginTop: 8 }}>
          {citations.map((cit) => (
            <li
              key={cit.id}
              style={{
                background: highlighted === cit.id ? "#f0f8ff" : undefined,
                cursor: "pointer",
                padding: 4,
                borderRadius: 2,
              }}
              onClick={() => setHighlighted(cit.id)}
            >
              <b>{cit.source}</b>
              {cit.page && <span> (p. {cit.page})</span>}
              <div style={{ fontSize: 13, color: "#555" }}>{cit.snippet}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
