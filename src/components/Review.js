export default function Review({url, title, subtitle, reviewer, profession, isActive}) {
    const cardStyle = {
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
    };
    
    return (
        <>
            <div className={`carousel-item ${isActive ? 'active' : ''} row g-0 d-md-flex`}>
                <div className="col-md-6 pb-4 pe-md-5">
                    <div className="img-reviewer" style={cardStyle}></div>
                </div>

                <div className="col-md-6 d-flex align-items-center">
                    <div className="details">
                        <div className="title display-6 fw-bold">{title}</div>
                        <div className="subtitle text-sm fst-italic my-3">
                            {subtitle}
                        </div>
                        <div className="reviewer d-flex">
                            <div className="d-flex align-items-center justify-content-center me-2">
                                <i className="fas fa-user fa-2x text-theme border border-5 p-2"></i>
                            </div>
                            <div className="reviewer-info">
                                <div className="reviewer-name text-theme fw-bold">{reviewer}</div>
                                <div className="reviewer-profession text-muted">{profession}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}