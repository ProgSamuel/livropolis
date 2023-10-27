import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  console.error("Error detected");

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button onClick={() => navigate("/")}>Go Back to Home Page</button>
    </div>
  );
}
