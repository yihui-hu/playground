import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Adapted from: https://nelson.co

const ContinuousHighlight = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setHoveredIndex(-1);
    }, 3000);
  };

  const cancelTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      cancelTimer();
    };
  }, []);

  return (
    <PrototypeScreen
      codeBlockString={ContinuousHighlightCode}
      codeBlockComponent={
        <CodeBlockComponent code={ContinuousHighlightCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <motion.div
              layout
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}
              onHoverStart={() => {
                setHoveredIndex(0);
                cancelTimer();
              }}
              onHoverEnd={startTimer}
            >
              <span
                style={{
                  width: "fit-content",
                  zIndex: 2,
                  textDecoration: "underline",
                  textDecorationColor: "#EEEEEE",
                  textDecorationThickness: 2,
                }}
              >
                About
              </span>
              <span
                style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
              >
                Lorem ipsum dolor sit amet
              </span>
              <AnimatePresence>
                {hoveredIndex === 0 ? (
                  <motion.div
                    layoutId="background"
                    style={{
                      width: "calc(100% + 24px)",
                      height: "calc(100% + 16px)",
                      borderRadius: 8,
                      backgroundColor: "#EEEEEE",
                      position: "absolute",
                      top: -9,
                      left: -12,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
            <motion.div
              layout
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}
              onHoverStart={() => {
                setHoveredIndex(1);
                cancelTimer();
              }}
              onHoverEnd={startTimer}
            >
              <span
                style={{
                  width: "fit-content",
                  zIndex: 2,
                  textDecoration: "underline",
                  textDecorationColor: "#EEEEEE",
                  textDecorationThickness: 2,
                }}
              >
                Works
              </span>
              <span
                style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
              >
                Consectetur adipiscing elit
              </span>
              <AnimatePresence>
                {hoveredIndex === 1 ? (
                  <motion.div
                    layoutId="background"
                    style={{
                      width: "calc(100% + 24px)",
                      height: "calc(100% + 16px)",
                      borderRadius: 8,
                      backgroundColor: "#EEEEEE",
                      position: "absolute",
                      top: -9,
                      left: -12,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
            <motion.div
              layout
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}
              onHoverStart={() => {
                setHoveredIndex(2);
                cancelTimer();
              }}
              onHoverEnd={startTimer}
            >
              <span
                style={{
                  width: "fit-content",
                  zIndex: 2,
                  textDecoration: "underline",
                  textDecorationColor: "#EEEEEE",
                  textDecorationThickness: 2,
                }}
              >
                Writing
              </span>
              <span
                style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
              >
                Sed do eiusmod tempor
              </span>
              <AnimatePresence>
                {hoveredIndex === 2 ? (
                  <motion.div
                    layoutId="background"
                    style={{
                      width: "calc(100% + 24px)",
                      height: "calc(100% + 16px)",
                      borderRadius: 8,
                      backgroundColor: "#EEEEEE",
                      position: "absolute",
                      top: -9,
                      left: -12,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
            <motion.div
              layout
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}
              onHoverStart={() => {
                setHoveredIndex(3);
                cancelTimer();
              }}
              onHoverEnd={startTimer}
            >
              <span
                style={{
                  width: "fit-content",
                  zIndex: 2,
                  textDecoration: "underline",
                  textDecorationColor: "#EEEEEE",
                  textDecorationThickness: 2,
                }}
              >
                Contact
              </span>
              <span
                style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
              >
                Incididunt ut labore
              </span>
              <AnimatePresence>
                {hoveredIndex === 3 ? (
                  <motion.div
                    layoutId="background"
                    style={{
                      width: "calc(100% + 24px)",
                      height: "calc(100% + 16px)",
                      borderRadius: 8,
                      backgroundColor: "#EEEEEE",
                      position: "absolute",
                      top: -9,
                      left: -12,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      }
    />
  );
};

const ContinuousHighlightCode = `
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Adapted from: https://nelson.co

const Draft = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setHoveredIndex(-1);
    }, 3000);
  };

  const cancelTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      cancelTimer();
    };
  }, []);

  return (
    <div className="wrapper">
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <motion.div
          layout
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
          }}
          onHoverStart={() => {
            setHoveredIndex(0);
            cancelTimer();
          }}
          onHoverEnd={startTimer}
        >
          <span
            style={{
              width: "fit-content",
              zIndex: 2,
              textDecoration: "underline",
              textDecorationColor: "#EEEEEE",
              textDecorationThickness: 2,
            }}
          >
            About
          </span>
          <span
            style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
          >
            Lorem ipsum dolor sit amet
          </span>
          <AnimatePresence>
            {hoveredIndex === 0 ? (
              <motion.div
                layoutId="background"
                style={{
                  width: "calc(100% + 24px)",
                  height: "calc(100% + 16px)",
                  borderRadius: 8,
                  backgroundColor: "#EEEEEE",
                  position: "absolute",
                  top: -9,
                  left: -12,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
          }}
          onHoverStart={() => {
            setHoveredIndex(1);
            cancelTimer();
          }}
          onHoverEnd={startTimer}
        >
          <span
            style={{
              width: "fit-content",
              zIndex: 2,
              textDecoration: "underline",
              textDecorationColor: "#EEEEEE",
              textDecorationThickness: 2,
            }}
          >
            Works
          </span>
          <span
            style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
          >
            Consectetur adipiscing elit
          </span>
          <AnimatePresence>
            {hoveredIndex === 1 ? (
              <motion.div
                layoutId="background"
                style={{
                  width: "calc(100% + 24px)",
                  height: "calc(100% + 16px)",
                  borderRadius: 8,
                  backgroundColor: "#EEEEEE",
                  position: "absolute",
                  top: -9,
                  left: -12,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
          }}
          onHoverStart={() => {
            setHoveredIndex(2);
            cancelTimer();
          }}
          onHoverEnd={startTimer}
        >
          <span
            style={{
              width: "fit-content",
              zIndex: 2,
              textDecoration: "underline",
              textDecorationColor: "#EEEEEE",
              textDecorationThickness: 2,
            }}
          >
            Writing
          </span>
          <span
            style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
          >
            Sed do eiusmod tempor
          </span>
          <AnimatePresence>
            {hoveredIndex === 2 ? (
              <motion.div
                layoutId="background"
                style={{
                  width: "calc(100% + 24px)",
                  height: "calc(100% + 16px)",
                  borderRadius: 8,
                  backgroundColor: "#EEEEEE",
                  position: "absolute",
                  top: -9,
                  left: -12,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
          }}
          onHoverStart={() => {
            setHoveredIndex(3);
            cancelTimer();
          }}
          onHoverEnd={startTimer}
        >
          <span
            style={{
              width: "fit-content",
              zIndex: 2,
              textDecoration: "underline",
              textDecorationColor: "#EEEEEE",
              textDecorationThickness: 2,
            }}
          >
            Contact
          </span>
          <span
            style={{ width: "fit-content", zIndex: 2, color: "#999999" }}
          >
            Incididunt ut labore
          </span>
          <AnimatePresence>
            {hoveredIndex === 3 ? (
              <motion.div
                layoutId="background"
                style={{
                  width: "calc(100% + 24px)",
                  height: "calc(100% + 16px)",
                  borderRadius: 8,
                  backgroundColor: "#EEEEEE",
                  position: "absolute",
                  top: -9,
                  left: -12,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContinuousHighlight;
`;

export default ContinuousHighlight;
