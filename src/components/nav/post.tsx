import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useAppContext } from "@/contexts";
import { Input } from "../ui/input";

export function Posts() {
  const [title, SetTitle] = useState("");
  const [message, SetMessage] = useState("");
  const { setTittle, setText } = useAppContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" mx-1">
          <PlusCircle className="mr-[5px]" size={15} />
          <p>Posts</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Postagem</DialogTitle>
          <DialogDescription>Escreva aqui sua mensagem</DialogDescription>
        </DialogHeader>
        <div className="my-5">
          <div>
            <Input
              placeholder="Titulo"
              value={title}
              onChange={(e) => SetTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="my-5">
          <div>
            <Textarea
              placeholder="Escreva sua mensagem aqui."
              value={message}
              onChange={(e) => SetMessage(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              SetMessage(setText);
              SetTitle(setTittle);
            }}
          >
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
