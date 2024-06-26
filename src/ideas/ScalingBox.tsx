import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";
import { useState } from "react";

const ScalingBox = () => {
  const [scaledUp, setScaledUp] = useState<boolean>(false);

  return (
    <PrototypeScreen
      codeBlockString={ScalingBoxCode}
      codeBlockComponent={
        <CodeBlockComponent code={ScalingBoxCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <button onClick={() => setScaledUp((s) => !s)}>
            {scaledUp ? "Shrink box" : "Grow box"}
          </button>
          <motion.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#E9E9E9",
              borderRadius: 12,
            }}
            animate={{ scale: scaledUp ? 1.5 : 1, y: scaledUp ? -40 : 0 }}
          />
        </div>
      }
    />
  );
};

const ScalingBoxCode = `
import { motion } from "framer-motion";
import { useState } from "react";

const ScalingBox = () => {
  const [scaledUp, setScaledUp] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <button onClick={() => setScaledUp((s) => !s)}>
        {scaledUp ? "Shrink box" : "Grow box"}
      </button>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#E9E9E9",
          borderRadius: 12,
        }}
        animate={{ 
          scale: scaledUp ? 1.5 : 1, y: scaledUp ? -40 : 0 
        }}
      />
    </div>
  );
};

export default ScalingBox;
`;

export default ScalingBox;
