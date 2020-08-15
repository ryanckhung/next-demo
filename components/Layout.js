import Nav from "./Nav";

const Layout = ({ title, footer, children }) => (
  <div>
    <Nav />
    <h1>{title}</h1>
    {children}
    <h3>{footer}</h3>
  </div>
);

export default Layout;
