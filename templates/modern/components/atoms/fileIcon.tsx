import React from "react";
import {
  FaFilePdf,
  FaFileAlt,
  FaFileWord,
  FaFile,
  FaMarkdown,
} from "react-icons/fa";

export function getFileIcon(
  type: string,
  className = "text-current",
  size = 18,
) {
  const t = (type || "").toLowerCase();

  switch (t) {
    case "pdf":
      return <FaFilePdf size={size} className={className} />;
    case "md":
    case "markdown":
      return <FaMarkdown size={size} className={className} />;
    case "doc":
    case "docx":
      return <FaFileWord size={size} className={className} />;
    case "txt":
      return <FaFileAlt size={size} className={className} />;
    default:
      return <FaFile size={size} className={className} />;
  }
}

export default getFileIcon;
