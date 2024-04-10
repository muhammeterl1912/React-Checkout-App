import ModalForm from "./components/ModalForm";
import ProductsCard from "./components/ProductsCard"
import { useState } from "react";
import Button from "react-bootstrap/Button";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
    <h1 className="text-danger text-center">CheckOut App</h1>
    <Button
        variant="primary"
        onClick={()=>setShow(!show)}
        className="bg-warning text-black mt-5 d-block m-auto border-0"
      >
        {show ? "Hide Product Bar" : "Show Product Bar"}
      </Button>
<div>
{show ? <ModalForm handleClose={handleClose}/>:<ProductsCard />}
</div>

    </div>
  );
}

export default App;
