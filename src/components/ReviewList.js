import { Link } from 'react-router-dom'

import SectionHeader from "./SectionHeader"
import Review from "./Review"
import AddReviewForm from "./AddReviewForm"

export default function ReviewList() {
    const reviewsData = [
        {
            title: "Winter is coming",
            subtitle: "Tell them, the North Remembers",
            reviewer: "Maisie Williams",
            profession: "Actress",
            timestamp: "15:23 August 14, 2022",
            isActive: true
        },
        {
            title: "Excellent! Awesome service",
            subtitle: "you are the shadow to my light did you feel us? another start you fade away",
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
                <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {reviewsData.map((review, index) => (
                            <div key={index} className={`carousel-item ${review.isActive ? 'active' : ''} row g-0 d-md-flex pt-5`}>
                                <Review
                                    title={review.title}
                                    subtitle={review.subtitle}
                                    reviewer={review.reviewer}
                                    profession={review.profession}
                                    timestamp={review.timestamp}
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

                    <div className="fw-bold my-3 cursor-pointer">
                        <Link to={linkPath} className="total-review-count text-theme">
                            View all {reviewsData.length} reviews
                        </Link>
                    </div>
                </div>

                <AddReviewForm />
            </div>
        </div>
    )
}