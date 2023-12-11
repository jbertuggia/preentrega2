import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemListContainer.js";

function App() {



  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element= {<h1>404 Pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
