import Link from "next/link";

const Nav = () => (
  <div>
    Nav
    <Link href="/one">
      <a>One</a>
    </Link>
    <Link href="/two">
      <a>Two</a>
    </Link>
    <style jsx>{`
      a {
        padding: 12px;
      }
    `}</style>
  </div>
);

export default Nav;
