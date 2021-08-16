import Link from 'next/link'

export default function Footer({ activeItem }) {
  return (
    <footer>
    Here is the footer on { activeItem } or you can go 
    <Link href="/">
      <a>Home</a>
    </Link>
    </footer>
  );
}