import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
}
