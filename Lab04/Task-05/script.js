/**
 * Task 05 – Chained Style Editor
 * Demonstrates: jQuery Method Chaining
 * Uses: .css().animate().addClass().removeClass() in chains
 * All style changes are applied via chained jQuery calls
 */

$(document).ready(function () {

  // ── Reference to the text box element ──
  const $box = $("#text-box");

  // ══════════════════════════════
  // FONT SIZE CONTROLS
  // Each button chains .css() directly on the $box selection
  // ══════════════════════════════

  // Small font size
  $("#size-sm").on("click", function () {
    $box.css("font-size", "14px").css("line-height", "1.6");
    setActiveBtn($(this), "#size-sm, #size-md, #size-lg, #size-xl");
  });

  // Medium font size
  $("#size-md").on("click", function () {
    $box.css("font-size", "18px").css("line-height", "1.7");
    setActiveBtn($(this), "#size-sm, #size-md, #size-lg, #size-xl");
  });

  // Large font size
  $("#size-lg").on("click", function () {
    $box.css("font-size", "24px").css("line-height", "1.6");
    setActiveBtn($(this), "#size-sm, #size-md, #size-lg, #size-xl");
  });

  // Extra-large font size
  $("#size-xl").on("click", function () {
    $box.css("font-size", "32px").css("line-height", "1.4");
    setActiveBtn($(this), "#size-sm, #size-md, #size-lg, #size-xl");
  });

  // ══════════════════════════════
  // TEXT COLOR CONTROLS
  // Chaining .css("color",...) on the target element
  // ══════════════════════════════

  $("#color-white").on("click", function () {
    $box.css("color", "#FFFFFF");
    setActiveBtn($(this), "#color-white, #color-cyan, #color-pink, #color-gold");
  });

  $("#color-cyan").on("click", function () {
    $box.css("color", "#00d4ff");
    setActiveBtn($(this), "#color-white, #color-cyan, #color-pink, #color-gold");
  });

  $("#color-pink").on("click", function () {
    $box.css("color", "#ff6ec7");
    setActiveBtn($(this), "#color-white, #color-cyan, #color-pink, #color-gold");
  });

  $("#color-gold").on("click", function () {
    $box.css("color", "#ffd700");
    setActiveBtn($(this), "#color-white, #color-cyan, #color-pink, #color-gold");
  });

  // ══════════════════════════════
  // BACKGROUND COLOR CONTROLS
  // Chain .css("background","...").css("border-color","...")
  // ══════════════════════════════

  $("#bg-dark").on("click", function () {
    $box.css("background", "rgba(15,15,30,0.9)").css("border-color", "rgba(255,255,255,0.1)");
    setActiveBtn($(this), "#bg-dark, #bg-blue, #bg-purple, #bg-green");
  });

  $("#bg-blue").on("click", function () {
    $box.css("background", "rgba(30,64,175,0.4)").css("border-color", "rgba(96,165,250,0.4)");
    setActiveBtn($(this), "#bg-dark, #bg-blue, #bg-purple, #bg-green");
  });

  $("#bg-purple").on("click", function () {
    $box.css("background", "rgba(88,28,135,0.4)").css("border-color", "rgba(168,85,247,0.4)");
    setActiveBtn($(this), "#bg-dark, #bg-blue, #bg-purple, #bg-green");
  });

  $("#bg-green").on("click", function () {
    $box.css("background", "rgba(6,78,59,0.4)").css("border-color", "rgba(52,211,153,0.4)");
    setActiveBtn($(this), "#bg-dark, #bg-blue, #bg-purple, #bg-green");
  });

  // ══════════════════════════════
  // BOLD / ITALIC TOGGLES
  // Chain .css() to toggle font-weight and font-style
  // ══════════════════════════════

  let isBold = false;
  $("#toggle-bold").on("click", function () {
    isBold = !isBold;
    // Chain: set font-weight, then toggle active class on button
    $box.css("font-weight", isBold ? "700" : "400");
    $(this).toggleClass("active-btn");
  });

  let isItalic = false;
  $("#toggle-italic").on("click", function () {
    isItalic = !isItalic;
    // Chain: set font-style, then toggle active class on button
    $box.css("font-style", isItalic ? "italic" : "normal");
    $(this).toggleClass("active-btn");
  });

  // ══════════════════════════════
  // RESET ALL STYLES
  // Chain multiple .css() calls to restore defaults
  // ══════════════════════════════

  $("#reset-all").on("click", function () {
    // Reset all styles back to default values using chaining
    $box
      .css("font-size", "1rem")
      .css("color", "#e2e8f0")
      .css("font-weight", "400")
      .css("font-style", "normal")
      .css("background", "rgba(255,255,255,0.06)")
      .css("border-color", "rgba(255,255,255,0.12)")
      .css("line-height", "1.8");

    // Remove active state from all control buttons
    $(".ctrl-btn").removeClass("active-btn");

    // Reset toggle states
    isBold = false;
    isItalic = false;
  });

  // ── Helper: mark one button as active in a group ──
  function setActiveBtn($btn, groupSelector) {
    $(groupSelector).removeClass("active-btn");
    $btn.addClass("active-btn");
  }

});
