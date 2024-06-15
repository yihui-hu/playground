import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const NotesWithVideos = () => {
  const gap = 8;
  const [notes, setNotes] = useState<string>("Your notes go here");
  const [selectedBox, setSelectedBox] = useState<string>("notes");
  
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <PrototypeScreen
      codeBlockString={NotesWithVideosCode}
      codeBlockComponent={
        <CodeBlockComponent code={NotesWithVideosCode} language={"tsx"} />
      }
      prototypeComponent={
        <div
          className="right-pane"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {selectedBox === "notes" ? (
            <motion.div
              layout
              layoutId="notes"
              style={{
                width: `calc(100% - ${gap * 2}px)`,
                height: `calc(60% - ${gap * 2}px)`,
                background: "white",
                border: "2px solid #EEEEEE",
                borderRadius: 10,
                cursor: "pointer",
                margin: gap,
                padding: isDesktop ? gap * 2 : gap,
              }}
              onClick={() => setSelectedBox("notes")}
            >
              <motion.textarea
                layout
                style={{
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  resize: "none",
                  border: "0px solid black",
                  outline: "none",
                  background: "transparent",
                }}
                onChange={(e) => setNotes(e.target.value)}
              >
                {notes}
              </motion.textarea>
            </motion.div>
          ) : null}
          {selectedBox === "video1" ? (
            <motion.div
              layout
              layoutId="video1"
              style={{
                width: `calc(100% - ${gap * 2}px)`,
                height: `calc(60% - ${gap * 2}px)`,
                background: "#E9E9E9",
                borderRadius: 10,
                cursor: "pointer",
                margin: gap,
                padding: gap * 2,
                objectFit: "cover",
              }}
              onClick={() => setSelectedBox("video1")}
            ></motion.div>
          ) : null}
          {selectedBox === "video2" ? (
            <motion.div
              layout
              layoutId="video2"
              style={{
                width: `calc(100% - ${gap * 2}px)`,
                height: `calc(60% - ${gap * 2}px)`,
                background: "#D9D9D9",
                borderRadius: 10,
                cursor: "pointer",
                margin: gap,
                padding: gap * 2,
                objectFit: "cover",
              }}
              onClick={() => setSelectedBox("video2")}
            ></motion.div>
          ) : null}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              placeItems: "center",
              justifyContent: "space-between",
              gap: gap,
              paddingInline: gap,
            }}
          >
            {selectedBox === "notes" ? null : (
              <motion.div
                layoutId="notes"
                style={{
                  width: "calc(100% - 36px)",
                  height: "calc(40vh - 20px)",
                  background: "white",
                  border: "2px solid #EEEEEE",
                  borderRadius: 10,
                  cursor: "pointer",
                  padding: isDesktop ? gap * 2 : gap,
                }}
                onClick={() => setSelectedBox("notes")}
              >
                <motion.textarea
                  layout
                  style={{
                    margin: 0,
                    width: "100%",                    
                    height: "100%",
                    resize: "none",
                    border: "0px solid black",
                    outline: "none",
                  }}
                  onChange={(e) => setNotes(e.target.value)}
                >
                  {notes}
                </motion.textarea>
              </motion.div>
            )}
            {selectedBox === "video1" ? null : (
              <motion.div
                layoutId="video1"
                style={{
                  width: "100%",
                  height: "calc(40vh - 20px)",
                  background: "#E9E9E9",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedBox("video1")}
              ></motion.div>
            )}
            {selectedBox === "video2" ? null : (
              <motion.div
                layoutId="video2"
                style={{
                  width: "100%",
                  height: "calc(40vh - 20px)",
                  background: "#D9D9D9",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedBox("video2")}
              ></motion.div>
            )}
          </div>
        </div>
      }
    />
  );
};

