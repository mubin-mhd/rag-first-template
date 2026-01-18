import { useRef } from "react";
import { Text } from "../atoms/Text";
import { UploadZone } from "../molecules/UploadZone";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { FileCard } from "../molecules/FileCard";

export const DocumentManager = ({ files, onUpload, t, isUploading, error }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleTriggerUpload = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || !onUpload) return;

    const selectedFiles = Array.from(fileList);
    if (selectedFiles.length === 0) return;

    onUpload(selectedFiles);
    e.target.value = "";
  };

  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto">
      <div className="mb-8">
        <Text variant="h2" className="mb-6">
          {t("documentManager.title")}
        </Text>
        <UploadZone onUpload={handleTriggerUpload} />
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        {isUploading && (
          <div className="mt-4">
            <div className="h-1 w-full bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-purple-500 animate-shimmer" />
            </div>
            <Text variant="tiny" className="mt-1 text-gray-500">
              {t("documentManager.uploading", "Uploading documents...")}
            </Text>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {t("documentManager.uploadError", "Failed to upload documents.")}
          </div>
        )}
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{t("documentManager.breadcrumb.home")}</span>
          <span>›</span>
          <span className="font-semibold text-gray-900">
            {t("documentManager.breadcrumb.knowledgeBase")}
          </span>
        </div>
        <Button
          variant="primary"
          size="md"
          icon={<Icon name="plus" size={18} />}
          onClick={handleTriggerUpload}
        >
          {t("documentManager.addNew")}
        </Button>
      </div>

      {/* Files Table Header */}
      <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-t-lg border-b border-gray-200">
        <Text
          variant="small"
          className="flex-1 font-semibold uppercase tracking-wide"
        >
          {t("documentManager.table.fileName")}
        </Text>
        <Text
          variant="small"
          className="w-24 text-center font-semibold uppercase tracking-wide"
        >
          {t("documentManager.table.status")}
        </Text>
        <Text
          variant="small"
          className="w-24 text-center font-semibold uppercase tracking-wide"
        >
          {t("documentManager.table.added")}
        </Text>
        <Text
          variant="small"
          className="w-16 text-right font-semibold uppercase tracking-wide"
        >
          {t("documentManager.table.size")}
        </Text>
      </div>

      {/* Files List */}
      <div className="border border-t-0 border-gray-200 rounded-b-lg divide-y divide-gray-100">
        {files.map((file, idx) => (
          <FileCard key={idx} {...file} />
        ))}
      </div>
    </div>
  );
};
