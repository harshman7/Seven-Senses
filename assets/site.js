(function () {
  'use strict';

  function closestNav(el) {
    return el && el.closest ? el.closest('nav') : null;
  }

  document.querySelectorAll('[data-ss-nav-toggle]').forEach(function (toggle) {
    var nav = closestNav(toggle);
    var panel = nav ? nav.querySelector('[data-ss-nav-panel]') : null;
    if (!panel) return;

    function setOpen(open) {
      panel.classList.toggle('hidden', !open);
      panel.classList.toggle('flex', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
      setOpen(panel.classList.contains('hidden'));
    });

    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
        setOpen(false);
      }
    });
  });

  var inquiry = document.querySelector('form[data-ss-inquiry]');
  if (inquiry) {
    var successEl = document.getElementById('ss-inquiry-success');
    inquiry.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (inquiry.querySelector('[name="name"]') || {}).value;
      var email = (inquiry.querySelector('[name="email"]') || {}).value;
      var seeking = (inquiry.querySelector('[name="seeking"]') || {}).value;
      var dests = [];
      inquiry.querySelectorAll('input[name="destination"]:checked').forEach(function (cb) {
        dests.push(cb.value);
      });

      if (!name || !String(name).trim()) {
        alert('Please enter your name.');
        return;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
        alert('Please enter a valid email address.');
        return;
      }

      var body =
        'Name: ' + String(name).trim() +
        '\nEmail: ' + String(email).trim() +
        '\n\nPreferred destinations:\n' +
        (dests.length ? dests.join(', ') : '(none selected)') +
        '\n\nIntent:\n' +
        (seeking ? String(seeking).trim() : '(not provided)');

      var subject = encodeURIComponent('Seven Senses — Invitation request');
      var bodyEnc = encodeURIComponent(body);
      window.location.href = 'mailto:concierge@sevensenses.com?subject=' + subject + '&body=' + bodyEnc;

      inquiry.classList.add('hidden');
      if (successEl) successEl.classList.remove('hidden');
    });
  }

  var contact = document.querySelector('form[data-ss-contact]');
  if (contact) {
    var contactOk = document.getElementById('ss-contact-success');
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (contact.querySelector('[name="name"]') || {}).value;
      var email = (contact.querySelector('[name="email"]') || {}).value;
      var topic = contact.querySelector('[name="topic"]');
      var topicLabel = topic && topic.options && topic.selectedIndex >= 0
        ? topic.options[topic.selectedIndex].text
        : '';
      var message = (contact.querySelector('[name="message"]') || {}).value;
      if (!name || !String(name).trim()) {
        alert('Please enter your name.');
        return;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
        alert('Please enter a valid email address.');
        return;
      }
      var body =
        'Name: ' + String(name).trim() +
        '\nEmail: ' + String(email).trim() +
        '\nTopic: ' + (topicLabel || '') +
        '\n\n' + (message ? String(message).trim() : '');
      var subject = encodeURIComponent('Seven Senses — ' + (topicLabel || 'Contact'));
      window.location.href = 'mailto:concierge@sevensenses.com?subject=' + subject + '&body=' + encodeURIComponent(body);
      if (contactOk) contactOk.classList.remove('hidden');
    });
  }

  document.querySelectorAll('form[data-ss-newsletter]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var em = input && input.value;
      if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(em).trim())) {
        alert('Please enter a valid email address.');
        return;
      }
      var msg = form.querySelector('[data-ss-newsletter-msg]');
      if (msg) {
        msg.textContent = 'Thank you — you are on the list.';
        msg.classList.remove('hidden');
      }
      form.reset();
    });
  });
})();
