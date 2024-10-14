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

    const img = document.createElement('img');
    img.src = 'stars.jpg'; // You can adjust the source if needed
    img.alt = `${review.stars} stars`;
    commentDiv.append(img);

    const p = document.createElement('p');
    p.innerHTML = review.review;
    commentDiv.append(p);

    return commentDiv;
};

// Show all of the reviews when the page loads
showReviews();