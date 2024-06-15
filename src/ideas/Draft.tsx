import CodeBlockComponent from "@/components/CodeBlockComponent";
import PrototypeScreen from "@/components/PrototypeScreen";

const Draft = () => {
  return (
    <PrototypeScreen
      codeBlockString="// code goes here"
      codeBlockComponent={
        <CodeBlockComponent code={`// code goes here`} language={"tsx"} />
      }
      prototypeComponent={
        <div className="right-pane">
          <span>Prototype goes here</span>
        </div>
      }
    />
  );
};

export default Draft;
