import { Icon } from "../atoms/Icon";
import { Badge } from "../atoms/Badge";

export const NavItem = ({
  icon,
  label,
  active = false,
  onClick,
  badge = undefined,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
        active
          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon name={icon} size={20} />
      <span className="flex-1 text-left font-medium">{label}</span>
      {badge && (
        <Badge variant="primary" size="sm">
          {badge}
        </Badge>
      )}
    </button>
  );
};
