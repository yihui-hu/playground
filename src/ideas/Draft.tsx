import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";
import { motion } from "framer-motion";

const Draft = () => {
  return (
    <PrototypeScreen
      codeBlockString="// code goes here"
      codeBlockComponent={
        <CodeBlockComponent code={`// code goes here`} language={"tsx"} />
      }
      prototypeComponent={
        <div
          className="right-pane"
          style={{ overflow: "scroll", width: "100%" }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: 12,
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
            <motion.div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#EEEEEE",
                borderRadius: 8,
              }}
              initial={{ opacity: 0, rotate: 4, rotateX: 10, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, rotate: 0, rotateX: 0, y: 0 }}
            />
          </div>
        </div>
      }
    />
  );
};

export default Draft;
