import PackageCard from "./PackageCard"
import SectionHeader from "./SectionHeader";
import SocialLinks from "./SocialLinks";

export default function PackageList() {
    const packagesData = [
        {
            header: "Basic Package",
            icon: {
                name: "fas fa-glass-cheers",
                color: "text-primary"
            },
            price: "$99",
            advantages: [
                { text: "Basic decoration", icon: "fas fa-leaf" },
                { text: "Up to 50 guests", icon: "fas fa-users" },
                { text: "Standard music system", icon: "fas fa-music" },
            ]
        },
        {
            header: "Premium Package",
            icon: {
                name: "fas fa-gem",
                color: "text-info"
            },
            price: "$199",
            advantages: [
                { text: "Premium decoration", icon: "fas fa-star" },
                { text: "Up to 100 guests", icon: "fas fa-users" },
                { text: "High-quality music system", icon: "fas fa-music" },
                { text: "Photography included", icon: "fas fa-camera" },
            ]
        },
        {
            header: "VIP Package",
            icon: {
                name: "fas fa-crown",
                color: "text-warning"
            },
            price: "$299",
            advantages: [
                { text: "Luxury decoration", icon: "fas fa-award" },
                { text: "Up to 200 guests", icon: "fas fa-users" },
                { text: "Premium music and lighting", icon: "fas fa-lightbulb" },
                { text: "Photography & Videography", icon: "fas fa-video" },
                { text: "Custom requests", icon: "fas fa-comments" },
            ]
        },
    ]

    const hotline = {
        facebook: "",
        whatsapp: "",
        phone: ""
    }

    return (
        <div className="container mt-5">
            <SectionHeader
                title="Available packages"
                subtitle="Contact us now to book"
                margin={false}
            />

            <SocialLinks
                facebook={hotline.facebook}
                whatsapp={hotline.whatsapp}
                phone={hotline.phone}
            />

            <div className="row mt-5">
                {packagesData.map((packageItem, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <PackageCard {...packageItem} />
                    </div>
                ))}
            </div>
        </div>
    )
}