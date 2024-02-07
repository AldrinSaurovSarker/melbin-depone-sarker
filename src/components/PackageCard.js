export default function PackageCard({ header, icon, price, advantages }) {
    return (
        <div className="package-item card shadow my-3 cursor-pointer">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-theme text-uppercase text-center">{header}</h5>
                <div className="icon-circle d-flex align-items-center justify-content-center rounded-circle mx-auto my-3">
                    <i className={`${icon.name} ${icon.color} fa-2x`}></i>
                </div>
                <p className="card-text fw-bold text-center font-1 text-info">{price}</p>
                <hr />
                <ul className="list-group mb-3">
                    {advantages.map((advantage, index) => (
                        <li className="list-group-item border-0 border-bottom text-muted font-5 d-flex align-items-center" key={index}>
                            <div>{advantage.text}</div>
                            <i className={`${advantage.icon} text-theme ms-auto`}></i>
                        </li>
                    ))}
                </ul>

                <div className="d-flex justify-content-center mt-auto">
                    <a href="https://www.facebook.com/messages/t/107559902156709" target="_blank" rel="noreferrer" className="btn btn-theme">
                        <div className="font-4 text-sm">Buy Now</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
