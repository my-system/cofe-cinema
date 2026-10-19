import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// 1. LENIS SMOOTH SCROLL INITIALIZATION
// ==========================================================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.9,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ==========================================================================
// 2. CINEMATIC PRELOADER ANIMATION
// ==========================================================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('preloaderCounter');
  const mediaFrame = document.getElementById('preloaderMedia');
  const body = document.body;

  let progress = { value: 0 };

  const tl = gsap.timeline({
    onComplete: () => {
      // Transition out
      mediaFrame.classList.add('expand-hero');
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          preloader.classList.add('fade-out');
          body.classList.remove('loading-active');
          initHeroEntrance();
        }
      });
    }
  });

  // Counter 0 to 100
  tl.to(progress, {
    value: 100,
    duration: 1.8,
    ease: 'power2.inOut',
    onUpdate: () => {
      const current = Math.round(progress.value);
      counter.textContent = (current < 10 ? '0' : '') + current + '%';
    }
  });

  // Animate Words
  tl.from('.word-col span', {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out'
  }, 0.2);

  // Slight zoom on media
  tl.to('#preloaderImg', {
    scale: 1,
    duration: 1.8,
    ease: 'power1.out'
  }, 0);
}

// ==========================================================================
// 3. HERO ENTRANCE ANIMATION
// ==========================================================================
function initHeroEntrance() {
  const tl = gsap.timeline();

  tl.from('.site-header', {
    y: -30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  })
  .from('.hero-tag', {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-title .title-line', {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5')
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from('.lighting-mode-toggle', {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.5)'
  }, '-=0.5');
}

// ==========================================================================
// 4. DAY / NIGHT LIGHTING MODE TOGGLE
// ==========================================================================
function initLightingToggle() {
  const toggle = document.getElementById('lightingToggle');
  const dayLayer = document.getElementById('heroLayerDay');
  const nightLayer = document.getElementById('heroLayerNight');
  const labels = toggle.querySelectorAll('.mode-label');

  let currentMode = 'day';

  function setMode(mode) {
    if (mode === currentMode) return;
    currentMode = mode;

    if (mode === 'night') {
      toggle.classList.add('night-active');
      dayLayer.classList.remove('active');
      nightLayer.classList.add('active');
      labels[0].classList.remove('active');
      labels[1].classList.add('active');
    } else {
      toggle.classList.remove('night-active');
      nightLayer.classList.remove('active');
      dayLayer.classList.add('active');
      labels[1].classList.remove('active');
      labels[0].classList.add('active');
    }
  }

  toggle.addEventListener('click', () => {
    setMode(currentMode === 'day' ? 'night' : 'day');
  });

  labels.forEach(label => {
    label.addEventListener('click', (e) => {
      e.stopPropagation();
      setMode(label.dataset.mode);
    });
  });
}

// ==========================================================================
// 5. CUSTOM MAGNETIC CURSOR
// ==========================================================================
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const circle = document.getElementById('cursorCircle');
  const text = document.getElementById('cursorText');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;
    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover targets
  const interactiveElements = document.querySelectorAll('[data-cursor]');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      const label = el.getAttribute('data-cursor') || 'VIEW';
      text.textContent = label;
      circle.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
      circle.classList.remove('active');
    });
  });
}

// ==========================================================================
// 6. INTERACTIVE PROCESS TABS (1.0 TO 5.0)
// ==========================================================================
function initProcessTabs() {
  const items = document.querySelectorAll('.process-item');
  const visualImg = document.getElementById('processImage');
  const stepTitle = document.getElementById('processStepTitle');

  const processData = {
    1: {
      img: '/assets/04_area_bar.jpg',
      title: '1.0 Biji Kopi Pilihan Petani Nusantara'
    },
    2: {
      img: '/assets/01_tampak_depan_golden_hour.jpg',
      title: '2.0 Sangrai Presisi Karakter Rasa'
    },
    3: {
      img: '/assets/04_area_bar.jpg',
      title: '3.0 Gilingan Segar Sesaat Sebelum Seduh'
    },
    4: {
      img: '/assets/05_spot_foto.jpg',
      title: '4.0 Ekstraksi Espresso 9-Bar Sempurna'
    },
    5: {
      img: '/assets/09_area_outdoor.jpg',
      title: '5.0 Penyajian Penuh Perhatian'
    }
  };

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const step = item.getAttribute('data-step');
      
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      if (processData[step]) {
        gsap.to(visualImg, {
          opacity: 0.3,
          duration: 0.2,
          onComplete: () => {
            visualImg.src = processData[step].img;
            stepTitle.textContent = processData[step].title;
            gsap.to(visualImg, { opacity: 1, duration: 0.4 });
          }
        });
      }
    });
  });
}

