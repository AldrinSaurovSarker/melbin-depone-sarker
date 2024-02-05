export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <div className="container-fluid">
                <a className="navbar-brand d-sm-flex align-items-center" href="#">
                    <img src="./image/logo.jpg" alt="Logo" style={{ width: '70px', marginRight: '10px' }} />
                    <h1 className="text-theme text-uppercase text-adjustable fw-bolder">Unique Event Solution</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3 text-uppercase text-center font-5 fw-bold">
                            <a className="nav-link text-theme" aria-current="page" href="#intro">Home</a>
                        </li>
                        <li className="nav-item p-3 text-uppercase text-center font-5 fw-bold">
                            <a className="nav-link text-theme" href="#works">Our works</a>
                        </li>
                        <li className="nav-item p-3 text-uppercase text-center font-5 fw-bold">
                            <a className="nav-link text-theme" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item p-3 text-uppercase text-center font-5 fw-bold">
                            <a className="nav-link text-theme" href="#teams">Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
