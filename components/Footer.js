import Link from 'next/link'

export default function Footer({ pageTitle }) {
  return (
    <footer>
    Here is the footer on { pageTitle } or you can go 
    <Link href="/">
      <a>Home</a>
    </Link>
    </footer>
  );
}