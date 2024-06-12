import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SecretMessageButton = () => {
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(100);

  return (
    <div className="wrapper">
      <div
        onClick={() => setShowSubtitle((ss) => !ss)}
        style={{
          width: "200px",
          height: "40px",
          backgroundColor: "#C9C9C9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          borderRadius: "8px",
          border: "2px solid rgba(0, 0, 0, 0.2)",
          color: "white",
        }}
      >
        <AnimatePresence initial={false}>
          {showSubtitle ? (
            <motion.h3
              className="prevent-select"
              style={{ position: "absolute" }}
              initial={{ top: distance }}
              animate={{ top: -10 }}
              exit={{ top: distance }}
            >
              Hidden Text
            </motion.h3>
          ) : null}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {!showSubtitle ? (
            <motion.h3
              className="prevent-select"
              style={{ position: "absolute" }}
              initial={{ top: -distance }}
              animate={{ top: -10 }}
              exit={{ top: -distance }}
            >
              Main Text
            </motion.h3>
          ) : null}
        </AnimatePresence>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: 12,
        }}
      >
        <h3>Distance: {distance}</h3>
        <input
          type="range"
          min="40"
          max="100"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SecretMessageButton;
