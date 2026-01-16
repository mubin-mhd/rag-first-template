export interface UploadDocumentsRequest {
  files: File[];
  metadata?: Record<string, unknown>;
}

export interface UploadDocumentsResponse {
  documentIds: string[];
}
