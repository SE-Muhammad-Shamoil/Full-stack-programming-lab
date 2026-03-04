/**
 * Task 06 – API Data Fetcher
 * Demonstrates: jQuery Ajax, DOM Manipulation
 * Fetches posts from https://jsonplaceholder.typicode.com/posts
 * Displays in paginated cards with a "Load More" button
 */

$(document).ready(function () {

  // ── Pagination variables ──
  const PAGE_SIZE = 5;    // Number of posts to fetch per load
  let currentPage = 1;    // Tracks the current page index
  let totalLoaded = 0;    // Total posts rendered so far
  const MAX_POSTS = 100;  // JSONPlaceholder provides exactly 100 posts

  // ── Fetch the first batch of posts on page load ──
  fetchPosts();

  // ── "Load More" button click handler ──
  $("#load-more-btn").on("click", function () {
    currentPage++;
    fetchPosts();
  });

  // ── Core function: fetch posts via jQuery Ajax ──
  function fetchPosts() {
    // Show loader and disable button during fetch
    $("#loader").show();
    $("#load-more-btn").prop("disabled", true);

    // Build API URL with pagination query params
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${PAGE_SIZE}`;

    // jQuery Ajax GET request
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",

      // ── Success callback: render each post as a card ──
      success: function (posts) {
        $.each(posts, function (i, post) {
          totalLoaded++;  // Increment total count

          // Build post card using jQuery DOM construction
          const $card = $("<div>").addClass("post-card");
          const $header = $("<div>").addClass("post-header");
          const $num = $("<span>").addClass("post-num").text(`#${post.id}`);
          const $title = $("<span>").addClass("post-title").text(post.title);
          const $body = $("<p>").addClass("post-body").text(post.body);

          // Assemble the card
          $header.append($num, $title);
          $card.append($header, $body);

          // Append to posts container
          $("#posts-container").append($card);
        });

        // Update post count display
        $("#post-count").text(totalLoaded);

        // ── Re-enable Load More unless all posts are loaded ──
        if (totalLoaded >= MAX_POSTS) {
          $("#load-more-btn")
            .prop("disabled", true)
            .text("All posts loaded ✓");
        } else {
          $("#load-more-btn").prop("disabled", false);
        }
      },

      // ── Error callback: handle failed requests ──
      error: function (xhr, status, error) {
        const $err = $("<div>")
          .addClass("post-card")
          .css("border-color", "rgba(248,113,113,0.4)")
          .css("color", "#f87171")
          .text("⚠️ Failed to load posts. Please check your connection and try again.");
        $("#posts-container").append($err);
        $("#load-more-btn").prop("disabled", false);
      },

      // ── Complete callback: always hide loader ──
      complete: function () {
        $("#loader").hide();
      }
    });
  }

});
