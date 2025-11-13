// import Link from "next/link";
// export default function TOC() {
//     return(
//         <ul>
//             <li>
//                 <Link href="/Labs" id="wd-lab1-link">Home</Link>
//             </li>
//             <li>
//                 <Link href="/Labs/Lab1" id="wd-lab1-link">Lab1</Link>
//             </li>
//             <li>
//                 <Link href="/Labs/Lab2" id="wd-lab2-link">Lab2</Link>
//             </li>
//             <li>
//                 <Link href="/Labs/Lab3" id="wd-lab3-link">Lab3</Link>
//             </li>
//             <li>
//                 <Link href="/" id="wid-kambaz-link">Kambaz</Link>
//             </li>
//             <li>
//                 <Link href="https://github.com/SKANDHAN-MADHUSUDHANA/Kambaz-next-js" id="wd-github-link">My Github</Link>
//             </li>
//         </ul>
//     );
// }


"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  const links = [
    { href: "/Labs", label: "Labs", id: "wd-labs" },
    { href: "/Labs/Lab1", label: "Lab 1", id: "wd-lab1" },
    { href: "/Labs/Lab2", label: "Lab 2", id: "wd-lab2" },
    { href: "/Labs/Lab3", label: "Lab 3", id: "wd-lab3" },
    { href: "/Labs/Lab4", label: "Lab 4", id: "wd-lab4" },
    { href: "/Labs/Lab5", label: "Lab 5", id: "wd-lab5" },
    { href: "/", label: "Kambaz", id: "wd-kambaz" },
    { href:"https://github.com/SKANDHAN-MADHUSUDHANA/Kambaz-next-js", label: "Frontend GitHub", id: "wd-github" },
    { href:"https://github.com/SKANDHAN-MADHUSUDHANA/kambaz-node-server-app-", label: "Backend GitHub", id: "wd-github" }
  ];

  return (
    <Nav variant="pills" className="mb-3">
      {links.map((link) => (
        <NavItem key={link.href}>
          <NavLink
            href={link.href}
            as={Link}
            active={pathname === link.href}
            id={link.id}
          >
            {link.label}
          </NavLink>
        </NavItem>
      ))} 
    </Nav>
  );
}