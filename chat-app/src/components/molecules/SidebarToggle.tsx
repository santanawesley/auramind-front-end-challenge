import IconButton from "@/components/atoms/IconButton";
import ResizeIcon from "@/assets/icons/list.svg";

interface SidebarToggleProps {
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ onToggle }) => {
  return (
    <IconButton
      icon={<ResizeIcon />}
      aria-label="Toggle Sidebar"
      onClick={onToggle}
      bg="inherit"
    />
  );
};

export default SidebarToggle;
