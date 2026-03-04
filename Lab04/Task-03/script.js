/**
 * Task 03 – Interactive Form Validation
 * Demonstrates: Event Handling, CSS Manipulation, DOM Manipulation
 * Uses: jQuery .blur(), .addClass(), .removeClass(), .fadeIn()
 * No page refresh – success message shown dynamically
 */

$(document).ready(function () {

  // ── Validation Rules ──

  // Validate: Full Name (letters and spaces only, min 3 chars)
  function validateName() {
    const val = $("#name").val().trim();
    if (val.length < 3) {
      showError("#name", "#name-error", "Name must be at least 3 characters.");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(val)) {
      showError("#name", "#name-error", "Name must contain only letters.");
      return false;
    }
    showSuccess("#name", "#name-error");
    return true;
  }

  // Validate: Email (standard email format)
  function validateEmail() {
    const val = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      showError("#email", "#email-error", "Please enter a valid email address.");
      return false;
    }
    showSuccess("#email", "#email-error");
    return true;
  }

  // Validate: Password (minimum 6 characters)
  function validatePassword() {
    const val = $("#password").val();
    if (val.length < 6) {
      showError("#password", "#password-error", "Password must be at least 6 characters.");
      return false;
    }
    showSuccess("#password", "#password-error");
    return true;
  }

  // Validate: Confirm Password (must match password)
  function validateConfirm() {
    const pass = $("#password").val();
    const conf = $("#confirm").val();
    if (conf !== pass || conf === "") {
      showError("#confirm", "#confirm-error", "Passwords do not match.");
      return false;
    }
    showSuccess("#confirm", "#confirm-error");
    return true;
  }

  // ── Helper: Apply error styles and show message ──
  function showError(inputId, errorId, message) {
    $(inputId)
      .removeClass("valid")
      .addClass("invalid");
    $(errorId).text(message);
  }

  // ── Helper: Apply success styles and clear error ──
  function showSuccess(inputId, errorId) {
    $(inputId)
      .removeClass("invalid")
      .addClass("valid");
    $(errorId).text("");
  }

  // ── Validate each field on blur (when user leaves the field) ──
  $("#name").on("blur", validateName);
  $("#email").on("blur", validateEmail);
  $("#password").on("blur", validatePassword);
  $("#confirm").on("blur", validateConfirm);

  // ── Handle form submission ──
  $("#reg-form").on("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Run all validators and collect results
    const isNameOk    = validateName();
    const isEmailOk   = validateEmail();
    const isPassOk    = validatePassword();
    const isConfirmOk = validateConfirm();

    // Only show success if ALL fields are valid
    if (isNameOk && isEmailOk && isPassOk && isConfirmOk) {
      // Hide the form and show success message with animation
      $("#reg-form").slideUp(400, function () {
        $("#success-msg").fadeIn(500);
      });
    }
  });

});
