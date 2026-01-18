import type { AvatarProps } from "../../types";

export const Avatar = ({
  src,
  alt,
  size = "md",
  status,
  ...rest
}: AvatarProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`relative ${sizes[size]}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full object-cover"
      />
      {status && (
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
            status === "online"
              ? "bg-green-500"
              : status === "busy"
                ? "bg-red-500"
                : "bg-gray-400"
          }`}
        />
      )}
    </div>
  );
};
