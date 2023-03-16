import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import DataTable from "./DataTable";
import Student from "./Student";

const greetingMessage =<div>React_App_Workshop_Loading</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DataTable/>);