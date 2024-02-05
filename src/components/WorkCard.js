export default function WorkCard({ imageUrl, title, subtitle, viewLink, order }) {
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

    return (
        <div className="col-md-4 work-card">
            <div className="overlay-bg" style={cardStyle}>
                <div className="overlay-shade" style={overlay}>
                    <h3 className="work-title">{title}</h3>
                    <p className="work-subtitle">{subtitle}</p>
                    <a href={viewLink} className="btn btn-theme">View</a>
                </div>
            </div>
        </div>
    );
}
