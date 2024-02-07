import { useNavigate } from 'react-router-dom'

export default function Navbar({ companyName }) {
    let navigate = useNavigate();

    const handleNavigate = (sectionId) => {
        navigate('/')

        setTimeout(() => {
            window.location.hash = sectionId;
        }, 100)
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <div className="container-fluid">
                <div className='d-grid w-100'>
                    <a className="navbar-brand d-flex flex-column flex-lg-row align-items-center cursor-pointer" onClick={() => handleNavigate('')} style={{ gap: '10px' }}>
                        <img src="/image/logo.jpg" alt="Logo" className='navbar-logo me-2' />
                        <h1 className="text-theme text-uppercase text-adjustable fw-bolder font-2 m-0">{companyName}</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="text-uppercase text-info fw-bold p-1">Menu</div>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex align-items-center justify-content-center p-3 text-uppercase text-center fw-bold">
                            <a className="nav-link text-theme font-4 cursor-pointer" aria-current="page" onClick={() => handleNavigate('intro')}>Home</a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3 text-uppercase text-center fw-bold">
                            <a className="nav-link text-theme font-4 cursor-pointer" onClick={() => handleNavigate('works')}>Our works</a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3 text-uppercase text-center fw-bold">
                            <a className="nav-link text-theme font-4 cursor-pointer" onClick={() => handleNavigate('reviews')}>Reviews</a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3 text-uppercase text-center fw-bold">
                            <a className="nav-link text-theme font-4 cursor-pointer" onClick={() => handleNavigate('teams')}>Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
