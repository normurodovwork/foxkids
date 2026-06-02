/* ================================================
   FoxKids — main.js
   ================================================ */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Hamburger (mobile) ----
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  if (links.style.display === 'flex') {
    links.style.display = '';
    links.style.position = '';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'fixed';
    links.style.top = '72px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(26,26,46,0.97)';
    links.style.padding = '24px 32px';
    links.style.gap = '20px';
  }
});

// ---- Intersection Observer — fade-in on scroll ----
const observerOpts = { threshold: 0.12 };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOpts);

document.querySelectorAll('.category-card, .animal-card, .video-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// ---- Fun Facts Carousel ----
const slides    = document.querySelectorAll('.fact-slide');
const dotsWrap  = document.getElementById('factsDots');
const prevBtn   = document.getElementById('factPrev');
const nextBtn   = document.getElementById('factNext');
let currentSlide = 0;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'fact-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsWrap.appendChild(dot);
});

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  document.querySelectorAll('.fact-dot')[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  document.querySelectorAll('.fact-dot')[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

// Auto-advance every 5s
setInterval(() => goToSlide(currentSlide + 1), 5000);

// ---- Quiz ----
const questions = [
  {
    q: '🦒 How tall can a giraffe grow?',
    options: ['2 metres', '4 metres', '6 metres', '8 metres'],
    correct: 2,
    emoji: { correct: '🎉', wrong: '😅' },
    explanation: 'Giraffes can reach up to 6 metres — they\'re the tallest animals on land!'
  },
  {
    q: '🐘 How long is an elephant\'s pregnancy?',
    options: ['6 months', '12 months', '18 months', '22 months'],
    correct: 3,
    emoji: { correct: '🐘', wrong: '😲' },
    explanation: 'Elephants have the longest pregnancy of any land mammal — about 22 months!'
  },
  {
    q: '🦈 How many teeth can a shark grow in a lifetime?',
    options: ['50', '100', '20,000', '50,000'],
    correct: 2,
    emoji: { correct: '🦷', wrong: '😮' },
    explanation: 'Sharks can grow up to 20,000 teeth in a lifetime — they replace them constantly!'
  },
  {
    q: '🐙 How many hearts does an octopus have?',
    options: ['1', '2', '3', '4'],
    correct: 2,
    emoji: { correct: '💙', wrong: '😅' },
    explanation: 'Octopuses have 3 hearts — two pump blood to the gills, one to the body!'
  },
  {
    q: '🐧 Which penguin species is the smallest?',
    options: ['Emperor Penguin', 'Little Blue Penguin', 'Adelie Penguin', 'Macaroni Penguin'],
    correct: 1,
    emoji: { correct: '🐧', wrong: '😅' },
    explanation: 'The Little Blue Penguin (also called Fairy Penguin) is only about 33 cm tall!'
  }
];

let qIndex = 0;
let score  = 0;
let answered = false;

const quizQuestion = document.getElementById('quizQuestion');
const quizOptions  = document.getElementById('quizOptions');
const quizResult   = document.getElementById('quizResult');
const quizNext     = document.getElementById('quizNext');
const quizCounter  = document.getElementById('quizCounter');
const quizBar      = document.getElementById('quizBar');
const scoreBoard   = document.getElementById('scoreBoard');
const quizBox      = document.getElementById('quizBox');

const optIcons = ['🅰️', '🅱️', '🅾️', '🆕'];

function loadQuestion() {
  answered = false;
  quizResult.classList.add('hidden');
  quizOptions.innerHTML = '';
  const q = questions[qIndex];

  quizCounter.textContent = `Question ${qIndex + 1} of ${questions.length}`;
  quizBar.style.width = `${((qIndex) / questions.length) * 100}%`;
  quizQuestion.textContent = q.q;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.innerHTML = `<span class="opt-icon">${optIcons[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    quizOptions.appendChild(btn);
  });
}

function selectAnswer(i, btn) {
  if (answered) return;
  answered = true;
  const q = questions[qIndex];
  const allBtns = quizOptions.querySelectorAll('.quiz-opt');

  allBtns.forEach(b => b.disabled = true);

  if (i === q.correct) {
    btn.classList.add('correct');
    btn.innerHTML = `✅ ${btn.textContent.trim()}`;
    score++;
    document.getElementById('resultIcon').textContent = q.emoji.correct;
    document.getElementById('resultMsg').innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
  } else {
    btn.classList.add('wrong');
    allBtns[q.correct].classList.add('correct');
    document.getElementById('resultIcon').textContent = q.emoji.wrong;
    document.getElementById('resultMsg').innerHTML = `<strong>Not quite!</strong> ${q.explanation}`;
  }

  quizResult.classList.remove('hidden');
}

quizNext.addEventListener('click', () => {
  qIndex++;
  if (qIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quizBox.classList.add('hidden');
  scoreBoard.classList.remove('hidden');

  const pct = score / questions.length;
  let emoji, title, msg;
  if (pct === 1)        { emoji = '🏆'; title = 'Perfect Score!';      msg = 'You\'re an animal genius! Amazing!'; }
  else if (pct >= 0.8)  { emoji = '🌟'; title = 'Superstar!';          msg = 'Incredible — you really know your animals!'; }
  else if (pct >= 0.6)  { emoji = '😄'; title = 'Great Job!';          msg = 'You\'re learning fast — keep exploring!'; }
  else if (pct >= 0.4)  { emoji = '🙂'; title = 'Good Effort!';        msg = 'Keep reading those animal facts!'; }
  else                  { emoji = '🐾'; title = 'Keep Exploring!';      msg = 'The animals are waiting to teach you more!'; }

  document.getElementById('scoreEmoji').textContent   = emoji;
  document.getElementById('scoreTitle').textContent   = title;
  document.getElementById('scoreMsg').textContent     = msg;
  document.getElementById('scoreDisplay').textContent = `${score} / ${questions.length}`;
  quizBar.style.width = '100%';
}

document.getElementById('restartQuiz').addEventListener('click', () => {
  qIndex = 0; score = 0; answered = false;
  quizBox.classList.remove('hidden');
  scoreBoard.classList.add('hidden');
  loadQuestion();
});

// Start quiz
loadQuestion();

// ---- Animal card modals (simple alert for now) ----
document.querySelectorAll('.btn-learn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.animal-card').querySelector('h3').textContent;
    // Could be extended to open a detailed modal
    btn.textContent = '📖 Keep exploring!';
    setTimeout(() => { btn.textContent = 'Learn More →'; }, 2000);
  });
});

// ---- Parallax on hero video ----
window.addEventListener('scroll', () => {
  const video = document.querySelector('.hero-video');
  if (!video) return;
  const scrolled = window.scrollY;
  video.style.transform = `translateY(${scrolled * 0.3}px)`;
});
