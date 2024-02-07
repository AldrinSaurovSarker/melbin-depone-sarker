import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Review from './Review'
import SectionHeader from './SectionHeader'
import WorkCard from './WorkCard'

export default function ReviewPage() {
    let { projectId } = useParams()

    const reviewsData = [
        {
            title: "Winter is coming",
            subtitle: "Collaboration is the heart of event planning, and this system facilitates it beautifully. With built-in tools for team communication, task assignments, and progress tracking, it fosters a collaborative environment that boosts productivity and ensures nothing falls through the cracks. Furthermore, the attendee engagement tools, such as personalized schedules and interactive event maps, enhance the overall experience for participants, making each event memorable.",
            reviewer: "Maisie Williams",
            profession: "Actress",
            timestamp: "15:23 August 14, 2022",
            isActive: true
        },
        {
            title: "Excellent! Awesome service",
            subtitle: "In the few instances where I encountered challenges or had questions, the support team was responsive, knowledgeable, and genuinely eager to help. Their commitment to customer satisfaction is evident, providing peace of mind that you have a reliable partner in your event planning journey.",
            reviewer: "Jenna Ortega",
            profession: "Actress",
            timestamp: "11:11 November 11, 2022",
            isActive: false
        },
        {
            title: "I'm levitating",
            subtitle: "If you wanna run away with me I know a galaxy and I can take you for a ride",
            reviewer: "Dua Lipa",
            profession: "Singer",
            timestamp: "02:01 March 31, 2023",
            isActive: false
        }
    ]

    const works = [
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link2',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link3',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link4',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link5',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link6',
        },
    ];

    const overlayColor = 'rgba(0, 0, 0, 0.5)'

    const coverStyle = {
        backgroundImage: `url(/image/review.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
    }

    const overlay = {
        background: overlayColor
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="text-white text-center p-5 overlay-bg" style={coverStyle}>
                <div className="overlay-shade" style={overlay}>
                    <h1 className='text-uppercase fw-bold font-1 p-5'>REVIEWS</h1>
                </div>
            </div>

            {/* Blog Content */}
            <div className='container'>
                <div className="row mt-5 pt-5">
                    <div className="col-md-8">
                        <SectionHeader
                            title="What our customers think about us"
                            subtitle="That’s the main thing people are controlled by! Thoughts- their perception of themselves!"
                        />
                        {reviewsData.map((review, index) => (
                            <div key={index} className='my-5'>
                                <Review
                                    title={review.title}
                                    subtitle={review.subtitle}
                                    reviewer={review.reviewer}
                                    profession={review.profession}
                                    timestamp={review.timestamp}
                                    fullReview={true}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="col-md-4 mt-5 mt-md-0">
                        <h1 className='text-theme font-5'>Our works</h1>
                        <div className='row'>
                            {works.map((work, index) => (
                                <div key={index}>
                                    <WorkCard
                                        imageUrl={work.imageUrl}
                                        title={work.title}
                                        subtitle={work.subtitle}
                                        viewLink={work.viewLink}
                                        order={index}
                                        flag={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
