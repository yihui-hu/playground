import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SecretMessageButton = () => {
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(100);

  return (
    <PrototypeScreen
      codeBlockComponent={
        <CodeBlockComponent code={SecretMessageButtonCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <div
            onClick={() => setShowSubtitle((ss) => !ss)}
            style={{
              width: "200px",
              height: "40px",
              backgroundColor: "gray",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              cursor: "pointer",
              color: "white",
            }}
          >
            <AnimatePresence initial={false}>
              {showSubtitle ? (
                <motion.p
                  className="prevent-select"
                  style={{ position: "absolute" }}
                  initial={{ top: distance }}
                  animate={{ top: -4 }}
                  exit={{ top: distance }}
                >
                  Hidden Text
                </motion.p>
              ) : null}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {!showSubtitle ? (
                <motion.p
                  className="prevent-select"
                  style={{ position: "absolute" }}
                  initial={{ top: -distance }}
                  animate={{ top: -4 }}
                  exit={{ top: -distance }}
                >
                  Main Text
                </motion.p>
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
            <p className="prevent-select">Distance: {distance}</p>
            <input
              type="range"
              min="40"
              max="100"
              value={distance}
              onChange={(e) => setDistance(parseInt(e.target.value))}
            />
          </div>
        </div>
      }
    />
  );
};

const SecretMessageButtonCode = `
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
          backgroundColor: "gray",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          cursor: "pointer",
          color: "white",
        }}
      >
        <AnimatePresence initial={false}>
          {showSubtitle ? (
            <motion.p
              className="prevent-select"
              style={{ position: "absolute" }}
              initial={{ top: distance }}
              animate={{ top: -4 }}
              exit={{ top: distance }}
            >
              Hidden Text
            </motion.p>
          ) : null}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {!showSubtitle ? (
            <motion.p
              className="prevent-select"
              style={{ position: "absolute" }}
              initial={{ top: -distance }}
              animate={{ top: -4 }}
              exit={{ top: -distance }}
            >
              Main Text
            </motion.p>
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
`;

export default SecretMessageButton;
