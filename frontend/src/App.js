import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              {/* <Route exact path="/">
                <ProductList />
              </Route>
              <Route path="/add">
                <AddProduct />
              </Route>
              <Route path="/edit/:id">
                <EditProduct />
              </Route> */}
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/add" element={<AddProduct />} />
              <Route exact path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
 
export default App;