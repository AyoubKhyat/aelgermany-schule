/* ============================================
   Alfa Haus Goethe — Premium Interactions
   ============================================ */

(function () {
    'use strict';

    // --- Theme toggle (light/dark) ---
    var themeToggle = document.getElementById('themeToggle');
    var root = document.documentElement;

    function getPreferredTheme() {
        try {
            var saved = localStorage.getItem('ahg-theme');
            if (saved) return saved;
        } catch (e) {}
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        try { localStorage.setItem('ahg-theme', theme); } catch (e) {}
    }

    setTheme(getPreferredTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var current = root.getAttribute('data-theme') || 'light';
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        try { if (localStorage.getItem('ahg-theme')) return; } catch (ex) {}
        setTheme(e.matches ? 'dark' : 'light');
    });

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Hero cinematic reveal sequence ---
    var heroReveals = document.querySelectorAll('.hero-reveal');
    if (heroReveals.length) {
        var baseDelay = 300;
        heroReveals.forEach(function (el) {
            var delay = parseFloat(el.getAttribute('data-reveal-delay') || 0) * 1000 + baseDelay;
            setTimeout(function () {
                el.classList.add('revealed');
            }, delay);
        });
    }

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var offset = navbar.offsetHeight + 16;
                var top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // --- Scroll reveal animations ---
    var animElements = document.querySelectorAll('.animate-on-scroll');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    animElements.forEach(function (el) {
        observer.observe(el);
    });

    // --- Number counter animation (fallback if GSAP not loaded) ---
    if (typeof gsap === 'undefined') {
        function animateCount(el) {
            var target = parseInt(el.getAttribute('data-count'), 10);
            if (isNaN(target)) return;

            var duration = 2000;
            var startTime = null;

            function easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            }

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var current = Math.floor(easeOutQuart(progress) * target);
                el.textContent = current.toLocaleString();
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target.toLocaleString();
                }
            }

            requestAnimationFrame(step);
        }

        var counterElements = document.querySelectorAll('[data-count]');
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    // --- Active nav link highlight on scroll ---
    var sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        var scrollY = window.scrollY + 100;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.style.color = '';
                    link.classList.add('nav-active');
                } else {
                    link.classList.remove('nav-active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // --- Annotation card stagger entrance on scene hover (desktop only) ---
    if (window.matchMedia('(min-width: 1024px)').matches) {
        var heroScene = document.querySelector('.hero-ed__scene');
        if (heroScene) {
            var annos = heroScene.querySelectorAll('.hero-ed__anno');
            annos.forEach(function (anno, i) {
                anno.style.transitionDelay = (i * 0.05) + 's';
            });
        }
    }

    // --- Urgency Banner — Countdown + Close ---
    var urgencyBanner = document.getElementById('urgencyBanner');
    var urgencyClose = document.getElementById('urgencyClose');
    var urgencyCountdown = document.getElementById('urgencyCountdown');

    if (urgencyBanner) {
        // Check if dismissed
        try {
            if (localStorage.getItem('ahg-urgency-closed')) {
                urgencyBanner.classList.add('hidden');
            } else {
                document.body.classList.add('has-urgency-banner');
            }
        } catch (e) {
            document.body.classList.add('has-urgency-banner');
        }

        // Close button
        if (urgencyClose) {
            urgencyClose.addEventListener('click', function () {
                urgencyBanner.classList.add('hidden');
                document.body.classList.remove('has-urgency-banner');
                try { localStorage.setItem('ahg-urgency-closed', '1'); } catch (e) {}
            });
        }

        // Countdown timer — set target to next September 1st
        if (urgencyCountdown) {
            function getNextTarget() {
                var now = new Date();
                var year = now.getFullYear();
                var target = new Date(year, 8, 1); // September 1st
                if (now >= target) target = new Date(year + 1, 8, 1);
                return target;
            }

            function updateCountdown() {
                var now = new Date();
                var diff = getNextTarget() - now;
                if (diff <= 0) { urgencyCountdown.textContent = ''; return; }
                var days = Math.floor(diff / 86400000);
                var hours = Math.floor((diff % 86400000) / 3600000);
                var mins = Math.floor((diff % 3600000) / 60000);
                urgencyCountdown.textContent = days + 'd ' + hours + 'h ' + mins + 'm';
            }

            updateCountdown();
            setInterval(updateCountdown, 60000);
        }
    }

    // --- FAQ Accordion ---
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var btn = item.querySelector('.faq-question');
        if (btn) {
            btn.addEventListener('click', function () {
                var isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(function (other) {
                    other.classList.remove('active');
                    var otherBtn = other.querySelector('.faq-question');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                });
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // --- Lead Form → WhatsApp ---
    var leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = document.getElementById('formName').value;
            var phone = document.getElementById('formPhone').value;
            var city = document.getElementById('formCity').value;
            var goal = document.getElementById('formGoal').value;
            var level = document.getElementById('formLevel').value;

            var lang = localStorage.getItem('ahg-lang') || 'ar';
            var msg;
            if (lang === 'fr') {
                msg = 'Bonjour, je souhaite m\'inscrire aux cours d\'allemand\n\n'
                    + 'Nom: ' + name + '\n'
                    + 'Téléphone: ' + phone + '\n'
                    + 'Ville: ' + city + '\n'
                    + 'Objectif: ' + goal + '\n'
                    + 'Niveau: ' + level;
            } else if (lang === 'en') {
                msg = 'Hello, I would like to register for German language courses\n\n'
                    + 'Name: ' + name + '\n'
                    + 'Phone: ' + phone + '\n'
                    + 'City: ' + city + '\n'
                    + 'Goal: ' + goal + '\n'
                    + 'Level: ' + level;
            } else {
                msg = 'مرحبا، أريد التسجيل في دورات اللغة الألمانية\n\n'
                    + 'الاسم: ' + name + '\n'
                    + 'الهاتف: ' + phone + '\n'
                    + 'المدينة: ' + city + '\n'
                    + 'الهدف: ' + goal + '\n'
                    + 'المستوى: ' + level;
            }

            var url = 'https://wa.me/212704417799?text=' + encodeURIComponent(msg);
            window.open(url, '_blank');
        });
    }

    // --- Form Validation UX ---
    if (leadForm) {
        var fields = leadForm.querySelectorAll('input[required], select[required]');
        fields.forEach(function(field) {
            field.addEventListener('blur', function() {
                validateField(field);
            });
            field.addEventListener('input', function() {
                if (field.classList.contains('field-error')) {
                    validateField(field);
                }
            });
        });

        function validateField(field) {
            var parent = field.closest('.form-group');
            var existing = parent.querySelector('.field-error-msg');
            if (existing) existing.remove();

            if (!field.value || (field.tagName === 'SELECT' && field.value === '')) {
                field.classList.add('field-error');
                var msg = document.createElement('span');
                msg.className = 'field-error-msg';
                var lang = localStorage.getItem('ahg-lang') || 'ar';
                var texts = {ar: 'هذا الحقل مطلوب', fr: 'Ce champ est requis', en: 'This field is required'};
                msg.textContent = texts[lang] || texts.ar;
                parent.appendChild(msg);
                return false;
            } else if (field.id === 'formPhone' && !/^[\+]?[\d\s\-]{8,15}$/.test(field.value.trim())) {
                field.classList.add('field-error');
                var msg = document.createElement('span');
                msg.className = 'field-error-msg';
                var lang = localStorage.getItem('ahg-lang') || 'ar';
                var texts = {ar: 'رقم هاتف غير صالح', fr: 'Numéro de téléphone invalide', en: 'Invalid phone number'};
                msg.textContent = texts[lang] || texts.ar;
                parent.appendChild(msg);
                return false;
            } else {
                field.classList.remove('field-error');
                return true;
            }
        }
    }

    // --- Language-aware WhatsApp links ---
    function updateWhatsAppLinks() {
        var lang = localStorage.getItem('ahg-lang') || 'ar';
        var texts = {
            ar: 'أريد التسجيل في الدورة القادمة',
            fr: 'Je souhaite m\'inscrire à la prochaine session',
            en: 'I would like to register for the next session'
        };
        var msg = texts[lang] || texts.ar;
        document.querySelectorAll('a[href*="wa.me/212704417799?text="]').forEach(function(link) {
            link.href = 'https://wa.me/212704417799?text=' + encodeURIComponent(msg);
        });
    }
    updateWhatsAppLinks();
    document.addEventListener('langChanged', updateWhatsAppLinks);

    // --- Mobile Sticky CTA — Show on scroll ---
    var mobileCta = document.getElementById('mobileCta');
    if (mobileCta) {
        var mobileCtaShown = false;
        function handleMobileCta() {
            if (window.innerWidth > 768) return;
            if (window.scrollY > 600) {
                if (!mobileCtaShown) {
                    mobileCta.classList.add('visible');
                    mobileCtaShown = true;
                }
            } else {
                if (mobileCtaShown) {
                    mobileCta.classList.remove('visible');
                    mobileCtaShown = false;
                }
            }
        }
        window.addEventListener('scroll', handleMobileCta, { passive: true });
    }

    // --- Magnetic Button Effect (desktop only) ---
    if (window.matchMedia('(min-width: 1024px)').matches) {
        var magneticBtns = document.querySelectorAll('.btn-magnetic');
        magneticBtns.forEach(function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
            });
            btn.addEventListener('mouseleave', function () {
                btn.style.transform = '';
            });
        });
    }

    // --- Parallax Scroll Effect ---
    var parallaxEls = document.querySelectorAll('[data-parallax]');
    if (parallaxEls.length && window.matchMedia('(min-width: 768px)').matches) {
        function handleParallax() {
            var scrollY = window.scrollY;
            parallaxEls.forEach(function (el) {
                var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
                el.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
            });
        }
        window.addEventListener('scroll', handleParallax, { passive: true });
    }

    // ============================================
    // 3D MOTION ENGINE
    // ============================================

    var isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isDesktop && !prefersReduced) {

        // --- 3D Tilt on Cards (skip if GSAP handles it) ---
        var gsapActive = typeof gsap !== 'undefined';
        var tiltCards = gsapActive ? [] : document.querySelectorAll('.tilt-3d');
        tiltCards.forEach(function (card) {
            var intensity = parseFloat(card.getAttribute('data-tilt-intensity') || 8);
            var glareEl = null;

            if (card.getAttribute('data-tilt-glare') !== null) {
                glareEl = document.createElement('div');
                glareEl.className = 'tilt-glare';
                card.style.position = 'relative';
                card.style.overflow = 'hidden';
                card.appendChild(glareEl);
            }

            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width;
                var y = (e.clientY - rect.top) / rect.height;
                var rotateX = (0.5 - y) * intensity;
                var rotateY = (x - 0.5) * intensity;
                card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';

                if (glareEl) {
                    glareEl.style.opacity = '1';
                    glareEl.style.background = 'radial-gradient(circle at ' + (x * 100) + '% ' + (y * 100) + '%, rgba(255,255,255,0.15) 0%, transparent 60%)';
                }
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
                if (glareEl) glareEl.style.opacity = '0';
            });
        });

        // --- Mouse-Aware Parallax Layers ---
        var mouseX = 0, mouseY = 0;
        var smoothX = 0, smoothY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        var depthLayers = document.querySelectorAll('[data-depth]');
        if (depthLayers.length) {
            function animateDepthLayers() {
                smoothX += (mouseX - smoothX) * 0.06;
                smoothY += (mouseY - smoothY) * 0.06;
                depthLayers.forEach(function (el) {
                    var depth = parseFloat(el.getAttribute('data-depth')) || 1;
                    var moveX = smoothX * depth * 20;
                    var moveY = smoothY * depth * 20;
                    el.style.transform = 'translate3d(' + moveX + 'px,' + moveY + 'px,0)';
                });
                requestAnimationFrame(animateDepthLayers);
            }
            animateDepthLayers();
        }
    }

    // --- 3D Scroll Reveal (works on all devices) ---
    if (!prefersReduced) {
        var scroll3dElements = document.querySelectorAll('.scroll-3d');

        var scroll3dObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-3d-visible');
                    scroll3dObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        });

        scroll3dElements.forEach(function (el) {
            scroll3dObserver.observe(el);
        });

        // --- Stagger children animation ---
        var staggerGroups = document.querySelectorAll('[data-stagger]');
        var staggerObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var children = entry.target.children;
                    var delay = parseFloat(entry.target.getAttribute('data-stagger') || 100);
                    for (var i = 0; i < children.length; i++) {
                        (function (child, d) {
                            setTimeout(function () {
                                child.classList.add('stagger-visible');
                            }, d);
                        })(children[i], i * delay);
                    }
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        staggerGroups.forEach(function (el) {
            staggerObserver.observe(el);
        });

    }

    // --- Hero background video debug ---
    var heroVideo = document.querySelector('.hero-bg-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', function () {
            console.log('Hero video loaded successfully', heroVideo.videoWidth + 'x' + heroVideo.videoHeight);
        });
        heroVideo.addEventListener('playing', function () {
            console.log('Hero video is playing');
        });
        heroVideo.addEventListener('error', function () {
            console.error('Hero video failed to load:', heroVideo.currentSrc);
            heroVideo.style.background = 'url(' + heroVideo.getAttribute('poster') + ') center/cover no-repeat';
        });
    } else {
        console.warn('Hero video element not found in DOM');
    }

})();
