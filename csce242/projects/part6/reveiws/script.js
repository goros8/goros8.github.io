const getReviews = async () => {
    const url = 'reviews.json'; // Update this if your JSON file is located elsewhere

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showReviews = async () => {
    const reviewsData = await getReviews();

    // Get the reviews container
    const reviewsContainer = document.getElementById('reviews');

    // Clear existing reviews
    reviewsContainer.innerHTML = '';

    reviewsData.reviews.forEach((review) => {
        reviewsContainer.append(getReviewSection(review));
    });
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
        const starImg = document.createElement('img');
        starImg.src = (i <= review.stars) ? 'filled_star.png' : 'empty_star.png'; // Adjust the paths to your star images
        starImg.alt = `${i} star${i > 1 ? 's' : ''}`;
        starsDiv.append(starImg);
    }
    commentDiv.append(starsDiv);

    const p = document.createElement('p');
    p.innerHTML = review.review;
    commentDiv.append(p);

    return commentDiv;
};

// Show all of the reviews when the page loads
showReviews();
