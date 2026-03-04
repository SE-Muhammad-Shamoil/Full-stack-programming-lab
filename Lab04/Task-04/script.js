/**
 * Task 04 – Tabbed Content with Smooth Scroll
 * Demonstrates: DOM Manipulation, Effects & Animations, Event Handling
 * Uses: jQuery .fadeIn(), .slideDown(), .addClass(), smooth scroll
 */

$(document).ready(function () {

  // ── Tab switching logic ──
  $(".tab-btn").on("click", function () {
    const targetTab = $(this).data("tab"); // Get target tab ID from data attribute

    // ── Step 1: Update active button styling ──
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // ── Step 2: Hide all panels first, then show the selected one ──
    $(".tab-panel").fadeOut(150, function () {
      // After fadeOut completes, show only the target panel
      $(".tab-panel").removeClass("active");
      $("#" + targetTab)
        .addClass("active")
        .hide()           // Ensure hidden before slideDown
        .slideDown(350);  // Animate the content into view
    });

    // ── Step 3: Smooth scroll to the tab content area ──
    // This is useful on smaller screens where content may be below the fold
    $("html, body").animate(
      { scrollTop: $(".tab-content-wrapper").offset().top - 20 },
      500  // Scroll duration in milliseconds
    );
  });

  // ── Initialize: show the first tab's content on load ──
  $(".tab-panel").hide();
  $("#home").addClass("active").show();

});
