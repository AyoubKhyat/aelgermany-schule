/* ============================================
   Alfa Haus Goethe — i18n Translation System
   Languages: Arabic (ar), French (fr), English (en)
   ============================================ */

var I18N = (function () {
    'use strict';

    var translations = {
        // ──────────── ARABIC ────────────
        ar: {
            // Nav
            "nav.home": "الرئيسية",
            "nav.about": "من نحن",
            "nav.services": "خدماتنا",
            "nav.programs": "البرامج",
            "nav.branch": "فرع المحمدية",
            "nav.whyUs": "لماذا نحن",
            "nav.contact": "تواصل معنا",

            // Hero
            "hero.badge": "التسجيل مفتوح",
            "hero.badge.seats": "الأماكن محدودة",
            "hero.title.line1": "مستقبلك يبدأ",
            "hero.title.line2": "من هنا نحو <span class='title-germany'>ألمانيا</span>",
            "hero.subtitle": "معهد متخصص في تعليم اللغة الألمانية والتوجيه نحو الدراسة والتكوين المهني بألمانيا — من المحمدية إلى ألمانيا، نرافقك في كل خطوة.",
            "hero.cta.whatsapp": "سجّل الآن عبر واتساب",
            "hero.cta.discover": "احجز مقعدك المجاني",
            "hero.urgency": "الأماكن محدودة لدورة سبتمبر 2026 — سجل قبل فوات الأوان",
            "hero.stats.students": "طالب ناجح",
            "hero.stats.levels": "جميع المستويات",
            "hero.stats.years": "سنوات خبرة",
            "hero.card.title": "ابدأ رحلتك نحو ألمانيا",
            "hero.card.subtitle": "تعلم الألمانية مع أفضل الأساتذة",
            "hero.scroll": "اكتشف المزيد",
            "hero.title.towards": "نحو",
            "hero.anno.courses": "دورات اللغة الألمانية",
            "hero.anno.courses.desc": "جميع المستويات ببرامج معتمدة",
            "hero.anno.branch": "فرعنا",
            "hero.anno.branch.city": "المحمدية",
            "hero.anno.branch.desc": "معهدك المحلي في المحمدية",
            "hero.anno.ausbild": "التوجيه المهني",
            "hero.anno.ausbild.desc": "مسارات التكوين المهني بألمانيا",
            "hero.anno.visa": "تحضير الفيزا",
            "hero.anno.visa.title": "المقابلة والملف",
            "hero.anno.visa.desc": "إعداد كامل لتأشيرة ناجحة",
            "hero.ed.wa": "تسجيل واتساب",
            "hero.anno.wa.desc": "تسجيل سريع واستشارة فورية",
            "hero.anno.alllevels": "جميع المستويات",

            // Social Proof
            "proof.instagram": "متابع على إنستغرام",
            "proof.branches": "موقع في المحمدية",
            "proof.focus": "تركيز على ألمانيا",
            "proof.guided": "طالب تم توجيهه",

            // About
            "about.tag": "من نحن",
            "about.title": "بوابتك نحو مستقبل في ألمانيا",
            "about.desc": "معهد رائد في تعليم اللغة الألمانية والتوجيه المهني",
            "about.lead": "<strong>Alfa Haus Goethe</strong> هو معهد متخصص في تعليم اللغة الألمانية وتوجيه الطلاب والمهنيين نحو فرص الدراسة والعمل والتكوين المهني في ألمانيا.",
            "about.p1": "نقدم برامج تعليمية شاملة تغطي جميع المستويات من A1 إلى B2، مع توجيه أكاديمي ومهني متخصص يساعد طلابنا على تحقيق أهدافهم بنجاح.",
            "about.p2": "بفضل فريق من الأساتذة المؤهلين وبرامج تعليمية حديثة، نضمن لطلابنا تجربة تعليمية احترافية ومتكاملة.",
            "about.badge": "خريج ناجح",
            "about.h1.title": "معتمدون ومعترف بنا",
            "about.h1.sub": "جودة تعليمية عالية",
            "about.h2.title": "أساتذة متخصصون",
            "about.h2.sub": "فريق تعليمي محترف",
            "about.h3.title": "شراكات مع مؤسسات ألمانية",
            "about.h3.sub": "علاقات دولية متينة",

            // Services
            "services.tag": "خدماتنا",
            "services.title": "خدمات تعليمية متكاملة",
            "services.desc": "كل ما تحتاجه لتحقيق حلمك في ألمانيا",
            "services.s1.title": "دورات اللغة الألمانية",
            "services.s1.text": "برامج تعليمية شاملة لجميع المستويات مع أساتذة متخصصين ومناهج حديثة معتمدة.",
            "services.s1.tag": "الأكثر طلباً",
            "services.s2.title": "تحضير A1, A2, B1",
            "services.s2.text": "تحضير مكثف للامتحانات الرسمية مع تدريبات عملية ونماذج امتحانات سابقة.",
            "services.s2.tag": "امتحانات معتمدة",
            "services.s3.title": "التوجيه للدراسة في ألمانيا",
            "services.s3.text": "مرافقة شخصية في اختيار الجامعة والتخصص وإعداد ملف القبول الجامعي.",
            "services.s3.tag": "توجيه أكاديمي",
            "services.s4.title": "التوجيه للتكوين المهني",
            "services.s4.text": "توجيه ومساعدة في التقديم لبرامج Ausbildung والتكوين المهني في ألمانيا.",
            "services.s5.title": "تحضير المقابلة والفيزا",
            "services.s5.text": "تدريب على مقابلات السفارة وإعداد كامل لملف طلب التأشيرة.",
            "services.s5.tag": "فيزا ألمانيا",
            "services.s6.title": "توجيه شخصي",
            "services.s6.text": "جلسات توجيه فردية لتحديد أفضل مسار تعليمي ومهني يناسب طموحاتك.",
            "services.s6.tag": "متابعة فردية",

            // Programs
            "programs.tag": "برامجنا",
            "programs.title": "مسارات تعليمية واضحة",
            "programs.desc": "من المستوى المبتدئ إلى المتقدم",
            "programs.duration": "المدة:",
            "programs.sessions": "الحصص:",
            "programs.a1.level": "المستوى المبتدئ",
            "programs.a1.text": "تعلم أساسيات اللغة الألمانية: التحية، التعريف بالنفس، المفردات الأساسية، والقواعد الأولية.",
            "programs.a1.dur": "2-3 أشهر",
            "programs.a1.ses": "4-5 مرات أسبوعياً",
            "programs.a2.level": "المستوى الأساسي",
            "programs.a2.text": "تطوير المهارات اللغوية: المحادثة اليومية، الكتابة البسيطة، وفهم النصوص القصيرة.",
            "programs.a2.dur": "2-3 أشهر",
            "programs.a2.ses": "4-5 مرات أسبوعياً",
            "programs.b1.badge": "الأكثر طلباً",
            "programs.b1.level": "المستوى المتوسط",
            "programs.b1.text": "إتقان اللغة للاستخدام اليومي والمهني: محادثات متقدمة، كتابة رسائل، وفهم وسائل الإعلام.",
            "programs.b1.dur": "3-4 أشهر",
            "programs.b1.ses": "5 مرات أسبوعياً",
            "programs.b1.note": "مطلوب للتكوين المهني والتأشيرة",
            "programs.b2.level": "المستوى المتقدم",
            "programs.b2.text": "مستوى متقدم للدراسة الجامعية والعمل المهني في ألمانيا.",
            "programs.b2.dur": "3-4 أشهر",
            "programs.b2.ses": "5 مرات أسبوعياً",

            // Why Us
            "why.tag": "لماذا نحن",
            "why.title": "ما يميزنا عن غيرنا",
            "why.desc": "أسباب تجعلنا الخيار الأفضل",
            "why.w1.title": "مسار تعليمي واضح",
            "why.w1.text": "خطة دراسية محددة من البداية حتى تحقيق الهدف.",
            "why.w2.title": "دعم ومرافقة مهنية",
            "why.w2.text": "فريق متخصص يرافقك في كل خطوة من رحلتك.",
            "why.w3.title": "برامج موجهة لألمانيا",
            "why.w3.text": "محتوى تعليمي مصمم خصيصاً لتلبية متطلبات المؤسسات الألمانية.",
            "why.w4.title": "موقع استراتيجي",
            "why.w4.text": "موقع مميز في المحمدية لسهولة الوصول.",
            "why.w5.title": "متابعة شخصية",
            "why.w5.text": "متابعة فردية لكل طالب لضمان التقدم المستمر.",
            "why.w6.title": "منهج مناسب للمبتدئين",
            "why.w6.text": "بيئة تعليمية محفزة ومريحة حتى لمن ليست لديه أي خلفية سابقة.",

            // Branch
            "branch.tag": "فرع المحمدية",
            "branch.title": "فرعنا في المحمدية",
            "branch.desc": "قريبون منكم لخدمتكم بشكل أفضل",
            "branch.new": "جديد",
            "branch.address.label": "العنوان",
            "branch.address.value": "زنقة الصفي، زاوية شارع عبد الرحمن السرغيني، عمارة إبراهيم الثانية، الطابق 3، شقة 14، المحمدية",
            "branch.phone.label": "الهاتف",
            "branch.hours.label": "أوقات العمل",
            "branch.hours.value": "الإثنين - السبت: 9:00 - 19:00",
            "branch.cta.whatsapp": "تواصل عبر واتساب",
            "branch.cta.call": "اتصل بنا",

            // CTA
            "cta.title": "ابدأ رحلتك نحو ألمانيا اليوم",
            "cta.subtitle": "سجل الآن وانطلق نحو مستقبلك",
            "cta.text": "سجل الآن في دورات اللغة الألمانية واحصل على توجيه متخصص لتحقيق حلمك.",
            "cta.btn.whatsapp": "سجل الآن عبر واتساب",
            "cta.btn.instagram": "تابعنا على إنستغرام",

            // Footer
            "footer.about": "معهد متخصص في تعليم اللغة الألمانية والتوجيه نحو الدراسة والتكوين المهني بألمانيا.",
            "footer.quickLinks": "روابط سريعة",
            "footer.copyright": "&copy; 2026 Alfa Haus Goethe. جميع الحقوق محفوظة.",

            // Nav
            "nav.faq": "الأسئلة",

            // Urgency
            "urgency.text": "الأماكن محدودة — دورة سبتمبر 2026",
            "urgency.btn": "سجل الآن",

            // Hero Trust
            "hero.trust": "+51 طالب سجلوا هذا الشهر",

            // Journey
            "journey.tag": "رحلتك نحو ألمانيا",
            "journey.title": "من المحمدية إلى ألمانيا في 6 خطوات",
            "journey.desc": "مسار واضح نرافقك فيه من أول خطوة حتى الوصول",
            "journey.s1.title": "التسجيل والتقييم",
            "journey.s1.text": "تسجل معنا ونحدد مستواك الحالي ونضع خطة تعليمية مخصصة لك.",
            "journey.s2.title": "تعلم اللغة الألمانية",
            "journey.s2.text": "دورات مكثفة من A1 إلى B1/B2 مع أساتذة متخصصين ومناهج حديثة.",
            "journey.s3.title": "اجتياز الامتحان",
            "journey.s3.text": "تحضير مكثف واجتياز امتحان Goethe أو telc المعتمد دولياً.",
            "journey.s4.title": "التوجيه المهني",
            "journey.s4.text": "نساعدك في اختيار برنامج Ausbildung أو الجامعة المناسبة.",
            "journey.s5.title": "ملف الفيزا والمقابلة",
            "journey.s5.text": "إعداد كامل لملف التأشيرة وتدريب على مقابلة السفارة.",
            "journey.s6.title": "الوصول إلى ألمانيا",
            "journey.s6.text": "تبدأ حياتك الجديدة في ألمانيا بثقة واستعداد تام.",
            "journey.cta": "ابدأ رحلتك الآن",

            // Success Stories
            "success.tag": "قصص نجاح",
            "success.title": "طلابنا في ألمانيا الآن",
            "success.desc": "قصص حقيقية لطلاب غيّرت حياتهم مع Alfa Haus Goethe",
            "success.t1.text": "بفضل Alfa Haus Goethe، حصلت على B1 في 8 أشهر فقط وأنا الآن أدرس التمريض في ميونخ. الأساتذة كانوا ممتازين والدعم لم يتوقف حتى بعد وصولي لألمانيا.",
            "success.t1.name": "ياسمين — ميونخ",
            "success.t1.role": "طالبة تمريض — Ausbildung",
            "success.t2.text": "كنت خائفاً من البداية لكن الفريق في Alfa Haus Goethe ساعدني خطوة بخطوة. من الصفر إلى B1 ثم Ausbildung في هامبورغ. أفضل قرار أخذته في حياتي.",
            "success.t2.name": "أيوب — هامبورغ",
            "success.t2.role": "تكوين مهني — Mechatroniker",
            "success.t3.text": "Alfa Haus Goethe ليست مجرد معهد لغة، بل هي عائلة ترافقك في كل خطوة. التوجيه المهني والمساعدة في الفيزا كانا ممتازين. أنا الآن في برلين وسعيد جداً.",
            "success.t3.name": "سارة — برلين",
            "success.t3.role": "طالبة جامعية — Informatik",

            // Video Testimonials
            "videos.tag": "شهادات بالفيديو",
            "videos.title": "اسمع من طلابنا مباشرة",
            "videos.desc": "تجارب حقيقية يرويها أصحابها",
            "videos.featured.title": "شاهد تجارب طلابنا على فيسبوك",
            "videos.featured.desc": "فيديوهات حقيقية من رحلات طلابنا نحو ألمانيا",
            "videos.cta.fb": "شاهد المزيد على فيسبوك",

            // Lead Form
            "form.tag": "استشارة مجانية",
            "form.title": "احجز جلسة توجيه مجانية",
            "form.desc": "أكمل النموذج وسنتواصل معك عبر واتساب خلال 24 ساعة لتحديد موعد جلسة توجيه مجانية مع مستشار متخصص.",
            "form.b1": "تقييم مستوى مجاني",
            "form.b2": "خطة تعليمية مخصصة",
            "form.b3": "معلومات عن فرص ألمانيا",
            "form.b4": "بدون أي التزام",
            "form.name": "الاسم الكامل",
            "form.phone": "رقم الهاتف (واتساب)",
            "form.city": "المدينة",
            "form.cityPlaceholder": "اختر المدينة",
            "form.city.mohammedia": "المحمدية",
            "form.city.casablanca": "الدار البيضاء",
            "form.city.rabat": "الرباط",
            "form.city.other": "مدينة أخرى",
            "form.goal": "هدفك",
            "form.goalPlaceholder": "ما هو هدفك؟",
            "form.goalAusbildung": "التكوين المهني — Ausbildung",
            "form.goalStudium": "الدراسة الجامعية — Studium",
            "form.goalArbeit": "العمل — Arbeit",
            "form.goalSprache": "تعلم اللغة فقط",
            "form.level": "مستواك الحالي",
            "form.levelNone": "مبتدئ — بدون خلفية",
            "form.submit": "أرسل عبر واتساب",
            "form.note": "سنتواصل معك عبر واتساب خلال 24 ساعة",

            // Gallery
            "gallery.classroom": "قاعة الدراسة",
            "gallery.reception": "الاستقبال",
            "gallery.students": "طلابنا",
            "gallery.events": "فعالياتنا",

            // FAQ
            "faq.tag": "أسئلة شائعة",
            "faq.title": "كل ما تريد معرفته",
            "faq.desc": "أجوبة على أكثر الأسئلة تكراراً",
            "faq.q1": "هل أحتاج لمعرفة مسبقة باللغة الألمانية؟",
            "faq.a1": "لا، نقبل المبتدئين تماماً. دوراتنا تبدأ من المستوى A1 (صفر) وتتدرج حتى B2. معظم طلابنا بدأوا بدون أي خلفية سابقة.",
            "faq.q2": "كم المدة اللازمة للوصول إلى مستوى B1؟",
            "faq.a2": "عادة ما يستغرق الوصول من الصفر إلى B1 حوالي 8-10 أشهر مع الدورات المكثفة (4-5 حصص أسبوعياً). المدة تعتمد على مدى التزامك واجتهادك.",
            "faq.q3": "هل تساعدون في إجراءات الفيزا؟",
            "faq.a3": "نعم، نقدم خدمة شاملة تتضمن: إعداد ملف التأشيرة، التدريب على مقابلة السفارة، ومرافقة شخصية في كل خطوة من إجراءات الفيزا.",
            "faq.q4": "ما هو Ausbildung وهل يمكنني التقديم؟",
            "faq.a4": "Ausbildung هو نظام التكوين المهني في ألمانيا، يجمع بين الدراسة النظرية والتدريب العملي مع راتب شهري. يمكن لأي شخص لديه مستوى B1 على الأقل التقديم. نساعدك في اختيار التخصص وإعداد ملف التقديم.",
            "faq.q5": "كم تكلفة الدورات؟",
            "faq.a5": "الأسعار تختلف حسب المستوى ونوع الدورة. تواصل معنا عبر واتساب للحصول على تفاصيل الأسعار والعروض الحالية. نقدم أيضاً تسهيلات في الدفع.",
            "faq.q6": "هل الشهادة معترف بها في ألمانيا؟",
            "faq.a6": "نحضرك لاجتياز امتحانات Goethe-Institut و telc المعترف بها دولياً. هذه الشهادات مقبولة في جميع المؤسسات الألمانية وهي مطلوبة لإجراءات التأشيرة.",
            "faq.more": "لم تجد جوابك؟",
            "faq.askBtn": "اسألنا عبر واتساب",

            // Instagram
            "insta.title": "تابعنا على إنستغرام",
            "insta.desc": "آخر الأخبار والفعاليات والنصائح",
            "insta.btn": "@alfa.hausgoethe — 10K+ متابع",

            // Hero Annotation Pins
            "hero.pin.courses": "دورات A1–B2",
            "hero.pin.courses.sub": "جميع المستويات",
            "hero.pin.ausbildung": "توجيه Ausbildung",
            "hero.pin.ausbildung.sub": "تكوين مهني بألمانيا",
            "hero.pin.visa": "تحضير الفيزا",
            "hero.pin.visa.sub": "مقابلة + ملف كامل",
            "hero.pin.branch": "فرع المحمدية",
            "hero.pin.branch.sub": "سجل عبر واتساب",
            "hero.ed.wa": "تسجيل واتساب",

            // Footer CTA
            "footer.cta.title": "ابدأ رحلتك نحو ألمانيا اليوم",
            "footer.cta.sub": "سجّل الآن واحصل على استشارة مجانية",
            "footer.cta.wa": "سجّل عبر واتساب",
            "footer.cta.call": "اتصل بنا",

            // Footer Programs
            "footer.prog.a1": "دورة A1 — مبتدئ",
            "footer.prog.a2": "دورة A2 — أساسي",
            "footer.prog.b1": "دورة B1 — متوسط",
            "footer.prog.b2": "دورة B2 — متقدم",
            "footer.prog.ausbildung": "توجيه Ausbildung",

            // Mobile CTA
            "mobile.cta.wa": "واتساب",
            "mobile.cta.call": "اتصل بنا",
            "mobile.cta.programs": "البرامج",
            "wa.bubble": "مرحباً! هل تريد معلومات عن دورات اللغة الألمانية؟ تواصل معنا الآن 🇩🇪"
        },

        // ──────────── FRENCH ────────────
        fr: {
            "nav.home": "Accueil",
            "nav.about": "À propos",
            "nav.services": "Services",
            "nav.programs": "Programmes",
            "nav.branch": "Branche Mohammedia",
            "nav.whyUs": "Pourquoi nous",
            "nav.contact": "Contact",

            "hero.badge": "Inscription ouverte",
            "hero.badge.seats": "Places limitées",
            "hero.title.line1": "Votre avenir commence",
            "hero.title.line2": "ici vers <span class='title-germany'>l'Allemagne</span>",
            "hero.subtitle": "Institut spécialisé dans l'enseignement de l'allemand et l'orientation vers les études et la formation professionnelle en Allemagne — de Mohammedia à l'Allemagne, nous vous accompagnons à chaque étape.",
            "hero.cta.whatsapp": "Inscrivez-vous via WhatsApp",
            "hero.cta.discover": "Réservez votre place",
            "hero.urgency": "Places limitées pour la session de Septembre 2026 — inscrivez-vous avant qu'il ne soit trop tard",
            "hero.stats.students": "Étudiants diplômés",
            "hero.stats.levels": "Tous les niveaux",
            "hero.stats.years": "Années d'expérience",
            "hero.card.title": "Commencez votre parcours vers l'Allemagne",
            "hero.card.subtitle": "Apprenez l'allemand avec les meilleurs professeurs",
            "hero.scroll": "Découvrir plus",
            "hero.title.towards": "Vers",
            "hero.anno.courses": "Cours d'allemand",
            "hero.anno.courses.desc": "Tous niveaux, programmes certifiés",
            "hero.anno.branch": "Notre branche",
            "hero.anno.branch.city": "Mohammedia",
            "hero.anno.branch.desc": "Votre institut local à Mohammedia",
            "hero.anno.ausbild": "Orientation professionnelle",
            "hero.anno.ausbild.desc": "Parcours de formation en Allemagne",
            "hero.anno.visa": "Préparation visa",
            "hero.anno.visa.title": "Entretien & dossier",
            "hero.anno.visa.desc": "Préparation complète pour un visa réussi",
            "hero.ed.wa": "Inscription WhatsApp",
            "hero.anno.wa.desc": "Inscription rapide et consultation immédiate",
            "hero.anno.alllevels": "Tous les niveaux",

            "proof.instagram": "Followers Instagram",
            "proof.branches": "Emplacement à Mohammedia",
            "proof.focus": "Focus Allemagne",
            "proof.guided": "Étudiants orientés",

            "about.tag": "À propos",
            "about.title": "Votre passerelle vers un avenir en Allemagne",
            "about.desc": "Votre passerelle vers l'Allemagne",
            "about.lead": "<strong>Alfa Haus Goethe</strong> est un institut spécialisé dans l'enseignement de la langue allemande et l'orientation des étudiants et professionnels vers les opportunités d'études, de travail et de formation professionnelle en Allemagne.",
            "about.p1": "Nous proposons des programmes éducatifs complets couvrant tous les niveaux de A1 à B2, avec un accompagnement académique et professionnel spécialisé qui aide nos étudiants à atteindre leurs objectifs avec succès.",
            "about.p2": "Grâce à une équipe d'enseignants qualifiés et des programmes éducatifs modernes, nous garantissons à nos étudiants une expérience éducative professionnelle et intégrée.",
            "about.badge": "Diplômé avec succès",
            "about.h1.title": "Reconnus et certifiés",
            "about.h1.sub": "Qualité éducative élevée",
            "about.h2.title": "Enseignants spécialisés",
            "about.h2.sub": "Équipe pédagogique professionnelle",
            "about.h3.title": "Partenariats avec des institutions allemandes",
            "about.h3.sub": "Relations internationales solides",

            "services.tag": "Nos services",
            "services.title": "Des services éducatifs complets",
            "services.desc": "Tout ce dont vous avez besoin pour réaliser votre rêve en Allemagne",
            "services.s1.title": "Cours de langue allemande",
            "services.s1.text": "Programmes éducatifs complets pour tous les niveaux avec des enseignants spécialisés et des méthodes modernes certifiées.",
            "services.s1.tag": "Le plus demandé",
            "services.s2.title": "Préparation A1, A2, B1",
            "services.s2.text": "Préparation intensive aux examens officiels avec des exercices pratiques et des modèles d'examens antérieurs.",
            "services.s2.tag": "Examens certifiés",
            "services.s3.title": "Orientation études en Allemagne",
            "services.s3.text": "Accompagnement personnalisé dans le choix de l'université et de la spécialité et la préparation du dossier d'admission.",
            "services.s3.tag": "Orientation académique",
            "services.s4.title": "Orientation formation professionnelle",
            "services.s4.text": "Orientation et assistance pour postuler aux programmes d'Ausbildung et de formation professionnelle en Allemagne.",
            "services.s5.title": "Préparation entretien & visa",
            "services.s5.text": "Formation aux entretiens d'ambassade et préparation complète du dossier de demande de visa.",
            "services.s5.tag": "Visa Allemagne",
            "services.s6.title": "Orientation personnalisée",
            "services.s6.text": "Séances d'orientation individuelles pour déterminer le meilleur parcours éducatif et professionnel adapté à vos ambitions.",
            "services.s6.tag": "Suivi individuel",

            "programs.tag": "Nos programmes",
            "programs.title": "Des parcours d'apprentissage clairs",
            "programs.desc": "Du niveau débutant au niveau avancé",
            "programs.duration": "Durée :",
            "programs.sessions": "Séances :",
            "programs.a1.level": "Niveau débutant",
            "programs.a1.text": "Apprendre les bases de la langue allemande : salutations, se présenter, vocabulaire essentiel et règles grammaticales de base.",
            "programs.a1.dur": "2-3 mois",
            "programs.a1.ses": "4-5 fois par semaine",
            "programs.a2.level": "Niveau élémentaire",
            "programs.a2.text": "Développer les compétences linguistiques : conversation quotidienne, écriture simple et compréhension de textes courts.",
            "programs.a2.dur": "2-3 mois",
            "programs.a2.ses": "4-5 fois par semaine",
            "programs.b1.badge": "Le plus demandé",
            "programs.b1.level": "Niveau intermédiaire",
            "programs.b1.text": "Maîtrise de la langue pour un usage quotidien et professionnel : conversations avancées, rédaction de lettres et compréhension des médias.",
            "programs.b1.dur": "3-4 mois",
            "programs.b1.ses": "5 fois par semaine",
            "programs.b1.note": "Requis pour l'Ausbildung et le visa",
            "programs.b2.level": "Niveau avancé",
            "programs.b2.text": "Niveau avancé pour les études universitaires et le travail professionnel en Allemagne.",
            "programs.b2.dur": "3-4 mois",
            "programs.b2.ses": "5 fois par semaine",

            "why.tag": "Pourquoi nous choisir",
            "why.title": "Ce qui nous distingue des autres",
            "why.desc": "Des raisons qui font de nous le meilleur choix",
            "why.w1.title": "Parcours d'apprentissage clair",
            "why.w1.text": "Un plan d'étude défini du début jusqu'à l'atteinte de l'objectif.",
            "why.w2.title": "Accompagnement professionnel",
            "why.w2.text": "Une équipe spécialisée vous accompagne à chaque étape de votre parcours.",
            "why.w3.title": "Programmes orientés Allemagne",
            "why.w3.text": "Contenu éducatif conçu spécifiquement pour répondre aux exigences des institutions allemandes.",
            "why.w4.title": "Emplacement stratégique",
            "why.w4.text": "Un emplacement privilégié à Mohammedia pour un accès facile.",
            "why.w5.title": "Suivi personnalisé",
            "why.w5.text": "Un suivi individuel pour chaque étudiant afin d'assurer une progression continue.",
            "why.w6.title": "Approche adaptée aux débutants",
            "why.w6.text": "Un environnement éducatif motivant et confortable, même pour ceux sans aucune expérience préalable.",

            "branch.tag": "Branche Mohammedia",
            "branch.title": "Notre branche à Mohammedia",
            "branch.desc": "Proches de vous pour mieux vous servir",
            "branch.new": "Nouveau",
            "branch.address.label": "Adresse",
            "branch.address.value": "Angle Bd Abderrahmane Serghni et Rue Safi, Immeuble Ibrahim II, Étage 3, Appartement 14, Mohammedia",
            "branch.phone.label": "Téléphone",
            "branch.hours.label": "Horaires",
            "branch.hours.value": "Lundi - Samedi : 9h00 - 19h00",
            "branch.cta.whatsapp": "Contacter via WhatsApp",
            "branch.cta.call": "Appelez-nous",

            "cta.title": "Commencez votre parcours vers l'Allemagne aujourd'hui",
            "cta.subtitle": "Inscrivez-vous maintenant et lancez-vous vers votre avenir",
            "cta.text": "Inscrivez-vous maintenant aux cours de langue allemande et bénéficiez d'une orientation spécialisée pour réaliser votre rêve.",
            "cta.btn.whatsapp": "Inscrivez-vous via WhatsApp",
            "cta.btn.instagram": "Suivez-nous sur Instagram",

            "footer.about": "Institut spécialisé dans l'enseignement de l'allemand et l'orientation vers les études et la formation professionnelle en Allemagne.",
            "footer.quickLinks": "Liens rapides",
            "footer.copyright": "&copy; 2026 Alfa Haus Goethe. Tous droits réservés.",

            "nav.faq": "FAQ",

            "urgency.text": "Places limitées — Session Septembre 2026",
            "urgency.btn": "Inscrivez-vous",

            "hero.trust": "+51 étudiants inscrits ce mois-ci",

            "journey.tag": "Votre parcours",
            "journey.title": "De Mohammedia à l'Allemagne en 6 étapes",
            "journey.desc": "Un parcours clair où nous vous accompagnons de la première étape jusqu'à l'arrivée",
            "journey.s1.title": "Inscription et évaluation",
            "journey.s1.text": "Inscrivez-vous et nous évaluerons votre niveau actuel pour établir un plan d'apprentissage personnalisé.",
            "journey.s2.title": "Apprendre l'allemand",
            "journey.s2.text": "Cours intensifs de A1 à B1/B2 avec des enseignants spécialisés et des méthodes modernes.",
            "journey.s3.title": "Réussir l'examen",
            "journey.s3.text": "Préparation intensive et passage de l'examen Goethe ou telc reconnu internationalement.",
            "journey.s4.title": "Orientation professionnelle",
            "journey.s4.text": "Nous vous aidons à choisir le programme d'Ausbildung ou l'université qui vous convient.",
            "journey.s5.title": "Dossier visa et entretien",
            "journey.s5.text": "Préparation complète du dossier de visa et formation à l'entretien d'ambassade.",
            "journey.s6.title": "Arrivée en Allemagne",
            "journey.s6.text": "Vous commencez votre nouvelle vie en Allemagne avec confiance et préparation.",
            "journey.cta": "Commencez votre parcours maintenant",

            "success.tag": "Histoires de réussite",
            "success.title": "Nos étudiants sont en Allemagne",
            "success.desc": "Des histoires vraies d'étudiants dont la vie a changé avec Alfa Haus Goethe",
            "success.t1.text": "Grâce à Alfa Haus Goethe, j'ai obtenu mon B1 en seulement 8 mois et j'étudie maintenant les soins infirmiers à Munich. Les professeurs étaient excellents et le soutien n'a pas cessé même après mon arrivée en Allemagne.",
            "success.t1.name": "Yasmine — Munich",
            "success.t1.role": "Étudiante en soins infirmiers — Ausbildung",
            "success.t2.text": "J'avais peur de commencer mais l'équipe d'Alfa Haus Goethe m'a aidé pas à pas. De zéro à B1 puis Ausbildung à Hambourg. La meilleure décision de ma vie.",
            "success.t2.name": "Ayoub — Hambourg",
            "success.t2.role": "Formation professionnelle — Mechatroniker",
            "success.t3.text": "Alfa Haus Goethe n'est pas qu'un institut de langues, c'est une famille qui vous accompagne à chaque étape. L'orientation professionnelle et l'aide au visa étaient excellentes. Je suis maintenant à Berlin et très heureux.",
            "success.t3.name": "Sara — Berlin",
            "success.t3.role": "Étudiante universitaire — Informatik",

            "videos.tag": "Témoignages vidéo",
            "videos.title": "Écoutez nos étudiants directement",
            "videos.desc": "Des expériences réelles racontées par leurs auteurs",
            "videos.featured.title": "Découvrez les expériences de nos étudiants sur Facebook",
            "videos.featured.desc": "Vidéos authentiques des parcours de nos étudiants vers l'Allemagne",
            "videos.cta.fb": "Voir plus sur Facebook",

            "form.tag": "Consultation gratuite",
            "form.title": "Réservez une séance d'orientation gratuite",
            "form.desc": "Remplissez le formulaire et nous vous contacterons via WhatsApp dans les 24 heures pour planifier une séance d'orientation gratuite avec un conseiller spécialisé.",
            "form.b1": "Évaluation de niveau gratuite",
            "form.b2": "Plan d'apprentissage personnalisé",
            "form.b3": "Informations sur les opportunités en Allemagne",
            "form.b4": "Sans aucun engagement",
            "form.name": "Nom complet",
            "form.phone": "Numéro de téléphone (WhatsApp)",
            "form.city": "Ville",
            "form.cityPlaceholder": "Choisir la ville",
            "form.city.mohammedia": "Mohammedia",
            "form.city.casablanca": "Casablanca",
            "form.city.rabat": "Rabat",
            "form.city.other": "Autre ville",
            "form.goal": "Votre objectif",
            "form.goalPlaceholder": "Quel est votre objectif ?",
            "form.goalAusbildung": "Formation professionnelle — Ausbildung",
            "form.goalStudium": "Études universitaires — Studium",
            "form.goalArbeit": "Travail — Arbeit",
            "form.goalSprache": "Apprendre la langue uniquement",
            "form.level": "Votre niveau actuel",
            "form.levelNone": "Débutant — sans expérience",
            "form.submit": "Envoyer via WhatsApp",
            "form.note": "Nous vous contacterons via WhatsApp dans les 24 heures",

            "gallery.classroom": "Salle de cours",
            "gallery.reception": "Réception",
            "gallery.students": "Nos étudiants",
            "gallery.events": "Nos événements",

            "faq.tag": "Questions fréquentes",
            "faq.title": "Tout ce que vous devez savoir",
            "faq.desc": "Réponses aux questions les plus fréquentes",
            "faq.q1": "Ai-je besoin de connaissances préalables en allemand ?",
            "faq.a1": "Non, nous acceptons les débutants complets. Nos cours commencent au niveau A1 (zéro) et progressent jusqu'au B2. La plupart de nos étudiants ont commencé sans aucune expérience préalable.",
            "faq.q2": "Combien de temps faut-il pour atteindre le niveau B1 ?",
            "faq.a2": "Il faut généralement 8 à 10 mois pour passer de zéro à B1 avec les cours intensifs (4-5 séances par semaine). La durée dépend de votre engagement et de votre assiduité.",
            "faq.q3": "Aidez-vous dans les démarches de visa ?",
            "faq.a3": "Oui, nous offrons un service complet comprenant : la préparation du dossier de visa, la formation à l'entretien d'ambassade et un accompagnement personnalisé à chaque étape des démarches.",
            "faq.q4": "Qu'est-ce que l'Ausbildung et puis-je postuler ?",
            "faq.a4": "L'Ausbildung est le système de formation professionnelle en Allemagne, combinant études théoriques et formation pratique avec un salaire mensuel. Toute personne ayant au moins le niveau B1 peut postuler. Nous vous aidons à choisir la spécialité et à préparer le dossier.",
            "faq.q5": "Combien coûtent les cours ?",
            "faq.a5": "Les prix varient selon le niveau et le type de cours. Contactez-nous via WhatsApp pour obtenir les détails des tarifs et les offres en cours. Nous proposons également des facilités de paiement.",
            "faq.q6": "Le certificat est-il reconnu en Allemagne ?",
            "faq.a6": "Nous vous préparons aux examens Goethe-Institut et telc reconnus internationalement. Ces certificats sont acceptés dans toutes les institutions allemandes et sont requis pour les démarches de visa.",
            "faq.more": "Vous n'avez pas trouvé votre réponse ?",
            "faq.askBtn": "Demandez-nous via WhatsApp",

            "insta.title": "Suivez-nous sur Instagram",
            "insta.desc": "Dernières nouvelles, événements et conseils",
            "insta.btn": "@alfa.hausgoethe — 10K+ abonnés",

            // Hero Annotation Pins
            "hero.pin.courses": "Cours A1–B2",
            "hero.pin.courses.sub": "Tous les niveaux",
            "hero.pin.ausbildung": "Orientation Ausbildung",
            "hero.pin.ausbildung.sub": "Formation pro en Allemagne",
            "hero.pin.visa": "Préparation Visa",
            "hero.pin.visa.sub": "Entretien + dossier complet",
            "hero.pin.branch": "Branche Mohammedia",
            "hero.pin.branch.sub": "Inscrivez-vous via WhatsApp",
            "hero.ed.wa": "Inscription WhatsApp",

            // Footer CTA
            "footer.cta.title": "Commencez votre parcours vers l'Allemagne aujourd'hui",
            "footer.cta.sub": "Inscrivez-vous maintenant et bénéficiez d'une consultation gratuite",
            "footer.cta.wa": "Inscrivez-vous via WhatsApp",
            "footer.cta.call": "Appelez-nous",

            // Footer Programs
            "footer.prog.a1": "Cours A1 — Débutant",
            "footer.prog.a2": "Cours A2 — Élémentaire",
            "footer.prog.b1": "Cours B1 — Intermédiaire",
            "footer.prog.b2": "Cours B2 — Avancé",
            "footer.prog.ausbildung": "Orientation Ausbildung",

            "mobile.cta.wa": "WhatsApp",
            "mobile.cta.call": "Appeler",
            "mobile.cta.programs": "Programmes",
            "wa.bubble": "Bonjour ! Vous souhaitez des informations sur nos cours d'allemand ? Contactez-nous maintenant 🇩🇪"
        },

        // ──────────── ENGLISH ────────────
        en: {
            "nav.home": "Home",
            "nav.about": "About Us",
            "nav.services": "Services",
            "nav.programs": "Programs",
            "nav.branch": "Mohammedia Branch",
            "nav.whyUs": "Why Us",
            "nav.contact": "Contact Us",

            "hero.badge": "Registration Open",
            "hero.badge.seats": "Limited Spots",
            "hero.title.line1": "Your Future Starts",
            "hero.title.line2": "Here Towards <span class='title-germany'>Germany</span>",
            "hero.subtitle": "A specialized institute for German language education and guidance towards studies and vocational training in Germany — from Mohammedia to Germany, we guide you every step of the way.",
            "hero.cta.whatsapp": "Register via WhatsApp",
            "hero.cta.discover": "Book Your Free Spot",
            "hero.urgency": "Limited spots for September 2026 session — register before it's too late",
            "hero.stats.students": "Successful Students",
            "hero.stats.levels": "All Levels",
            "hero.stats.years": "Years of Experience",
            "hero.card.title": "Start Your Journey to Germany",
            "hero.card.subtitle": "Learn German with the best instructors",
            "hero.scroll": "Discover More",
            "hero.title.towards": "Towards",
            "hero.anno.courses": "German Language Courses",
            "hero.anno.courses.desc": "All levels with certified programs",
            "hero.anno.branch": "Our Branch",
            "hero.anno.branch.city": "Mohammedia",
            "hero.anno.branch.desc": "Your local institute in Mohammedia",
            "hero.anno.ausbild": "Career Orientation",
            "hero.anno.ausbild.desc": "Vocational training paths in Germany",
            "hero.anno.visa": "Visa Preparation",
            "hero.anno.visa.title": "Interview & File",
            "hero.anno.visa.desc": "Complete preparation for a successful visa",
            "hero.ed.wa": "WhatsApp Registration",
            "hero.anno.wa.desc": "Quick signup and instant consultation",
            "hero.anno.alllevels": "All Levels",

            "proof.instagram": "Instagram Followers",
            "proof.branches": "Location in Mohammedia",
            "proof.focus": "Germany Focused",
            "proof.guided": "Students Guided",

            "about.tag": "About Us",
            "about.title": "Your Gateway to a Future in Germany",
            "about.desc": "Your gateway to Germany",
            "about.lead": "<strong>Alfa Haus Goethe</strong> is a specialized institute in German language education, guiding students and professionals towards study, work, and vocational training opportunities in Germany.",
            "about.p1": "We offer comprehensive educational programs covering all levels from A1 to B2, with specialized academic and professional guidance that helps our students achieve their goals successfully.",
            "about.p2": "Thanks to a team of qualified instructors and modern educational programs, we ensure our students a professional and integrated educational experience.",
            "about.badge": "Successful Graduate",
            "about.h1.title": "Recognized & Certified",
            "about.h1.sub": "High educational quality",
            "about.h2.title": "Specialized Instructors",
            "about.h2.sub": "Professional teaching team",
            "about.h3.title": "Partnerships with German Institutions",
            "about.h3.sub": "Strong international relations",

            "services.tag": "Our Services",
            "services.title": "Comprehensive Educational Services",
            "services.desc": "Everything you need to achieve your dream in Germany",
            "services.s1.title": "German Language Courses",
            "services.s1.text": "Comprehensive educational programs for all levels with specialized instructors and certified modern curricula.",
            "services.s1.tag": "Most Requested",
            "services.s2.title": "A1, A2, B1 Preparation",
            "services.s2.text": "Intensive preparation for official exams with practical exercises and past exam papers.",
            "services.s2.tag": "Certified Exams",
            "services.s3.title": "Study Guidance in Germany",
            "services.s3.text": "Personal guidance in choosing the university and major, and preparing the admission file.",
            "services.s3.tag": "Academic Guidance",
            "services.s4.title": "Vocational Training Guidance",
            "services.s4.text": "Guidance and assistance in applying for Ausbildung and vocational training programs in Germany.",
            "services.s5.title": "Interview & Visa Preparation",
            "services.s5.text": "Training for embassy interviews and complete preparation of the visa application file.",
            "services.s5.tag": "Germany Visa",
            "services.s6.title": "Personalized Orientation",
            "services.s6.text": "Individual orientation sessions to determine the best educational and professional path suited to your ambitions.",
            "services.s6.tag": "Individual Follow-up",

            "programs.tag": "Our Programs",
            "programs.title": "Clear Learning Paths",
            "programs.desc": "From beginner to advanced level",
            "programs.duration": "Duration:",
            "programs.sessions": "Sessions:",
            "programs.a1.level": "Beginner Level",
            "programs.a1.text": "Learn the basics of the German language: greetings, self-introduction, essential vocabulary, and basic grammar rules.",
            "programs.a1.dur": "2-3 months",
            "programs.a1.ses": "4-5 times per week",
            "programs.a2.level": "Elementary Level",
            "programs.a2.text": "Develop language skills: daily conversation, simple writing, and understanding short texts.",
            "programs.a2.dur": "2-3 months",
            "programs.a2.ses": "4-5 times per week",
            "programs.b1.badge": "Most Requested",
            "programs.b1.level": "Intermediate Level",
            "programs.b1.text": "Master the language for daily and professional use: advanced conversations, letter writing, and media comprehension.",
            "programs.b1.dur": "3-4 months",
            "programs.b1.ses": "5 times per week",
            "programs.b1.note": "Required for Ausbildung and visa",
            "programs.b2.level": "Advanced Level",
            "programs.b2.text": "Advanced level for university studies and professional work in Germany.",
            "programs.b2.dur": "3-4 months",
            "programs.b2.ses": "5 times per week",

            "why.tag": "Why Choose Us",
            "why.title": "What Sets Us Apart",
            "why.desc": "Reasons that make us the best choice",
            "why.w1.title": "Clear Learning Path",
            "why.w1.text": "A defined study plan from the beginning until reaching your goal.",
            "why.w2.title": "Professional Support",
            "why.w2.text": "A specialized team accompanies you at every step of your journey.",
            "why.w3.title": "Germany-Focused Programs",
            "why.w3.text": "Educational content specifically designed to meet the requirements of German institutions.",
            "why.w4.title": "Strategic Location",
            "why.w4.text": "A prime location in Mohammedia for easy access.",
            "why.w5.title": "Personalized Follow-up",
            "why.w5.text": "Individual follow-up for each student to ensure continuous progress.",
            "why.w6.title": "Beginner-Friendly Approach",
            "why.w6.text": "A motivating and comfortable learning environment, even for those with no prior experience.",

            "branch.tag": "Mohammedia Branch",
            "branch.title": "Our Branch in Mohammedia",
            "branch.desc": "Close to you for better service",
            "branch.new": "New",
            "branch.address.label": "Address",
            "branch.address.value": "Corner of Bd Abderrahmane Serghni and Rue Safi, Immeuble Ibrahim II, Floor 3, Apartment 14, Mohammedia",
            "branch.phone.label": "Phone",
            "branch.hours.label": "Working Hours",
            "branch.hours.value": "Monday - Saturday: 9:00 AM - 7:00 PM",
            "branch.cta.whatsapp": "Contact via WhatsApp",
            "branch.cta.call": "Call Us",

            "cta.title": "Start Your Journey to Germany Today",
            "cta.subtitle": "Register now and launch towards your future",
            "cta.text": "Register now for German language courses and get specialized guidance to achieve your dream.",
            "cta.btn.whatsapp": "Register via WhatsApp",
            "cta.btn.instagram": "Follow Us on Instagram",

            "footer.about": "A specialized institute in German language education and guidance towards studies and vocational training in Germany.",
            "footer.quickLinks": "Quick Links",
            "footer.copyright": "&copy; 2026 Alfa Haus Goethe. All rights reserved.",

            "nav.faq": "FAQ",

            "urgency.text": "Limited spots — September 2026 session",
            "urgency.btn": "Register Now",

            "hero.trust": "+51 students enrolled this month",

            "journey.tag": "Your Journey",
            "journey.title": "From Mohammedia to Germany in 6 Steps",
            "journey.desc": "A clear path where we guide you from the first step to arrival",
            "journey.s1.title": "Registration & Assessment",
            "journey.s1.text": "Register with us and we'll assess your current level to create a personalized learning plan.",
            "journey.s2.title": "Learn German",
            "journey.s2.text": "Intensive courses from A1 to B1/B2 with specialized instructors and modern curricula.",
            "journey.s3.title": "Pass the Exam",
            "journey.s3.text": "Intensive preparation and passing the internationally recognized Goethe or telc exam.",
            "journey.s4.title": "Career Guidance",
            "journey.s4.text": "We help you choose the right Ausbildung program or university.",
            "journey.s5.title": "Visa File & Interview",
            "journey.s5.text": "Complete visa file preparation and embassy interview training.",
            "journey.s6.title": "Arrive in Germany",
            "journey.s6.text": "Start your new life in Germany with confidence and full preparation.",
            "journey.cta": "Start Your Journey Now",

            "success.tag": "Success Stories",
            "success.title": "Our Students Are in Germany Now",
            "success.desc": "Real stories of students whose lives changed with Alfa Haus Goethe",
            "success.t1.text": "Thanks to Alfa Haus Goethe, I got my B1 in just 8 months and I'm now studying nursing in Munich. The teachers were excellent and the support didn't stop even after I arrived in Germany.",
            "success.t1.name": "Yasmine — Munich",
            "success.t1.role": "Nursing student — Ausbildung",
            "success.t2.text": "I was scared to start but the team at Alfa Haus Goethe helped me step by step. From zero to B1 then Ausbildung in Hamburg. The best decision I ever made.",
            "success.t2.name": "Ayoub — Hamburg",
            "success.t2.role": "Vocational training — Mechatroniker",
            "success.t3.text": "Alfa Haus Goethe is not just a language institute, it's a family that accompanies you at every step. The career guidance and visa assistance were excellent. I'm now in Berlin and very happy.",
            "success.t3.name": "Sara — Berlin",
            "success.t3.role": "University student — Informatik",

            "videos.tag": "Video Testimonials",
            "videos.title": "Hear Directly from Our Students",
            "videos.desc": "Real experiences told by those who lived them",
            "videos.featured.title": "Watch our students' experiences on Facebook",
            "videos.featured.desc": "Real videos from our students' journeys to Germany",
            "videos.cta.fb": "Watch more on Facebook",

            "form.tag": "Free Consultation",
            "form.title": "Book a Free Orientation Session",
            "form.desc": "Fill out the form and we'll contact you via WhatsApp within 24 hours to schedule a free orientation session with a specialized advisor.",
            "form.b1": "Free level assessment",
            "form.b2": "Personalized learning plan",
            "form.b3": "Information about Germany opportunities",
            "form.b4": "No commitment required",
            "form.name": "Full Name",
            "form.phone": "Phone Number (WhatsApp)",
            "form.city": "City",
            "form.cityPlaceholder": "Choose city",
            "form.city.mohammedia": "Mohammedia",
            "form.city.casablanca": "Casablanca",
            "form.city.rabat": "Rabat",
            "form.city.other": "Other city",
            "form.goal": "Your Goal",
            "form.goalPlaceholder": "What is your goal?",
            "form.goalAusbildung": "Vocational Training — Ausbildung",
            "form.goalStudium": "University Studies — Studium",
            "form.goalArbeit": "Work — Arbeit",
            "form.goalSprache": "Learn the language only",
            "form.level": "Your Current Level",
            "form.levelNone": "Beginner — no experience",
            "form.submit": "Send via WhatsApp",
            "form.note": "We'll contact you via WhatsApp within 24 hours",

            "gallery.classroom": "Classroom",
            "gallery.reception": "Reception",
            "gallery.students": "Our Students",
            "gallery.events": "Our Events",

            "faq.tag": "FAQ",
            "faq.title": "Everything You Need to Know",
            "faq.desc": "Answers to the most frequently asked questions",
            "faq.q1": "Do I need prior knowledge of German?",
            "faq.a1": "No, we accept complete beginners. Our courses start from level A1 (zero) and progress to B2. Most of our students started with no prior experience.",
            "faq.q2": "How long does it take to reach B1 level?",
            "faq.a2": "It usually takes 8-10 months to go from zero to B1 with intensive courses (4-5 sessions per week). The duration depends on your commitment and dedication.",
            "faq.q3": "Do you help with visa procedures?",
            "faq.a3": "Yes, we offer a comprehensive service including: visa file preparation, embassy interview training, and personalized guidance at every step of the process.",
            "faq.q4": "What is Ausbildung and can I apply?",
            "faq.a4": "Ausbildung is Germany's vocational training system, combining theoretical studies with practical training and a monthly salary. Anyone with at least B1 level can apply. We help you choose the specialty and prepare the application file.",
            "faq.q5": "How much do the courses cost?",
            "faq.a5": "Prices vary depending on the level and type of course. Contact us via WhatsApp for pricing details and current offers. We also offer payment plans.",
            "faq.q6": "Is the certificate recognized in Germany?",
            "faq.a6": "We prepare you for Goethe-Institut and telc exams which are internationally recognized. These certificates are accepted at all German institutions and are required for visa procedures.",
            "faq.more": "Didn't find your answer?",
            "faq.askBtn": "Ask Us via WhatsApp",

            "insta.title": "Follow Us on Instagram",
            "insta.desc": "Latest news, events, and tips",
            "insta.btn": "@alfa.hausgoethe — 10K+ followers",

            // Hero Annotation Pins
            "hero.pin.courses": "Courses A1–B2",
            "hero.pin.courses.sub": "All levels covered",
            "hero.pin.ausbildung": "Ausbildung Guidance",
            "hero.pin.ausbildung.sub": "Vocational training in Germany",
            "hero.pin.visa": "Visa Preparation",
            "hero.pin.visa.sub": "Interview + complete file",
            "hero.pin.branch": "Mohammedia Branch",
            "hero.pin.branch.sub": "Register via WhatsApp",
            "hero.ed.wa": "WhatsApp Registration",

            // Footer CTA
            "footer.cta.title": "Start Your Journey to Germany Today",
            "footer.cta.sub": "Register now and get a free consultation",
            "footer.cta.wa": "Register via WhatsApp",
            "footer.cta.call": "Call Us",

            // Footer Programs
            "footer.prog.a1": "Course A1 — Beginner",
            "footer.prog.a2": "Course A2 — Elementary",
            "footer.prog.b1": "Course B1 — Intermediate",
            "footer.prog.b2": "Course B2 — Advanced",
            "footer.prog.ausbildung": "Ausbildung Guidance",

            "mobile.cta.wa": "WhatsApp",
            "mobile.cta.call": "Call Us",
            "mobile.cta.programs": "Programs",
            "wa.bubble": "Hello! Want info about our German language courses? Contact us now 🇩🇪"
        }
    };

    var langConfig = {
        ar: { dir: 'rtl', lang: 'ar', flag: '\u{1F1F2}\u{1F1E6}', code: 'AR' },
        fr: { dir: 'ltr', lang: 'fr', flag: '\u{1F1EB}\u{1F1F7}', code: 'FR' },
        en: { dir: 'ltr', lang: 'en', flag: '\u{1F1EC}\u{1F1E7}', code: 'EN' }
    };

    var currentLang = 'ar';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;

        var config = langConfig[lang];
        var html = document.documentElement;
        html.setAttribute('lang', config.lang);
        html.setAttribute('dir', config.dir);

        // Update all elements with data-i18n
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        }

        // Update lang switcher display
        var flagEl = document.getElementById('langFlag');
        var codeEl = document.getElementById('langCode');
        if (flagEl) flagEl.textContent = config.flag;
        if (codeEl) codeEl.textContent = config.code;

        // Update active state in dropdown
        var options = document.querySelectorAll('.lang-option');
        for (var j = 0; j < options.length; j++) {
            if (options[j].getAttribute('data-lang') === lang) {
                options[j].classList.add('active');
            } else {
                options[j].classList.remove('active');
            }
        }

        // Save preference
        try { localStorage.setItem('ahg-lang', lang); } catch (e) {}

        // Notify other scripts of language change
        document.dispatchEvent(new Event('langChanged'));

        // Close dropdown
        var dropdown = document.getElementById('langDropdown');
        if (dropdown) dropdown.classList.remove('open');
    }

    function init() {
        // Restore saved language
        try {
            var saved = localStorage.getItem('ahg-lang');
            if (saved && translations[saved]) {
                currentLang = saved;
            }
        } catch (e) {}

        // Bind switcher toggle
        var currentBtn = document.getElementById('langCurrent');
        var dropdown = document.getElementById('langDropdown');

        if (currentBtn && dropdown) {
            currentBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                dropdown.classList.toggle('open');
            });

            document.addEventListener('click', function () {
                dropdown.classList.remove('open');
            });

            dropdown.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }

        // Bind language options
        var options = document.querySelectorAll('.lang-option');
        for (var i = 0; i < options.length; i++) {
            options[i].addEventListener('click', function () {
                var lang = this.getAttribute('data-lang');
                setLanguage(lang);
            });
        }

        // Apply saved or default language
        setLanguage(currentLang);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        setLanguage: setLanguage,
        getCurrentLang: function () { return currentLang; }
    };
})();
