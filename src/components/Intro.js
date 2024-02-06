import { Link } from 'react-router-dom'

export default function Intro({ url, companyName }) {
    const style = {
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };

    const overlay = {
        background: 'rgba(0, 0, 0, 0.5)'
    }

    const linkPath = `/packages/`

    return (
        <div className="container-fluid bg-dark overlay-bg" style={style}>
            <div className="overlay-shade" style={overlay}>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card bg-dark text-white p-5 rounded" style={{ opacity: 0.8 }}>
                            <div className="card-body text-center">
                                <div className="card-title display-2 fw-bold text-theme text-variant font-6">{companyName}</div>
                                <h5 className="card-subtitle mb-2">Make Your Events Memorable</h5>
                                <p className="card-text text-sm">With years of experience in making dreams come true, {companyName} is your go-to planner for unforgettable events. Let's make magic happen together.</p>

                                <Link to={linkPath} className="btn btn-theme text-variant">
                                    Book us now to decorate your event
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
