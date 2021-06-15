import PatientsPage from "./pages/PatientsPage";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PatientsPage />
    </Provider>
  );
}

export default App;
