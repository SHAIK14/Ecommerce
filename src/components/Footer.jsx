import { Button } from "react-bootstrap";

function Footer() {
  return (
    <footer className="p-3 bg-info text-white d-flex justify-content-around">
      <span
        style={{ fontFamily: "serif" }}
        className="display-4 font-weight-bolder"
      >
        The Generics
      </span>
      <div className="d-flex">
        <Button variant="info mx-3">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
            alt="Youtube"
            height="30px"
          />
        </Button>
        <Button variant="info mx-3">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
            alt="spotify"
            height="30px"
          />
        </Button>
        <Button variant="info mx-3">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
            alt="Facebook"
            height="30px"
          />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
