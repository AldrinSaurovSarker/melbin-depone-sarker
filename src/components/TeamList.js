import SectionHeader from "./SectionHeader"
import TeamMember from "./TeamMember"

export default function TeamList() {
    const team = [
        {
            name: "Dua Lipa",
            designation: "CEO",
            imageUrl: 'https://i1.sndcdn.com/artworks-9AztcnYMqDy2pncD-7W2KRw-t500x500.jpg',
            phone: "+8801642005775",
            whatsapp: "https://api.whatsapp.com/send/?phone=8801642005775&text&type=phone_number&app_absent=0",
            facebook: "https://www.facebook.com/aldrinsaurovsarker/"
        },
        {
            name: "Dua Lipa",
            designation: "CEO",
            imageUrl: 'https://i1.sndcdn.com/artworks-9AztcnYMqDy2pncD-7W2KRw-t500x500.jpg',
            phone: "+8801642005775",
            whatsapp: "https://api.whatsapp.com/send/?phone=8801642005775&text&type=phone_number&app_absent=0",
            facebook: "https://www.facebook.com/aldrinsaurovsarker/"
        },
        {
            name: "Dua Lipa",
            designation: "CEO",
            imageUrl: 'https://i1.sndcdn.com/artworks-9AztcnYMqDy2pncD-7W2KRw-t500x500.jpg',
            phone: "+8801642005775",
            whatsapp: "https://api.whatsapp.com/send/?phone=8801642005775&text&type=phone_number&app_absent=0",
            facebook: "https://www.facebook.com/aldrinsaurovsarker/"
        }
    ]
    
    return (
        <>
            <div className="team" id="teams">
                <SectionHeader
                    title="Meet our team"
                    subtitle="Our dedicated team work hard 24/7 to provide you with the best decoration ever"
                />

                <div className="row">
                    {team.map((member, index) => (
                        <TeamMember
                            key={index}
                            url={member.imageUrl}
                            name={member.name}
                            designation={member.designation}
                            facebook={member.facebook}
                            whatsapp={member.whatsapp}
                            phone={member.phone}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}