import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;