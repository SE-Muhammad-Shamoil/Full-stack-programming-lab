$(document).ready(function () {

    // ── Cart Counter ─────────────────────────────────────────────
    let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
    updateCartDisplay();

    function updateCartDisplay() {
        $('#cart-count').text(cartCount + (cartCount === 1 ? ' Item(s)' : ' Items'));
    }

    // ── ADD TO CART buttons ───────────────────────────────────────
    $(document).on('click', '.btn-add-cart, .btn-add-cart-lg, #addToCartBtn', function (e) {
        e.preventDefault();
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartDisplay();
        let btn = $(this);
        let orig = btn.html();
        btn.html('&#10003; Added!').css('background', '#2d7a2d');
        setTimeout(function () {
            btn.html(orig).css('background', '');
        }, 2000);
    });

    // ── SEARCH ───────────────────────────────────────────────────
    $('#search-input').on('keyup', function (e) {
        if (e.key === 'Enter') {
            let q = $(this).val().trim();
            if (q) window.location.href = 'category.html';
        }
    });

    // ── PRODUCT TABS ─────────────────────────────────────────────
    window.showTab = function (id, link) {
        $('.tab-content').hide();
        $('#tab-' + id).show();
        $('.tabs-nav a').removeClass('active');
        $(link).addClass('active');
    };

    // ── PRODUCT THUMB CLICK ───────────────────────────────────────
    window.setMainImg = function (i) {
        $('#mainProductImg').attr('src', 'images/product_thumb_' + i + '.jpg');
    };

    // ── PRICE CALCULATOR (product page) ──────────────────────────
    $('.price-calc select').on('change', function () {
        let total = 650;
        $('.price-calc select').each(function () {
            if ($(this).val() !== '—' && $(this).val() !== '') total += 50;
        });
        $('#calcTotal').text('$' + total.toFixed(2));
    });

    // ── FORM: LOGIN ───────────────────────────────────────────────
    window.handleLogin = function (e) {
        e.preventDefault();
        let email = $('#loginEmail').val().trim();
        let pass = $('#loginPassword').val();
        if (!email || !email.includes('@')) {
            showError('#loginEmail', 'Please enter a valid email.');
            return false;
        }
        if (pass.length < 6) {
            showError('#loginPassword', 'Password must be at least 6 characters.');
            return false;
        }
        alert('Login successful! Redirecting to your account...');
        window.location.href = 'account.html';
        return false;
    };

    // ── FORM: REGISTER ────────────────────────────────────────────
    window.handleRegister = function (e) {
        e.preventDefault();
        let pass = $('#reg_password').val();
        let conf = $('#reg_confirm').val();
        if (pass !== conf) {
            showError('#reg_confirm', 'Passwords do not match.');
            return false;
        }
        if (!$('#termsCheck').is(':checked')) {
            alert('Please agree to the Terms & Conditions.');
            return false;
        }
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html';
        return false;
    };

    // ── FORM: CONTACT ─────────────────────────────────────────────
    window.handleContact = function (e) {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value.trim();
        let email = form.email.value.trim();
        let msg = form.message.value.trim();
        if (name.length < 3) { showError('[name="name"]', 'Name must be at least 3 characters.'); return false; }
        if (!email.includes('@')) { showError('[name="email"]', 'Enter a valid email.'); return false; }
        if (msg.length < 10) { showError('[name="message"]', 'Message too short (min 10 chars).'); return false; }
        $('<div class="success-msg">Thank you! Your message has been sent.</div>').insertBefore('#contactForm');
        form.reset();
        return false;
    };

    // ── FORM: FORGOT ──────────────────────────────────────────────
    window.handleForgot = function (e) {
        e.preventDefault();
        alert('A password reset link has been sent to your email.');
        return false;
    };

    // ── FORM: CHECKOUT ────────────────────────────────────────────
    window.handleCheckout = function (e) {
        e.preventDefault();
        let btn = $(e.target).find('button[type="submit"]');
        btn.prop('disabled', true).text('Processing...');
        setTimeout(function () {
            localStorage.setItem('cartCount', '0');
            alert('Order placed successfully! Thank you.');
            window.location.href = 'order-details.html';
        }, 1500);
        return false;
    };

    // ── FORM: ACCOUNT SAVE ────────────────────────────────────────
    window.handleSave = function (e) {
        e.preventDefault();
        $('<div class="success-msg" style="margin-bottom:8px;">Changes saved successfully!</div>')
            .insertBefore($(e.target)).delay(3000).fadeOut();
        return false;
    };

    // ── NEWSLETTER SUBSCRIBE ──────────────────────────────────────
    window.subscribeNewsletter = function (form) {
        let inp = $(form).find('input[type="email"]');
        if (!inp.val().includes('@')) { inp.addClass('form-error'); return false; }
        $(form).html('<p style="color:#6cf;font-size:11px;margin-top:4px;">&#10003; Subscribed!</p>');
        return false;
    };

    // ── HERO DOTS ─────────────────────────────────────────────────
    $('.hero-dots span').on('click', function () {
        $('.hero-dots span').removeClass('active');
        $(this).addClass('active');
    });

    // ── PRODUCT CARD HOVER EFFECT ─────────────────────────────────
    $('body').on('mouseenter', '.product-card', function () {
        $(this).css('box-shadow', '0 3px 12px rgba(0,0,0,0.12)');
    }).on('mouseleave', '.product-card', function () {
        $(this).css('box-shadow', '');
    });

    // ── ALSO VIEWED CAROUSEL (simple scroll) ─────────────────────
    $('.av-arrow').on('click', function () {
        let items = $(this).closest('.also-viewed-carousel').find('.av-items');
        let dir = $(this).text() === '‹' ? -1 : 1;
        items.scrollLeft(items.scrollLeft() + dir * 255);
    });

    // ── HELPER: show inline error ─────────────────────────────────
    function showError(selector, msg) {
        $(selector).addClass('form-error').focus();
        if (!$(selector).next('.error-msg').length) {
            $('<span class="error-msg">' + msg + '</span>').insertAfter($(selector));
        }
        $(selector).one('input', function () {
            $(this).removeClass('form-error');
            $(this).next('.error-msg').remove();
        });
    }

});
