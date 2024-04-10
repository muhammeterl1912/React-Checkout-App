import ModalForm from "./components/ModalForm";
import ProductsCard from "./components/ProductsCard";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
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
    fetchData();
  }, []);
console.log(data)
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
          <div className="w-100 d-flex gap-2 mt-5">
            <ModalForm setShow={setShow} setData={setData}/> <ProductsCard />
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center mt-5">
            <ProductsCard data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
