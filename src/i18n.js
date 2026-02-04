// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    // i18n.js

ar: {
  translation: {
    "nav_home": "الرئيسية",
    "nav_about": "من نحن",
    "nav_solutions": "حلولنا",
    "nav_contact": "اتصل بنا",
    "nav_supermarket": "السوبر ماركت",
    "nav_traffic": "حركة المرور",
    "nav_security": "الأمن",
    "nav_industry": "الصناعة",
    "nav_construction": "مواقع البناء",
    "lang_en": "English",
    "lang_de": "Deutsch",
    "lang_ar": "العربية",
    "about_title": "من نحن",
    "about_desc": "مع أكثر من 15 عاماً من الخبرة في الحلول التقنية، Innosentra هي شركة متخصصة في الرؤية الحاسوبية والذكاء الاصطناعي، تقدم رؤى قابلة للتنفيذ من البيانات المرئية. تتكامل حلولنا مع أنظمة الكاميرات الحالية، وتحترم الخصوصية، وتدعم اتخاذ قرارات أذكى في قطاعات التجزئة والأمن وغيرها.",
    "hero_title": "حلول برمجية مدعومة بالذكاء الاصطناعي",
    "hero_subtitle": "تحويل البيانات المرئية إلى رؤى تجارية قابلة للتنفيذ من خلال هندسة البرمجيات المتقدمة. نحن متخصصون في الذكاء الاصطناعي والتعلم الآلي، أنظمة الرؤية الحاسوبية، تطوير تطبيقات الويب والجوال، وهندسة قواعد البيانات.",
    
    // offer
    "offer_main_title": "ماذا نقدم؟",
    "offer_sol1_title": "هندسة الذكاء الاصطناعي والتعلم العميق",
    "offer_sol1_desc": "نقوم ببناء وتدريب نماذج تعلم عميق مخصصة لمهام الكشف والتعرف بدقة عالية",
    "offer_sol2_title": "الرؤية الحاسوبية المتقدمة",
    "offer_sol2_desc": "من التعرف على الأشخاص عبر كاميرات متعددة إلى تتبع الأجسام المعقدة، نقدم تحليلاً مرئياً متطوراً",
    "offer_sol3_title": "تحليل البيانات ولوحات العرض",
    "offer_sol3_desc": "يتم تحويل بث الفيديو الخام إلى مؤشرات أداء رئيسية (KPIs) وعرضها على لوحات تحكم فورية وبديهية",
    "offer_sol4_title": "حلول تطوير البرمجيات",
    "offer_sol4_desc": "تطوير شامل لتطبيقات الويب والجوال مع بنية قواعد بيانات قوية، من المفهوم إلى التنفيذ",

    "solutions_section_title": "استكشف حلولنا",
    "solution_retail_title": "حلول التجزئة والسوبر ماركت",
    "solution_retail_desc": "تحليلات التجزئة الذكية، عد الأشخاص، ورؤى حول سلوك المتسوقين داخل المتجر",
    "solution_traffic_title": "المرور والمواقف الذكية",
    "solution_traffic_desc": "مراقبة تدفق حركة المرور، إدارة المواقف، وتحليلات المركبات",
    "solution_security_title": "الأمن والمراقبة",
    "solution_security_desc": "كشف التهديدات في الوقت الفعلي، تنبيهات التسلل، والمراقبة المؤتمتة",
    "solution_industry_title": "الرؤية الصناعية",
    "solution_industry_desc": "الفحص الآلي، ضمان الجودة، وتحسين العمليات",
    "solution_construction_title": "مراقبة مواقع البناء",
    "solution_construction_desc": "سلامة العمال، الامتثال لمعدات الوقاية الشخصية، ومراقبة نشاط الموقع",

    // steps
    "steps_main_title": "كيف نعمل؟",
    "steps_s1_title": "تحليل الاحتياجات",
    "steps_s1_desc": "نبدأ بتحليل احتياجاتك ونظامك لرسم خارطة طريق تقنية تتماشى مع أهدافك.",
    "steps_s2_title": "بناء خوارزميات الذكاء الاصطناعي",
    "steps_s2_desc": "بناء وضبط خوارزميات الذكاء الاصطناعي والرؤية الحاسوبية المصممة خصيصاً لحالتك.",
    "steps_s3_title": "النشر على الأجهزة",
    "steps_s3_desc": "تشغيل الحل على أجهزة مخصصة للحصول على أداء فوري وتحليل مباشر في موقعك.",
    "steps_s4_title": "لوحات عرض مباشرة",
    "steps_s4_desc": "لوحات تحكم تفاعلية توفر رؤية تشغيلية مع إحصائيات وتنبيهات فورية.",

    // legal
    "legal_site_info": "معلومات الموقع",
    "legal_privacy": "سياسة الخصوصية",
    "legal_cookies": "إعدادات الكوكيز",
    "legal_terms": "شروط الاستخدام",
    "legal_security": "الأمن",
    "footer_all_rights": "جميع الحقوق محفوظة.",

    "chart_item_1": "تحليل المركبات واللوحات",
    "chart_item_2": "كشف الأسلحة",
    "chart_item_3": "كشف الحوادث",
    "chart_item_4": "كشف الحرائق",
    "chart_item_5": "تحليلات التجزئة",
    "chart_step2_title": "كشف الذكاء الاصطناعي ومعالجة البيانات",
    "chart_step2_desc": "تحدد الكاميرات الذكية الأحداث الرئيسية (مركبات، تهديدات، ديموغرافيا)، بينما يجمع الخادم الآمن البيانات وينظمها فوراً",
    "chart_step3_title": "عرض نتائج سهلة القراءة",
    "chart_step3_desc": "شاهد رسوماً بيانية وأرقاماً واضحة على لوحة التحكم للحصول على رؤى واتخاذ قرارات أفضل",

    "contact_title": "اتصل بنا",
    "contact_subtitle": "لديك سؤال أو مشروع؟ دعنا نناقش كيف يمكن لـ Innosentra مساعدتك في تحويل البيانات المرئية إلى رؤى.",
    "contact_info_title": "معلومات الاتصال",
    "contact_form_title": "أرسل لنا رسالة",
    "contact_label_name": "الاسم الكامل",
    "contact_label_email": "البريد الإلكتروني",
    "contact_label_phone": "رقم الهاتف (اختياري)",
    "contact_label_message": "رسالتك",
    "contact_placeholder_message": "أخبرنا عن مشروعك أو استفسارك...",
    "contact_btn_send": "إرسال الرسالة",
    "contact_btn_sending": "جاري الإرسال...",
    "contact_secure_text": "معلوماتك آمنة وسرية للغاية",
    "contact_success_msg": "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
    "contact_error_msg": "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    "contact_phone": "الهاتف",
    "contact_email": "البريد الإلكتروني",

    // Validation
    "val_name_min": "يجب أن يكون الاسم حرفين على الأقل",
    "val_name_req": "الاسم مطلوب",
    "val_email_valid": "أدخل بريداً إلكترونياً صحيحاً",
    "val_email_req": "البريد الإلكتروني مطلوب",
    "val_phone_valid": "يرجى إدخال رقم هاتف صحيح",
    "val_msg_min": "يجب أن تكون الرسالة 10 أحرف على الأقل",
    "val_msg_req": "الرسالة مطلوبة",

    "gallery_label_people_counting": "عد الأشخاص والتعرف عليهم",
    "gallery_label_tracking": "مثال على التتبع",
    "gallery_label_gender_age": "تصنيف الجنس والعمر",
    "gallery_label_heatmap": "الخريطة الحرارية للمتجر",
    "gallery_label_journey": "رحلة العميل",

    // Retail Section
    "retail_hero_title": "تحليلات Innosentra للتجزئة",
    "retail_hero_subtitle": "حوّل كاميرات المراقبة إلى أذكى مستشار لأعمالك.",
    "retail_analyze_label": "ماذا نحلل؟",
    "retail_matters_label": "لماذا هذا مهم؟",

    // Section 1
    "retail_s1_title": "تحليلات العملاء الذكية",
    "retail_s1_subtitle": "افهم من هم عملاؤك وكيف يتصرفون في الوقت الفعلي.",
    "retail_s1_f1": "عد العملاء حسب الوقت واليوم",
    "retail_s1_f2": "تصنيف (بالغ ضد طفل)",
    "retail_s1_f3": "تحليل الجنس",
    "retail_s1_f4": "متوسط وقت البقاء",
    "retail_s1_f5": "التفاعل مع واجهة المحل قبل الدخول",
    "retail_s1_f6": "تحليل المشاعر",
    "retail_s1_i1": "تحسين توزيع الموظفين والعمليات",
    "retail_s1_i2": "معرفة ما يجذب عملائك",
    "retail_s1_i3": "فهم الاهتمام الحقيقي للعملاء",

    // Section 2
    "retail_s2_title": "رحلة العميل والخرائط الحرارية",
    "retail_s2_subtitle": "شاهد متجرك من خلال عيون عملائك.",
    "retail_s2_f1": "خرائط حرارية للمناطق النشطة والباردة",
    "retail_s2_f2": "المناطق ذات وقت البقاء الطويل",
    "retail_s2_f3": "رحلات العملاء عبر كاميرات متعددة",
    "retail_s2_i1": "تحسين تصميم وتنسيق المتجر",
    "retail_s2_i2": "تحسين أماكن وضع المنتجات",
    "retail_s2_i3": "زيادة التفاعل ومعدل التحويل",

    // Section 3
    "retail_s3_title": "لوحة تحليلات البيانات",
    "retail_s3_subtitle": "يتم تقديم جميع الرؤى عبر لوحة تحكم نظيفة وبديهية.",
    "retail_s3_f1": "مؤشرات الأداء في الوقت الفعلي والتاريخي",
    "retail_s3_f2": "اتجاهات الحركة والمقارنات",
    "retail_s3_f3": "رسوم بيانية وخرائط حرارية مرئية",
    "retail_s3_f4": "شاهد جميع بياناتك في مكان واحد",
    "retail_s3_i1": "اتخاذ قرارات أسرع",
    "retail_s3_i2": "تتبع أداء واضح",
    "retail_s3_i3": "بيانات يمكن للجميع فهمها",

    // Mobile App
    "retail_mobile_title": "التحليلات في أي مكان وزمان عبر التطبيق",
    "retail_mobile_desc": "وصول إلى كافة رؤى التجزئة مباشرة من هاتفك. يركز التطبيق على عرض البيانات بوضوح دون تعقيد.",
    "retail_mobile_f1": "أعداد العملاء والاتجاهات الحالية",
    "retail_mobile_f2": "الخرائط الحرارية وتصورات الرحلة",
    "retail_mobile_f3": "تتبع الحركة بناءً على الخريطة",
    "retail_mobile_f4": "عرض مبسط لمؤشرات الأداء للقرارات السريعة",
    "retail_mobile_f5": "مثالي للمديرين أثناء التنقل",

    // Gallery Labels
    "gallery_reid": "عد الأشخاص والتعرف المتكرر",
    "gallery_tracking": "نموذج التتبع",
    "gallery_gender": "تصنيف الجنس والعمر",
    "gallery_heatmap": "خريطة المتجر الحرارية",
    "gallery_journey": "رحلة المتسوق",
    "gallery_dashboard": "لوحة التحكم الرئيسية",
    "gallery_report": "عرض التقارير",

    // Traffic Section
    "traffic_hero_title": "المرور والمواقف الذكية",
    "traffic_hero_subtitle": "تحويل الكاميرات إلى عيون ذكية للطرق ومباني المواقف.",
    "traffic_section_title": "تحليلات التدفق الذكي",
    "traffic_section_subtitle": "نظام بسيط يفهم نشاط الطريق ويدير مساحات المواقف تلقائياً.",
    "traffic_track_label": "ماذا نتتبع؟",
    "traffic_matters_label": "لماذا هذا مهم؟",

    // Features
    "traffic_f1": "عد السيارات في الشوارع ومواقف السيارات",
    "traffic_f2": "التحكم الآلي في بوابات الدخول والخروج",
    "traffic_f3": "توفر أماكن الوقوف في الوقت الفعلي",
    "traffic_f4": "رصد الازدحام المروري والطرق المسدودة",
    "traffic_f5": "قراءة لوحات الأرقام عند البوابات والطرق",

    // Importance
    "traffic_i1": "العثور على مواقف أسرع دون توتر",
    "traffic_i2": "انسيابية حركة المرور داخل وخارج المباني",
    "traffic_i3": "أمان أفضل للسائقين والمشاة",

    // Site Info Section
    "site_info_title": "معلومات الموقع",
    "site_info_about_title": "حول منصة INNOSENTRA",
    "site_info_about_text": "تعتبر Innosentra مزوداً عالمياً رائداً للتحليلات المدعومة بالذكاء الاصطناعي. هذا الموقع هو الواجهة الرقمية الأساسية لعملائنا.",
    "site_info_ownership_title": "الملكية والعمليات",
    "site_info_ownership_text": "هذا الموقع مملوك ومدار من قبل مجموعة Innosentra. جميع الوحدات هي تقنيات مملوكة تم تطويرها داخلياً.",
    "site_info_tech_title": "المواصفات التقنية",
    "site_info_tech_text": "تستخدم المنصة WebGL المتقدم لتصور البيانات وبروتوكولات WebSocket الآمنة للقياس عن بُعد.",

    // Privacy Policy Section
    "privacy_title": "سياسة الخصوصية",
    "privacy_collection_title": "جمع البيانات",
    "privacy_collection_text": "نجمع المعلومات لتقديم خدمات أفضل، بما في ذلك المعلومات التي تزودنا بها مثل الاسم والبريد.",
    "privacy_usage_title": "استخدام البيانات",
    "privacy_usage_text": "نستخدم البيانات التي نجمعها لتوفير وصيانة وحماية وتحسين خدماتنا.",

    // Terms of Use Section
    "terms_title": "شروط الاستخدام",
    "terms_agreement_header": "اتفاقية المستخدم",
    "terms_agreement_text": "من خلال الدخول إلى هذا الموقع، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه.",
    "terms_license_header": "الترخيص",
    "terms_license_text": "يُمنح الإذن لتنزيل نسخة واحدة مؤقتاً من المواد لأغراض العرض الشخصي فقط.",

    // Cookies Section
    "cookies_title": "سياسة وإعدادات الكوكيز",
    "cookies_what_is_title": "ما هي الكوكيز؟",
    "cookies_what_is_desc": "ملفات نصية صغيرة توضع على جهازك لتحسين أداء المواقع.",
    "cookies_essential_title": "1. الكوكيز الضرورية",
    "cookies_essential_desc": "ضرورية لعمل الموقع ولا يمكن إيقافها.",
    "cookies_analytical_title": "2. الكوكيز التحليلية",
    "cookies_analytical_desc": "تسمح لنا بالتعرف على عدد الزوار وكيفية تحركهم في الموقع.",

    // Security Info Section
    "security_info_title": "معايير الأمن",
    "security_info_protection_header": "حماية البيانات",
    "security_info_protection_text": "نستخدم تشفيراً بمعايير صناعية لضمان سلامة بياناتك.",

    // Industry Section
    "industry_hero_title": "رؤية الذكاء الاصطناعي الصناعية",
    "industry_hero_subtitle": "ضمان الجودة المؤتمت للمصانع الحديثة",
    "industry_section_title": "الفحص الآلي",
    "industry_section_subtitle": "تحقيق تصنيع خالي من العيوب عبر المعالجة البصرية عالية السرعة.",
    "industry_analyze_label": "ماذا نحلل؟",
    "industry_matters_label": "لماذا هذا مهم؟",
    "industry_a1": "كشف عيوب الأسطح",
    "industry_a2": "التحقق من التجميع",
    "industry_a3": "دقة التعبئة والتغليف",
    "industry_a4": "فرز المنتجات",
    "industry_m1": "تقليل هدر الإنتاج",
    "industry_m2": "زيادة معدل الإنتاجية",
    "industry_m3": "خفض التكاليف التشغيلية",

    // Security Section
    "security_hero_title": "مراقبة متقدمة",
    "security_hero_subtitle": "أمن ذاتي للبنية التحتية الحيوية.",
    "security_section_title": "الكشف الاستباقي عن التهديدات",
    "security_section_subtitle": "الانتقال من التسجيل السلبي إلى منع الحوادث في الوقت الفعلي.",
    "security_cap_label": "القدرات الأساسية",
    "security_val_label": "القيمة التجارية",
    "security_c1": "التعرف على الوجوه",
    "security_c2": "كشف التسلل",
    "security_c3": "تنبيهات الأجسام المتروكة",
    "security_c4": "تحليل التسكع",
    "security_v1": "حراسة مؤتمتة 24/7",
    "security_v2": "تقليل وقت الاستجابة",
    "security_v3": "وصول عالي الدقة",

    // Construction Section
    "construction_hero_title": "السلامة في مواقع البناء",
    "construction_hero_subtitle": "حماية القوى العاملة برؤية الذكاء الاصطناعي.",
    "construction_section_title": "الامتثال للسلامة",
    "construction_section_subtitle": "ضمان اتباع بروتوكولات السلامة في الموقع تلقائياً.",
    "construction_site_label": "تحليل الموقع",
    "construction_benefit_label": "الفوائد",
    "construction_s1": "كشف معدات الوقاية (خوذة/سترة)",
    "construction_s2": "مراقبة المناطق الخطرة",
    "construction_s3": "تنبيهات سقوط العمال",
    "construction_s4": "التفاعل مع الآلات",
    "construction_b1": "حوادث أقل في الموقع",
    "construction_b2": "الامتثال القانوني",
    "construction_b3": "إشراف عن بُعد على المشروع",

    "contact_email_value": "manar.bakro@innosentra.com",
    "contact_phone_value": "0049 163 997 0059",
    "contact_address": "العنوان",
    "contact_address_line1": "Georgstr. 47",
    "contact_address_line2": "51145 Cologne",
    "contact_address_line3": "ألمانيا",


    "software_hero_title": "هندسة البرمجيات المتكاملة والأنظمة الذكية",
      "software_hero_subtitle": "نقدم دورة حياة تطوير برمجيات كاملة (SDLC) تبدأ من هندسة الخوارزميات المعقدة، مروراً بتصميم قواعد البيانات العملاقة (SQL & NoSQL)، وصولاً إلى تطوير تطبيقات الويب والموبايل (Native & Cross-platform)، وانتهاءً بعمليات النشر (Deployment) والاستضافة السحابية الآمنة.",
      
      "software_section_title": "التميز التقني في كل سطر كود",
      "software_section_subtitle": "فريقنا يجمع بين دقة الخوارزميات الرياضية وجمالية واجهات المستخدم، مع التركيز الصارم على الأداء، الأمان، وقابلية التوسع (Scalability).",
      
      "software_col1_label": "القدرات التقنية الأساسية", // القائمة اليمنى
      "software_col2_label": "الجودة والبنية التحتية", // القائمة اليسرى

      // القائمة الأولى (التقنيات والتطوير)
      "software_c1": "تطوير الويب الشامل (Full-Stack) وتطبيقات الموبايل الاحترافية",
      "software_c2": "هندسة قواعد البيانات المعقدة وإدارة البيانات الضخمة (Big Data)",
      "software_c3": "بناء الخوارزميات الذكية وهياكل البيانات المتقدمة",
      "software_c4": "تكامل واجهات برمجة التطبيقات (API Integration & Microservices)",
      
      // القائمة الثانية (العمليات، النشر، والاختبار)
      "software_c5": "النشر المؤتمت (CI/CD) وإدارة الخوادم والاستضافات السحابية",
      "software_c6": "اختبار البرمجيات (QA Testing) وضمان الجودة والأداء",
      "software_c7": "تحليل البيانات واستخراج الرؤى (Data Analytics & Reporting)",
      "software_c8": "تأمين الأنظمة وحماية البيانات وتشفير الاتصالات",
  }
},

  en: {
    translation: {
      "nav_home": "Home",
      "nav_about": "About",
      "nav_solutions": "Solutions",
      "nav_contact": "Contact",
      "nav_supermarket": "Supermarket",
      "nav_traffic": "Traffic",
      "nav_security": "Security",
      "nav_industry": "Industry",
      "nav_construction": "Construction Sites",
      "lang_en": "English",
      "lang_de": "Deutsch",
      "lang_ar": "Arabic",
      "about_title": "About Us",
      "about_desc": "More than 15 years of experience in technical solutions, Innosentra is a computer vision and AI company delivering actionable insights from visual data. Our solutions integrate with existing camera systems, respect privacy, and support smarter decision-making across retail, security, and other industries.",
      "hero_title": "Intelligent Software Solutions Powered by AI",
      "hero_subtitle": "Transforming visual data into actionable business insights through advanced software engineering. We specialize in AI and machine learning, computer vision systems, web and mobile application development, database architecture, and comprehensive technical software solutions powered by artificial intelligence.",
    // offer
    "offer_main_title": "What we offer ?",
    "offer_sol1_title": "AI Engineering & Deep Learning",
    "offer_sol1_desc": "We build and train custom deep learning models for high-accuracy detection and recognition tasks.",
    "offer_sol2_title": "Advanced Computer Vision",
    "offer_sol2_desc": "From multi-camera re-identification to complex object tracking, we deliver sophisticated visual analysis.",
    "offer_sol3_title": "Data Analytics & Dashboards",
    "offer_sol3_desc": "Raw video feeds are transformed into actionable KPIs and visualized on intuitive, real-time dashboards.",
    "offer_sol4_title": "Software Development Solutions",
    "offer_sol4_desc": "Comprehensive web and mobile application development with robust database architecture, from concept to deployment.",

    "solutions_section_title": "Explore Our Solutions",
    "solution_retail_title": "Retail & Supermarket Solutions",
    "solution_retail_desc": "Smart retail analytics, people counting, and in-store behavioral insights.",
    "solution_traffic_title": "Smart Traffic & Parking",
    "solution_traffic_desc": "Traffic flow monitoring, parking management, and vehicle analytics.",
    "solution_security_title": "Security & Surveillance",
    "solution_security_desc": "Real-time threat detection, intrusion alerts, and automated surveillance.",
    "solution_industry_title": "Industrial Vision",
    "solution_industry_desc": "Automated inspection, quality assurance, and process optimization.",
    "solution_construction_title": "Construction Site Monitoring",
    "solution_construction_desc": "Worker safety, PPE compliance, and site activity monitoring.",

    //  steps
    "steps_main_title": "How We Work?",
    "steps_s1_title": "Analyze Needs",
    "steps_s1_desc": "Start by analyzing your needs and system to chart a technical roadmap aligned with your goals.",
    "steps_s2_title": "Build AI Algorithms",
    "steps_s2_desc": "Build and fine-tune AI and Computer Vision algorithms, designed specifically for your use case.",
    "steps_s3_title": "Deploy on Devices",
    "steps_s3_desc": "Operate the solution on dedicated Devices for instant performance and real-time analysis directly at your site.",
    "steps_s4_title": "Live Dashboards",
    "steps_s4_desc": "Interactive dashboards providing operational visibility with real-time statistics and alerts.",
    // legal
    "legal_site_info": "Site Info",
    "legal_privacy": "Privacy Policy",
    "legal_cookies": "Cookies Settings",
    "legal_terms": "Terms of Use",
    "legal_security": "Security",
    "footer_all_rights": "All rights reserved.",
// 
    "chart_item_1": "Vehicle & Plate Analysis",
"chart_item_2": "Weapon Detection",
"chart_item_3": "Accident Detection",
"chart_item_4": "Fire Detection",
"chart_item_5": "Retail Analytics",
"chart_step2_title": "AI Detection & Data Processing",
"chart_step2_desc": "Smart cameras identify key events (vehicles, threats, demographics), while the secure server instantly collects and organizes this data for actionable insights.",
"chart_step3_title": "View Easy-to-Read Results",
"chart_step3_desc": "See clear charts and numbers on your dashboard to gain insights and make better business decisions.",
      // بقية المفاتيح...
"contact_title": "Contact Us",
"contact_subtitle": "Have a question or a project in mind? Let’s discuss how Innosentra can help you turn visual data into actionable insights.",
"contact_info_title": "Contact Information",
"contact_form_title": "Send Us a Message",
"contact_label_name": "Full Name",
"contact_label_email": "Email Address",
"contact_label_phone": "Phone Number (Optional)",
"contact_label_message": "Your Message",
"contact_placeholder_message": "Tell us about your project or inquiry...",
"contact_btn_send": "Send Message",
"contact_btn_sending": "Sending...",
"contact_secure_text": "Your information is secure and confidential",
"contact_success_msg": "Message sent successfully! We will contact you soon.",
"contact_error_msg": "Failed to send message. Please try again.",
"contact_phone": "Phone",
"contact_email": "Email",
// Validation
"val_name_min": "Name must be at least 2 characters",
"val_name_req": "Name is required",
"val_email_valid": "Enter a valid email address",
"val_email_req": "Email is required",
"val_phone_valid": "Please enter a valid phone number",
"val_msg_min": "Message must be at least 10 characters",
"val_msg_req": "Message is required",

"gallery_label_people_counting": "People Counting & ReID",
"gallery_label_tracking": "Tracking Example",
"gallery_label_gender_age": "Gender & Age Classification",
"gallery_label_heatmap": "Store Heatmap",
"gallery_label_journey": "Customer Journey",


// Retail Section
"retail_hero_title": "Innosentra Retail Analytics",
"retail_hero_subtitle": "Turn Your Security Cameras into Your Smartest Business Consultant.",
"retail_analyze_label": "What We Analyze",
"retail_matters_label": "Why It Matters",

// Section 1
"retail_s1_title": "Smart Customer Analytics",
"retail_s1_subtitle": "Understand who your customers are and how they behave in real time.",
"retail_s1_f1": "Customer counting by time and day",
"retail_s1_f2": "Adult vs. Child classification",
"retail_s1_f3": "Gender Analysis",
"retail_s1_f4": "Average dwell time",
"retail_s1_f5": "Window engagement before entry",
"retail_s1_f6": "Emotion Analysis",
"retail_s1_i1": "Optimize staffing and operations",
"retail_s1_i2": "Know what attracts your customers",
"retail_s1_i3": "Understand real customer interest",

// Section 2
"retail_s2_title": "Customer journey & Heatmaps",
"retail_s2_subtitle": "See your store through your customers' eyes.",
"retail_s2_f1": "Hot & Cold Zone Heatmaps",
"retail_s2_f2": "High dwell-time areas",
"retail_s2_f3": "Multi-camera customer journeys",
"retail_s2_i1": "Improve store layout",
"retail_s2_i2": "Optimize product placement",
"retail_s2_i3": "Increase engagement and conversion",

// Section 3
"retail_s3_title": "Analytics Dashboard",
"retail_s3_subtitle": "All insights delivered through a clean, intuitive dashboard.",
"retail_s3_f1": "Real-time and historical KPIs",
"retail_s3_f2": "Traffic trends and comparisons",
"retail_s3_f3": "Visual charts and heatmaps",
"retail_s3_f4": "See all your data in one place",
"retail_s3_i1": "Faster decision-making",
"retail_s3_i2": "Clear performance tracking",
"retail_s3_i3": "Data everyone can understand",

// Mobile App
"retail_mobile_title": "Analytics Anywhere, Anytime, using mobile app",
"retail_mobile_desc": "Access all your retail insights directly from your mobile device. The application focuses on clear data visualization without complexity, delivering only what matters.",
"retail_mobile_f1": "Live customer counts and trends",
"retail_mobile_f2": "Heatmaps and journey visualizations",
"retail_mobile_f3": "Map-based movement tracking",
"retail_mobile_f4": "Simple KPI views for quick decisions",
"retail_mobile_f5": "Optimized for managers on the move",

// Gallery Labels (Items inside MediaGallery)
"gallery_reid": "People Counting & ReID",
"gallery_tracking": "Tracking Example",
"gallery_gender": "Gender & Age Classification",
"gallery_heatmap": "Store Heatmap",
"gallery_journey": "Customer Journey",
"gallery_dashboard": "Main Dashboard",
"gallery_report": "Report View",



// Traffic Section
"traffic_hero_title": "Smart Traffic & Garages",
"traffic_hero_subtitle": "Turning cameras into smart eyes for roads or parking buildings.",
"traffic_section_title": "Smart Flow Analytics",
"traffic_section_subtitle": "A simple system that understands road activity and manages garage spaces automatically.",
"traffic_track_label": "WHAT WE TRACK",
"traffic_matters_label": "WHY IT MATTERS",

// Features
"traffic_f1": "Counting cars in streets and parking garages",
"traffic_f2": "Automated entry and exit gate control",
"traffic_f3": "Real-time parking spot availability",
"traffic_f4": "Spotting traffic jams and blocked paths",
"traffic_f5": "Reading license plates at gates and roads",

// Importance
"traffic_i1": "Find parking spots faster without the stress",
"traffic_i2": "Smoother traffic flow in and out of buildings",
"traffic_i3": "Better safety for both drivers and pedestrians",

// Site Info Section
"site_info_title": "Site Information",
"site_info_about_title": "About INNOSENTRA Platform",
"site_info_about_text": "Innosentra is a leading global provider of AI-driven analytics and smart monitoring solutions. This website serves as the primary digital interface for our clients across retail, construction, and industrial sectors. Our mission is to transform raw data into actionable insights through cutting-edge computer vision technology.",
"site_info_ownership_title": "Ownership and Operations",
"site_info_ownership_text": "This site is owned and operated by Innosentra Group. All modules including 'Retail Solutions', 'Traffic Analytics', and 'Security Systems' are proprietary technologies developed by our in-house engineering teams.",
"site_info_tech_title": "Technical Specifications",
"site_info_tech_text": "The platform utilizes advanced WebGL for data visualization and secure WebSocket protocols for real-time telemetry. We support all modern browsers and provide a responsive experience for mobile and tablet devices.",

// Privacy Policy Section
"privacy_title": "Privacy Policy",
"privacy_collection_title": "Data Collection",
"privacy_collection_text": "We collect information to provide better services to all our users. This includes information you provide to us like your name and email.",
"privacy_usage_title": "Data Usage",
"privacy_usage_text": "We use the data we collect to provide, maintain, protect and improve our services.",



// Terms of Use Section
"terms_title": "Terms of Use",
"terms_agreement_header": "User Agreement",
"terms_agreement_text": "By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use.",
"terms_license_header": "License",
"terms_license_text": "Permission is granted to temporarily download one copy of the materials on Innosentra's web site for personal viewing only.",

// Cookies Section
"cookies_title": "Cookies Settings & Policy",
"cookies_what_is_title": "What are Cookies?",
"cookies_what_is_desc": "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work more efficiently.",
"cookies_essential_title": "1. Essential Cookies",
"cookies_essential_desc": "These are necessary for the website to function properly and cannot be switched off.",
"cookies_analytical_title": "2. Analytical Cookies",
"cookies_analytical_desc": "They allow us to recognize and count the number of visitors and see how they move around the site.",


// Security Info Section
"security_info_title": "Security Standards",
"security_info_protection_header": "Data Protection",
"security_info_protection_text": "We employ industry-standard encryption to ensure your data is safe during transit and at rest.",

// --- Industry Section ---
"industry_hero_title": "Industrial AI Vision",
"industry_hero_subtitle": "Automated Quality Assurance for Modern Factories.",
"industry_section_title": "Automated Inspection",
"industry_section_subtitle": "Achieving zero-defect manufacturing with high-speed visual processing.",
"industry_analyze_label": "WHAT WE ANALYZE",
"industry_matters_label": "WHY IT MATTERS",
"industry_a1": "Surface Defect Detection",
"industry_a2": "Assembly Verification",
"industry_a3": "Packaging Accuracy",
"industry_a4": "Product Sorting",
"industry_m1": "Reduced Production Waste",
"industry_m2": "Increased Throughput",
"industry_m3": "Lower Operational Costs",

// --- Security Section ---
"security_hero_title": "Advanced Surveillance",
"security_hero_subtitle": "Autonomous Security for Critical Infrastructure.",
"security_section_title": "Proactive Threat Detection",
"security_section_subtitle": "Moving beyond passive recording to real-time incident prevention.",
"security_cap_label": "CORE CAPABILITIES",
"security_val_label": "BUSINESS VALUE",
"security_c1": "Facial Recognition",
"security_c2": "Intrusion Detection",
"security_c3": "Abandoned Object Alerts",
"security_c4": "Loitering Analysis",
"security_v1": "24/7 Automated Guarding",
"security_v2": "Reduced Response Time",
"security_v3": "High-Precision Access",

// --- Construction Section ---
"construction_hero_title": "Construction Safety",
"construction_hero_subtitle": "Protecting Workforce with Vision AI.",
"construction_section_title": "Safety Compliance",
"construction_section_subtitle": "Ensuring on-site safety protocols are followed automatically.",
"construction_site_label": "SITE ANALYSIS",
"construction_benefit_label": "BENEFITS",
"construction_s1": "PPE (Helmet/Vest) Detection",
"construction_s2": "Hazard Zone Monitoring",
"construction_s3": "Worker Fall Alerts",
"construction_s4": "Machine Interaction",
"construction_b1": "Fewer On-site Accidents",
"construction_b2": "Legal Compliance",
"construction_b3": "Remote Project Oversight",

  "contact_email_value":"manar.bakro@innosentra.com",
  "contact_phone_value":"0049 163 997 0059",
  "contact_address": "Address",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Cologne",
  "contact_address_line3": "Germany",


  "software_hero_title": "Integrated Software Engineering & Smart Systems",
      "software_hero_subtitle": "We deliver a complete Software Development Life Cycle (SDLC), starting from complex algorithmic engineering and massive database architecture (SQL & NoSQL), to high-end Web and Mobile development (Native & Cross-platform), concluding with secure Deployment and Cloud Hosting.",
      
      "software_section_title": "Technical Excellence in Every Line of Code",
      "software_section_subtitle": "Our team combines the precision of mathematical algorithms with the elegance of UI/UX, strictly focusing on Performance, Security, and Scalability.",
      
      "software_col1_label": "Core Technical Capabilities",
      "software_col2_label": "Infrastructure & Quality Assurance",

      // List 1 (Tech & Dev)
      "software_c1": "Full-Stack Web Development & Professional Mobile Apps",
      "software_c2": "Complex Database Architecture & Big Data Management",
      "software_c3": "Smart Algorithms & Advanced Data Structures Construction",
      "software_c4": "API Integration & Microservices Architecture",
      
      // List 2 (Ops, Deploy, Testing)
      "software_c5": "Automated Deployment (CI/CD), Server Mgmt & Cloud Hosting",
      "software_c6": "Software Testing (QA), Performance & Quality Assurance",
      "software_c7": "Data Analytics, Reporting & Business Intelligence",
      "software_c8": "System Security, Data Protection & Encryption",

}
  },

  de: {
    translation: {
        "nav_home": "Startseite",
      "nav_about": "Über uns",
      "nav_solutions": "Lösungen",
      "nav_contact": "Kontakt",
      "nav_supermarket": "Supermarkt",
      "nav_traffic": "Verkehr",
      "nav_security": "Sicherheit",
      "nav_industry": "Industrie",
      "nav_construction": "Baustellen",
      "lang_en": "Englisch",
      "lang_de": "Deutsch",
      "lang_ar": "Arabisch",
      "about_title": "Über uns",
      "about_desc": "Mit mehr als 15 Jahren Erfahrung in technischen Lösungen ist Innosentra ein Unternehmen für Computer Vision und KI, das umsetzbare Erkenntnisse aus visuellen Daten liefert. Unsere Lösungen lassen sich in bestehende Kamerasysteme integrieren, wahren die Privatsphäre und unterstützen eine intelligentere Entscheidungsfindung in den Bereichen Einzelhandel, Sicherheit und anderen Branchen.",
      "hero_title": "Intelligente Softwarelösungen mit KI-Antrieb",
      "hero_subtitle": "Umwandlung visueller Daten in umsetzbare Geschäftseinblicke durch fortschrittliche Softwaretechnik. Wir spezialisieren uns auf KI und maschinelles Lernen, Computer-Vision-Systeme, Web- und Mobile-Anwendungsentwicklung, Datenbankarchitektur und umfassende technische Softwarelösungen powered by künstlicher Intelligenz.",
      // offer
      "offer_main_title": "Was wir anbieten?",
"offer_sol1_title": "KI-Engineering & Deep Learning",
"offer_sol1_desc": "Wir entwickeln und trainieren maßgeschneiderte Deep-Learning-Modelle für hochpräzise Erkennungs- und Identifikationsaufgaben.",
"offer_sol2_title": "Fortschrittliche Computer Vision",
"offer_sol2_desc": "Von der Re-Identifizierung über mehrere Kameras bis hin zur komplexen Objektverfolgung liefern wir anspruchsvolle visuelle Analysen.",
"offer_sol3_title": "Datenanalyse & Dashboards",
"offer_sol3_desc": "Rohvideostreams werden in aussagekräftige KPIs umgewandelt und auf intuitiven Echtzeit-Dashboards visualisiert.",
"offer_sol4_title": "Softwarebau",
"offer_sol4_desc": "Umfassende Web- und Mobile-Anwendungsentwicklung mit robuster Datenbankarchitektur, vom Konzept bis zur Bereitstellung.",

"solutions_section_title": "Entdecken Sie unsere Lösungen",
"solution_retail_title": "Einzelhandel- & Supermarkt-Lösungen",
"solution_retail_desc": "Intelligente Einzelhandelsanalysen, Personenzählung und Einblicke in das Kundenverhalten im Laden.",
"solution_traffic_title": "Intelligenter Verkehr & Parken",
"solution_traffic_desc": "Verkehrsflussüberwachung, Parkraummanagement und Fahrzeuganalysen.",
"solution_security_title": "Sicherheit & Überwachung",
"solution_security_desc": "Echtzeit-Bedrohungserkennung, Eindringlingswarnungen und automatisierte Überwachung.",
"solution_industry_title": "Industrielle Vision",
"solution_industry_desc": "Automatisierte Inspektion, Qualitätssicherung und Prozessoptimierung.",
"solution_construction_title": "Baustellenüberwachung",
"solution_construction_desc": "Arbeitersicherheit, PSA-Konformität und Überwachung der Standortaktivitäten.",

  //  steps
    "steps_main_title": "Wie wir arbeiten?",
"steps_s1_title": "Bedarfsanalyse",
"steps_s1_desc": "Wir beginnen mit der Analyse Ihrer Anforderungen und Ihres Systems, um einen technischen Fahrplan zu erstellen, der auf Ihre Ziele abgestimmt ist.",
"steps_s2_title": "KI-Algorithmen entwickeln",
"steps_s2_desc": "Entwicklung und Feinabstimmung von KI- und Computer-Vision-Algorithmen, die speziell auf Ihren Anwendungsfall zugeschnitten sind.",
"steps_s3_title": "Auf Geräten bereitstellen",
"steps_s3_desc": "Betreiben Sie die Lösung auf dedizierten Geräten für sofortige Leistung und Echtzeit-Analyse direkt vor Ort.",
"steps_s4_title": "Live-Dashboards",
"steps_s4_desc": "Interaktive Dashboards, die betriebliche Transparenz mit Echtzeitstatistiken und Warnmeldungen bieten.",
// 
"legal_site_info": "Seiten-Info",
"legal_privacy": "Datenschutzerklärung",
"legal_cookies": "Cookie-Einstellungen",
"legal_terms": "Nutzungsbedingungen",
"legal_security": "Sicherheit",
"footer_all_rights": "Alle Rechte vorbehalten.",
// 
"chart_item_1": "Fahrzeug- & Kennzeichenanalyse",
"chart_item_2": "Waffenerkennung",
"chart_item_3": "Unfallerkennung",
"chart_item_4": "Feuererkennung",
"chart_item_5": "Einzelhandelsanalyse",
"chart_step2_title": "KI-Erkennung & Datenverarbeitung",
"chart_step2_desc": "Intelligente Kameras identifizieren wichtige Ereignisse (Fahrzeuge, Bedrohungen, Demografie), während der sichere Server diese Daten sofort sammelt und für umsetzbare Erkenntnisse organisiert.",
"chart_step3_title": "Leicht lesbare Ergebnisse anzeigen",
"chart_step3_desc": "Sehen Sie klare Diagramme und Zahlen auf Ihrem Dashboard, um Einblicke zu gewinnen und bessere Geschäftsentscheidungen zu treffen.",
 

"contact_title": "Kontaktieren Sie uns",
"contact_subtitle": "Haben Sie eine Frage oder ein Projekt im Sinn? Lassen Sie uns besprechen, wie Innosentra Ihnen helfen kann, visuelle Daten in umsetzbare Erkenntnisse zu verwandeln.",
"contact_info_title": "Kontaktinformationen",
"contact_form_title": "Schicken Sie uns eine Nachricht",
"contact_label_name": "Vollständiger Name",
"contact_label_email": "E-Mail-Adresse",
"contact_label_phone": "Telefonnummer (Optional)",
"contact_label_message": "Ihre Nachricht",
"contact_placeholder_message": "Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage...",
"contact_btn_send": "Nachricht senden",
"contact_btn_sending": "Wird gesendet...",
"contact_secure_text": "Ihre Informationen sind sicher und vertraulich",
"contact_success_msg": "Nachricht erfolgreich gesendet! Wir werden Sie bald kontaktieren.",
"contact_error_msg": "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
"contact_phone": "Telefon",
"contact_email": "E-Mail",
// Validation
"val_name_min": "Der Name muss mindestens 2 Zeichen lang sein",
"val_name_req": "Name ist erforderlich",
"val_email_valid": "Geben Sie eine gültige E-Mail-Adresse ein",
"val_email_req": "E-Mail ist erforderlich",
"val_phone_valid": "Bitte geben Sie eine gültige Telefonnummer ein",
"val_msg_min": "Die Nachricht muss mindestens 10 Zeichen lang sein",
"val_msg_req": "Nachricht ist erforderlich",// بقية المفاتيح...

"gallery_label_people_counting": "Personenzählung & ReID",
"gallery_label_tracking": "Tracking-Beispiel",
"gallery_label_gender_age": "Geschlechts- & Altersklassifizierung",
"gallery_label_heatmap": "Filial-Heatmap",
"gallery_label_journey": "Kundenweg-Analyse",

// Retail Section
"retail_hero_title": "Innosentra Einzelhandelsanalyse",
"retail_hero_subtitle": "Verwandeln Sie Ihre Überwachungskameras in Ihren intelligentesten Geschäftsberater.",
"retail_analyze_label": "Was wir analysieren",
"retail_matters_label": "Warum es wichtig ist",

// Section 1
"retail_s1_title": "Intelligente Kundenanalyse",
"retail_s1_subtitle": "Verstehen Sie in Echtzeit, wer Ihre Kunden sind und wie sie sich verhalten.",
"retail_s1_f1": "Kundeninteraktionen nach Zeit und Tag",
"retail_s1_f2": "Klassifizierung Erwachsener vs. Kind",
"retail_s1_f3": "Geschlechteranalyse",
"retail_s1_f4": "Durchschnittliche Verweildauer",
"retail_s1_f5": "Schaufenster-Engagement vor dem Eintritt",
"retail_s1_f6": "Emotionsanalyse",
"retail_s1_i1": "Personalbesetzung und Betrieb optimieren",
"retail_s1_i2": "Wissen, was Ihre Kunden anzieht",
"retail_s1_i3": "Echtes Kundeninteresse verstehen",

// Section 2
"retail_s2_title": "Customer Journey & Heatmaps",
"retail_s2_subtitle": "Sehen Sie Ihr Geschäft mit den Augen Ihrer Kunden.",
"retail_s2_f1": "Hot- & Cold-Zone Heatmaps",
"retail_s2_f2": "Bereiche mit hoher Verweildauer",
"retail_s2_f3": "Kundenwege über mehrere Kameras",
"retail_s2_i1": "Ladenlayout verbessern",
"retail_s2_i2": "Produktplatzierung optimieren",
"retail_s2_i3": "Engagement und Konversion steigern",

// Section 3
"retail_s3_title": "Analyse-Dashboard",
"retail_s3_subtitle": "Alle Erkenntnisse werden über ein klares, intuitives Dashboard geliefert.",
"retail_s3_f1": "Echtzeit- und historische KPIs",
"retail_s3_f2": "Besuchertrends und Vergleiche",
"retail_s3_f3": "Visuelle Diagramme und Heatmaps",
"retail_s3_f4": "Alle Daten an einem Ort sehen",
"retail_s3_i1": "Schnellere Entscheidungsfindung",
"retail_s3_i2": "Klare Leistungsverfolgung",
"retail_s3_i3": "Daten, die jeder verstehen kann",

// Mobile App
"retail_mobile_title": "Analysen überall und jederzeit per mobiler App",
"retail_mobile_desc": "Greifen Sie direkt von Ihrem Mobilgerät auf alle Einzelhandelserkenntnisse zu. Die Anwendung konzentriert sich auf klare Datenvisualisierung ohne Komplexität.",
"retail_mobile_f1": "Live-Kundenanzahl und Trends",
"retail_mobile_f2": "Heatmaps und Journey-Visualisierungen",
"retail_mobile_f3": "Kartenbasierte Bewegungsverfolgung",
"retail_mobile_f4": "Einfache KPI-Ansichten für schnelle Entscheidungen",
"retail_mobile_f5": "Optimiert für Manager von unterwegs",

"gallery_reid": "Personenzählung & ReID",
"gallery_tracking": "Tracking-Beispiel",
"gallery_gender": "Geschlechts- & Altersklassifizierung",
"gallery_heatmap": "Filial-Heatmap",
"gallery_journey": "Kundenweg-Analyse",
"gallery_dashboard": "Haupt-Dashboard",
"gallery_report": "Bericht-Ansicht",

// Traffic Section
"traffic_hero_title": "Intelligenter Verkehr & Parkhäuser",
"traffic_hero_subtitle": "Verwandlung von Kameras in intelligente Augen für Straßen oder Parkhäuser.",
"traffic_section_title": "Intelligente Verkehrsfluss-Analyse",
"traffic_section_subtitle": "Ein einfaches System, das Straßenaktivitäten versteht und Parkplätze automatisch verwaltet.",
"traffic_track_label": "WAS WIR VERFOLGEN",
"traffic_matters_label": "WARUM ES WICHTIG IST",

// Features
"traffic_f1": "Zählen von Autos auf Straßen und in Parkhäusern",
"traffic_f2": "Automatisierte Steuerung von Ein- und Ausfahrtsschranken",
"traffic_f3": "Echtzeit-Verfügbarkeit von Parkplätzen",
"traffic_f4": "Erkennung von Staus und blockierten Wegen",
"traffic_f5": "Lesen von Nummernschildern an Toren und Straßen",

// Importance
"traffic_i1": "Parkplätze schneller und stressfrei finden",
"traffic_i2": "Reibungsloserer Verkehrsfluss in und aus Gebäuden",
"traffic_i3": "Höhere Sicherheit für Fahrer und Fußgänger",

// Site Info Section
"site_info_title": "Seiteninformationen",
"site_info_about_title": "Über die INNOSENTRA-Plattform",
"site_info_about_text": "Innosentra ist ein weltweit führender Anbieter von KI-gestützten Analysen und intelligenten Überwachungslösungen. Diese Website dient als primäre digitale Schnittstelle für unsere Kunden in den Bereichen Einzelhandel, Bauwesen und Industrie. Unsere Mission ist es, Rohdaten durch modernste Computer-Vision-Technologie in umsetzbare Erkenntnisse zu verwandeln.",
"site_info_ownership_title": "Besitz und Betrieb",
"site_info_ownership_text": "Diese Website wird von der Innosentra Group besessen und betrieben. Alle Module, einschließlich 'Einzelhandelslösungen', 'Verkehrsanalysen' und 'Sicherheitssysteme', sind proprietäre Technologien, die von unseren internen Ingenieurteams entwickelt wurden.",
"site_info_tech_title": "Technische Spezifikationen",
"site_info_tech_text": "Die Plattform nutzt fortschrittliches WebGL zur Datenvisualisierung und sichere WebSocket-Protokolle für Echtzeit-Telemetrie. Wir unterstützen alle modernen Browser und bieten ein responsives Erlebnis für Mobil- und Tablet-Geräte.",


// Privacy Policy Section
"privacy_title": "Datenschutzerklärung",
"privacy_collection_title": "Datenerhebung",
"privacy_collection_text": "Wir sammeln Informationen, um allen unseren Nutzern bessere Dienste anzubieten. Dies umfasst Informationen, die Sie uns zur Verfügung stellen, wie Ihren Namen und Ihre E-Mail-Adresse.",
"privacy_usage_title": "Datennutzung",
"privacy_usage_text": "Wir verwenden die von uns gesammelten Daten, um unsere Dienste bereitzustellen, zu warten, zu schützen und zu verbessern.",

// Terms of Use Section
"terms_title": "Nutzungsbedingungen",
"terms_agreement_header": "Nutzervereinbarung",
"terms_agreement_text": "Durch den Zugriff auf diese Website erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen der Website gebunden zu sein.",
"terms_license_header": "Lizenz",
"terms_license_text": "Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien auf der Website von Innosentra ausschließlich für die persönliche Betrachtung herunterzuladen.",


// Cookies Section
"cookies_title": "Cookie-Einstellungen & Richtlinien",
"cookies_what_is_title": "Was sind Cookies?",
"cookies_what_is_desc": "Cookies sind kleine Textdateien, die von Websites, die Sie besuchen, auf Ihrem Computer abgelegt werden. Sie werden häufig verwendet, damit Websites effizienter funktionieren.",
"cookies_essential_title": "1. Essenzielle Cookies",
"cookies_essential_desc": "Diese sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht abgeschaltet werden.",
"cookies_analytical_title": "2. Analytische Cookies",
"cookies_analytical_desc": "Sie ermöglichen es uns, die Anzahl der Besucher zu erkennen und zu zählen und zu sehen, wie sie sich auf der Website bewegen.",


// Security Info Section
"security_info_title": "Sicherheitsstandards",
"security_info_protection_header": "Datenschutz",
"security_info_protection_text": "Wir setzen Verschlüsselung nach Industriestandard ein, um sicherzustellen, dass Ihre Daten während der Übertragung und im Ruhezustand sicher sind.",

// --- Industry Section ---
"industry_hero_title": "Industrielle KI-Vision",
"industry_hero_subtitle": "Automatisierte Qualitätssicherung für moderne Fabriken.",
"industry_section_title": "Automatisierte Inspektion",
"industry_section_subtitle": "Erreichung einer Null-Fehler-Produktion durch visuelle Hochgeschwindigkeitsverarbeitung.",
"industry_analyze_label": "WAS WIR ANALYSIEREN",
"industry_matters_label": "WARUM ES WICHTIG IST",
"industry_a1": "Erkennung von Oberflächendefekten",
"industry_a2": "Montageüberprüfung",
"industry_a3": "Verpackungsgenauigkeit",
"industry_a4": "Produktsortierung",
"industry_m1": "Reduzierter Produktionsabfall",
"industry_m2": "Erhöhter Durchsatz",
"industry_m3": "Geringere Betriebskosten",

// --- Security Section ---
"security_hero_title": "Erweiterte Überwachung",
"security_hero_subtitle": "Autonome Sicherheit für kritische Infrastrukturen.",
"security_section_title": "Proaktive Bedrohungserkennung",
"security_section_subtitle": "Vom passiven Aufzeichnen zur Echtzeit-Vorfallverhütung.",
"security_cap_label": "KERNFUNKTIONEN",
"security_val_label": "GESCHÄFTSWERT",
"security_c1": "Gesichtserkennung",
"security_c2": "Eindringlingserkennung",
"security_c3": "Warnung bei herrenlosen Objekten",
"security_c4": "Analyse von Herumlungern",
"security_v1": "24/7 Automatisierte Bewachung",
"security_v2": "Reduzierte Reaktionszeit",
"security_v3": "Hochpräziser Zugang",

// --- Construction Section ---
"construction_hero_title": "Baustellensicherheit",
"construction_hero_subtitle": "Schutz der Belegschaft durch Vision AI.",
"construction_section_title": "Sicherheitskonformität",
"construction_section_subtitle": "Sicherstellen, dass Sicherheitsprotokolle vor Ort automatisch eingehalten werden.",
"construction_site_label": "STANDORTANALYSE",
"construction_benefit_label": "VORTEILE",
"construction_s1": "PSA-Erkennung (Helm/Weste)",
"construction_s2": "Gefahrenzonenüberwachung",
"construction_s3": "Sturzerkennung bei Arbeitern",
"construction_s4": "Maschineninteraktion",
"construction_b1": "Weniger Unfälle vor Ort",
"construction_b2": "Rechtliche Konformität",
"construction_b3": "Fernüberwachung von Projekten",

"contact_email_value":"manar.bakro@innosentra.com",
  "contact_phone_value":"0049 163 997 0059",
"contact_address": "Adresse",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Köln",
  "contact_address_line3": "Deutschland",


  "software_hero_title": "Integrierte Softwaretechnik & Intelligente Systeme",
      "software_hero_subtitle": "Wir bieten einen vollständigen Softwareentwicklungszyklus (SDLC), beginnend bei komplexer Algorithmen-Entwicklung und massiver Datenbankarchitektur (SQL & NoSQL) bis hin zu High-End Web- und Mobile-Apps sowie sicherem Deployment und Cloud-Hosting.",
      
      "software_section_title": "Technische Exzellenz in jeder Codezeile",
      "software_section_subtitle": "Unser Team verbindet die Präzision mathematischer Algorithmen mit der Eleganz von UI/UX, mit striktem Fokus auf Leistung, Sicherheit und Skalierbarkeit.",
      
      "software_col1_label": "Technische Kernkompetenzen",
      "software_col2_label": "Infrastruktur & Qualitätssicherung",

      // List 1
      "software_c1": "Full-Stack Webentwicklung & Professionelle Mobile Apps",
      "software_c2": "Komplexe Datenbankarchitektur & Big Data Management",
      "software_c3": "Entwicklung intelligenter Algorithmen & Datenstrukturen",
      "software_c4": "API-Integration & Microservices-Architektur",
      
      // List 2
      "software_c5": "Automatisierte Bereitstellung (CI/CD), Server & Cloud-Hosting",
      "software_c6": "Softwaretests (QA), Leistungs- & Qualitätssicherung",
      "software_c7": "Datenanalyse, Reporting & Business Intelligence",
      "software_c8": "Systemsicherheit, Datenschutz & Verschlüsselung",
}
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;