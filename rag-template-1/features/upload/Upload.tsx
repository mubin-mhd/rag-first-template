import { useRef, useState } from "react";
import { UploadFile } from "./types";
import { useTranslation } from "../widgets/useTranslation";

export function Upload({ onUpload }: { onUpload?: (files: File[]) => void }) {
  const { t } = useTranslation("upload");
  const [files, setFiles] = useState<UploadFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles: UploadFile[] = Array.from(fileList).map((file) => ({
      id: file.name + "-" + file.size + "-" + Date.now(),
      file,
      status: "pending",
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    if (onUpload) onUpload(Array.from(fileList));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{ border: "1px dashed #ccc", padding: 16, marginBottom: 16 }}
        tabIndex={0}
        aria-label={t("dropAreaLabel")}
      >
        <p>{t("dragDrop")}</p>
        <button type="button" onClick={() => inputRef.current?.click()}>
          {t("browse")}
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
      <ul>
        {files.map((f) => (
          <li key={f.id}>
            {f.file.name} ({Math.round(f.file.size / 1024)} KB)
            {f.status === "uploading" && (
              <span>
                {" "}
                - {t("uploading")} {f.progress}%
              </span>
            )}
            {f.status === "success" && <span> - {t("success")}</span>}
            {f.status === "error" && (
              <span>
                {" "}
                - {t("error")}: {f.error}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
