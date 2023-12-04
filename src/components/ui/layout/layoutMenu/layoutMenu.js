"use client"

import classes from "./layoutMenu.module.css"
import { GoHome } from "react-icons/go"
import { LuBook } from "react-icons/lu"
import { BsCheck2Circle } from "react-icons/bs"
import { AiOutlineTool } from "react-icons/ai"
import { FcOnlineSupport } from "react-icons/fc"
import { PATHNAMES } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LayoutMenu = () => {
    const pathname = usePathname()

    const menuItems = [
        {
            icon: <GoHome />,
            label: "Home",
            path: PATHNAMES.home
        },
        {
            icon: <LuBook />,
            label: "Library",
            path: PATHNAMES.library
        },
        {
            icon: <BsCheck2Circle />,
            label: "Plan",
            path: PATHNAMES.plan
        },
        {
            icon: <AiOutlineTool />,
            label: "Tools",
            path: PATHNAMES.tools
        },
        {
            icon: <FcOnlineSupport />,
            label: "Support",
            path: PATHNAMES.support
        }
    ]

    return (
        <div className={classes.main}>
            {menuItems.map((el) => (
                <Link
                    href={el.path}
                    key={el.label}
                    className={`${classes.menuItem} ${pathname === el.path ? classes.active : ""}`}
                >
                    {el.icon}
                    <span>{el.label}</span>
                </Link>
            ))}
        </div>
    )
}

export default LayoutMenu
