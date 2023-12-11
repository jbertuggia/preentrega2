import CartWidget from "./CartWidget"
import logo from "../../img/logo.png";
import "./NavBar.css";

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">
            <div className="container-fluid">
                <li className="nav-item list-unstyled">
                    <a className="nav-link active" aria-current="page" href="/">
                        <img
                            className="d-inline-block align-top"
                            src={logo}
                            width="150 "
                            height="150"
                            alt="Logo"
                        />
                    </a>
                </li>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/category/procesadores`}>Procesadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/category/placasdevideo`}>Placas de video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/category/perifericos`}>Periféricos</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />1
        </nav>
    )
}

export default NavBar;