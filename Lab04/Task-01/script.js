/**
 * Task 01 – Dynamic List Manager
 * Demonstrates: DOM Manipulation, Event Handling, CSS Manipulation
 * Uses: jQuery for appending, removing, and hover effects
 */

$(document).ready(function () {
  // ── Track the number of items added (for numbering badges) ──
  let itemCount = 0;

  // ── Helper: Update the empty-state message visibility ──
  function updateEmptyMsg() {
    if ($("#item-list li").length === 0) {
      $("#empty-msg").fadeIn(300);
    } else {
      $("#empty-msg").fadeOut(200);
    }
  }

  // ── Helper: Renumber all list item badges after deletion ──
  function renumberItems() {
    $("#item-list li").each(function (index) {
      $(this)
        .find(".item-num")
        .text(index + 1);
    });
  }

  // ── Add item when button is clicked ──
  $("#add-btn").on("click", function () {
    addItem();
  });

  // ── Also allow adding with Enter key ──
  $("#item-input").on("keypress", function (e) {
    if (e.key === "Enter") {
      addItem();
    }
  });

  // ── Core function: create and append a new list item ──
  function addItem() {
    // Get trimmed input value
    const text = $("#item-input").val().trim();

    // Do nothing if the field is empty
    if (text === "") {
      // Shake the input to indicate error
      $("#item-input").addClass("shake");
      setTimeout(function () {
        $("#item-input").removeClass("shake");
      }, 500);
      return;
    }

    // Increment the item counter
    itemCount++;

    // Build the list item HTML using jQuery DOM creation
    const $li = $("<li>").addClass("list-item");
    const $num = $("<span>").addClass("item-num").text(itemCount);
    const $text = $("<span>").addClass("item-text").text(text);
    const $del = $("<button>").addClass("delete-btn").text("✕ Remove");

    // Assemble the list item
    $li.append($num, $text, $del);

    // Append to the list and clear input
    $("#item-list").append($li);
    $("#item-input").val("").focus();

    // ── Delete button event handler ──
    $del.on("click", function () {
      // Animate out before removing from DOM
      $li.animate(
        {
          opacity: 0,
          height: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
        },
        300,
        function () {
          $(this).remove();
          renumberItems(); // Update numbering
          updateEmptyMsg(); // Show/hide empty message
        },
      );
    });

    // Update empty message state
    updateEmptyMsg();
  }

  // ── Show empty message on page load ──
  updateEmptyMsg();
});
