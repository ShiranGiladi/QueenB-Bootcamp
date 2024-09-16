import React from "react";

// hooks
import { useLogout } from '../hooks/useLogout'

// components
import MentorsDetails from "../components/MentorsDetails";

const Home = () => {
  const { logout } = useLogout()

  const handleLogoutBtn = () => {
    logout()
  }

  return (
    <div className="container">
      <h1>Mentors</h1>

      <a href="/" onClick={handleLogoutBtn}>Log Out</a>

      <MentorsDetails />
    </div>
  );
};

export default Home;
