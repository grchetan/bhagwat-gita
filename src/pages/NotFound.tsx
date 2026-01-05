import { useLocation } from "react-router-dom";
import "../styles/notFound.css";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="notfound">
      {/* Big Background 404 */}
      <h1 className="notfound-bg">404</h1>

      {/* Content */}
      <div className="notfound-content">
        <h2>This page has not been generated</h2>
        <p className="path">{location.pathname}</p>
        <p className="hint">
          Tell me more about this page, so I can generate it
        </p>
      </div>
    </div>
  );
}
