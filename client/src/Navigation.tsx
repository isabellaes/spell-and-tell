import { BrowserRouter, Routes, Route } from "react-router";
import StartPage from "./pages/start/StartPage";
import HomePage from "./pages/home/HomePage";
import LogInPage from "./pages/login/LogInPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import CreateStoryPage from "./pages/createStory/CreateStoryPage";
import ContributeToStoryPage from "./pages/contributeToStory/ContributeToStoryPage";
import ProfilePage from "./pages/profile/ProfilePage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/createstory" element={<CreateStoryPage />} />
        <Route path="/contribute" element={<ContributeToStoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
