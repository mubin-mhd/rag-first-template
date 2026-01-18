import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";

export const UploadZone = ({ onUpload }) => {
  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 hover:bg-purple-50/30 transition-all cursor-pointer"
      onClick={onUpload}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
          <Icon name="upload" size={28} className="text-purple-600" />
        </div>
        <div>
          <Text variant="body" className="font-semibold">
            Click to upload or drag and drop
          </Text>
          <Text variant="small" className="mt-1">
            PDF, TXT, MD or DOCX (max. 10MB)
          </Text>
        </div>
      </div>
    </div>
  );
};
