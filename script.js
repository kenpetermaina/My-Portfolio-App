// --- Translation Dictionary ---
const translations = {
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-projects': 'Portfolio',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'hero-title': 'Engineering IT Solutions',
        'hero-desc': 'I\'m a passionate IT engineer specializing in cloud infrastructure, cybersecurity, and software development.',
        'hero-btn-work': 'View My Work',
        'hero-btn-contact': 'Contact Me',
        'about-title': 'About Me',
        'about-subtitle': 'Learn more about my skills, experience, and professional background',
        'services-title': 'My Services',
        'services-subtitle': 'I provide a wide range of IT solutions tailored to your business needs',
        'exp-subtitle': 'My professional journey and key milestones',
        'contact-subtitle': 'Get in touch for collaborations or inquiries',
        'contact-info-title': 'Get In Touch',
        'btn-send': 'Send Message',
        'placeholder-name': 'Name',
        'placeholder-email': 'Email',
        'portfolio-subtitle': 'Explore my recent projects and technical implementations',
        'logo-title': 'IT Manager',
        'get-started': 'Get Started',
        'splash-tagline': 'IT Manager & Full-Stack Developer',
        'footer-rights': '© 2026 Engineering IT . All Rights Reserved.',
        'footer-designed': 'Designed by',
        'pwa-title': 'Full-Stack PWA Applications',
        'pwa-subtitle': 'Advanced Progressive Web Apps designed for efficiency, offline access, and professional management.',
        'pwa-app1-title': 'Hospital Management',
        'pwa-app1-desc': 'A complete healthcare solution for patient records, appointment scheduling, and staff management.',
        'pwa-app2-title': 'School Management',
        'pwa-app2-desc': 'Centralized platform for student data, attendance, grading, and administrative workflows.',
        'pwa-app3-title': 'Data Analytics Dashboard',
        'pwa-app3-desc': 'Real-time data visualization and processing dashboard for complex business insights and metrics.',
        'btn-details': 'View Details',
        'btn-demo': 'Request Demo',
        'hiring-status': 'Available for Work',
        'btn-cv': 'Download CV',
        'stats-projects': 'Projects Done',
        'stats-exp': 'Years Experience',
        'stats-clients': 'Happy Clients',
        'testi-title': 'Testimonials',
        'testi-subtitle': 'What people say about my work',
        'faq-title': 'Frequently Asked Questions',
        'faq-subtitle': 'Common questions about my services',
        'faq-q1': 'What services do you offer?',
        'faq-a1': 'I offer cloud migration, cybersecurity assessments, and custom software development.',
        'faq-q2': 'Are you available for freelance?',
        'faq-a2': 'Yes, I am currently available for new projects and collaborations.',
        'faq-q3': 'How can I contact you?',
        'faq-a3': 'You can reach me via the contact form below or through my WhatsApp and LinkedIn.',
        'splash-subtitle': 'IT Manager & Full-Stack Developer',
        'btn-started': 'Get Started',
        'btn-app': 'Install App',
        'loading-sys': 'Initializing Systems...'
    },
    'sw': {
        'nav-home': 'Nyumbani',
        'nav-about': 'Kuhusu',
        'nav-services': 'Huduma',
        'nav-projects': 'Mradi',
        'nav-experience': 'Uzoefu',
        'nav-contact': 'Wasiliana',
        'logo-title': 'Meneja wa IT',
        'hero-title': 'Suluhisho za IT za Ufundi',
        'hero-desc': 'Mimi ni mhandisi mwenye shauku wa IT niliye maalumu katika miundombinu ya wingu, usalama mtandaoni, na maendeleo ya programu.',
        'hero-btn-work': 'Tazama Kazi Zangu',
        'hero-btn-contact': 'Nisogeze',
        'about-title': 'Kuhusu Mimi',
        'about-subtitle': 'Jifunze zaidi kuhusu ujuzi wangu, uzoefu wangu, na asili yangu ya kitaaluma',
        'services-title': 'Huduma Zangu',
        'services-subtitle': 'Natoa suluhisho mbalimbali za IT zilizoboreshwa kwa mahitaji ya biashara yako',
        'exp-subtitle': 'Safari yangu ya kitaaluma na mafanikio muhimu',
        'contact-subtitle': 'Wasiliana kwa ushirikiano au maswali',
        'contact-info-title': 'Wasiliana Nasi',
        'btn-send': 'Tuma Ujumbe',
        'placeholder-name': 'Jina',
        'placeholder-email': 'Barua pepe',
        'placeholder-message': 'Ujumbe wako',
        'portfolio-subtitle': 'Gundua miradi yangu ya hivi karibuni na utekelezaji wa kiufundi',
        'footer-rights': '© 2026 Engineering IT. Haki zote zimehifadhiwa.',
        'footer-designed': 'Imeundwa na',
        'get-started': 'Anza Sasa',
        'splash-tagline': 'Meneja wa IT na Mwanaendelezaji wa Full-Stack',
        'pwa-title': 'Programu Kamili za PWA',
        'pwa-subtitle': 'Programu za PWA za kisasa zilizoundwa kwa ufanisi, ufikiaji wa nje ya mtandao, na usimamizi wa kitaalamu.',
        'pwa-app1-title': 'Usimamizi wa Hospitali',
        'pwa-app1-desc': 'Suluhisho kamili la afya kwa rekodi za wagonjwa, upangaji wa miadi, na usimamizi wa wahudumu.',
        'pwa-app2-title': 'Usimamizi wa Shule',
        'pwa-app2-desc': 'Jukwaa lililounganika kwa data ya wanafunzi, mahudhurio, alama, na taratibu za utawala.',
        'pwa-app3-title': 'Dashibodi ya Uchambuzi wa Takwimu',
        'pwa-app3-desc': 'Uwasilishaji wa data kwa wakati halisi kwa ufahamu wa biashara wenye ushawishi.',
        'btn-details': 'Tazama Maelezo',
        'btn-demo': 'Omba Demo',
        'hiring-status': 'Napatikana kwa Kazi',
        'btn-cv': 'Pakua CV',
        'btn-app': 'Sakinisha Programu',
        'stats-projects': 'Miradi Iliokamilika',
        'stats-exp': 'Miaka ya Uzoefu',
        'stats-clients': 'Wateja Wafarijiwa',
        'testi-title': 'Ushuhuda',
        'testi-subtitle': 'Watu wanasema nini juu ya kazi yangu',
        'faq-title': 'Maswali Yanayoulizwa Mara kwa Mara',
        'faq-subtitle': 'Maswali ya kawaida kuhusu huduma zangu',
        'faq-q1': 'Unatoa huduma gani?',
        'faq-a1': 'Natoa uhamishaji wa wingu, tathmini za usalama mtandao, na maendeleo ya programu maalum.',
        'faq-q2': 'Je, upo kwa kazi ya kujitegemea?',
        'faq-a2': 'Ndiyo, kwa sasa niko tayari kwa miradi mipya na ushirikiano.',
        'faq-q3': 'Ninawezaje kuwasiliana nawe?',
        'faq-a3': 'Unaweza kunifikia kupitia fomu ya mawasiliano hapo chini au kupitia WhatsApp na LinkedIn yangu.',
        'splash-subtitle': 'Meneja wa IT na Mwanaendelezaji wa Full-Stack',
        'btn-started': 'Anza Sasa',
        'btn-app': 'Sakinisha Programu',
        'loading-sys': 'Kuanza Mfumo...'
    }
};

