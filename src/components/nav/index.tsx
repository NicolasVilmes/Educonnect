"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, PlusCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ModeButton } from "./modeButton";
import { Posts } from "./post";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Meus Posts",
    href: "/",
    description: "Veja os comentarios em suas postagens",
  },
  {
    title: "Amigos",
    href: "/",
    description: "Revise os codigos dos seus amigos",
  },
  {
    title: "Comunidade",
    href: "/docs/primitives/progress",
    description: "Veja e ajude a comuniade",
  },
  {
    title: "Releases",
    href: "/docs/primitives/scroll-area",
    description: "fique por dentro das ultimas atualizações da plataforma",
  },
];

export const Nav = () => {
  return (
    <div>
      <div className="flex justify-around p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/revisoes" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Revisões
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className=" flex ">
          <Posts />
          <ModeButton />
          <Avatar>
            <AvatarImage
              className="w-auto h-[45px] rounded-full mx-16"
              src="https://github.com/felipeosmar.png"
              alt="@shadcn"
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#061832] to-[#1570EF] h-[2px]"></div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
