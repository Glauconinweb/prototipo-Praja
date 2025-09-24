import { useState } from "react";
import api from "../services/api.js";
import { useNavigate, Link } from "react-router-dom";
import "../components/stylee.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert(`Bem-vindo, ${res.data.nome}`);
      navigate("/shops");
    } catch (err) {
      alert(err.response?.data?.message || "Erro no login");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Crie agora</Link>
      </p>
    </div>
  );
}
