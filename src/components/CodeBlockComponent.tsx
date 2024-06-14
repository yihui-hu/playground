import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlockComponent = (props: CodeBlockProps) => {
  const { code, language } = props;

  return (
    <CodeBlock code={code} language={language} theme={themes.ultramin}>
      <CodeBlock.Code style={{ paddingRight: "1rem" }}>
        <div style={{ display: "table-row" }}>
          <CodeBlock.LineNumber style={{ display: "table-cell", color: "gray", paddingRight: "1rem", textAlign: "right" }} className="prevent-select" />
          <CodeBlock.LineContent style={{ display: "table-cell" }}>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
};

export default CodeBlockComponent;
