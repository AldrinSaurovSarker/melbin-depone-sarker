export default function Review({ title, subtitle, reviewer, profession, timestamp }) {
    return (
        <>
            <div className="col card p-5 shadow">
                <div className="details">
                    <div className="title display-6 fw-bold font-1">{title}</div>
                    <div className="subtitle text-sm my-3">
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
                    <div className="timestamp fst-italic text-sm text-muted mt-3">{timestamp}</div>
                </div>
            </div>
        </>
    )
}