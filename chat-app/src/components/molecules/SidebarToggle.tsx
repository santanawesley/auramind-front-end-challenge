import IconButton from "@/components/atoms/IconButton";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

interface SidebarToggleProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <IconButton
      icon={isExpanded ? <GrFormPreviousLink /> : <GrFormNextLink />}
      aria-label="Alternar barra lateral"
      onClick={onToggle}
      bg="#F8F8FF"
    />
  );
};

export default SidebarToggle;
