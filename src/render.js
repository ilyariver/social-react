import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "./App";
import {addNewDialogMessage, addPost, updateDialogInput, updatePostInput} from "./redux/state";

export const renderDom = (state) => {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updatePostInput={updatePostInput}
          addNewDialogMessage={addNewDialogMessage}
          updateDialogInput={updateDialogInput} />
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
  );
}
