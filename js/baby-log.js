// News Page Manager
class NewsPageManager {
  constructor() {
    this.updatesContainer = document.getElementById("updates-container");
    this.diariesContainer = document.getElementById("diaries-container");
    this.init();
  }

  async init() {
    await this.loadUpdates();
    await this.loadDiaries();
  }

  async loadUpdates() {
    try {
      const response = await fetch("./data/updates.json");
      const updates = await response.json();
      this.renderUpdates(updates);
    } catch (error) {
      console.error("Error loading updates:", error);
      this.renderDefaultUpdates();
    }
  }

  async loadDiaries() {
    try {
      const response = await fetch("./data/diaries.json");
      const diaries = await response.json();
      this.renderDiaries(diaries);
    } catch (error) {
      console.error("Error loading diaries:", error);
      this.renderDefaultDiaries();
    }
  }

  renderUpdates(updates) {
    if (!this.updatesContainer) return;

    const updatesHTML = updates
      .map(
        (update, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${update.date}</div>
                    <h3 class="news-title">${update.title}</h3>
                    <p class="news-excerpt">${update.excerpt}</p>
                    <div class="news-full" id="update-full-${index}">
                        ${update.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('update-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.updatesContainer.innerHTML = updatesHTML;
  }

  renderDiaries(diaries) {
    if (!this.diariesContainer) return;

    const diariesHTML = diaries
      .map(
        (diary, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${diary.date}</div>
                    <h3 class="news-title">${diary.title}</h3>
                    <p class="news-excerpt">${diary.excerpt}</p>
                    <div class="news-full" id="diary-full-${index}">
                        ${diary.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('diary-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.diariesContainer.innerHTML = diariesHTML;
  }

  renderDefaultUpdates() {
    if (!this.updatesContainer) return;

    const defaultUpdates = [
      {
        title: "New Factory Expansion Released!",
        date: "June 15, 2015",
        excerpt:
          "We're excited to announce the biggest update yet - the Factory Expansion Pack! Players can now build multiple production lines and unlock advanced doll customization tools.",
        fullText:
          "The Factory Expansion Pack introduces a completely new dimension to DIY Doll Factory. Players can now construct multiple production lines, each specializing in different types of doll parts. The new system allows for strategic resource management and creates endless possibilities for doll creation. Additionally, we've added 50+ new accessories, including rare golden items that can only be found in special events. The expansion also includes a new tutorial system to help players master the advanced factory mechanics. We've received amazing feedback from our beta testers, and we can't wait to see what incredible doll combinations our players will create!",
        image: "new.jpg",
      },
      {
        title: "Holiday Event Coming Soon",
        date: "June 10, 2015",
        excerpt:
          "Get ready for the most festive season in DIY Doll Factory! Special holiday-themed doll parts and limited-time factory upgrades will be available.",
        fullText:
          "The holiday season is approaching, and we're bringing the festive spirit to DIY Doll Factory! Starting December 20th, players will have access to exclusive holiday-themed doll parts including Santa hats, snowflake accessories, and winter clothing items. The factory will also receive special holiday decorations and temporary upgrades that boost production during the event period. We're also introducing a new 'Gift Workshop' where players can create special holiday dolls to share with friends. The event will run until January 5th, so make sure to collect all the seasonal items while they're available!",
        image: "new2.jpg",
      },
      {
        title: "Performance Improvements",
        date: "April 5, 2015",
        excerpt:
          "We've optimized the game engine for smoother gameplay and faster loading times across all devices.",
        fullText:
          "Our development team has been working hard to improve the overall performance of DIY Doll Factory. The latest update includes significant optimizations to the game engine, resulting in smoother animations and faster loading times. We've also improved the mobile experience with better touch controls and reduced battery consumption. The factory building interface has been streamlined for easier navigation, and the doll customization screen now loads twice as fast. These improvements ensure that players can enjoy the game seamlessly across all devices, from smartphones to desktop computers.",
        image: "new3.jpg",
      },
    ];

    this.renderUpdates(defaultUpdates);
  }

  renderDefaultDiaries() {
    if (!this.diariesContainer) return;

    const defaultDiaries = [
      {
        title: "My First Perfect Doll Collection",
        date: "June 12, 2015",
        excerpt:
          "After weeks of running and collecting, I finally completed my first perfect doll collection. Here's my journey and some tips for new players.",
        fullText:
          "When I first started playing DIY Doll Factory, I had no idea how addictive this game would become. My journey began with simple runs, collecting basic doll parts and learning the mechanics. As I progressed, I discovered the joy of factory management and strategic planning. The key to building a perfect collection is patience and persistence. I learned to focus on specific themes - my first complete set was a 'Nature Collection' with forest-themed accessories. The most challenging part was finding the rare golden items, but the satisfaction of completing a collection made it all worthwhile. My advice to new players: start with one theme and master it before moving to others. Also, don't forget to upgrade your factory regularly - it makes a huge difference in production efficiency!",
        image: "new.jpg",
      },
      {
        title: "The Mountain Trail Adventure",
        date: "April 8, 2015",
        excerpt:
          "Exploring the new mountain trail path revealed some of the most challenging yet rewarding doll parts I've ever collected.",
        fullText:
          "The mountain trail path is definitely the most challenging route in the game, but it's also the most rewarding. The path features steep jumps, narrow platforms, and unpredictable obstacles that test your timing and reflexes. However, the doll parts you find here are absolutely unique - mountain gear, hiking accessories, and adventure equipment that you won't find anywhere else. I spent three days mastering this path, and the effort was worth it. My 'Adventure Doll' collection is now one of my favorites, featuring climbing gear, hiking boots, and survival equipment. The key to success on this path is to practice the timing of your jumps and to be patient - some of the best items are hidden in hard-to-reach places. I recommend trying this path only after you've mastered the basic controls and have some experience with the game.",
        image: "new2.jpg",
      },
      {
        title: "Factory Management Tips",
        date: "April 3, 2015",
        excerpt:
          "After managing my doll factory for months, I've learned some valuable strategies that I want to share with the community.",
        fullText:
          "Factory management is the heart of DIY Doll Factory, and mastering it can make the difference between a good player and a great one. My first tip is to always prioritize upgrading your production speed before expanding. A faster production line means more dolls in less time, which translates to more resources for further upgrades. Secondly, focus on one type of doll part at a time. Specializing in a particular category (like accessories or clothing) allows you to build expertise and create more valuable collections. Third, don't neglect the storage system - organized storage makes it much easier to find the parts you need when creating dolls. Finally, participate in community events and challenges. These often provide rare materials and exclusive doll parts that can't be obtained through regular gameplay. The factory aspect of this game is what keeps me coming back - there's always something new to optimize or improve!",
        image: "new3.jpg",
      },
    ];

    this.renderDiaries(defaultDiaries);
  }
}

// Modal functionality
function showModal(content, title, image = null) {
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    margin: 1rem;
  `;

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "×";
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  `;

  // Add content to modal
  let modalHTML = `<h2 style="margin-bottom: 1rem; color: #ff6b9d;">${title}</h2>`;

  if (image) {
    modalHTML += `<img src="./image/${image}" alt="${title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">`;
  }

  modalHTML += `<div style="line-height: 1.6; color: #333;">${content}</div>`;

  modalContent.innerHTML = modalHTML;

  // Add close button to modal
  modalContent.appendChild(closeButton);

  // Add modal to page
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Close modal functionality
  function closeModal() {
    document.body.removeChild(modalOverlay);
  }

  closeButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Toggle read more functionality
function toggleReadMore(elementId, button) {
  const fullText = document.getElementById(elementId);
  if (fullText) {
    const content = fullText.innerHTML;
    const titleElement =
      fullText.previousElementSibling?.previousElementSibling;
    const title = titleElement ? titleElement.textContent : "Article";

    // Check which card this is and assign appropriate image
    let image = null;
    if (title === "New Factory Expansion Released!") {
      image = "new.jpg";
    } else if (title === "Performance Improvements") {
      image = "new3.jpg";
    } else if (title === "The Mountain Trail Adventure") {
      image = "new2.jpg";
    }

    showModal(content, title, image);
  } else {
    console.warn("Element not found:", elementId);
  }
}

// Initialize news page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new NewsPageManager();
});
