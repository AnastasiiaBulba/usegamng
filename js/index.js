// Homepage JavaScript
class HomepageManager {
  constructor() {
    this.reviewsContainer = document.getElementById("reviews-container");
    this.init();
  }

  async init() {
    await this.loadReviews();
  }

  async loadReviews() {
    try {
      const response = await fetch("./data/reviews.json");
      const reviews = await response.json();
      this.renderReviews(reviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
      this.renderDefaultReviews();
    }
  }

  renderReviews(reviews) {
    if (!this.reviewsContainer) return;

    const reviewsHTML = reviews
      .map(
        (review) => `
            <div class="review-card">
                <div class="review-author">${review.author}</div>
                <div class="review-text">"${review.text}"</div>
            </div>
        `
      )
      .join("");

    this.reviewsContainer.innerHTML = reviewsHTML;
  }

  renderDefaultReviews() {
    if (!this.reviewsContainer) return;

    const defaultReviews = [
      {
        author: "Sarah M.",
        text: "This game is absolutely addictive! I love collecting all the different doll parts and creating unique combinations. The running mechanics are smooth and the customization options are endless.",
      },
      {
        author: "Mike R.",
        text: "Perfect game for relaxing after a long day. The factory building aspect adds a nice strategic element, and the doll collection system is really satisfying to complete.",
      },
      {
        author: "Emma L.",
        text: "My kids love this game! It's educational and fun at the same time. They learn about colors, shapes, and creativity while having a blast running and collecting.",
      },
      {
        author: "David K.",
        text: "Great casual game with beautiful graphics. The different themed paths keep things interesting, and I love discovering new accessories for my dolls.",
      },
    ];

    this.renderReviews(defaultReviews);
  }
}

// Scroll to game function
function scrollToGame() {
  const gameSection = document.querySelector(".game-section");
  if (gameSection) {
    gameSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Initialize homepage when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new HomepageManager();
});
