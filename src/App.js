import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import SigninPage from "./components/pages/SigninPage";
import SignupPage from "./components/pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<SigninPage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route index element={<HomePage />} />
        <Route render={() => <h1>Not found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
