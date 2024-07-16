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
      _hover={{ transform: "scale(1.1)" }}
      transition="transform 0.2s ease"
    />
  );
};

export default SidebarToggle;
