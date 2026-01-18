import { useCallback, useState } from "react";
import type { UploadDocumentsRequest, UploadDocumentsResponse } from "@/features/upload/api.contract";

// UI-facing file shape used by DocumentManager / FileCard
export interface ManagedFile {
    id: string;
    name: string;
    status: "pending" | "uploading" | "processing" | "error";
    date: string;
    size: string;
    type: "pdf" | "md" | "doc" | "txt" | "other";
    error?: string;
}

interface UseFilesState {
    files: ManagedFile[];
    isUploading: boolean;
    error?: string;
}

function formatFileSize(file: File): string {
    const kb = file.size / 1024;
    if (kb < 1024) return `${Math.round(kb)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
}

function inferFileType(file: File): ManagedFile["type"] {
    const ext = file.name.split(".").pop()?.toLowerCase();
    switch (ext) {
        case "pdf":
            return "pdf";
        case "md":
        case "markdown":
            return "md";
        case "doc":
        case "docx":
            return "doc";
        case "txt":
            return "txt";
        default:
            return "other";
    }
}

// Placeholder async upload implementation.
// Wire this to your real API/client later.
async function uploadDocuments(_payload: UploadDocumentsRequest): Promise<UploadDocumentsResponse> {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
        documentIds: _payload.files.map((file, index) => `${file.name}-${index}`),
    };
}

export function useFiles(): UseFilesState & {
    handleUpload: (files: File[]) => Promise<void>;
    resetFiles: () => void;
} {
    const [files, setFiles] = useState<ManagedFile[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const handleUpload = useCallback(async (selectedFiles: File[]) => {
        if (!selectedFiles || selectedFiles.length === 0) return;

        setError(undefined);

        const nowLabel = new Date().toLocaleDateString();

        const newManagedFiles: ManagedFile[] = selectedFiles.map((file) => ({
            id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            name: file.name,
            status: "uploading",
            date: nowLabel,
            size: formatFileSize(file),
            type: inferFileType(file),
        }));

        setFiles((prev) => [...newManagedFiles, ...prev]);
        setIsUploading(true);

        try {
            const payload: UploadDocumentsRequest = {
                files: selectedFiles,
            };

            await uploadDocuments(payload);

            // Mark newly uploaded files as processing (ready for indexing, etc.)
            setFiles((prev) =>
                prev.map((f) =>
                    newManagedFiles.some((nf) => nf.id === f.id)
                        ? { ...f, status: "processing" }
                        : f,
                ),
            );
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to upload files";
            setError(message);

            setFiles((prev) =>
                prev.map((f) =>
                    newManagedFiles.some((nf) => nf.id === f.id)
                        ? { ...f, status: "error", error: message }
                        : f,
                ),
            );
        } finally {
            setIsUploading(false);
        }
    }, []);

    const resetFiles = useCallback(() => {
        setFiles([]);
        setError(undefined);
    }, []);

    return {
        files,
        isUploading,
        error,
        handleUpload,
        resetFiles,
    };
}
