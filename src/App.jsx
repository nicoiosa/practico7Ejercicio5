import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foot from "./components/common/Foot";
import Menu from "./components/common/Menu";
import Admin from "./components/pages/Admin";
import Error404 from "./components/pages/Error404";
import FormAdd from "./components/pages/FormAdd";
import Home from "./components/pages/Home";
import Recipe from "./components/pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/recipe/:id" element={<Recipe />} />
          <Route
            exact
            path="/admin/add"
            element={<FormAdd edit={false} title="New Recipe" />}
          />
          <Route
            exact
            path="/admin/edit/:id"
            element={<FormAdd edit={true} title="Edit Recipe" />}
          />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </>
  );
}
export default App;
