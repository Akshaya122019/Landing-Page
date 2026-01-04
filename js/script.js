
function openMenu() {
  document.getElementById('mobileMenu').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
  document.body.style.overflow = 'auto';
}


const data = [
  {
    title: "Connect",
    desc: "We decode your brand, audience and goals to find where design and AI can hit hardest.",
    scale: 1.08
  },
  {
    title: "Chat",
    desc: "We jam with your team in real time to shape sharp, Gen Z-ready ideas and flows.",
    scale: 1.16
  },
  {
    title: "Create",
    desc: "We turn strategy into visuals, content and automations built to launch and scale.",
    scale: 1.24
  }
];

let step = -1;
const stage = document.getElementById("glowStage");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

stage.addEventListener("click", () => {
  if (step >= data.length - 1) return;

  step++;

  // Set data-step attribute for CSS targeting
  stage.setAttribute("data-step", step);

  title.textContent = data[step].title;
  desc.textContent = data[step].desc;

  stage.style.transform = `scale(${data[step].scale})`;

  stage.classList.remove("active");
  void stage.offsetWidth;
  stage.classList.add("active");
});

(function () {
  const blocks = document.querySelectorAll('.gt-content-block');
  const images = document.querySelectorAll('.gt-reveal-img');

  const options = {
    root: document.querySelector('.gt-main-container'),
    threshold: 0.5
  };

  if (window.innerWidth >= 768) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('data-gt-trigger');
          images.forEach(img => img.classList.remove('gt-active'));
          const activeImg = document.getElementById(targetId);
          if (activeImg) activeImg.classList.add('gt-active');
        }
      });
    }, options);

    blocks.forEach(block => observer.observe(block));
  }
})();


const steps = [
        { id: "O1", title: "10 x Execution speed", desc: "AI-driven automation replaces manual workflows and accelerates output.", y: 260 },
        { id: "O2", title: "Viral Branding", desc: "Gen Z storytelling frameworks designed to convert attention into growth.", y: 360 },
        { id: "O3", title: "AI Upskilling", desc: "Hands-on training in AI and automation to keep your team ahead of the curve.", y: 460 },
        { id: "O4", title: "Scale MVP", desc: "Transforming concepts into scalable platforms with intelligent logic.", y: 560 }
    ];

    function changeContent(index) {
        const step = steps[index];
        const tracker = document.getElementById('active-tracker');
        const logo = document.getElementById('logo-thumb');
        const contentArea = document.getElementById('benefit-content');

        // Update tracker line
        tracker.setAttribute('y2', step.y);
        
        // Move logo to clicked position
        logo.setAttribute('transform', `translate(300, ${step.y})`);

        // Animate text change
        contentArea.classList.add('fade-out');

        setTimeout(() => {
            document.getElementById('txt-id').innerText = step.id;
            document.getElementById('txt-id').style.color = '#c5ff00';
            document.getElementById('txt-title').innerText = step.title;
            document.getElementById('txt-title').style.fontSize = '3.8rem';
            document.getElementById('txt-desc').innerText = step.desc;
            contentArea.classList.remove('fade-out');
        }, 400);
    }

    // gsap
    gsap.registerPlugin(ScrollTrigger);

  const track = document.querySelector(".squad-track");
  const cards = document.querySelectorAll(".squad-card");
  const totalWidth = track.scrollWidth - window.innerWidth;

  gsap.to(track, {
    x: -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: "#squad",
      start: "top top",
      end: () => "+=" + (track.scrollWidth),
      scrub: 1,   // ⬅ smooth slow scroll scrub
      pin: true,
      anticipatePin: 1
    }
  });