import { Link } from "react-router-dom";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { useState } from "react";

interface PrototypeScreenProps {
  codeBlockComponent: JSX.Element;
  prototypeComponent: JSX.Element;
}

const PrototypeScreen = (props: PrototypeScreenProps) => {
  const { codeBlockComponent, prototypeComponent } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "4px" }}>
      <div className="header">
        <Link
          to="/"
          key="home"
          style={{ textDecoration: "none", color: "white" }}
        >
          Back
        </Link>
      </div>
      <PanelGroup direction="horizontal">
        <Panel
          collapsible={true}
          collapsedSize={0}
          defaultSize={42}
          maxSize={50}
          minSize={2.5}
          style={{
            boxSizing: "border-box",
            borderRight: "2px solid black",
          }}
        >
          <div className="left-pane">{codeBlockComponent}</div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <div className="right-pane">{prototypeComponent}</div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default PrototypeScreen;