// --- 1. Dynamic Splash Logic ---
const splashScreen = document.getElementById('splash-screen');
const getStartedBtn = document.getElementById('get-started-btn');
const loadingPerc = document.getElementById('loading-perc');
const loadingBarFill = document.getElementById('loading-bar-fill');
const dynamicGreeting = document.getElementById('dynamic-greeting');

function updateGreeting() {
    const hours = new Date().getHours();
    let greeting = "";
    const greetings = {
        en: ["Good Morning", "Good Afternoon", "Good Evening"],
        sw: ["Habari za asubuhi", "Habari za mchana", "Habari za jioni"]
    };

    if (hours < 12) greeting = greetings[currentLang][0];
    else if (hours < 18) greeting = greetings[currentLang][1];
    else greeting = greetings[currentLang][2];

    if (dynamicGreeting) {
        const suffix = currentLang === 'sw'
            ? 'Mimi ni Mtaalam wa IT Ken Peter Maina'
            : "I'm ICT Expert Ken Peter Maina";
        dynamicGreeting.innerText = `${greeting}, ${suffix}`;
    }
}

const statusMessages = [
    "Initializing Systems...",
    "Loading Neural Networks...",
    "Syncing Cloud Assets...",
    "Optimizing UI Components...",
    "Securing Data Channels...",
    "Finalizing Interface..."
];

