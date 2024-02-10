import type { NavLink } from "../types";
import { Heart, Chat, Gear, Home, User } from "../../components/Icons";

export const navLinks: NavLink[] = [
    {
        title: "Inicio",
        path: "/",
        icon: Home
    },
    {
        title: "Chats",
        path: "/",
        icon: Chat
    },
    {
        title: "Matchs",
        path: "/",
        icon: Heart
    },
    {
        title: "Perfil",
        path: "/",
        icon: User
    },
    {
        title: "Opciones",
        path: "/",
        icon: Gear
    },
]