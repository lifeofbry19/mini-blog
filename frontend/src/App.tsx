import "./App.css";
import ContentEditor from "./components/ContentEditor";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

type User = {
  username: string;
  password: string;
} | null;

function App() {
  const [user, setUser] = useState<User>({ username: "bry", password: "" });
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  return (
    <>
      <div
        className={`${
          !user ? "items-center" : ""
        }  w-screen h-screen flex justify-center `}
      >
        {user ? (
          <ContentEditor defaultContent={null} username={user.username} />
        ) : (
          <div>
            {" "}
            {!showRegisterForm && (
              <LoginForm
                setUser={setUser}
                setShowRegisterForm={setShowRegisterForm}
              />
            )}
          </div>
        )}
        {showRegisterForm && !user && <RegisterForm setUser={setUser} />}
      </div>
    </>
  );
}

export default App;
