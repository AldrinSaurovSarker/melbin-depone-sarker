import { Link } from 'react-router-dom'

export default function Review({ title, subtitle, reviewer, profession, timestamp, fullReview }) {
    const MAX_LENGTH = 300

    return (
        <div className="col card shadow h-100 d-flex flex-column p-4">
            <div className="flex-grow-1">
                <div className="title display-6 fw-bold font-1">{title}</div>
                <div className="subtitle font-3 my-3 text-justify">
                    {fullReview ? (
                        <div>{subtitle}</div>
                    ) : (
                        subtitle.length > MAX_LENGTH ? (
                            <>
                                {subtitle.substring(0, MAX_LENGTH)}
                                <Link to="/reviews" className="text-theme fw-bold ms-2">...Read More</Link>
                            </>
                        ) : (
                            <div>{subtitle}</div>
                        )
                    )}
                </div>
            </div>

            <div>
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

    )
}