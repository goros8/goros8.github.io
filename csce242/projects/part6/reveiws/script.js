const burger = document.getElementById("toggle-nav");
burger.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
}

const getReviews = async () => {
    const url = 'reviews.json'; // Update this if your JSON file is located elsewhere

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error("Error fetching reviews:", error);
    }
};

const showReviews = async () => {
    const reviewsData = await getReviews();

    const reviewsContainer = document.getElementById('reviews');

    reviewsContainer.innerHTML = '';

    if (reviewsData && reviewsData.reviews) {
        reviewsData.reviews.forEach((review) => {
            reviewsContainer.append(getReviewSection(review));
        });
    } else {
        console.error("No reviews found");
        reviewsContainer.innerHTML = '<p>No reviews available.</p>';
    }
};

const getReviewSection = (review) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const h3 = document.createElement('h3');
    h3.innerHTML = review.user;
    commentDiv.append(h3);

    // Display the review date
    const dateP = document.createElement('p');
    dateP.classList.add('review-date');
    dateP.innerHTML = `Date: ${review.date}`;
    commentDiv.append(dateP);

    // Create star rating display
    const starsDiv = document.createElement('div');
    starsDiv.classList.add('stars');
    for (let i = 1; i <= 5; i++) {
        const starDiv = document.createElement('div');
        starDiv.classList.add('star');
        if (i > review.stars) {
            starDiv.style.backgroundColor = 'lightgray';
        }
        starsDiv.append(starDiv);
    }
    commentDiv.append(starsDiv);

    const p = document.createElement('p');
    p.innerHTML = review.review;
    commentDiv.append(p);

    return commentDiv;
};

// Show all of the reviews when the page loads
document.addEventListener("DOMContentLoaded", showReviews);
