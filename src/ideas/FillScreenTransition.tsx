import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";
import { useState } from "react";

const FillScreenTransition = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <PrototypeScreen
      codeBlockString={FillScreenTransitionCode}
      codeBlockComponent={
        <CodeBlockComponent code={FillScreenTransitionCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <motion.div
            layout
            onClick={() => setOpen((o) => !o)}
            className="prevent-select"
            style={
              open
                ? {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    inset: 0,
                    background: "#D9D9D9",
                    borderRadius: 0,
                    cursor: "pointer",
                    zIndex: 9,
                  }
                : {
                    width: 48,
                    height: 48,
                    background: "#D9D9D9",
                    borderRadius: 24,
                    inset: 0,
                    cursor: "pointer",
                  }
            }
          />
        </div>
      }
    />
  );
};

const FillScreenTransitionCode = `
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
`;

export default FillScreenTransition;
