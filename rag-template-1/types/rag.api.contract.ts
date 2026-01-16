// GENERIC RAG API CONTRACT
// This contract is backend-agnostic, streaming-ready, and strongly typed.
// No provider-specific fields. Documented for template buyers.

// POST /chat
export interface RagChatRequest {
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
  }>;
  context?: Record<string, unknown>;
  stream?: boolean;
}

export interface RagChatResponse {
  message: {
    role: 'assistant';
    content: string;
    citations?: Array<{
      id: string;
      source: string;
      snippet: string;
    }>;
  };
  // If streaming, partial content may be sent in sequence
  isFinal?: boolean;
}

// POST /documents/upload
export interface RagDocumentUploadRequest {
  files: File[]; // File objects from browser
  metadata?: Record<string, unknown>;
}

export interface RagDocumentUploadResponse {
  documentIds: string[];
}

// GET /documents
export interface RagDocument {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
  metadata?: Record<string, unknown>;
}

export interface RagDocumentsListResponse {
  documents: RagDocument[];
}
