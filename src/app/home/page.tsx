"use client";

import { Nav } from "@/components/nav";
import { useAppContext } from "@/contexts";
import { items } from "@/data/itens";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";
import { Message } from "./message";

export default function Home() {
  const { text, tittle } = useAppContext();

  return (
    <main className="h-screen">
      <Nav />
      <div className="h-[90vh] flex flex-col items-center">
        <div className="h-full w-[950px] my-3 p-3 rounded-[15px] border-[2px] border-white flex justify-center">
          <Message Tittle={tittle} Text={text} />
        </div>
      </div>
    </main>
  );
}
