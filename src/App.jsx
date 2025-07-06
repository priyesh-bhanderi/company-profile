import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import AddProject from "./Admin/components/addProject";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin/add-project" element={<AddProject />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
