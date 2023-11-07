import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layout/defaultLayout';
import { publicRoute } from './router';
import Login from './pages/login';

function App() {

  const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const accessToken = getCookie("token");
  const isLogin = accessToken;
  const props = { accessToken };

  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;

            if (route?.layout)
              Layout = route.layout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isLogin
                    ? <Layout>
                        <Page {...props}/>
                      </Layout>
                    : <Navigate to={"/login"} />
                }
              />
            )
          })}
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
