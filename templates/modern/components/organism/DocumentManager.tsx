import { Text } from "../atoms/Text";
import { UploadZone } from "../molecules/UploadZone";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { FileCard } from "../molecules/FileCard";

export const DocumentManager = ({ files, onAddNew, onUpload }) => {
  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <Text variant="h2" className="mb-6">
          Upload Knowledge
        </Text>
        <UploadZone onUpload={onUpload} />
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Home</span>
          <span>›</span>
          <span className="font-semibold text-gray-900">Knowledge Base</span>
        </div>
        <Button
          variant="primary"
          size="md"
          icon={<Icon name="plus" size={18} />}
          onClick={onAddNew}
        >
          Add New
        </Button>
      </div>

      {/* Files Table Header */}
      <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-t-lg border-b border-gray-200">
        <Text
          variant="small"
          className="flex-1 font-semibold uppercase tracking-wide"
        >
          File Name
        </Text>
        <Text
          variant="small"
          className="w-24 text-center font-semibold uppercase tracking-wide"
        >
          Status
        </Text>
        <Text
          variant="small"
          className="w-24 text-center font-semibold uppercase tracking-wide"
        >
          Added
        </Text>
        <Text
          variant="small"
          className="w-16 text-right font-semibold uppercase tracking-wide"
        >
          Size
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
