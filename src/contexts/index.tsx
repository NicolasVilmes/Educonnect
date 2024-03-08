"use client";

import React, { createContext, useState, useContext } from "react";

interface ModuleProps {
  children: React.ReactNode;
}

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: ModuleProps) {
  let [tittle, setTittle] = useState("Versão Beta");
  let [text, setText] = useState(
    `No momento algumas funções ainda não estão totalmente finalizas, como por exemplo: fazer envio de arquivos e gerer novas "Caixas" de posts. sendo assim, ao enviar o novo post esse será substituido com as informações`
  );

  return (
    <AppContext.Provider value={{ text, setText, tittle, setTittle }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
