import React, { useEffect } from "react";

function App(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="main">
      <React.Fragment>{props.children}</React.Fragment>
    </main>
  );
}

export default App;
