/**
 * Task 08 – Quiz Game
 * Demonstrates: DOM Manipulation, Event Handling, Animations
 * Uses: jQuery .fadeIn()/.fadeOut(), .addClass(), .text(), .prop()
 * Features: one question at a time, score tracking, animated result
 */

$(document).ready(function () {

  // ══════════════════════════════════════════
  // QUIZ DATA – Questions, options, and answers
  // ══════════════════════════════════════════
  const questions = [
    {
      question: "What does jQuery stand for?",
      options: ["JavaScript Query", "Just Query", "jQuery is not an acronym", "Java Query Engine"],
      answer: "jQuery is not an acronym"
    },
    {
      question: "Which symbol is used as a shorthand for jQuery?",
      options: ["@", "#", "$", "&"],
      answer: "$"
    },
    {
      question: "Which jQuery method is used to hide an element?",
      options: [".hide()", ".display(none)", ".invisible()", ".remove()"],
      answer: ".hide()"
    },
    {
      question: "What does the jQuery .ajax() method do?",
      options: [
        "Styles elements dynamically",
        "Performs asynchronous HTTP requests",
        "Animates elements on the page",
        "Selects DOM elements"
      ],
      answer: "Performs asynchronous HTTP requests"
    },
    {
      question: "Which jQuery effect fades an element in and then out?",
      options: [".fadeToggle()", ".blink()", ".pulse()", ".flashIn()"],
      answer: ".fadeToggle()"
    },
    {
      question: "How do you select all <p> elements with jQuery?",
      options: ['$("#p")', '$(\'p\')', '$(".p")', "$(all p)"],
      answer: "$('p')"
    },
    {
      question: "Which method attaches an event handler in jQuery?",
      options: [".listen()", ".bind()", ".on()", ".attach()"],
      answer: ".on()"
    }
  ];

  // ── State variables ──
  let currentQ = 0;   // Index of currently displayed question
  let score = 0;       // User's score
  let answered = false; // Prevents double-answering

  // ── Set total question count display ──
  $("#q-total").text(questions.length);

  // ── Load the first question on start ──
  loadQuestion(currentQ);

  // ════════════════════════════════════
  // FUNCTION: Load question at index idx
  // ════════════════════════════════════
  function loadQuestion(idx) {
    answered = false; // Reset answer lock for new question

    // Disable the Next button until an answer is selected
    $("#next-btn").prop("disabled", true);

    const qData = questions[idx];

    // ── Update progress bar width ──
    const progressPercent = ((idx) / questions.length) * 100;
    $("#progress-fill").css("width", progressPercent + "%");

    // ── Update question number display ──
    $("#q-num").text(idx + 1);

    // ── Fade out old content, update, fade in new content ──
    $("#question-box").fadeOut(200, function () {

      // Set question text
      $("#question-text").text(qData.question);

      // Clear old options
      $("#options-container").empty();

      // Build option buttons dynamically
      $.each(qData.options, function (i, option) {
        const $btn = $("<button>")
          .addClass("option-btn")
          .text(option)
          .attr("id", "opt-" + i);

        // ── Attach click handler to each option ──
        $btn.on("click", function () {
          if (answered) return; // Ignore if already answered
          answered = true;

          checkAnswer($(this), option, qData.answer);
        });

        $("#options-container").append($btn);
      });

      // Fade the question box back in
      $(this).fadeIn(300);
    });
  }

  // ════════════════════════════════════════════════
  // FUNCTION: Check selected answer vs correct answer
  // ════════════════════════════════════════════════
  function checkAnswer($selected, chosen, correct) {
    // Disable all option buttons to prevent further clicks
    $(".option-btn").prop("disabled", true);

    if (chosen === correct) {
      // Correct: highlight green and increment score
      $selected.addClass("correct");
      score++;
    } else {
      // Wrong: highlight red on selected, green on correct
      $selected.addClass("wrong");
      $(".option-btn").each(function () {
        if ($(this).text() === correct) {
          $(this).addClass("correct");
        }
      });
    }

    // Enable the Next button after answering
    $("#next-btn").prop("disabled", false);
  }

  // ════════════════════════════════════════
  // EVENT: Next button click
  // ════════════════════════════════════════
  $("#next-btn").on("click", function () {
    currentQ++;

    if (currentQ < questions.length) {
      // Load the next question
      loadQuestion(currentQ);
    } else {
      // All questions answered – show result screen
      showResult();
    }
  });

  // ════════════════════════════════════════
  // FUNCTION: Display animated result screen
  // ════════════════════════════════════════
  function showResult() {
    const total = questions.length;
    const percent = Math.round((score / total) * 100);

    // Determine result tier and message
    let icon, title, message;

    if (percent === 100) {
      icon = "🏆"; title = "Perfect Score!";
      message = "Outstanding! You answered every question correctly. jQuery master!";
    } else if (percent >= 70) {
      icon = "🌟"; title = "Great Job!";
      message = "Impressive performance! You have a solid grasp of jQuery.";
    } else if (percent >= 40) {
      icon = "📚"; title = "Keep Learning!";
      message = "Not bad! Review the missed questions to strengthen your skills.";
    } else {
      icon = "💪"; title = "Don't Give Up!";
      message = "jQuery takes practice. Try again and you'll improve!";
    }

    // Set result content
    $("#result-icon").text(icon);
    $("#result-title").text(title);
    $("#result-score").text(score + " / " + total + " (" + percent + "%)");
    $("#result-message").text(message);

    // ── Set final progress bar to 100% ──
    $("#progress-fill").css("width", "100%");

    // ── Transition: fade out quiz, fade in result ──
    $("#quiz-wrapper").fadeOut(400, function () {
      $("#result-screen").removeClass("hidden").hide().fadeIn(500);
    });
  }

  // ════════════════════════════════════════
  // EVENT: Restart button – reset quiz state
  // ════════════════════════════════════════
  $("#restart-btn").on("click", function () {
    // Reset all state variables
    currentQ = 0;
    score = 0;
    answered = false;

    // ── Transition: fade out result, fade in quiz ──
    $("#result-screen").fadeOut(400, function () {
      $(this).addClass("hidden");

      // Reset progress bar
      $("#progress-fill").css("width", "0%");
      $("#q-num").text(1);

      // Load the first question again
      loadQuestion(0);
      $("#quiz-wrapper").hide().fadeIn(400);
    });
  });

});
