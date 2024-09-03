//constant 
import { latestStories } from "./constant.js";
// Function to simulate fetching stories with a Promise
function fetchLatestStories() {
  return new Promise((resolve) => {
    // Simulating an API call with a delay of 1 second
    setTimeout(() => {
      resolve(latestStories);
    }, 1000);
  });
}

// Render stories using promise
function renderStories() {
  const storiesContainer = document.getElementById('stories');
  
  fetchLatestStories().then((stories) => {
    // Generate HTML for each story using map
    storiesContainer.innerHTML = stories
      .map(story => `
        <div class="story">
          <a href="${story.link}" target="_blank">${story.title}</a>
        </div>
      `)
      .join('');  // Convert the array to a single HTML string
  });
}

// Call the function to render stories when the page loads
renderStories();