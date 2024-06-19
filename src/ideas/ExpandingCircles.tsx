import { motion } from "framer-motion";
import { useState } from "react";
import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";

const ExpandingCircles = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <PrototypeScreen
      codeBlockString={ExpandingCirclesCode}
      codeBlockComponent={
        <CodeBlockComponent code={ExpandingCirclesCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <motion.div
              layout
              style={{
                width: selected === 0 ? 80 : 40,
                height: 40,
                backgroundColor: "#F9F9F9",
                borderRadius: 40,
                cursor: "pointer",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => {
                setSelected(selected === 0 ? -1 : 0);
              }}
            />
            <motion.div
              layout
              style={{
                width: selected === 1 ? 80 : 40,
                height: 40,
                backgroundColor: "#E9E9E9",
                borderRadius: 40,
                cursor: "pointer",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => setSelected(selected === 1 ? -1 : 1)}
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => setSelected(selected === 2 ? -1 : 2)}
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => setSelected(selected === 3 ? -1 : 3)}
            />
          </div>
        </div>
      }
    />
  );
};

const ExpandingCirclesCode = `
import { motion } from "framer-motion";
import { useState } from "react";

const ExpandingCircles = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="wrapper">
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          gap: 4 
        }}
      >
        <motion.div
          layout
          style={{
            width: selected === 0 ? 80 : 40,
            height: 40,
            backgroundColor: "#F9F9F9",
            borderRadius: 40,
            cursor: "pointer",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onClick={() => {
            setSelected(selected === 0 ? -1 : 0);
          }}
        />
        <motion.div
          layout
          style={{
            width: selected === 1 ? 80 : 40,
            height: 40,
            backgroundColor: "#E9E9E9",
            borderRadius: 40,
            cursor: "pointer",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onClick={() => setSelected(selected === 1 ? -1 : 1)}
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
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onClick={() => setSelected(selected === 2 ? -1 : 2)}
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
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onClick={() => setSelected(selected === 3 ? -1 : 3)}
        />
      </div>
    </div>
  );
};

export default ExpandingCircles;
`;

export default ExpandingCircles;
