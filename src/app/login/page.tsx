"use client";

import "./style.css";
import Image from "next/image";
import IMG from "../../../public/Estudante.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const emails = "jorge@gmail.com";

  const passwords = "12345";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtom = () => {
    if (email && password) {
      if (email === emails) {
        if (password === passwords) {
          return router.push("/home");
        } else {
          alert("Senha Incorreta");
          return router.push("/login");
        }
      } else {
        alert("Email incorreto");
        return router.push("/login");
      }
    } else {
      alert("Digite os Dados");
    }
  };

  return (
    <body>
      <div className="main-log">
        <div className="left-login">
          <h1>Faça Login</h1>
          <h1>Venha para a EduConnect</h1>
          <Image src={IMG} alt="Estudante" className="left-login-image" />
          <h1></h1>
        </div>
        <div className="right-login">
          <div className="card-login">
            <form id="loginForm" action="parte1/index1.html">
              <div className="textfilter">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="textfilter">
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn-login"
                onClick={handleButtom}
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
