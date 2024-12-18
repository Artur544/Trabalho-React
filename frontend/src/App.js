import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProdutoList from "./components/ProdutoList";
import AddProduto from "./components/AddProduto";
import EditProduto from "./components/EditProduto";
import ProprietarioList from "./components/ProprietarioList";
import AddProprietario from "./components/AddProprietario";
import EditProprietario from "./components/EditProprietario";



//https://reactrouter.com/docs/en/v6
function App() {
  return (
   <Router>
     <div className="container">
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Routes>
                <Route exact path="/Produto"  element={<ProdutoList />} >
         
                </Route>
                <Route path="/addProduto" element={<AddProduto />} >
                  
                </Route>
                <Route path="/editProduto/:id" element={<EditProduto />}>
                  
                </Route>

                <Route exact path="/Proprietario"  element={<ProprietarioList />} >
         
                </Route>
                <Route path="/addProprietario" element={<AddProprietario />} >
                  
                </Route>
                <Route path="/editProprietario/:id" element={<EditProprietario />}>
                  
                </Route>
              </Routes>
              
            </div>
        </div>
     </div>  
   </Router>
  );
}

export default App;
