export default function SocialLinks({ facebook, whatsapp, phone }) {
    return (
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
    )
}