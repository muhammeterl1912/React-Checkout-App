import ModalForm from "./components/ModalForm";
import ProductsCard from "./components/ProductsCard";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6616880db8b8e32ffc7dc6e6.mockapi.io/Checkout"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
 
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-danger text-center">CheckOut App</h1>
      <Button
        variant="primary"
        onClick={() => setShow(!show)}
        className="bg-warning text-black mt-5 d-block m-auto border-0"
      >
        {show ? "Hide Product Bar" : "Show Product Bar"}
      </Button>
      <div>
        {show ? (
          <div className="  mt-5">
            <ModalForm setShow={setShow} setData={setData}fetchData={fetchData} /> <ProductsCard />
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center mt-5 "style={{minHeight:"100vh"}} >
            <ProductsCard data={data} fetchData={fetchData}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
