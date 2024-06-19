import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";
import { useState } from "react";

// Adapted from: https://www.ibelick.com/lab/timeline

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const years = Array.from(
    { length: 2024 - 2000 + 1 },
    (_, i) => 2024 - i
  ).reverse();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const calculateScale = (index: number) => {
    if (hoveredIndex === null) return 0.4;
    const distance = Math.abs(index - hoveredIndex);

    return Math.max(1 - distance * 0.2, 0.4);
  };

  const calculateColor = (index: number) => {
    if (hoveredIndex === null) return "#D9D9D9";
    const distance = Math.abs(index - hoveredIndex);

    if (distance === 0) {
      return "#A9A9A9"
    } else if (distance === 1) {
      return "#B9B9B9"
    } else if (distance === 2) {
      return "#C9C9C9"
    } else {
      return "#D9D9D9"
    }
  };

  return (
    <PrototypeScreen
      codeBlockString={TimelineCode}
      codeBlockComponent={
        <CodeBlockComponent code={TimelineCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <motion.div
            layout
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {years.map((year, i) => {
              return (
                <motion.div
                  layout
                  key={year}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "center",
                    placeItems: "center",
                    paddingInline: 3,
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => handleMouseEnter(i)}
                  onTouchEnd={handleMouseLeave}
                >
                  <motion.div
                    key={i}
                    style={{
                      height: 40,
                      width: hoveredIndex === i ? 64 : 4,
                      backgroundColor: calculateColor(i),
                      display: "grid",
                      placeItems: "center",
                      color: "white",
                      borderRadius: 4,
                    }}
                    animate={{
                      scale: calculateScale(i),
                    }}
                    initial={{ scale: 0.4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {hoveredIndex === i ? (
                      <motion.span
                        initial={{
                          opacity: 0,
                          filter: `blur(4px)`,
                          scale: 0.4,
                        }}
                        animate={{
                          opacity: 1,
                          filter: `blur(0px)`,
                          scale: 1,
                        }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                        style={{ fontSize: 16 }}
                      >
                        {year}
                      </motion.span>
                    ) : null}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      }
    />
  );
};

const TimelineCode = `
import { motion } from "framer-motion";
import { useState } from "react";

// Adapted from: https://www.ibelick.com/lab/timeline

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const years = Array.from(
    { length: 2024 - 2000 + 1 },
    (_, i) => 2024 - i
  ).reverse();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const calculateScale = (index: number) => {
    if (hoveredIndex === null) return 0.4;
    const distance = Math.abs(index - hoveredIndex);
    return Math.max(1 - distance * 0.2, 0.4);
  };

  return (
    <div className="wrapper">
      <motion.div
        layout
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {years.map((year, i) => {
          return (
            <motion.div
              layout
              key={year}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "center",
                placeItems: "center",
                paddingInline: 3,
                outline: "none",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(i)}
              onTouchEnd={handleMouseLeave}
            >
              <motion.div
                key={i}
                style={{
                  height: 40,
                  width: hoveredIndex === i ? 64 : 4,
                  backgroundColor: "#B9B9B9",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                  borderRadius: 4,
                }}
                animate={{
                  scale: calculateScale(i),
                }}
                initial={{ scale: 0.4 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                {hoveredIndex === i ? (
                  <motion.span
                    initial={{
                      opacity: 0,
                      filter: "blur(4px)",
                      scale: 0.4,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      scale: 1,
                    }}
                    transition={{ duration: 0.15, delay: 0.1 }}
                    style={{ fontSize: 16 }}
                  >
                    {year}
                  </motion.span>
                ) : null}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Timeline;
`

export default Timeline;
