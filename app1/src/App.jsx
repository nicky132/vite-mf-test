import React, { Suspense } from "react";
import MKH from "app2/App";

const App = () => {
  console.log(
    MKH.init().then((res) => {
      console.log("app1 8：", res);
      MKH.navigatorTo();
    })
  );
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>App1</h1>
      </div>
      {/* <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense> */}
    </div>
  );
};

export default App;
