import React from "react";
import "../../styles/Reviews.css";

const reviews = [
    {
        id: 1,
        name: "Reviewer 1",
        stars: 5,
        comment: "This influencer is amazing! Very professional and delivered great results for our campaign. Highly recommend!",
    },
    {
        id: 2,
        name: "Reviewer 2",
        stars: 5,
        comment: "This influencer is amazing! Very professional and delivered great results for our campaign. Highly recommend!",
    },
    {
        id: 3,
        name: "Reviewer 3",
        stars: 5,
        comment: "This influencer is amazing! Very professional and delivered great results for our campaign. Highly recommend!",
    },
];

const Reviews = () => {
    return (
        <div className="reviews-container">
            <h2 className="reviews-title">Reviews</h2>
            <div className="reviews-list">
                {reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <div className="review-header">
                            <span className="review-name">{review.name}</span>
                            <span className="review-stars">{"★".repeat(review.stars)}</span>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
