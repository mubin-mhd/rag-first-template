import { Text } from "../atoms/Text";
import { UploadZone } from "../molecules/UploadZone";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { FileCard } from "../molecules/FileCard";

export const DocumentManager = ({ files, onAddNew, onUpload, t }) => {
  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <Text variant="h2" className="mb-6">
          {t('documentManager.title')}
        </Text>
        <UploadZone onUpload={onUpload} />
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{t('documentManager.breadcrumb.home')}</span>
          <span>›</span>
          <span className="font-semibold text-gray-900">{t('documentManager.breadcrumb.knowledgeBase')}</span>
        </div>
        <Button
          variant="primary"
          size="md"
          icon={<Icon name="plus" size={18} />}
          onClick={onAddNew}
        >
          {t('documentManager.addNew')}
        </Button>
      </div>

      {/* Files Table Header */}
      <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-t-lg border-b border-gray-200">
        <Text
          variant="small"
          className="flex-1 font-semibold uppercase tracking-wide"
        >
          {t('documentManager.table.fileName')}
        </Text>
        <Text
          variant="small"
          className="w-24 text-center font-semibold uppercase tracking-wide"
        >
          {t('documentManager.table.status')}
        </Text>
        <Text
          variant="small"
          className="w-24 text-center font-semibold uppercase tracking-wide"
        >
          {t('documentManager.table.added')}
        </Text>
        <Text
          variant="small"
          className="w-16 text-right font-semibold uppercase tracking-wide"
        >
          {t('documentManager.table.size')}
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
