// The code in here will run on every page.
/*eslint-env jquery*/
/*eslint max-len: ["error", { "ignoreComments": true }]*/

(function($) {
  'use strict';
  $(document).ready( function() {
    console.log('hi');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.fade-in').fadeIn();
    } else {
      $('.fade-in').fadeOut();
    }
  });

  // Navigation ----------
  function updateNavigation() {
    $('section').each(function() {
      const activeSection = $('.dot-nav a[href="#' + $(this).attr('id')
      + '"]').data('number');
      const offsetTop = $(this).offset().top;
      const halfWindowHeight = $(window).height() / 2;
      const distanceFromTop = $(window).scrollTop();
      const cond1 = offsetTop - halfWindowHeight < distanceFromTop;
      const cond2 = offsetTop + $(this).height() - halfWindowHeight
      > distanceFromTop;

      if (cond1 && cond2) {
        $('.dot-nav a').eq(activeSection).addClass('is-selected');
      } else {
        $('.dot-nav a').eq(activeSection).removeClass('is-selected');
      }
    });
  }

  updateNavigation();
  window.addEventListener('scroll', updateNavigation);


  function smoothScroll(target) {
    $('body, html').animate({'scrollTop': target.offset().top + 80}, 500);
  }

  $('.scroll-down').on('click', function(ev) {
    ev.preventDefault();
    smoothScroll($(this.hash));
  });

  $('.dot-nav a').on('click', function(ev) {
    ev.preventDefault();
    smoothScroll($(this.hash));
  });

  $('.overlay a').on('click', function(ev) {
    ev.preventDefault();
    smoothScroll($(this.hash));
    $('#toggle').click();
  });


  const dotNav = document.querySelector('.dot-nav');
  const about = document.querySelector('#about');
  const hamburger = document.querySelector('#toggle');
  const overlay = document.querySelector('#overlay');

  function handleNavs() {
    const isDesktop = window.innerWidth > 768;
    const topOfAbout = about.offsetTop - (about.offsetTop / 4);
    const isBelowIntro = window.scrollY > topOfAbout;
    const menuOpen = overlay.classList.contains('open');

    if (isDesktop && isBelowIntro) {
      dotNav.classList.add('active');
    } else if (isDesktop && menuOpen) {
      toggleMenu();
    } else {
      dotNav.classList.remove('active');
    }
  }

  window.addEventListener('scroll', handleNavs);
  window.addEventListener('resize', handleNavs);

  // Toggle mobile menu open and closed
  function toggleMenu() {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open');
    document.body.classList.toggle('noScroll');
  }

  hamburger.addEventListener('click', toggleMenu);


  // CONTACT FORM ----------
  // toggle contact input classes on focus or blur
  const contactInput = document.querySelectorAll('.contact-input');

  function focusInput() {
    this.parentElement.classList.add('is-active', 'is-completed');
  }

  function blurInput() {
    this.parentElement.classList.remove('is-active', 'is-completed');
  }

  contactInput.forEach(input => input.addEventListener('focus', focusInput));
  contactInput.forEach(input => input.addEventListener('blur', blurInput));

  // dynamically expand textarea
  const textarea = document.querySelector('.autoExpand');
  const limit = 300;

  function autoExpand() {
    textarea.style.height = '';
    textarea.style.height = `${Math.min(textarea.scrollHeight, limit)}px`;
  }

  textarea.addEventListener('input', autoExpand);

  $('div.modal').on('show.bs.modal', function() {
    const modal = this;
    const hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
      if (!location.hash) {
        $(modal).modal('hide');
      }
    };
  });

}(jQuery));
