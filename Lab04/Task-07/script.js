/**
 * Task 07 – Drag-and-Drop Sortable List
 * Demonstrates: HTML5 Drag-and-Drop API + jQuery
 * Features: drag highlight, drop insertion, dynamic badge renumbering
 */

$(document).ready(function () {

  // ── Reference to the sortable list ──
  const $list = $("#sortable-list");

  // ── Variable to store the item currently being dragged ──
  let $dragItem = null;

  // ── Initialize order display on load ──
  updateOrderDisplay();

  // ══════════════════════════════════════════
  // Drag Start – fires when dragging begins
  // ══════════════════════════════════════════
  $list.on("dragstart", ".sort-item", function (e) {
    $dragItem = $(this); // Save reference to the dragged element

    // Add dragging class for visual feedback (partial transparency)
    $(this).addClass("dragging");

    // Store the item's text label in drag data transfer
    e.originalEvent.dataTransfer.effectAllowed = "move";
    e.originalEvent.dataTransfer.setData("text/plain", $(this).find(".item-label").text());
  });

  // ══════════════════════════════════════════
  // Drag End – fires when dragging stops
  // ══════════════════════════════════════════
  $list.on("dragend", ".sort-item", function () {
    // Remove dragging class and all drag-over highlights
    $(this).removeClass("dragging");
    $(".sort-item").removeClass("drag-over");

    // Update the order display after drop is complete
    updateOrderDisplay();
    renumberBadges();
  });

  // ══════════════════════════════════════════
  // Drag Over – fires when dragging over a target
  // ══════════════════════════════════════════
  $list.on("dragover", ".sort-item", function (e) {
    e.preventDefault(); // Required to allow dropping

    // Don't highlight the item we're dragging itself
    if ($(this)[0] !== $dragItem[0]) {
      $(".sort-item").removeClass("drag-over");
      $(this).addClass("drag-over"); // Highlight potential drop target
    }
  });

  // ══════════════════════════════════════════
  // Drag Leave – remove highlight when leaving
  // ══════════════════════════════════════════
  $list.on("dragleave", ".sort-item", function () {
    $(this).removeClass("drag-over");
  });

  // ══════════════════════════════════════════
  // Drop – fires when item is dropped on target
  // ══════════════════════════════════════════
  $list.on("drop", ".sort-item", function (e) {
    e.preventDefault(); // Prevent default browser drop behavior

    const $dropTarget = $(this);

    // Don't drop on itself
    if ($dropTarget[0] === $dragItem[0]) return;

    // Determine position using DOM comparison
    // insertBefore or insertAfter based on position in list
    const items = $list.find(".sort-item").toArray();
    const dragIdx = items.indexOf($dragItem[0]);
    const dropIdx = items.indexOf($dropTarget[0]);

    if (dragIdx < dropIdx) {
      // Dragging downward: insert after the drop target
      $dragItem.insertAfter($dropTarget);
    } else {
      // Dragging upward: insert before the drop target
      $dragItem.insertBefore($dropTarget);
    }

    // Clean up classes
    $dropTarget.removeClass("drag-over");
  });

  // ── Helper: renumber all badges after reorder ──
  function renumberBadges() {
    $list.find(".sort-item").each(function (index) {
      $(this).find(".badge").text(index + 1);
    });
  }

  // ── Helper: update the order display text panel ──
  function updateOrderDisplay() {
    const order = [];
    $list.find(".sort-item .item-label").each(function () {
      order.push($(this).text());
    });
    // Show the order as an arrow-separated string
    $("#order-text").text(order.join(" → "));
  }

});
