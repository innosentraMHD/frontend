import i18n from 'i18next';
// تأكد من عمل import لـ i18n الخاص بك هنا

class IntelligentLanguageDetector {
    constructor() {
      // لا نحتاج لمدة طويلة للكاش اليدوي، المستخدم هو السيد
    }
  
    /**
     * المستوى 1: التحقق من اختيار المستخدم السابق
     */
    getUserChoice() {
      const choice = localStorage.getItem('userLanguageChoice');
      if (choice) {
        return {
          source: 'user',
          language: choice,
          confidence: 100
        };
      }
      return null;
    }
  
    /**
     * المستوى 2: الكشف من IP الجغرافي
     */
    async detectFromIP() {
      try {
        const response = await fetch('https://ipapi.co/json/', {
          headers: { 'Accept': 'application/json' }
        });
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        const countryLanguageMap = {
          'SY': 'ar', 'DE': 'de', 'AT': 'de', 'CH': 'de', 
          'LB': 'ar', 'JO': 'ar', 'SA': 'ar', 'AE': 'ar', 
          'QA': 'ar', 'KW': 'ar', 'BH': 'ar', 'OM': 'ar', 
          'EG': 'ar'
        };
        
        const language = countryLanguageMap[data.country_code] || 'en';
        
        return {
          source: 'ip',
          language,
          country: data.country_name,
          countryCode: data.country_code
        };
      } catch (error) {
        console.warn('IP detection failed:', error.message);
        return null;
      }
    }
  
    /**
     * المستوى 3: كشف لغة المتصفح
     */
    detectFromBrowser() {
      const browserLang = navigator.language || navigator.userLanguage || 'en';
      let language = 'en';
      
      if (browserLang.startsWith('ar')) language = 'ar';
      else if (browserLang.startsWith('de')) language = 'de';
      
      return {
        source: 'browser',
        language,
        raw: browserLang
      };
    }
  
    /**
     * الدالة الرئيسية التي تشغل المنطق وتطبق اللغة
     * هذه الدالة هي التي يتم استدعاؤها في App.js
     */
    async detectAndApply() {
      console.log('🔄 Starting intelligent language detection...');
      
      let finalLang = 'en';
      let source = 'default';
  
      // 1. فحص اختيار المستخدم (الأولوية القصوى)
      const userChoice = this.getUserChoice();
      if (userChoice) {
        console.log('✅ Found user choice:', userChoice.language);
        finalLang = userChoice.language;
        source = 'manual';
      } else {
        // 2. إذا لم يختار المستخدم، نحاول الـ IP
        console.log('🌍 Checking IP...');
        try {
            const ipDetection = await this.detectFromIP();
            if (ipDetection) {
                console.log('📍 IP Detected:', ipDetection.language);
                finalLang = ipDetection.language;
                source = 'auto';
                
                // نخزن النتيجة "المقترحة" لكن لا نعتبرها "اختيار مستخدم"
                // localStorage.setItem('autoDetectedLanguage', finalLang);
            } else {
                 // 3. الفشل في الـ IP -> المتصفح
                 const browserChoice = this.detectFromBrowser();
                 finalLang = browserChoice.language;
                 source = 'browser';
            }
        } catch (e) {
            const browserChoice = this.detectFromBrowser();
            finalLang = browserChoice.language;
        }
      }

      // تطبيق اللغة
      await i18n.changeLanguage(finalLang);
      
      // تحديث اتجاه الصفحة (RTL/LTR)
      document.documentElement.dir = finalLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = finalLang;

      return finalLang;
    }

    /**
     * دالة تغيير اللغة اليدوية (يتم استدعاؤها من النافبار)
     */
    async changeLanguage(lang, isManual = true) {
        await i18n.changeLanguage(lang);
        
        if (isManual) {
            this.storeUserChoice(lang);
        }

        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        return lang;
    }
  
    storeUserChoice(language) {
      localStorage.setItem('userLanguageChoice', language);
      localStorage.setItem('userLanguageTimestamp', Date.now().toString());
      // نمسح أي كشف تلقائي سابق لضمان عدم التضارب
      localStorage.removeItem('autoDetectedLanguage');
    }
    
    getAvailableLanguages() {
        return ['en', 'de', 'ar'];
    }

    getLanguageSource() {
        if (localStorage.getItem('userLanguageChoice')) return 'manual';
        return 'auto';
    }
}
  
export const languageService = new IntelligentLanguageDetector();
export default i18n; // أو export default languageService حسب ملفك