const statusMessagesSO = [
    "Kuanza Huduma...",
    "Kupakua Miundombinu ya Wingu...",
    "Kusanikisha Rasilimali za Wingu...",
    "Kuongeza Ufanisi wa Vipengee vya UI...",
    "Kukagua Usalama wa Data...",
    "Kumaliza Kiolesura..."
];

function initSplashLoading() {
    let progress = 0;
    const statusText = document.querySelector('.loading-status');
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                const splashBtns = document.querySelector('.splash-btns');
                const loadingContainer = document.querySelector('.loading-container');
                if (loadingContainer) loadingContainer.style.display = 'none';
                if (splashBtns) splashBtns.style.display = 'flex';
                if (getStartedBtn) getStartedBtn.classList.add('reveal', 'active');
            }, 500);
        }

        // Update status messages based on progress
        const messages = currentLang === 'sw' ? statusMessagesSO : statusMessages;
        const messageIndex = Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1);
        if (statusText) statusText.innerText = messages[messageIndex];

        if (loadingPerc) loadingPerc.innerText = progress;
        if (loadingBarFill) loadingBarFill.style.width = `${progress}%`;
    }, 100);
}


function initSplashParticles() {
    const canvas = document.getElementById('splash-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.baseX = this.x;
            this.baseY = this.y;
        }
        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * 5;
            let directionY = forceDirectionY * force * 5;

            if (distance < mouse.radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
        }
        draw() {
            ctx.fillStyle = `rgba(26, 115, 232, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 70; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// PWA Logic
let deferredPrompt;
let installAppBtn;

console.log('PWA Logic: Initializing...');

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('PWA Logic: beforeinstallprompt event fired!');
    e.preventDefault();
    deferredPrompt = e;
    if (installAppBtn) {
        installAppBtn.style.display = 'inline-block';
        console.log('PWA Logic: Install button shown.');
    }
});

window.addEventListener('appinstalled', (evt) => {
    console.log('PWA Logic: App was installed.');
    if (installAppBtn) installAppBtn.style.display = 'none';
});

function setupPwaInstallButton() {
    installAppBtn = document.getElementById('install-app-btn');

    if (!installAppBtn) {
        console.warn('PWA Logic: install-app-btn not found in DOM.');
        return;
    }

    installAppBtn.style.display = 'inline-flex';
    installAppBtn.title = 'Install this site as an app when available.';

    installAppBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            console.log('PWA Logic: Prompting user to install.');
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`PWA Logic: User response: ${outcome}`);
            deferredPrompt = null;
            installAppBtn.style.display = 'none';
        } else {
            console.log('PWA Logic: deferredPrompt is null, cannot prompt.');
            alert('Install option is not yet available. Please interact with the site and reload, or use your browser install menu.');
        }
    });

    if (deferredPrompt) {
        installAppBtn.style.display = 'inline-flex';
    }
}

// --- 2. Text Scramble Effect ---
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-char">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Scramble Initialization
function initScramble() {
    const scrambleElements = document.querySelectorAll('.scramble');
    scrambleElements.forEach(el => {
        const text = el.innerText;
        const fx = new TextScramble(el);
        fx.setText(text);
    });
}

// --- 2. Skill Animation Logic ---
function initSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const width = target.getAttribute('data-width');
                target.style.width = width + '%';
                skillObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Splash Dismissal
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
        splashScreen.classList.add('fade-out');
        document.body.classList.remove('no-scroll');

        // Hide splash screen after animation
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 800);

        // Trigger scramble on main hero title after splash
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero-content h1');
            if (heroTitle) {
                heroTitle.classList.add('scramble');
                const fx = new TextScramble(heroTitle);
                fx.setText(heroTitle.innerText);
            }
            initScramble(); // Trigger others
        }, 400); // Trigger scramble sooner for better impact
    });
}

// Initialize on load
function initSplash() {
    updateGreeting();
    initSplashLoading();
    initSplashParticles();
}

// --- 3. Portfolio Data (Enhanced) ---
const portfolioItems = [
    {
        id: 1,
        category: 'cloud',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        title: 'Cloud Migration Project',
        description: 'Enterprise cloud migration to AWS reducing infrastructure costs by 40%',
        detailedDesc: 'Tan waa mashruuc weyn oo aan ku wareejinay shirkad dhan nidaamkeeda AWS Cloud. Waxaan ku guuleysanay inaan dhimno kharashka 40% anagoo isticmaalayna nidaam casri ah.',
        tags: ['AWS', 'Migration'],
        fullTech: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'Docker', 'CloudFormation'],
        live: 'https://janno.tiiny.site',
        repo: '#'
    },
    {
        id: 2,
        category: 'security',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        title: 'Security Framework Implementation',
        description: 'Comprehensive security framework reducing incidents by 75%',
        detailedDesc: 'Hirgelinta nidaam ammaan oo adag si looga difaaco shirkadda weerarada internetka (Cyber Attacks). In ka badan 75% weeraradii waa laga hortagay.',
        tags: ['Cybersecurity', 'Security'],
        fullTech: ['Firewall', 'IDS/IPS', 'VPN', 'SIEM', 'Compliance', 'Pentesting'],
        live: '#',
        repo: '#'
    },
    {
        id: 3,
        category: 'development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        title: 'Custom CRM Development',
        description: 'Custom CRM solution improving sales efficiency by 30%',
        detailedDesc: 'Samaynta software gaar u ah maareynta macaamiisha (CRM). Waxay kor u qaaday dakhliga iyo wax soo saarka shirkadda 30%.',
        tags: ['CRM', 'Development'],
        fullTech: ['Node.js', 'React', 'MongoDB', 'Express', 'Tailwind CSS', 'Redux'],
        live: '#',
        repo: '#'
    }
];

// --- DOM Elements ---
const portfolioGrid = document.querySelector('.portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('header');
const themeToggle = document.getElementById('theme-toggle');
const scrollProgress = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const typingText = document.getElementById('typing-text');
const particlesCanvas = document.getElementById('particles-canvas');


// --- 0. Hamburger Menu Toggle ---
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('active');
        if (!isActive) {
            navLinks.classList.add('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            // Push state for menu
            history.pushState({ menuOpen: true }, '');
        } else {
            closeMenu();
        }
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    });
}

function closeMenu() {
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }

        // If we closed it manually, and there's a menu state in history, go back
        if (window.history.state && window.history.state.menuOpen) {
            window.history.back();
        }
    }
}



// --- 2. Language Switcher Logic ---
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    if (lang === 'so') {
        lang = 'sw';
    }

    if (!translations[lang]) {
        lang = 'en';
    }

    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLanguage();

    // Update active state of buttons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Update Splash text if available
    if (getStartedBtn) getStartedBtn.textContent = translations[currentLang]['get-started'];
    const splashP = splashScreen?.querySelector('p');
    if (splashP) splashP.textContent = translations[currentLang]['splash-tagline'];

    // Update dynamic portfolio
    initPortfolio();
}

// --- 3. Dark Mode Logic ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

// --- 4. Typing Effect ---
const rolesEN = ["Engineering IT Solutions", "Full-Stack Development", "PWA Specialization", "Cybersecurity Expert"];
const rolesSO = ["Suluhisho za Ufundi wa IT", "Maendeleo ya Full-Stack", "Utaalamu wa PWA", "Mtaalamu wa Usalama"];

function getRoles() { return currentLang === 'en' ? rolesEN : rolesSO; }

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const roles = getRoles();
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// --- 5. Particles Background ---
function initParticles() {
    if (!particlesCanvas) return;
    const ctx = particlesCanvas.getContext('2d');
    let particlesArray = [];

    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;

    class Particle {
        constructor() {
            this.x = Math.random() * particlesCanvas.width;
            this.y = Math.random() * particlesCanvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
        particlesArray.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    for (let i = 0; i < 50; i++) particlesArray.push(new Particle());
    animate();
}

// --- 6. Scroll Features ---
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgress) scrollProgress.style.width = scrolled + "%";

    if (backToTop) {
        if (winScroll > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    }

    if (header) {
        if (winScroll > 100) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- 7. Custom Cursor ---
window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 991 && cursorDot && cursorOutline) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    }
});

// --- CORE FUNCTIONS ---

function initPortfolio() {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category} reveal`;
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-sm" onclick="openProjectModal(${item.id})" data-i18n="btn-details">View Details</button>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

function openPwaModal(titleText) {
    const modal = document.getElementById('pwaModal');
    if (!modal) return;

    // Set minimal content for PWA apps (they use a generic modal too)
    document.getElementById('modalTitle').innerText = titleText;
    document.getElementById('modalDesc').innerText = "Advanced PWA feature implementation details...";
    document.getElementById('modalTechChips').innerHTML = '<span class="tech-chip">PHP</span><span class="tech-chip">MySQL</span><span class="tech-chip">PWA</span>';

    openModalCommon();
}

function openProjectModal(id) {
    const item = portfolioItems.find(p => p.id === id);
    if (!item) return;

    const modal = document.getElementById('pwaModal');
    const mainImg = document.getElementById('modalMainImg');
    const thumbContainer = document.getElementById('modalThumbnails');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const techChips = document.getElementById('modalTechChips');
    const liveLink = document.getElementById('projectLiveLink');
    const repoLink = document.getElementById('projectRepoLink');

    if (!modal) return;

    // Reset and Set Content
    title.innerText = item.title;
    desc.innerText = currentLang === 'sw' ? item.detailedDesc : item.description;
    mainImg.src = item.image;

    // Tech Chips
    techChips.innerHTML = '';
    item.fullTech.forEach(tech => {
        const chip = document.createElement('span');
        chip.className = 'tech-chip';
        chip.innerText = tech;
        techChips.appendChild(chip);
    });

    // Thumbnails
    thumbContainer.innerHTML = '';
    if (item.gallery && item.gallery.length > 0) {
        item.gallery.forEach((img, index) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            if (index === 0) thumb.classList.add('active');
            thumb.onclick = () => {
                mainImg.src = img;
                document.querySelectorAll('.thumbnails img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            thumbContainer.appendChild(thumb);
        });
    }

    // Links
    liveLink.href = item.live || '#';
    repoLink.href = item.repo || '#';

    openModalCommon();
}

// Common helper for both modal types
function openModalCommon() {
    const modal = document.getElementById('pwaModal');
    modal.style.display = 'block';
    document.body.classList.add('no-scroll');

    // Push state to history
    history.pushState({ modalOpen: true }, '');
}

function closePwaModal() {
    const modal = document.getElementById('pwaModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');

        // If we closed it manually, and there's a modal state in history, go back
        if (window.history.state && window.history.state.modalOpen) {
            window.history.back();
        }
    }
}

// Handle browser back button
window.addEventListener('popstate', (event) => {
    // 1. Handle Modal
    const modal = document.getElementById('pwaModal');
    if (modal && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    // 2. Handle Menu
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
});

// --- 8. Reveal Animations (Intersection Observer) ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

function initReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
}

// --- 9. Stats Counter Logic ---
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const speed = 200; // Lower is slower
        const increment = target / speed;

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(() => animateStats(), 1);
        } else {
            stat.innerText = target;
        }
    });
}

