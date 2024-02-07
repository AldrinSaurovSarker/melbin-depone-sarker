import { Link } from 'react-router-dom'

import SectionHeader from "./SectionHeader"
import Review from "./Review"
import AddReviewForm from "./AddReviewForm"

export default function ReviewList() {
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

    const linkPath = `/reviews/`

    return (
        <div className="review" id="reviews">
            <SectionHeader
                title="What our customers think about us"
                subtitle="That’s the main thing people are controlled by! Thoughts- their perception of themselves!"
            />

            <div className="d-lg-flex">
                <div id="carouselFade" className="col-lg-8 carousel carousel-review slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                        {reviewsData.map((review, index) => (
                            <div key={index} className={`carousel-item h-100 ${review.isActive ? 'active' : ''} row g-0 d-md-flex pt-5`}>
                                <Review
                                    title={review.title}
                                    subtitle={review.subtitle}
                                    reviewer={review.reviewer}
                                    profession={review.profession}
                                    timestamp={review.timestamp}
                                    fullReview={false}
                                />
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                    <Link to={linkPath} className="total-review-count text-theme fw-bold my-3 cursor-pointer">
                        View all {reviewsData.length} reviews
                    </Link>
                </div>

                <AddReviewForm />
            </div>
        </div>
    )
}