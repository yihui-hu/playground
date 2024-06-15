import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";
import { useState } from "react";

const TwoBoxes = () => {
  const [showSecond, setShowSecond] = useState<boolean>(false);

  return (
    <PrototypeScreen
      codeBlockString={TwoBoxesCode}
      codeBlockComponent={
        <CodeBlockComponent code={TwoBoxesCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <motion.button
            layout
            className="button"
            onClick={() => setShowSecond((s) => !s)}
          >
            Animate
          </motion.button>
          {showSecond ? (
            <motion.div
              layoutId="box"
              style={{
                width: 64,
                height: 64,
                background: "#E9E9E9",
                borderRadius: 12,
              }}
            />
          ) : (
            <motion.div
              layoutId="box"
              style={{
                width: 128,
                height: 128,
                background: "#D9D9D9",
                borderRadius: 12,
              }}
            />
          )}
        </div>
      }
    />
  );
};

const TwoBoxesCode = `
import { motion } from "framer-motion";
import { useState } from "react";

const TwoBoxes = () => {
  const [showSecond, setShowSecond] = useState<boolean>(false);
  
  return (
    <div className="wrapper">
      <motion.button
        layout
        className="button"
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </motion.button>
      {showSecond ? (
        <motion.div
          layoutId="box"
          style={{ 
            width: 64, 
            height: 64, 
            background: "#E9E9E9", 
            borderRadius: 12 
          }}
        />
      ) : (
        <motion.div
          layoutId="box"
          style={{ 
            width: 128, 
            height: 128, 
            background: "#D9D9D9", 
            borderRadius: 12 
          }}
        />
      )}
    </div>
  );
};

export default TwoBoxes;
`;

export default TwoBoxes;
