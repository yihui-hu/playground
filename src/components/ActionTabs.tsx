import { motion } from "framer-motion";

interface ActionTabsProps {
  action: string;
  onClickAction: () => void;
}

const ActionTabs = (props: ActionTabsProps) => {
  const { action, onClickAction } = props;

  return (
    <motion.p
      className="action-tabs prevent-select"
      whileHover={{ backgroundColor: "#A9A9A9" }}
      onClick={onClickAction}
    >
      {action}
    </motion.p>
  );
};

export default ActionTabs;
