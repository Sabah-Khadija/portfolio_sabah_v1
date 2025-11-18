function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        multiplier: 1,
        lerp: 0.06,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return locoScroll;
}

const locoScrollInstance = init();

var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function(dets) {
    if (crsr) {
        crsr.style.left = dets.x + "px";
        crsr.style.top = dets.y + "px";
    }
});

/* Mobile modal functionality
const mobileModal = document.getElementById('mobileModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const mentionBoxes = document.querySelectorAll('.mention-box');

function isMobileDevice() {
    return window.innerWidth <= 768;
}

mentionBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (isMobileDevice()) {
            const imageUrl = this.getAttribute('data-image');
            modalImage.src = imageUrl;
            mobileModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', function() {
    mobileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileModal.addEventListener('click', function(e) {
    if (e.target === mobileModal) {
        mobileModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Existing hover functionality for desktop
if (!isMobileDevice()) {
    mentionBoxes.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            var att = elem.getAttribute("data-image");
            if (crsr) {
                crsr.style.width = "470px";
                crsr.style.height = "370px";
                crsr.style.borderRadius = "0";
                crsr.style.backgroundImage = `url(${att})`;
            }
        });
        elem.addEventListener("mouseleave", function() {
            if (crsr) {
                crsr.style.width = "20px";
                crsr.style.height = "20px";
                crsr.style.borderRadius = "50%";
                crsr.style.backgroundImage = "none";
            }
        });
    });
}*/

const mobileModal = document.getElementById('mobileModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const mentionBoxes = document.querySelectorAll('.mention-box, .mention-box-large');

function isMobileDevice() {
    return window.innerWidth <= 768;
}

mentionBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (isMobileDevice()) {
            const imageUrl = this.getAttribute('data-image');
            modalImage.src = imageUrl;
            mobileModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', function() {
    mobileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileModal.addEventListener('click', function(e) {
    if (e.target === mobileModal) {
        mobileModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Existing hover functionality for desktop - avec différentes tailles
if (!isMobileDevice()) {
    // Grandes images pour mention-box-large
    document.querySelectorAll('.mention-box-large').forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            var att = elem.getAttribute("data-image");
            if (crsr) {
                crsr.style.width = "900px";  // Plus grand
                crsr.style.height = "800px";  // Plus grand
                crsr.style.borderRadius = "0";
                crsr.style.backgroundImage = `url(${att})`;
                crsr.style.backgroundSize = "cover";
                crsr.style.backgroundPosition = "center";
            }
        });
        elem.addEventListener("mouseleave", function() {
            if (crsr) {
                crsr.style.width = "20px";
                crsr.style.height = "20px";
                crsr.style.borderRadius = "50%";
                crsr.style.backgroundImage = "none";
                crsr.style.backgroundSize = "";
                crsr.style.backgroundPosition = "";
            }
        });
    });
    
    // Images normales pour mention-box
    document.querySelectorAll('.mention-box').forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            var att = elem.getAttribute("data-image");
            if (crsr) {
                crsr.style.width = "470px";
                crsr.style.height = "370px";
                crsr.style.borderRadius = "0";
                crsr.style.backgroundImage = `url(${att})`;
                crsr.style.backgroundSize = "cover";
                crsr.style.backgroundPosition = "center";
            }
        });
        elem.addEventListener("mouseleave", function() {
            if (crsr) {
                crsr.style.width = "20px";
                crsr.style.height = "20px";
                crsr.style.borderRadius = "50%";
                crsr.style.backgroundImage = "none";
                crsr.style.backgroundSize = "";
                crsr.style.backgroundPosition = "";
            }
        });
    });
}

gsap.from(".hero-section h1,.hero-section h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});
tl.to(".hero-section h1", { x: -100 }, "anim");
tl.to(".hero-section h2", { x: 100 }, "anim");
tl.to(".hero-section video", { width: "90%" }, "anim");

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section h1",
        scroller: ".main",
        start: "top 5%",
        end: "top -120%",
        scrub: 3
    }
});
tl2.to(".main", { backgroundColor: "#fff" });

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section h1",
        scroller: ".main",
        start: "top -180%",
        end: "top -200%",
        scrub: 3
    }
});
tl3.to(".main", { backgroundColor: "#0F0D0D" });

gsap.utils.toArray('.project-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            scroller: ".main",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.from(".lens-section h1", {
    rotate: 5,
    y: 100,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".lens-section",
        scroller: ".main",
        start: "top 60%",
        end: "top 40%",
        scrub: 3
    }
});

var showcaseTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".showcase-section",
        scroller: ".main",
        scrub: 2,
        start: "top 0%",
        end: "top -100%",
        pin: true
    }
});
showcaseTL.from(".showcase-section h1", {
    scale: 1.95,
    lineHeight: "30vw"
}, "anim");
showcaseTL.from(".showcase-section h2", {
    scale: 1.8,
    lineHeight: "43vw"
}, "anim");
showcaseTL.to(".gallery-section", {
    y: "-180vh"
}, "anim");

var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
h4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        if (purple) {
            purple.style.display = "block";
            purple.style.opacity = "1";
        }
    });
    elem.addEventListener("mouseleave", function() {
        if (purple) {
            purple.style.display = "none";
            purple.style.opacity = "0";
        }
    });
});

