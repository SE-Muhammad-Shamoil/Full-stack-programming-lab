/**
 * Task 02 – Animated Image Gallery
 * Demonstrates: Effects & Animations, DOM Manipulation, Chaining
 * Uses: jQuery .fadeOut()/.fadeIn() chained, dot nav, dynamic captions
 */

$(document).ready(function () {

  // ── Gallery data: each object holds an image URL and caption ──
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      caption: "🏔️ Majestic Mountain Peaks at Dawn"
    },
    {
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
      caption: "🌲 Enchanted Forest Trail"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      caption: "🌊 Serene Ocean Shoreline"
    },
    {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      caption: "🏖️ Golden Hour at the Beach"
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      caption: "⛰️ Snow-Capped Alpine Summit"
    }
  ];

  // ── Track current image index ──
  let current = 0;
  const total = images.length;

  // ── Set total count in HTML ──
  $("#total-images").text(total);

  // ── Build dot navigation dynamically ──
  $.each(images, function (i) {
    const $dot = $("<button>").addClass("dot");
    if (i === 0) $dot.addClass("active");
    $dot.on("click", function () {
      goTo(i); // Navigate to clicked dot's image
    });
    $("#dot-container").append($dot);
  });

  // ── Load the first image without animation ──
  loadImage(0);

  // ── Helper: load image at index 'idx' with fade animation ──
  function loadImage(idx) {
    const card = $("#gallery-img, #gallery-caption");

    // Chain: fade out → update → fade in
    $("#gallery-img")
      .fadeOut(300, function () {
        $(this)
          .attr("src", images[idx].src)
          .attr("alt", images[idx].caption)
          .fadeIn(400);
      });

    $("#gallery-caption")
      .fadeOut(200, function () {
        $(this).text(images[idx].caption).fadeIn(350);
      });

    // Update counter display
    $("#current-index").text(idx + 1);

    // Update active dot indicator
    $(".dot").removeClass("active");
    $(".dot").eq(idx).addClass("active");
  }

  // ── Navigate to a specific index ──
  function goTo(idx) {
    current = (idx + total) % total; // Wrap around using modulo
    loadImage(current);
  }

  // ── Previous button click ──
  $("#prev-btn").on("click", function () {
    goTo(current - 1);
  });

  // ── Next button click ──
  $("#next-btn").on("click", function () {
    goTo(current + 1);
  });

  // ── Auto-advance every 4 seconds ──
  setInterval(function () {
    goTo(current + 1);
  }, 4000);

});
