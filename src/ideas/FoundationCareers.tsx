import { motion } from "framer-motion";
import { useState } from "react";
import "@/styles/override.css";
import PrototypeScreen from "@/components/PrototypeScreen";
import CodeBlockComponent from "@/components/CodeBlockComponent";

const FoundationCareersText = () => {
  const [text, setText] = useState<string>("design");

  return (
    <PrototypeScreen
      codeBlockComponent={
        <CodeBlockComponent code={FoundationCareersTextCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <div
            style={{ display: "flex", flexDirection: "column", width: "240px" }}
          >
            <motion.h2
              className="foundationCareersText"
              style={{ marginBottom: -16 }}
              layout
            >
              Build the future of
            </motion.h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
              }}
            >
              <motion.h2
                layout
                className="prevent-select foundationCareersText"
                style={
                  text === "design"
                    ? {
                        background: "#C9C9C9",
                        color: "white",
                        paddingTop: 2,
                        paddingBottom: 4,
                        paddingInline: 8,
                        cursor: "pointer",
                        borderRadius: 6,
                      }
                    : text === "software"
                    ? {
                        background: "#D9D9D9",
                        color: "white",
                        paddingTop: 2,
                        paddingBottom: 4,
                        paddingInline: 8,
                        cursor: "pointer",
                        borderRadius: 6,
                      }
                    : {
                        background: "#E9E9E9",
                        color: "white",
                        paddingTop: 2,
                        paddingBottom: 4,
                        paddingInline: 8,
                        cursor: "pointer",
                        borderRadius: 6,
                      }
                }
                onClick={() => {
                  if (text === "design") {
                    setText("software");
                  } else if (text === "software") {
                    setText("play");
                  } else {
                    setText("design");
                  }
                }}
              >
                {text}
              </motion.h2>
              <motion.h2 layout className="foundationCareersText">
                with us.
              </motion.h2>
            </div>
          </div>
        </div>
      }
    />
  );
};

const FoundationCareersTextCode = `
import { motion } from "framer-motion";
import { useState } from "react";
import "@/styles/override.css";

const FoundationCareersText = () => {
  const [text, setText] = useState<string>("design");

  return (
    <div className="wrapper">
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        width: "240px" }}
      >
        <motion.h2
          className="foundationCareersText"
          style={{ marginBottom: -16 }}
          layout
        >
          Build the future of
        </motion.h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
          }}
        >
          <motion.h2
            layout
            className="prevent-select foundationCareersText"
            style={
              text === "design"
                ? {
                    background: "#C9C9C9",
                    color: "white",
                    paddingTop: 2,
                    paddingBottom: 4,
                    paddingInline: 8,
                    cursor: "pointer",
                    borderRadius: 6,
                  }
                : text === "software"
                ? {
                    background: "#D9D9D9",
                    color: "white",
                    paddingTop: 2,
                    paddingBottom: 4,
                    paddingInline: 8,
                    cursor: "pointer",
                    borderRadius: 6,
                  }
                : {
                    background: "#E9E9E9",
                    color: "white",
                    paddingTop: 2,
                    paddingBottom: 4,
                    paddingInline: 8,
                    cursor: "pointer",
                    borderRadius: 6,
                  }
            }
            onClick={() => {
              if (text === "design") {
                setText("software");
              } else if (text === "software") {
                setText("play");
              } else {
                setText("design");
              }
            }}
          >
            {text}
          </motion.h2>
          <motion.h2 layout className="foundationCareersText">
            with us.
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default FoundationCareersText;
`;

export default FoundationCareersText;
