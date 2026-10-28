import Link from "next/link";
import React from "react";

export default function Navbar() {
  const Links = [
    { name: "client", route: "/" },
    { name: "server", route: "/server-route" },
  ];
  return (
    <nav className="flex items-center gap-6 px-4 py-2 fixed top-5 left-1/2 -translate-x-1/2 border border-white/20 bg-white/10 backdrop-blur-lg rounded-full">
      {Links.map((link, i) => (
        <Link
          className="text-sm font-thin capitalize"
          href={link.route}
          key={i}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
