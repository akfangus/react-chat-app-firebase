import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  // AuthContext에서 currentUser 가져오기
  const { currentUser } = useContext(AuthContext);

  //로그인 안되어있으면 로그인 페이지로 이동
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
