import { useState, SetStateAction, Dispatch, FormEvent } from "react";

type User = {
  username: string;
  password: string;
} | null;

type Props = {
  setUser: Dispatch<SetStateAction<User>>;
  setShowRegisterForm: Dispatch<SetStateAction<boolean>>;
};

export default function LoginForm({ setUser, setShowRegisterForm }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ACCESS-CONTROL-ALLOW-ORIGIN": "http://localhost:5001",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      setUser(data);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-xl mb-6">Mini-Blogger Admin</h1>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 border-indigo-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              const target = e.target as HTMLInputElement;
              setUsername(target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-indigo-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              const target = e.target as HTMLInputElement;
              setPassword(target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="text-white h-8 rounded-lg bg-indigo-500"
        >
          {loading ? "loading..." : "Login"}
        </button>
      </form>
      <button
        type="button"
        onClick={() => setShowRegisterForm(true)}
        className="text-white mt-4 h-8 rounded-lg bg-indigo-500"
      >
        Or Create an Account
      </button>
    </div>
  );
}
