import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import "@reach/tabs/styles.css";
import Playground from "@mondalbidisha/playground";

const App = () => {
  const snippet = {
    markup: `<div id="myelement">Old Text</div>`,
    css: `div { color: blue; font-size: 30px }`,
    javascript: `function changeContent () {
      
          var myelement = document.getElementById("myelement");
          myelement.innerHTML= "New Text";
        }
  
       window.onload = changeContent ;
    `,
  };
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Playground
        initialSnippet={snippet}
        defaultEditorTab="javascript"
        defaultResultTab="result"
        mode="dark"
        transformJs
      />
    </div>
  );
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);