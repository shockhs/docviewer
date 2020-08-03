
import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const viewer = useRef(null);
  const type = 'docx'
  const downloadUrl = 'http://z3x.systemz.io/api/fs/file/914d3d01-2953-4003-8952-a9f27bc17ba5'

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: `${downloadUrl}`,
        fullAPI: true,
        filename: `print.${type}`,
      },
      viewer.current
    ).then(instance => {

      instance.closeElements(['leftPanel', 'header']);
    })
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
