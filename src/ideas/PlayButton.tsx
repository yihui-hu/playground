import { motion } from "framer-motion";
import { useState } from "react";
import { TriangleRightIcon, PauseIcon } from "@radix-ui/react-icons";

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <motion.div
        style={{
          width: 64,
          height: 64,
          backgroundColor: "#666666",
          display: "grid",
          placeItems: "center",
          borderRadius: 100,
          cursor: "pointer",
        }}
        onClick={() => setIsPlaying((ip) => !ip)}
      >
        {isPlaying ? (
          <motion.div
            layoutId="icon"
            style={
              isPlaying
                ? {
                    width: 36,
                    height: 36,
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    opacity: 1,
                  }
                : {
                    width: 36,
                    height: 36,
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    opacity: 0,
                  }
            }
          >
            <TriangleRightIcon style={{ width: 36, height: 36 }} />
          </motion.div>
        ) : (
          <motion.div
            layoutId="icon"
            style={
              isPlaying
                ? {
                    width: 40,
                    height: 40,
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    opacity: 0,
                  }
                : {
                    width: 40,
                    height: 40,
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    opacity: 1,
                  }
            }
          >
            <PauseIcon style={{ width: 28, height: 28 }} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PlayButton;
