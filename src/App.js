import { BrowserRouter, Route, Routes } from "react-router-dom";
import BootstrapLogin from "./components/Login/BootstrapLogin";
import Main from "./components/Main";
import Page404 from "./components/Page404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main></Main>}></Route>
        <Route
          path="/login"
          element={<BootstrapLogin></BootstrapLogin>}
        ></Route>
        <Route path="/*" element={<Page404></Page404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
