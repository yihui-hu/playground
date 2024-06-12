import { motion } from "framer-motion";
import { useState } from "react";

const FillScreenTransition = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <motion.div
        layout
        onClick={() => setOpen((o) => !o)}
        style={
          open
            ? {
                position: "fixed",
                width: "100%",
                height: "100%",
                background: "#D9D9D9",
                borderRadius: 0,
                cursor: "pointer",
              }
            : {
                width: 48,
                height: 48,
                background: "#D9D9D9",
                borderRadius: 24,
                cursor: "pointer",
              }
        }
      />
    </div>
  );
};

export default FillScreenTransition;
