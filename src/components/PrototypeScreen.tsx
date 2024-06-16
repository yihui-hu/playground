import { Link, useNavigate } from "react-router-dom";
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
  ImperativePanelHandle,
} from "react-resizable-panels";
import { navigableRoutes } from "@/Router";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";
import ActionTabs from "./ActionTabs";

interface PrototypeScreenProps {
  codeBlockComponent: JSX.Element;
  codeBlockString: string;
  prototypeComponent: JSX.Element;
}

const PrototypeScreen = (props: PrototypeScreenProps) => {
  const { codeBlockComponent, codeBlockString, prototypeComponent } = props;
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [showActionTabs, setShowActionTabs] = useState<boolean>(() => {
    const showActionTabsStorage = localStorage.getItem("showActionTabs");
    if (showActionTabsStorage === "true") {
      return true;
    } else if (showActionTabsStorage === "false") {
      return false;
    } else {
      return true;
    }
  });

  const worksPaneRef = useRef<ImperativePanelHandle>(null);
  const codePaneRef = useRef<ImperativePanelHandle>(null);
  const prototypePaneRef = useRef<ImperativePanelHandle>(null);
  const path = window.location.pathname;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1440px)");

  const resetPanes = () => {
    const worksPane = worksPaneRef.current;
    if (worksPane) {
      worksPane.resize(16);
    }

    const prototypePane = prototypePaneRef.current;
    if (prototypePane) {
      prototypePane.resize(45);
    }
  };

  const toggleActionTabs = () => {
    if (showActionTabs) {
      setShowActionTabs(false);
      localStorage.setItem("showActionTabs", "false");
    } else {
      setShowActionTabs(true);
      localStorage.setItem("showActionTabs", "true");
    }
  };

  const toggleWorksPane = () => {
    const worksPane = worksPaneRef.current;
    if (worksPane) {
      if (worksPane.isCollapsed()) {
        worksPane.expand();
        if (worksPane.getSize() === 0) {
          worksPane.resize(16);
        }
      } else {
        const codePane = codePaneRef.current;
        let codePaneCollapsed = false;
        if (codePane?.isCollapsed() || codePane?.getSize() === 0) {
          codePaneCollapsed = true;
        }
        worksPane.collapse();
        if (codePaneCollapsed) {
          codePane?.resize(0);
        }
      }
    }
  };

  const toggleCodePane = () => {
    const codePane = codePaneRef.current;
    if (codePane) {
      if (codePane.isCollapsed()) {
        codePane.expand();
        if (codePane.getSize() === 0) {
          codePane.resize(36);
        }
      } else {
        codePane.collapse();
      }
    }
  };

  let navigate = useNavigate();

  const handleChange = (value: string) => {
    navigate(`${value}`);
    value = "";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "4px" }}>
      <div className="header">
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
            }}
          >
            <Link
              to="/"
              key="home"
              style={{ textDecoration: "none", color: "white" }}
            >
              Playground
            </Link>
            {sidebarCollapsed || isTablet || isMobile ? (
              <select
                style={{
                  outline: "none",
                  border: "none",
                  borderRadius: 2,
                  padding: 0,
                  backgroundColor: "black",
                  color: "white",
                }}
                onChange={(event) => handleChange(event.target.value)}
                value={path}
              >
                <option value={path} disabled>
                  {path} ◢
                </option>
                {navigableRoutes.map((route) => {
                  return (
                    <option key={route.path} value={route.path}>
                      {route.path}
                    </option>
                  );
                })}
              </select>
            ) : null}
          </div>
          {isMobile ? null : (
            <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <ActionTabs
                action={showActionTabs ? "▶" : "◀"}
                onClickAction={toggleActionTabs}
              />
              {showActionTabs ? (
                <>
                  <ActionTabs
                    action="Reset panels"
                    onClickAction={resetPanes}
                  />
                  {isTablet ? null : (
                    <ActionTabs
                      action="Toggle sidebar"
                      onClickAction={toggleWorksPane}
                    />
                  )}
                  <ActionTabs
                    action="Toggle code"
                    onClickAction={toggleCodePane}
                  />
                </>
              ) : null}
            </div>
          )}
        </>
      </div>
      <PanelGroup direction="horizontal" autoSaveId="persistence">
        {isTablet ? null : (
          <Panel
            ref={worksPaneRef}
            collapsible={true}
            collapsedSize={0}
            defaultSize={16}
            maxSize={16}
            minSize={16}
            onCollapse={() => setSidebarCollapsed(true)}
            onExpand={() => setSidebarCollapsed(false)}
          >
            <div className={"works-pane"}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {navigableRoutes.map((route) => {
                  return (
                    <Link
                      to={route.path}
                      key={route.path}
                      style={{
                        textDecoration: "none",
                        color: path === route.path ? "white" : "#C9C9C9",
                        backgroundColor:
                          path === route.path ? "#888888" : "transparent",
                        borderRadius: 4,
                        paddingLeft: path === route.path ? 8 : 0,
                      }}
                    >
                      {route.path}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Panel>
        )}
        {isTablet ? null : <PanelResizeHandle />}
        {isMobile ? null : (
          <Panel
            ref={codePaneRef}
            collapsible={true}
          >
            <div className="left-pane">
              <div
                style={{
                  position: "sticky",
                  top: 8,
                  right: 8,
                  paddingTop: 6,
                  paddingInline: 6,
                  borderRadius: 6,
                  width: "max-content",
                  marginLeft: "auto",
                  backgroundColor: "gray",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(codeBlockString);
                  toast("Copied to clipboard");
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                >
                  <path
                    d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              {codeBlockComponent}
            </div>
          </Panel>
        )}
        {isMobile ? null : (
          <PanelResizeHandle style={{ width: "2px", background: "black" }} />
        )}
        <Panel
          ref={prototypePaneRef}
          collapsible={false}
          defaultSize={45}
          minSize={35}
        >
          <div className="right-pane">{prototypeComponent}</div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default PrototypeScreen;
