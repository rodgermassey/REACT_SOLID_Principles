import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header>
      <nav>
        <Link to="/open_closed/invoices"> Invoices </Link>
        <br />
        <Link to="/open_closed/expenses"> Expenses </Link>
        <br />
      </nav>
      {children}
    </header>
  );
}
