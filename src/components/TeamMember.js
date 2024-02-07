import SocialLinks from "./SocialLinks"

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
                <div className="card shadow">
                    <div className="img-reviewer" style={cardStyle}></div>
                    <div className="d-grid align-items-center text-center py-4">
                        <h3 className="title fw-bold mb-0 font-1">{name}</h3>
                        <div className="subtitle text-primary fw-bold mb-4">{designation}</div>
                        <SocialLinks facebook={facebook} whatsapp={whatsapp} phone={phone} />
                    </div>
                </div>
            </div>
        </>
    )
}