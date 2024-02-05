import React from "react";

import IconCard from "./components/IconCard";
import Review from "./components/Review";
import SectionHeader from "./components/SectionHeader";
import WorkCard from "./components/WorkCard";
import TeamMember from "./components/TeamMember";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.css';
import AddReviewForm from "./components/AddReviewForm";
import Intro from "./components/Intro";

function App() {
    const works = [
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: '#link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: '#link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: '#link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: '#link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: '#link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: '#link1',
        },
    ];

    const team = [
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
        <div className="App">
            <Intro url="https://media1.popsugar-assets.com/files/thumbor/xY3BdKypxx5-xtLazUhzPoO3S7M/0x0:3085x3085/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/12/07/019/n/1922153/6cad0ab66391218092c254.74357738_/i/jenna-ortega-beauty-looks.jpg"/>

            <div className="container">
                <div className="row d-sm-flex my-5">
                    <IconCard
                        icon="lightbulb"
                        title="Unique Solutions"
                        subtitle="Make your day special by decorating with unique designs"
                    />

                    <IconCard
                        icon="star"
                        title="Highly rated"
                        subtitle="Customers who took our services were extremely satisfied"
                    />

                    <IconCard
                        icon="users"
                        title="Team of Professionals"
                        subtitle="Our team is made of experienced and professional peoples"
                    />
                </div>

                <div className="works">
                    <SectionHeader
                        title="Our works"
                        subtitle="That’s the main thing people are controlled by! Thoughts- their perception of themselves!"
                    />

                    <div className="row">
                        {works.map((work, index) => (
                            <WorkCard
                                key={index}
                                imageUrl={work.imageUrl}
                                title={work.title}
                                subtitle={work.subtitle}
                                viewLink={work.viewLink}
                                order={index}
                            />
                        ))}
                    </div>
                </div>

                <div className="review">
                    <SectionHeader
                        title="What our customers think about us"
                        subtitle="That’s the main thing people are controlled by! Thoughts- their perception of themselves!"
                    />

                    <div className="d-md-flex">
                        <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <Review
                                    url="https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg"
                                    title="Winter is coming"
                                    subtitle="Tell them, the North Remembers"
                                    reviewer="Maisie Williams"
                                    profession="Actress"
                                    isActive={true}
                                />

                                <Review
                                    url="https://media1.popsugar-assets.com/files/thumbor/xY3BdKypxx5-xtLazUhzPoO3S7M/0x0:3085x3085/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/12/07/019/n/1922153/6cad0ab66391218092c254.74357738_/i/jenna-ortega-beauty-looks.jpg"
                                    title="Excellent! Awesome service"
                                    subtitle="you are the shadow to my light did you feel us? another start you fade away"
                                    reviewer="Jenna Ortega"
                                    profession="Actress"
                                    isActive={false}
                                />

                                <Review
                                    url="https://i1.sndcdn.com/artworks-9AztcnYMqDy2pncD-7W2KRw-t500x500.jpg"
                                    title="I'm levitating"
                                    subtitle="If you wanna run away with me I know a galaxy and I can take you for a ride"
                                    reviewer="Dua Lipa"
                                    profession="Singer"
                                    isActive={false}
                                />
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                            <div className="total-review-count text-info  fw-bold my-3">Total 3 reviews</div>
                        </div>

                        <AddReviewForm />
                    </div>
                </div>

                <div className="team">
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
            </div>

            <Footer />
        </div>
    );
}

export default App;
