import { Avatar } from "../atoms/Avatar";
import { Text } from "../atoms/Text";

export const UserProfile = ({ name, avatar, role }) => {
  return (
    <div className="flex items-center gap-3 p-2">
      <Avatar src={avatar} alt={name} size="md" status="online" />
      <div className="flex-1 min-w-0">
        <Text variant="body" className="font-semibold truncate">
          {name}
        </Text>
        {role && (
          <Text variant="small" className="truncate">
            {role}
          </Text>
        )}
      </div>
    </div>
  );
};
