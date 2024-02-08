import { Link, useLocation } from 'react-router-dom'

export default function WorkCard({ project, order, flag }) {
    const overlayColors = [
        'rgba(203, 12, 159, 0.5)',
        'rgba(100, 100, 200, 0.5)',
        'rgba(50, 205, 50, 0.5)'
    ]

    const folderName = project.title
    const encodedFolderName = encodeURIComponent(folderName)
    const PROJECT_IMAGE_DIR = `/image/projects/${encodedFolderName}`

    const overlayColor = overlayColors[order % 3]

    const cardStyle = {
        backgroundImage: project.images && project.images.length > 0 ? `url(${PROJECT_IMAGE_DIR}/${project.images[0]})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
    }

    const overlay = {
        background: overlayColor
    }

    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const linkPath = isHomePage ? `/project/${order}` : `../project/${order}`

    return (
        <div className={`${flag ? 'col-md-4' : ''} work-card mb-4`}>
            <div className="overlay-bg" style={cardStyle}>
                <div className="overlay-shade" style={overlay}>
                    <h3 className="work-title mb-2 text-uppercase text-center">{project.title}</h3>
                    <Link to={linkPath} className="btn btn-theme">View</Link>
                </div>
            </div>
        </div>
    );
}
