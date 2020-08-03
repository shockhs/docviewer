import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer'

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

export default App