// ==========================================================================
// 7. AMBIENT CAFE AUDIO GENERATOR (WEB AUDIO API)
// ==========================================================================
function initAmbientAudio() {
  const widget = document.getElementById('audioToggle');
  let audioCtx = null;
  let isPlaying = false;
  let noiseNode = null;
  let filterNode = null;
  let gainNode = null;

  function startAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create Pink/Brown warm noise buffer for warm cafe ambience hiss
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = output[i];
      output[i] *= 2.5; // Gain
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // Warm Lowpass filter (like warm vinyl / distant room warmth)
    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(380, audioCtx.currentTime);

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

    noiseNode.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start(0);
    isPlaying = true;
    widget.classList.add('playing');
  }

  function stopAudio() {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        noiseNode.stop();
        audioCtx.close();
        isPlaying = false;
        widget.classList.remove('playing');
      }, 500);
    }
  }

  widget.addEventListener('click', () => {
    if (!isPlaying) {
      startAudio();
    } else {
      stopAudio();
    }
  });
}

// ==========================================================================
// 8. SCROLL TRIGGER PARALLAX & REVEALS
// ==========================================================================
function initScrollAnimations() {
  // Parallax on about image
  gsap.to('.parallax-img', {
    yPercent: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // Stacked Area Panels parallax scale
  const panels = document.querySelectorAll('.area-panel');
  panels.forEach((panel) => {
    const img = panel.querySelector('img');
    gsap.fromTo(img, 
      { scale: 1.1 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
}

// ==========================================================================
// 9. PRODUCT DETAIL SPECIFICATION MODAL
// ==========================================================================
function initProductModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const cards = document.querySelectorAll('.menu-card');

  const productsData = {
    signature: {
      title: 'Es Kopi Sedap Signature',
      desc: 'Perpaduan double shot espresso pekat, susu segar lembut bercita rasa gurih, dan gula aren organik cair yang legit tanpa meninggalkan rasa enek di tenggorokan.',
      origin: 'Dampit & Aceh Gayo Blend',
      process: 'Full Wash & Natural anaerobic',
      roast: 'Medium-to-Dark Roast',
      notes: 'Karamel, Gula Aren Organik, Dark Chocolate',
      serving: 'Dingin / Es Batu Kotak Murni',
      price: 'Rp 20.000',
      img: '/assets/04_area_bar.jpg'
    },
    gayo: {
      title: 'Manual Brew Gayo Wine',
      desc: 'Kopi Arabika proses fermentasi khas dataran tinggi Gayo, diseduh perlahan dengan dripper V60 menghasilkan secangkir kopi jernih beraroma winey yang kaya.',
      origin: 'Bener Meriah, Aceh Gayo (1,500 mdpl)',
      process: 'Wine Process (Fermentasi Kering 30 Hari)',
      roast: 'Light to Medium Roast',
      notes: 'Anggur Merah, Blackberry, Jasmine Floral',
      serving: 'Hangat dalam Cangkir Keramik / Es Server',
      price: 'Rp 25.000',
      img: '/assets/05_spot_foto.jpg'
    },
    pandan: {
      title: 'Kopi Susu Pandan Wangi',
      desc: 'Kelembutan susu murni berpadu sari daun pandan alami yang harum, disiram espresso tebal yang mengikat rasa manis dan segar secara seimbang.',
      origin: 'Kintamani Bali & Robusta Dampit',
      process: 'Honey Process & Natural',
      roast: 'Medium Roast',
      notes: 'Pandan Asli, Vanilla Pod, Creamy Milk',
      serving: 'Dingin dengan Garnish Daun Pandan',
      price: 'Rp 22.000',
      img: '/assets/09_area_outdoor.jpg'
    },
    tonic: {
      title: 'Espresso Tonic Citrus',
      desc: 'Minuman penyegar siang hari: soda tonik dingin dengan bulir karbonasi berpadu shot espresso pekat di atasnya, ditambah perasan lemon segar.',
      origin: 'Single Origin Flores Bajawa',
      process: 'Washed Clean Cup',
      roast: 'Medium-Light Roast',
      notes: 'Lemon Citrus, Sparkling Tonic, Crisp Espresso',
      serving: 'Dingin dengan Lemon Wheel Kering & Rosemary',
      price: 'Rp 24.000',
      img: '/assets/01_tampak_depan_golden_hour.jpg'
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Ignore click if clicking order button directly
      if (e.target.closest('.btn-order')) return;

      const prodKey = card.getAttribute('data-product');
      const data = productsData[prodKey];
      if (!data) return;

      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalDesc').textContent = data.desc;
      document.getElementById('modalSpecOrigin').textContent = data.origin;
      document.getElementById('modalSpecProcess').textContent = data.process;
      document.getElementById('modalSpecRoast').textContent = data.roast;
      document.getElementById('modalSpecNotes').textContent = data.notes;
      document.getElementById('modalSpecServing').textContent = data.serving;
      document.getElementById('modalPrice').textContent = data.price;
      document.getElementById('modalImg').src = data.img;
      document.getElementById('modalOrderLink').href = `https://wa.me/6281234567890?text=Halo%20Waroeng%20Kopi%20Sedap,%20saya%20tertarik%20dengan%20${encodeURIComponent(data.title)}`;

      modal.classList.add('open');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}

// ==========================================================================
// INITIALIZATION ON DOM READY
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCustomCursor();
  initLightingToggle();
  initProcessTabs();
  initAmbientAudio();
  initScrollAnimations();
  initProductModal();
});
