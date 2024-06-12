import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ExpandingCircles = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="wrapper">
      <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <motion.div
          layout
          style={{
            width: selected === 0 ? 80 : 40,
            height: 40,
            backgroundColor: "#F9F9F9",
            borderRadius: 40,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() => setSelected(0)}
        >
          {/* <AnimatePresence initial={false}>
            {selected === 0 ? (
              <motion.h4
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Test
              </motion.h4>
            ) : null}
          </AnimatePresence> */}
        </motion.div>
        <motion.div
          layout
          style={{
            width: selected === 1 ? 80 : 40,
            height: 40,
            backgroundColor: "#E9E9E9",
            borderRadius: 40,
            cursor: "pointer",
          }}
          onClick={() => setSelected(1)}
        />
        <motion.div
          layout
          style={{
            width: selected === 2 ? 80 : 40,
            height: 40,
            backgroundColor: "#D9D9D9",
            borderRadius: 40,
            cursor: "pointer",
          }}
          onClick={() => setSelected(2)}
        />
        <motion.div
          layout
          style={{
            width: selected === 3 ? 80 : 40,
            height: 40,
            backgroundColor: "#C9C9C9",
            borderRadius: 40,
            cursor: "pointer",
          }}
          onClick={() => setSelected(3)}
        />
      </div>
    </div>
  );
};

export default ExpandingCircles;
