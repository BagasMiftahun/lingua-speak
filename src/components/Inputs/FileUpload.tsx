import React from "react";
import { IconPaperclip } from "@tabler/icons-react";

// Define the prop types
interface FileUploadProps {
  handleFileUpload: React.ChangeEventHandler<HTMLInputElement>;
}

const FileUpload: React.FC<FileUploadProps> = ({ handleFileUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <IconPaperclip size={21} />
    <input
      type="file"
      id="file-upload"
      onChange={handleFileUpload}
      className="hidden"
    />
  </label>
);

export default FileUpload;
