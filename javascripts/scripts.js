let burger = document.querySelector('#burger');

if (burger) {
  burgerMenu();
}

function burgerMenu() {
  let burger = document.querySelector('#burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
  });
}

// мероприятия плакаты

const activePosterImg = document.getElementById('activePosterImg');

if (activePosterImg) {
  const infoBlocks = document.querySelectorAll('.series-info-block');
  const sidebarCards = document.querySelectorAll('.sidebar-card');

  function selectSeries(seriesId) {
    infoBlocks.forEach(function (block) {
      if (block.getAttribute('data-series') === seriesId) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });

    sidebarCards.forEach(function (card) {
      if (card.getAttribute('data-series') === seriesId) {
        card.classList.add('hidden');
      } else {
        card.classList.remove('hidden');
      }
    });

    const activeCard = document.querySelector(
      `.sidebar-card[data-series="${seriesId}"]`
    );
    activePosterImg.src = activeCard.getAttribute('data-main-poster');

    const currentPoster = activeCard.getAttribute('data-main-poster');

    if (
      currentPoster.includes('poster_3.') ||
      currentPoster.includes('poster_4.')
    ) {
      activePosterImg.classList.add('white-poster-active');
    } else {
      activePosterImg.classList.remove('white-poster-active');
    }

    const activeBlock = document.querySelector(
      `.series-info-block[data-series="${seriesId}"]`
    );
    const thumbs = activeBlock.querySelectorAll('.poster-thumb');
    thumbs.forEach(function (thumb) {
      thumb.classList.remove('active');
    });
    thumbs[0].classList.add('active');
  }

  function selectPoster(posterFile, clickedThumb) {
    activePosterImg.src = posterFile;

    if (posterFile.includes('poster_3.') || posterFile.includes('poster_4.')) {
      activePosterImg.classList.add('white-poster-active');
    } else {
      activePosterImg.classList.remove('white-poster-active');
    }

    const activeBlock = document.querySelector('.series-info-block.active');

    activeBlock.querySelectorAll('.poster-thumb').forEach(function (thumb) {
      thumb.classList.remove('active');
    });

    clickedThumb.classList.add('active');
  }

  sidebarCards.forEach(function (card) {
    card.addEventListener('click', function () {
      const seriesId = card.getAttribute('data-series');
      selectSeries(seriesId);
    });
  });

  document.querySelectorAll('.poster-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      const posterFile = thumb.getAttribute('data-poster');
      selectPoster(posterFile, thumb);
    });
  });
}

// о нас

const swiperElements = document.querySelectorAll('.about-swiper');

swiperElements.forEach(function (element) {
  new Swiper(element, {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      }
    }
  });
});

// книга

const openBookBtn = document.getElementById('openBookBtn');
const bookReader = document.getElementById('bookReader');
const bookStack = document.getElementById('bookStack');
const currentPageEl = document.getElementById('currentPage');

if (openBookBtn && bookReader) {
  const spreadPages = document.querySelectorAll('.spread-page');

  let currentSpread = 1;
  currentPageEl.textContent = currentSpread.toString().padStart(2, '0');

  openBookBtn.addEventListener('click', function () {
    bookReader.scrollIntoView({ behavior: 'smooth' });
  });

  bookStack.addEventListener('click', function () {
    showNextSpread();
  });

  function showNextSpread() {
    if (currentSpread >= spreadPages.length) return;

    currentSpread++;

    const nextPage = document.querySelector(
      `.spread-page[data-page="${currentSpread}"]`
    );
    nextPage.classList.remove('hidden');

    currentPageEl.textContent = currentSpread.toString().padStart(2, '0');
  }
}

let cartCount = 0;

document.querySelectorAll('.shop-img-wrap').forEach((card) => {
  let qty = 1;

  const plus = card.querySelector('.plus');
  const minus = card.querySelector('.minus');
  const qtyText = card.querySelector('.qty');
  const addBtn = card.querySelector('.add-btn');

  plus.addEventListener('click', () => {
    qty++;
    qtyText.textContent = qty;
  });

  minus.addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyText.textContent = qty;
    }
  });

  addBtn.addEventListener('click', () => {
    if (addBtn.classList.contains('added')) return;

    addBtn.classList.add('added');

    addBtn.textContent = 'ДОБАВЛЕНО';

    cartCount += qty;

    document.getElementById('cart-count').textContent = cartCount;
  });
});

formModalWindow();

function formModalWindow() {
  let form = document.querySelector('.homeFooter-email');
  let modal = document.getElementById('emailModal');
  let closeBtn = document.getElementById('closeModal');

  if (!form || !modal) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}
