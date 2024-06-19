import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";

interface ImageItems {
  url: string;
}

const ExpandingPhotos = () => {
  const images: ImageItems[] = [
    {
      url: "https://images.unsplash.com/photo-1536138231593-a4a05c8be9fa?q=80&w=3289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1568953331645-bec8af55ebc7?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1547027095-66c5c464e496?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1512411470595-6a95f44f54d1?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1576829021150-ebc8b46b9fb9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <PrototypeScreen
      codeBlockString={ExpandingPhotosCode}
      codeBlockComponent={
        <CodeBlockComponent code={ExpandingPhotosCode} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 12,
            }}
          >
            {images.map((image) => {
              return (
                <motion.div
                  className="prevent-select"
                  key={image.url}
                  style={{
                    padding: 3,
                    height: 40,
                    width: 40,
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                  }}
                  whileHover={{
                    y: -18,
                    height: 48,
                    width: 80,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  <motion.img
                    layout
                    src={image.url}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: 4,
                      backgroundColor: "#C9C9C9",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      }
    />
  );
};

const ExpandingPhotosCode = `
import { motion } from "framer-motion";

interface ImageItems {
  url: string;
}

const ExpandingPhotos = () => {
  const images: ImageItems[] = [
    { url: ... },
    { url: ... },
    { url: ... },
    { url: ... },
    { url: ... },
  ];

  return (
    <div className="wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
        }}
      >
        {images.map((image) => {
          return (
            <motion.div
              className="prevent-select"
              key={image.url}
              style={{
                padding: 3,
                height: 40,
                width: 40,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
              whileHover={{
                y: -18,
                height: 48,
                width: 80,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.img
                layout
                src={image.url}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 4,
                  backgroundColor: "#C9C9C9"
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandingPhotos;
`;

export default ExpandingPhotos;
