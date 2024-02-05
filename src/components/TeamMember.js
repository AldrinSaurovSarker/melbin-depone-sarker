export default function TeamMember({ url, name, designation, facebook, whatsapp, phone }) {
    const cardStyle = {
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
    };

    return (
        <>
            <div className="col-md-4">
                <div className="img-reviewer" style={cardStyle}></div>
                <div className="d-grid align-items-center text-center">
                    <h3 className="title fw-bold m-0">{name}</h3>
                    <div className="subtitle my-3 text-primary fw-bold">{designation}</div>
                    
                    <div className="links d-flex justify-content-center">
                        <a className="social-link" href={facebook} target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook fa-2x mx-2 text-primary"></i>
                        </a>

                        <a className="social-link" href={whatsapp} target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp fa-2x mx-2 text-success"></i>
                        </a>

                        <a className="social-link" href={`tel:${phone}`} target="_blank" rel="noreferrer">
                            <i className="fas fa-phone fa-2x mx-2 text-danger"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}