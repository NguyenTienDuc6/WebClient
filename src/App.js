

/*import {
  BrowserRouter as Router,
  Route,
  Routes
}  from "react-router-dom"
import MyComponent from "./MyComponent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;*/

import * as React from "react"

function App() {
  const [MyComponent, setMyComponent]= React.useState (()=>null);

  React.useEffect(()=>{
    import("./MyComponent").then((module)=>{
      setMyComponent(()=>module.default);
    })
  },[]);
  return <MyComponent/>
}

export default App;