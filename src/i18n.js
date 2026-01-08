// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    // i18n.js
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
      "about_title": "About Us",
      "about_desc": "More than 15 years of experience in technical solutions, Innosentra is a computer vision and AI company delivering actionable insights from visual data. Our solutions integrate with existing camera systems, respect privacy, and support smarter decision-making across retail, security, and other industries.",
      "hero_title": "AI & Computer Vision Solutions for Data-Driven Decisions",
      "hero_subtitle": "Turning visual data into actionable business insights with cutting-edge technology.",
    // offer
    "offer_main_title": "What we offer ?",
    "offer_sol1_title": "AI Engineering & Deep Learning",
    "offer_sol1_desc": "We build and train custom deep learning models for high-accuracy detection and recognition tasks.",
    "offer_sol2_title": "Advanced Computer Vision",
    "offer_sol2_desc": "From multi-camera re-identification to complex object tracking, we deliver sophisticated visual analysis.",
    "offer_sol3_title": "Data Analytics & Dashboards",
    "offer_sol3_desc": "Raw video feeds are transformed into actionable KPIs and visualized on intuitive, real-time dashboards.",
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






  "contact_address": "Address",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Cologne",
  "contact_address_line3": "Germany"


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
      "about_title": "Über uns",
      "about_desc": "Mit mehr als 15 Jahren Erfahrung in technischen Lösungen ist Innosentra ein Unternehmen für Computer Vision und KI, das umsetzbare Erkenntnisse aus visuellen Daten liefert. Unsere Lösungen lassen sich in bestehende Kamerasysteme integrieren, wahren die Privatsphäre und unterstützen eine intelligentere Entscheidungsfindung in den Bereichen Einzelhandel, Sicherheit und anderen Branchen.",
      "hero_title": "KI- & Computer-Vision-Lösungen für datengesteuerte Entscheidungen",
      "hero_subtitle": "Umwandlung visueller Daten in umsetzbare Geschäftserkenntnisse mit modernster Technologie.",
      // offer
      "offer_main_title": "Was wir anbieten?",
"offer_sol1_title": "KI-Engineering & Deep Learning",
"offer_sol1_desc": "Wir entwickeln und trainieren maßgeschneiderte Deep-Learning-Modelle für hochpräzise Erkennungs- und Identifikationsaufgaben.",
"offer_sol2_title": "Fortschrittliche Computer Vision",
"offer_sol2_desc": "Von der Re-Identifizierung über mehrere Kameras bis hin zur komplexen Objektverfolgung liefern wir anspruchsvolle visuelle Analysen.",
"offer_sol3_title": "Datenanalyse & Dashboards",
"offer_sol3_desc": "Rohvideostreams werden in aussagekräftige KPIs umgewandelt und auf intuitiven Echtzeit-Dashboards visualisiert.",
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


"contact_address": "Adresse",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Köln",
  "contact_address_line3": "Deutschland"
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