import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { FaRegClipboard } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Used To StoreEdited Content
  const [codeState, setCodeState] = useState("");
  // Used To Show CheckBox Icon When Click On Copy Icon
  const [clicked, setClicked] = useState(false);

  // Monacos Configurations
  let options = {
    readOnly: false,
    minimap: { enabled: false },
    quickSuggestions: {
      other: false,
      comments: false,
      strings: false,
    },
    language: "json",
    contextmenu: false,
    wrappingColumn: 80,
    noSyntaxValidation: true,
    noSemanticValidation: true,
    "editor.wrappingColumn": 50,
    wordWrap: "on",
    scrollbar: {
      horizontal: "hidden",
    },
  };
  
  let outPutOptions = { ...options, readOnly: true };
  
  function formatJSON(val) {
    try {
      const res = JSON.parse(val);
      return res;
    } catch {
      const errorJson = {
        error: `${val}`,
      };
      return errorJson;
    }
  }
  const handleEditorInput = (value) => {
    if (!value) {
      setCodeState("");
      return false;
    }
    try {
      console.log("NEW", value);
      const formattedValue = JSON.stringify(
        formatJSON(
          value
            .replace(/'/g, '"')
            .replace(/None/g, "null")
            .replace(/False/g, "false")
            .replace(/True/g, "true")
        ),
        null,
        2
      );
      setCodeState(formattedValue);
    } catch {
      setCodeState("Error");
    }
  };

  console.log(codeState);

  const copyContent = () => {
    navigator.clipboard.writeText(codeState);
    // To Show Notification Message
    toast.success("JSON Copied Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // To Show GreenTick Mark When User Click on Copy Icon
    setClicked(true);
    // To Hide Green Tick Mark After 3 Seconds
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <>
      <div className="formatPlayGround">
        <div className="inputPlayGround">
          <div className="playGroundTitle">
            <span>Enter your Python Dictionary here</span>
          </div>
          {/* Python Dict Input Start's*/}
          <Editor
            height="75vh"
            width="100%"
            theme="vs-dark"
            defaultLanguage="json"
            onChange={handleEditorInput}
            options={options}
          />
          {/* Python Dict Input End's*/}
        </div>
        <div className="inputPlayGround">
          <div className="playGroundTitle">
            <span>JSON Output</span>
            <span
              style={{ marginLeft: "auto", cursor: "pointer" }}
              title="Click to copy JSON to your clipboard"
              onClick={() => copyContent()}
            >
              {clicked ? "✅" : <FaRegClipboard style={{ fontSize: "14px" }} />}
            </span>
          </div>
          {/*To Show Formatted JSON Output Start's*/}
          <Editor
            height="75vh"
            width="100%"
            defaultValue="{}"
            theme="vs-dark"
            value={codeState ? codeState : JSON.stringify({})}
            defaultLanguage="json"
            options={outPutOptions}
          />
          {/*To Show Formatted JSON Output End's*/}
        </div>
      </div>

      {/*Notification Component Start's*/}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      {/*Notification Component End's*/}
    </>
  );
}

export default App;
