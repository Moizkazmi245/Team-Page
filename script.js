const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.team-card').forEach(card => {
  observer.observe(card);
});

const filterButtons = document.querySelectorAll('.filters button');
const teamCards = document.querySelectorAll('.team-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const role = button.getAttribute('data-role');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    teamCards.forEach(card => {
      const match = card.getAttribute('data-role') === role || role === 'all';
      card.style.display = match ? 'block' : 'none';
    });
  });
});
