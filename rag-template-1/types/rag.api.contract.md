# RAG UI Starter Kit – API Contract

This document describes the generic, backend-agnostic API contract for integrating with the RAG UI Starter Kit. All endpoints are strongly typed, streaming-ready, and free of provider-specific fields.

---

## Endpoints

### 1. POST `/chat`

Initiate a chat session with streaming support.

#### Request

```json
{
  "messages": [{ "role": "user", "content": "What is RAG?" }],
  "context": { "documentIds": ["doc1"] },
  "stream": true
}
```

#### Response (Streaming)

Each chunk is a JSON line:

```json
{"message": {"role": "assistant", "content": "Retrieval-Augmented Generation (RAG) "}}
{"message": {"role": "assistant", "content": "is a technique..."}}
{"message": {"role": "assistant", "content": "..."}, "isFinal": true}
```

#### Response (Non-Streaming)

```json
{
  "message": {
    "role": "assistant",
    "content": "Retrieval-Augmented Generation (RAG) is a technique...",
    "citations": [
      { "id": "c1", "source": "Paper.pdf", "page": 2, "snippet": "..." }
    ]
  },
  "isFinal": true
}
```

#### Error Response

```json
{
  "error": "Invalid request: missing messages"
}
```

---

### 2. POST `/documents/upload`

Upload one or more documents.

#### Request

Multipart/form-data or JSON:

```json
{
  "files": [
    /* File objects */
  ],
  "metadata": { "source": "user" }
}
```

#### Response

```json
{
  "documentIds": ["doc1", "doc2"]
}
```

#### Error Response

```json
{
  "error": "File type not supported"
}
```

---

### 3. GET `/documents`

List all uploaded documents.

#### Response

```json
{
  "documents": [
    {
      "id": "doc1",
      "name": "Paper.pdf",
      "size": 123456,
      "uploadedAt": "2026-01-16T12:00:00Z"
    }
  ]
}
```

#### Error Response

```json
{
  "error": "Unauthorized"
}
```

---

## Streaming Explanation

- If `stream: true` is set in `/chat` requests, the backend should send a sequence of JSON lines (one per partial token or message chunk).
- Each line must be a valid JSON object, typically with a `message` field and optional `isFinal` boolean.
- The client will concatenate all `message.content` fields to build the full response.
- When `isFinal: true` is sent, the stream is considered complete.

## Error Cases

- All endpoints may return an `error` field in the response body for any error condition.
- Error responses should use HTTP 4xx/5xx status codes as appropriate.
- Example error fields: `error`, `details`, `code` (optional).

---

For full TypeScript types, see `rag.api.contract.ts` in this directory.
