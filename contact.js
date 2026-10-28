// The address is only added to the DOM after activation. This deters simple
// address harvesting; it is not encryption.
document.querySelectorAll('.email-reveal').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', () => {
    const decode = values => String.fromCharCode(...values.reverse());
    const user = decode([115, 117, 105, 114, 97, 100]);
    const host = decode([101, 100, 46, 97, 110, 105, 115, 109, 97, 102]);
    const link = document.createElement('a');
    link.className = 'text-link email-link';
    link.href = `mailto:${user}@${host}`;
    link.textContent = button.dataset.label;
    button.replaceWith(link);
    link.focus();
  }, { once: true });
});
