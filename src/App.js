import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";
import LoginComponent from "./auth/login";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",

  }
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Routes>
          <Route exact path="/home" element={<HomePage /> } />
          <Route exact path="/coins/:id" element={<CoinPage />} />
          <Route exact path="/" element={<LoginComponent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
