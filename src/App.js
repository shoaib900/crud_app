import React from "react";
import Home from './routes/Home'
// const Home = lazy(() => import("./routes/Home"));

const App = () => {
  return (
    <div>
      <h1>hello world on app js</h1>
      {/* <Suspense fallback={<div>loading...</div>}> */}
        <Home />
      {/* </Suspense> */}
    </div>
  );
};

export default App;
