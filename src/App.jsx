import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Header from "./components/Header/Header";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import UserPersonalInfo from "./components/UserPersonalInfo/UserPersonalInfo";
import UserEducationInfo from "./components/UserEducationInfo/UserEducationInfo";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:userId" element={<UserProfilePage />}>
            <Route path="personal" element={<UserPersonalInfo />} />
            <Route path="education" element={<UserEducationInfo />} />
          </Route>
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