const stickyBar = document.querySelector(".sticky-bar");
const clientsSection = document.querySelector(".clients");
const triggerFooter = document.querySelector(".trigger-footer");
const footerElement = document.querySelector("footer");

if (stickyBar) {
    stickyBar.style.opacity = "0";
    stickyBar.style.pointerEvents = "none";
}

function manageStickyBarVisibility() {
    if (!stickyBar || !clientsSection || !triggerFooter || !footerElement) return;
    
    const clientsRect = clientsSection.getBoundingClientRect();
    const triggerFooterRect = triggerFooter.getBoundingClientRect();
    const footerRect = footerElement.getBoundingClientRect();
    
    const clientsTop = clientsRect.top;
    const clientsBottom = clientsRect.bottom;
    const triggerFooterTop = triggerFooterRect.top;
    const footerTop = footerRect.top;
    
    if (clientsTop <= window.innerHeight * 0.8 && clientsBottom >= window.innerHeight * 0.2) {
        stickyBar.style.opacity = "1";
    } 
    else if (triggerFooterTop <= window.innerHeight * 0.8) {
        stickyBar.style.opacity = "0";
    }
    else if (footerTop <= window.innerHeight * 0.9) {
        stickyBar.style.opacity = "0";
    }
    else {
        stickyBar.style.opacity = "0";
    }
}

document.querySelectorAll(".row").forEach((row) => {
    ScrollTrigger.create({
        trigger: row,
        scroller: ".main",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = window.innerWidth < 900 ? 10 : 1;
            const minGap = window.innerWidth < 900 ? 0.5 : 15;
            const currentGap = minGap + (maxGap - minGap) * progress;
            row.style.gap = `${currentGap}em`;
        }
    });
});

document.querySelectorAll(".row").forEach((row) => {
    ScrollTrigger.create({
        trigger: row,
        scroller: ".main",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = window.innerWidth < 900 ? 0.5 : 15;
            const minGap = window.innerWidth < 900 ? 10 : 1;
            const currentGap = minGap + (maxGap - minGap) * progress;
            row.style.gap = `${currentGap}em`;
        }
    });
});

window.addEventListener("scroll", manageStickyBarVisibility);

if (locoScrollInstance) {
    locoScrollInstance.on("scroll", () => {
        manageStickyBarVisibility();
    });
}

manageStickyBarVisibility();

window.addEventListener('beforeunload', () => {
    if (locoScrollInstance) {
        locoScrollInstance.destroy();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

let footerAnimationTriggered = false;

function startFooterLoader() {
    if (footerAnimationTriggered) return;
    footerAnimationTriggered = true;
    
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
    
    function updateCounter() {
        if(currentValue === 100) {
            return;
        }
        currentValue += Math.floor(Math.random() * 5) + 1;
        if(currentValue > 100) {
            currentValue = 100;
        }
        counterElement.textContent = currentValue + "%";
        let delay = Math.floor(Math.random() * 20) + 100;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
    
    gsap.to(".counter-wrap h1", 2.5, {
        delay: 1.5,
        y: -400,
        ease: "power2.inOut",
    });
    
    gsap.to(".item h1, .item p", 2.5, {
        delay: 2,
        y: -40,
        ease: "power2.inOut",
        stagger: {
            amount: 0.8,
        },
    });
    
    gsap.to(".item-main h1", 2.5, {
        delay: 2,
        y: -280,
        ease: "power2.inOut",
        stagger: {
            amount: 0.8,
        },
    });
}

ScrollTrigger.create({
    trigger: "footer",
    scroller: ".main",
    start: "top 0%",
    once: true,
    onEnter: () => {
        startFooterLoader();
    }
});


function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Fonctionnalité modal pour mobile
mentionBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (isMobileDevice()) {
            const imageUrl = this.getAttribute('data-image');
            if (imageUrl) {
                modalImage.src = imageUrl;
                mobileModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });
});

closeModal.addEventListener('click', function() {
    mobileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileModal.addEventListener('click', function(e) {
    if (e.target === mobileModal) {
        mobileModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Fonctionnalité hover pour desktop - UNIQUEMENT DANS MENTIONS-SECTION
if (!isMobileDevice()) {
    mentionBoxes.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            var att = elem.getAttribute("data-image");
            if (crsr && att) {
                crsr.style.width = "470px";
                crsr.style.height = "370px";
                crsr.style.borderRadius = "0";
                crsr.style.backgroundImage = `url(${att})`;
                crsr.style.backgroundSize = "cover";
                crsr.style.backgroundPosition = "center";
            }
        });
        elem.addEventListener("mouseleave", function() {
            if (crsr) {
                crsr.style.width = "20px";
                crsr.style.height = "20px";
                crsr.style.borderRadius = "50%";
                crsr.style.backgroundImage = "none";
            }
        });
    });
}


// Smooth scrolling pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            locoScrollInstance.scrollTo(target);
        }
    });
});


// Ajoutez ce code à la fin de votre script existant
function initFooterLinks() {
    const footerLinks = document.querySelectorAll('.item a');
    
    footerLinks.forEach(link => {
        // Créer un élément span pour l'animation
        const linkText = link.textContent;
        const span = document.createElement('span');
        span.textContent = linkText;
        span.className = 'link-text';
        
        // Remplacer le texte du lien par le span
        link.innerHTML = '';
        link.appendChild(span);
        
        // S'assurer que le lien reste cliquable
        link.style.position = 'relative';
        link.style.zIndex = '100';
    });
}

