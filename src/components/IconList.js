import IconCard from "./IconCard"

export default function IconList() {
    const iconCardsData = [
        {
            icon: "lightbulb",
            title: "Unique Solutions",
            subtitle: "Make your day special by decorating with unique designs",
        },
        {
            icon: "star",
            title: "Highly rated",
            subtitle: "Customers who took our services were extremely satisfied",
        },
        {
            icon: "users",
            title: "Team of Professionals",
            subtitle: "Our team is made of experienced and professional peoples",
        }
    ];

    return (
        <div className="row d-sm-flex my-5">
            {iconCardsData.map((card, index) => (
                <IconCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                />
            ))}
        </div>
    )
}