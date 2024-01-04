import Link from "next/link"
import Image from "next/image"
import { qutopia } from "./Assets"
import { useState, useEffect } from "react"

const NavItem = ({ href, label }: { href: string; label: string }) => {
  const hoverEffect =
    "hover:text-black hover:p-3 hover:bg-white hover:rounded-[4rem] hover:shadow-lg hover:duration-500 hover:ease-out"
  return (
    <Link legacyBehavior href={href}>
      <a className={`text-white ${hoverEffect} px-3`}>{label}</a>
    </Link>
  )
}

const Nav = () => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolling(true)
      else setScrolling(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div
      className={`fixed z-50 ${
        scrolling ? "bg-black" : "bg-transparent"
      } duration-500 ease-in p-4 w-full flex justify-between items-center h-20`}
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <Image src={qutopia} alt={"qutopia"} className="h-[4rem] w-[4rem]" />
      </div>
      <div className="text-white text-lg font-semibold flex items-center space-x-4 mr-10">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About Us" />
        <NavItem href="/gallery" label="Gallery" />
        <NavItem href="/contact" label="Contact Us" />
      </div>
    </div>
  )
}

export default Nav
