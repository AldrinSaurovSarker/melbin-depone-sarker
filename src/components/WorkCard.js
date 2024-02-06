import { Link, useLocation } from 'react-router-dom';

export default function WorkCard({ imageUrl, title, subtitle, viewLink, order, flag }) {
    const overlayColors = [
        'rgba(203, 12, 159, 0.5)',
        'rgba(100, 100, 200, 0.5)',
        'rgba(50, 205, 50, 0.5)'
    ]

    const overlayColor = overlayColors[order % 3]

    const cardStyle = {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
    }

    const overlay = {
        background: overlayColor
    }

    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const linkPath = isHomePage ? `/project/${viewLink}` : `../project/${viewLink}`

    return (
        <div className={`${flag ? 'col-md-4' : ''} work-card mb-4`}>
            <div className="overlay-bg" style={cardStyle}>
                <div className="overlay-shade" style={overlay}>
                    <h3 className="work-title mb-2">{title}</h3>
                    <p className="work-subtitle mb-3">{subtitle}</p>
                    <Link to={linkPath} className="btn btn-theme">View</Link>
                </div>
            </div>
        </div>
    );
}
