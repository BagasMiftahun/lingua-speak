import React from "react";
import { IconLink } from "@tabler/icons-react";

// Define the prop types
interface LinkPasteProps {
  handleLinkPaste: React.ChangeEventHandler<HTMLInputElement>;
}

const LinkPaste: React.FC<LinkPasteProps> = ({ handleLinkPaste }) => (
  <label htmlFor="link-input" className="cursor-pointer">
    <IconLink size={21} />
    <input
      type="text"
      id="link-input"
      className="hidden"
      onChange={handleLinkPaste}
    />
  </label>
);

export default LinkPaste;
