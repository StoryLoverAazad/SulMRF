import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
//import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Admin from "./components/Admin";
//import AdminLogin from "./components/AdminLogin";
import Payment from "./components/payment";
import Team from "./components/team";
import Mine from "./components/mine";
import Company from "./components/company";
import Recharge from "./components/recharge";
import Notice from "./components/notice";
import Invite from "./components/invite";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Notice/>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="/phonesignup" element={<PhoneSignUp />} /> 
              <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
              <Route path="/payment" element={<ProtectedRoute>
              <Payment/></ProtectedRoute>} />
              <Route path="/team" element={<ProtectedRoute><Team/></ProtectedRoute>}/>
              <Route path="/mine" element={<ProtectedRoute><Mine/></ProtectedRoute>}/>
              <Route path="/company" element={<ProtectedRoute><Company/></ProtectedRoute>}/>
              <Route path="/recharge" element={<ProtectedRoute><Recharge/></ProtectedRoute>}/>
              <Route path="/invite" element={<ProtectedRoute><Invite/></ProtectedRoute>}/>
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
