import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        I am home
        <ul className="flex gap-[32px]">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about/me">Me</Link>
        </ul>
      </main>
    </div>
  );
}
