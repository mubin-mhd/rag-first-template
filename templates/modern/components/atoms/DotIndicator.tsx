import type { DotIndicatorProps } from "../../types";

export const DotIndicator = ({ color = "purple" }: DotIndicatorProps) => {
  const colors = {
    purple: "bg-purple-500",
    green: "bg-green-500",
    gray: "bg-gray-400",
  };

  return <div className={`w-2 h-2 rounded-full ${colors[color]}`} />;
};
