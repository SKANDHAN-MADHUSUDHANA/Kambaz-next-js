import Link from "next/link";
export default function TOC() {
    return(
        <ul>
            <li>
                <Link href="/Labs" id="wd-lab1-link">Home</Link>
            </li>
            <li>
                <Link href="/Labs/Lab1" id="wd-lab1-link">Lab1</Link>
            </li>
            <li>
                <Link href="/Labs/Lab2" id="wd-lab2-link">Lab2</Link>
            </li>
            <li>
                <Link href="/Labs/Lab3" id="wd-lab3-link">Lab3</Link>
            </li>
            <li>
                <Link href="/" id="wid-kambaz-link">Kambaz</Link>
            </li>
        </ul>
    );
}