export default function IconCard({icon, title, subtitle}) {
    return (
        <>
            <div className="col-md-4 card border-0">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <i className={`fas fa-${icon} fa-2x text-theme mb-2`}></i>
                    </h5>
                    <h6 className="card-subtitle mb-2">{title}</h6>
                    <p className="card-text text-muted text-sm">{subtitle}</p>
                </div>
            </div>
        </>
    )
}