import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Test</a>
        </Link>
      </nav>
    </header>
  );
}