const NotesWithVideosCode = `
import { motion } from "framer-motion";
import { useState } from "react";

const NotesWithVideos = () => {
  const gap = 8;
  const [notes, setNotes] = useState<string>("Your notes go here");
  const [selectedBox, setSelectedBox] = useState<string>("notes");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {selectedBox === "notes" ? (
        <motion.div
          layout
          layoutId="notes"
          style={{
            width: \`calc(100vw - \${gap * 2}px)\`,
            height: "calc(60vh - 16px)",
            background: "white",
            border: "2px solid #EEEEEE",
            borderRadius: 10,
            cursor: "pointer",
            marginInline: gap,
            marginTop: gap,
            padding: 16,
          }}
          onClick={() => setSelectedBox("notes")}
        >
          <motion.textarea
            layout
            style={{
              margin: 0,
              width: \`calc(100vw - \${gap * 2}px - 36px)\`,
              height: "calc(52vh)",
              resize: "none",
              border: "0px solid black",
              outline: "none",
              background: "transparent"
            }}
            onChange={(e) => setNotes(e.target.value)}
          >
            {notes}
          </motion.textarea>
        </motion.div>
      ) : null}
      {selectedBox === "video1" ? (
        <motion.div
          layout
          layoutId="video1"
          style={{
            width: \`calc(100vw - \${gap * 2}px)\`,
            height: "calc(60vh - 16px)",
            background: "#E9E9E9",
            borderRadius: 10,
            cursor: "pointer",
            marginInline: gap,
            marginTop: gap,
            padding: 16,
            objectFit: "cover",
          }}
          onClick={() => setSelectedBox("video1")}
        ></motion.div>
      ) : null}
      {selectedBox === "video2" ? (
        <motion.div
          layout
          layoutId="video2"
          style={{
            width: \`calc(100vw - \${gap * 2}px)\`,
            height: "calc(60vh - 16px)",
            background: "#D9D9D9",
            borderRadius: 10,
            cursor: "pointer",
            marginInline: gap,
            marginTop: gap,
            padding: 16,
            objectFit: "cover",
          }}
          onClick={() => setSelectedBox("video2")}
        ></motion.div>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          placeItems: "center",
          justifyContent: "space-between",
          gap: gap,
          margin: gap,
        }}
      >
        {selectedBox === "notes" ? null : (
          <motion.div
            layoutId="notes"
            style={{
              width: \`calc((100vw - \${gap * 3}px) / 2)\`,
              height: "40vh",
              background: "white",
              border: "2px solid #EEEEEE",
              borderRadius: 10,
              cursor: "pointer",
              padding: 16,
            }}
            onClick={() => setSelectedBox("notes")}
          >
            <motion.textarea
              layout
              style={{
                margin: 0,
                width: \`calc((100vw - \${gap * 3}px - 52px) / 2)\`,
                height: "calc(40vh - 36px)",
                resize: "none",
                border: "0px solid black",
                outline: "none",
              }}
              onChange={(e) => setNotes(e.target.value)}
            >
              {notes}
            </motion.textarea>
          </motion.div>
        )}
        {selectedBox === "video1" ? null : (
          <motion.div
            layoutId="video1"
            style={{
              width: \`calc((100vw - \${gap * 3}px) / 2)\`,
              height: "40vh",
              background: "#E9E9E9",
              borderRadius: 10,
              cursor: "pointer",
              padding: 16,
              objectFit: "cover",
            }}
            onClick={() => setSelectedBox("video1")}
          ></motion.div>
        )}
        {selectedBox === "video2" ? null : (
          <motion.div
            layoutId="video2"
            style={{
              width: \`calc((100vw - \${gap * 3}px) / 2)\`,
              height: "40vh",
              background: "#D9D9D9",
              borderRadius: 10,
              cursor: "pointer",
              padding: 16,
              objectFit: "cover",
            }}
            onClick={() => setSelectedBox("video2")}
          ></motion.div>
        )}
      </div>
    </div>
  );
};

export default NotesWithVideos;
`;

export default NotesWithVideos;
