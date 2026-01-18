import { DotIndicator } from "../atoms/DotIndicator";
import { Text } from "../atoms/Text";

export const StatusIndicator = ({ status, label }) => {
  return (
    <div className="flex items-center gap-2">
      <DotIndicator color={status === "active" ? "green" : "gray"} />
      <Text variant="small">{label}</Text>
    </div>
  );
};
