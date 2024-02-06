export default function AddReviewForm() {
    return (
        <div className="container my-5">
            <div className="row justify-content-lg-center">
                <div className="col-lg-8">
                    <div className="add">
                        <h3>Satisfied with our service? Add a review</h3>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label text-variant text-theme fw-bold">Name</label>
                            <input type="text" className="form-control" id="userName" placeholder="Enter your name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="profession" className="form-label text-variant text-theme fw-bold">Profession</label>
                            <input type="text" className="form-control" id="profession" placeholder="Enter your profession" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="userReview" className="form-label text-variant text-theme fw-bold">Review</label>
                            <textarea className="form-control" id="userReview" rows="3" placeholder="Write your review here"></textarea>
                        </div>

                        <button type="submit" className="btn btn-theme">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
