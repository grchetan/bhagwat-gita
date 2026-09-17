import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "hi" | "te";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_chapters: "Chapters",
    nav_about: "About",
    nav_contact: "Contact",
    nav_quick_read: "Quick Read",
    nav_available_chapters: "Available Chapters",
    nav_all_18_chapters: "View All 18 Chapters",
    logo_title: "Bhagavad Gita",
    logo_subtitle: "Sacred Wisdom of the Ages",
    nav_language: "Language",
    
    // Chapters Info in Quick Nav / Switcher
    ch1_title: "Arjuna Vishada Yoga",
    ch1_subtitle: "The Distress of Arjuna",
    ch2_title: "Sankhya Yoga",
    ch2_subtitle: "Transcendental Knowledge",
    ch3_title: "Karma Yoga",
    ch3_subtitle: "Path of Selfless Action",
    ch4_title: "Jnana Karma Sanyasa Yoga",
    ch4_subtitle: "Transcendental Knowledge",
    
    // Chapter Pills & Switcher
    select_chapter: "Select Chapter:",
    all_chapters_btn: "All 18 Chapters",
    
    // Breadcrumbs
    breadcrumb_home: "Home",
    breadcrumb_chapters: "Chapters",
    breadcrumb_chapter: "Chapter",
    
    // Chapter Page Stats & Info
    verses_suffix: "Verses",
    stat_translations: "Hindi & English Commentary",
    stat_sanskrit: "Original Sanskrit & Meanings",
    core_insights: "Core Insights & Key Teachings",
    chapter_overview: "Chapter Overview",
    btn_hide: "Hide",
    btn_view: "View",
    
    // Reading Toolbar
    toolbar_meaning_lang: "Meaning View:",
    toolbar_lang_both: "🌐 Both",
    toolbar_lang_hindi: "🇮🇳 Hindi",
    toolbar_lang_english: "🇬🇧 English",
    toolbar_font_size: "Font Size:",
    toolbar_direct_jump: "Go to Shlok:",
    btn_go: "Go",
    
    // Sidebar & Navigation
    shlokas_list: "Shlokas List",
    shlok_prefix: "Shlok",
    search_shlok_placeholder: "Search Shlok (1-{total})...",
    quick_jump: "Quick Jump",
    select_shlok_dropdown: "Select Shlok...",
    no_shlok_found: "No shlok found",
    
    // Card Actions
    btn_copy: "Copy",
    btn_copied: "Copied!",
    
    // Chapter Footer
    prev_chapter: "← Previous Chapter",
    next_chapter: "Next Chapter →",
    all_18_chapters_footer: "All 18 Chapters",
    
    // Scroll To Top
    scroll_to_top_tooltip: "Back to Top",

    // Mobile Drawer
    mobile_nav_title: "Navigation",
    mobile_chapters_title: "Read Chapters",
  },
  hi: {
    // Navbar
    nav_home: "मुख्य पृष्ठ",
    nav_chapters: "अध्याय",
    nav_about: "परिचय",
    nav_contact: "संपर्क",
    nav_quick_read: "त्वरित पठन",
    nav_available_chapters: "उपलब्ध अध्याय",
    nav_all_18_chapters: "सभी 18 अध्याय देखें",
    logo_title: "भगवद्गीता",
    logo_subtitle: "श्रीमद्भगवद्गीता ज्ञान",
    nav_language: "भाषा",
    
    // Chapters Info in Quick Nav / Switcher
    ch1_title: "अर्जुन विषाद योग",
    ch1_subtitle: "कुरुक्षेत्र में अर्जुन का मोह एवं विषाद",
    ch2_title: "सांख्य योग",
    ch2_subtitle: "आत्मा का अमरत्व एवं निष्काम कर्म",
    ch3_title: "कर्म योग",
    ch3_subtitle: "सृष्टि का यज्ञ चक्र व लोक-संग्रह",
    ch4_title: "ज्ञान कर्म संन्यास योग",
    ch4_subtitle: "दिव्य ज्ञान एवं कर्म संन्यास",
    
    // Chapter Pills & Switcher
    select_chapter: "अध्याय चुनें:",
    all_chapters_btn: "सभी 18 अध्याय",
    
    // Breadcrumbs
    breadcrumb_home: "मुख्य",
    breadcrumb_chapters: "अध्याय",
    breadcrumb_chapter: "अध्याय",
    
    // Chapter Page Stats & Info
    verses_suffix: "श्लोक",
    stat_translations: "हिंदी व English व्याख्या",
    stat_sanskrit: "मूल संस्कृत व शब्दार्थ",
    core_insights: "अध्याय सार एवं प्रमुख सूत्र",
    chapter_overview: "अध्याय परिचय",
    btn_hide: "छिपाएं",
    btn_view: "विस्तार",
    
    // Reading Toolbar
    toolbar_meaning_lang: "व्याख्या भाषा:",
    toolbar_lang_both: "🌐 दोनों",
    toolbar_lang_hindi: "🇮🇳 हिंदी",
    toolbar_lang_english: "🇬🇧 English",
    toolbar_font_size: "फ़ॉन्ट आकार:",
    toolbar_direct_jump: "सीधा श्लोक:",
    btn_go: "जाएं",
    
    // Sidebar & Navigation
    shlokas_list: "श्लोक सूची",
    shlok_prefix: "श्लोक",
    search_shlok_placeholder: "श्लोक खोजें (1-{total})...",
    quick_jump: "सीधा चयन",
    select_shlok_dropdown: "श्लोक चुनें...",
    no_shlok_found: "कोई श्लोक नहीं मिला",
    
    // Card Actions
    btn_copy: "कॉपी करें",
    btn_copied: "कॉपी हो गया!",
    
    // Chapter Footer
    prev_chapter: "← पिछला अध्याय",
    next_chapter: "अगला अध्याय →",
    all_18_chapters_footer: "सभी 18 अध्याय",
    
    // Scroll To Top
    scroll_to_top_tooltip: "शीर्ष पर जाएं",

    // Mobile Drawer
    mobile_nav_title: "नेविगेशन",
    mobile_chapters_title: "अध्याय पढ़ें",
  },
  te: {
    // Navbar
    nav_home: "హోమ్",
    nav_chapters: "అధ్యాయాలు",
    nav_about: "గురించి",
    nav_contact: "సంప్రదించండి",
    nav_quick_read: "త్వరిత పఠనం",
    nav_available_chapters: "అందుబాటులో ఉన్న అధ్యాయాలు",
    nav_all_18_chapters: "అన్ని 18 అధ్యాయాలు చూడండి",
    logo_title: "భగవద్గీత",
    logo_subtitle: "శ్రీమద్భగవద్గీత జ్ఞానము",
    nav_language: "భాష",
    
    // Chapters Info in Quick Nav / Switcher
    ch1_title: "అర్జున విషాద యోగము",
    ch1_subtitle: "అర్జునుడి విషాదం మరియు శరణాగతి",
    ch2_title: "సాంఖ్య యోగము",
    ch2_subtitle: "ఆత్మ అమరత్వం మరియు నిష్కామ కర్మ",
    ch3_title: "కర్మ యోగము",
    ch3_subtitle: "నిష్కామ కర్మ మార్గం మరియు లోకసంగ్రహం",
    ch4_title: "జ్ఞాన కర్మ సన్యాస యోగము",
    ch4_subtitle: "దివ్య జ్ఞానము మరియు కర్మ సన్యాసము",
    
    // Chapter Pills & Switcher
    select_chapter: "అధ్యాయం ఎంచుకోండి:",
    all_chapters_btn: "అన్ని 18 అధ్యాయాలు",
    
    // Breadcrumbs
    breadcrumb_home: "హోమ్",
    breadcrumb_chapters: "అధ్యాయాలు",
    breadcrumb_chapter: "అధ్యాయం",
    
    // Chapter Page Stats & Info
    verses_suffix: "శ్లోకాలు",
    stat_translations: "హిందీ & ఇంగ్లీష్ వివరణ",
    stat_sanskrit: "సంస్కృత మూలం & పదాల అర్థాలు",
    core_insights: "అధ్యాయ సారాంశం మరియు ముఖ్యాంశాలు",
    chapter_overview: "అధ్యాయం పరిచయం",
    btn_hide: "దాచు",
    btn_view: "చూడు",
    
    // Reading Toolbar
    toolbar_meaning_lang: "వివరణ భాష:",
    toolbar_lang_both: "🌐 రెండూ",
    toolbar_lang_hindi: "🇮🇳 హిందీ",
    toolbar_lang_english: "🇬🇧 English",
    toolbar_font_size: "ఫాంట్ పరిమాణం:",
    toolbar_direct_jump: "నేరుగా శ్లోకం:",
    btn_go: "వెళ్ళు",
    
    // Sidebar & Navigation
    shlokas_list: "శ్లోకాల జాబితా",
    shlok_prefix: "శ్లోకం",
    search_shlok_placeholder: "శ్లోకం శోధించండి (1-{total})...",
    quick_jump: "త్వరిత ఎంపిక",
    select_shlok_dropdown: "శ్లోకం ఎంచుకోండి...",
    no_shlok_found: "శ్లోకం కనుగొనబడలేదు",
    
    // Card Actions
    btn_copy: "కాపీ చేయి",
    btn_copied: "కాపీ అయ్యింది!",
    
    // Chapter Footer
    prev_chapter: "← మునుపటి అధ్యాయం",
    next_chapter: "తరువాతి అధ్యాయం →",
    all_18_chapters_footer: "అన్ని 18 అధ్యాయాలు",
    
    // Scroll To Top
    scroll_to_top_tooltip: "పైకి వెళ్ళండి",

    // Mobile Drawer
    mobile_nav_title: "నావిగేషన్",
    mobile_chapters_title: "అధ్యాయాలు చదవండి",
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("gita_ui_language") as Language;
    if (saved && (saved === "en" || saved === "hi" || saved === "te")) {
      return saved;
    }
    return "en"; // Default to English as requested
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("gita_ui_language", lang);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const langDict = translations[language] || translations.en;
    let str = langDict[key] || translations.en[key] || key;
    if (params) {
      Object.keys(params).forEach((p) => {
        str = str.replace(new RegExp(`\\{${p}\\}`, "g"), String(params[p]));
      });
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
