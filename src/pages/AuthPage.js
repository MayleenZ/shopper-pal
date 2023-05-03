import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LogInForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <h1>Shopper Pal</h1>
      
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
