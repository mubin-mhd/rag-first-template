import { Icon } from "../atoms/Icon";
import { Badge } from "../atoms/Badge";
import { Text } from "../atoms/Text";

export const FileCard = ({ name, status, date, size, type = "pdf" }) => {
  const typeColors = {
    pdf: "bg-purple-100 text-purple-600",
    md: "bg-amber-100 text-amber-600",
    doc: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all group">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg ${typeColors[type]}`}
      >
        <Icon name="file" size={20} />
      </div>

      <div className="flex-1 min-w-0">
        <Text variant="body" className="font-medium truncate">
          {name}
        </Text>
      </div>

      <Badge variant="warning" size="sm">
        {status}
      </Badge>
      <Text variant="small" className="w-24 text-center">
        {date}
      </Text>
      <Text variant="small" className="w-16 text-right">
        {size}
      </Text>
    </div>
  );
};
