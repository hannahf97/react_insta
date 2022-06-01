import { BrowserRouter, Route, Routes } from "react-router-dom";
import BootstrapLogin from "./components/Login/BootstrapLogin";
import Main from "./components/Main";
import Page404 from "./components/Page404";
import Join from "./components/Join/Join";
import { useState } from "react";
import { Users } from "./data/User";
import { UserContext } from "./store/UserContext";
function App() {
  const [users, setUsers] = useState(Users);
  const insertUsers = (user) => {
    const newUser = { ...user, userId: user.id, id: users.length };
    setUsers([...users, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, insertUsers }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main></Main>}></Route>
          <Route
            path="/login"
            element={<BootstrapLogin></BootstrapLogin>}
          ></Route>
          <Route path="/join" element={<Join></Join>}></Route>
          <Route path="/*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