// --- 10. FAQ Accordion Logic ---
function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all other items
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Stats intersection observer to trigger animation once
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0] && entries[0].isIntersecting) {
        animateStats();
        statsObserver.unobserve(statsSection);
    }
}, { threshold: 0.5 });

// --- 11. Testimonials Slider ---
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    if (!track || cards.length === 0) return;

    function upgradeSlider(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => upgradeSlider(index));
    });

    // Auto play
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % cards.length;
        upgradeSlider(nextIndex);
    }, 5000);
}

// --- 12. Experience Timeline Progress ---
function initTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    // Add progress line if not exists
    if (!document.querySelector('.timeline-progress-line')) {
        const line = document.createElement('div');
        line.className = 'timeline-progress-line';
        line.innerHTML = '<div class="timeline-progress-fill"></div>';
        timeline.prepend(line);
    }

    const fill = document.querySelector('.timeline-progress-fill');

    window.addEventListener('scroll', () => {
        const rect = timeline.getBoundingClientRect();
        const winHeight = window.innerHeight;

        if (rect.top < winHeight && rect.bottom > 0) {
            const totalHeight = timeline.offsetHeight;
            const scrolledHeight = winHeight - rect.top;
            let percentage = (scrolledHeight / totalHeight) * 100;
            percentage = Math.min(Math.max(percentage, 0), 100);
            fill.style.height = `${percentage}%`;
        }
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initPortfolio();
    setLanguage(currentLang);
    initReveal();
    initFaq();
    typeEffect();
    initParticles();
    initSplash();
    initSkills();
    initTestimonialsSlider(); // New Slider Initialization
    initTimelineProgress(); // New Timeline Initialization
    setupPwaInstallButton();

    if (statsSection) statsObserver.observe(statsSection);

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('PWA Logic: Service Worker Registered Successfully', reg))
                .catch(err => console.error('PWA Logic: Service Worker Registration Failed', err));
        });
    } else {
        console.warn('PWA Logic: Service Workers are not supported in this browser.');
    }
});
