import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.conditions': 'Conditions Treated',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Home - Hero
    'home.specialist': 'Specialist Eyecare',
    'home.drName': 'Dr. Saumika\nSingh',
    'home.subtitle': 'Oculoplasty, Orbit & Ocular Oncology Surgeon',
    'home.eyelid': 'Eyelid Disorders',
    'home.lacrimal': 'Lacrimal Disorders',
    'home.orbital': 'Orbital Diseases',
    'home.oncology': 'Ocular Surface & Periocular Oncology',
    'home.artificial': 'Artificial Eye & Socket Rehabilitation',
    'home.aesthetics': 'Periocular Aesthetics',
    'home.bookConsultation': 'Book Consultation',
    'home.callNow': 'Call Now',
    
    // Home - Commitment
    'home.commitmentTitle': 'Commitment to Excellence',
    'home.commitmentDesc': 'Dr. Saumika Singh is a fellowship-trained Oculoplasty, Orbit & Ocular Oncology Surgeon with expertise in the management of eyelid disorders, lacrimal diseases, orbital pathology, ocular surface and periocular tumours, socket reconstruction, and periocular aesthetics.',
    'home.location': 'Alyantra Medicity, Lucknow',
    
    // Home - Why Oculoplasty
    'home.whyTitle': 'Why Oculoplasty?',
    'home.whyDesc': 'Specialized and delicate care for the structures surrounding the eye. If you experience these symptoms, an Oculoplasty expert provides the precise treatment required.',
    'home.conditionsTreated': 'Conditions Treated',
    'home.drooping': 'Eyelid Disorders & Eyelid Surgery',
    'home.droopingSub': 'Specialised Oculoplasty Care in Lucknow by Dr. Saumika Singh',
    'home.droopingDesc': '',
    'home.watering': 'Watering Eyes & Tear Drainage Disorders',
    'home.wateringSub': 'Specialised Diagnosis & Treatment for Watering Eyes & Tear Drainage Disorders in Lucknow by Dr. Saumika Singh',
    'home.wateringDesc': '',
    'home.artificialTitle': 'Orbital Disorders & Orbital Surgery',
    'home.artificialSub': 'Specialised Diagnosis & Treatment for Orbital Disorders in Lucknow by Dr. Saumika Singh',
    'home.artificialDesc': '',
    'home.thyroid': 'Eye Tumours (Ocular Oncology)',
    'home.thyroidSub': 'Specialised Diagnosis & Treatment for Eye Tumours in Lucknow by Dr. Saumika Singh',
    'home.thyroidDesc': '',
    'home.tumours': 'Socket Reconstruction & Artificial Eye Rehabilitation',
    'home.tumoursSub': 'Comprehensive Care for Socket Reconstruction & Artificial Eye Rehabilitation in Lucknow by Dr. Saumika Singh',
    'home.tumoursDesc': '',
    'home.botox': 'Eye Trauma, Eyelid & Orbital Reconstruction',
    'home.botoxSub': 'Specialised Oculoplasty Trauma Care in Lucknow by Dr. Saumika Singh',
    'home.botoxDesc': '',
    'home.botoxCosmetic': 'Botox, Eyelid Cosmetic Surgery & Periocular Aesthetics',
    'home.botoxCosmeticSub': 'Botox, Aesthetics & Periocular Cosmetic Surgery in Lucknow by Dr. Saumika Singh',
    'home.botoxCosmeticDesc': '',
    'home.whyChoose': 'Why Choose an Oculoplasty & Ocular Oncology Specialist?',
    'home.whyChooseSub': 'Best Oculoplasty & Ocular Oncology Care in Lucknow by Dr. Saumika Singh',
    'home.whyChooseDesc': '',
    'home.clickToExplore': 'Click to explore details & treatments',
    'home.viewAll': 'Explore Other Conditions',

    // Conditions
    'cond.title': 'Conditions Treated',
    'cond.desc': 'We provide comprehensive diagnostic, medical, and surgical care for a wide range of oculofacial conditions.',
    
    // Gallery
    'gallery.title': 'Clinical Outcomes',
    'gallery.desc': 'View before and after transformations demonstrating functional and aesthetic results.',
    'gallery.photoGallery': 'Photo Gallery',
    'gallery.note': 'Note: These images are shared with patient consent. Results may vary depending on individual clinical conditions.',

    // Contact
    'contact.title': 'Contact & Appointments',
    'contact.desc': 'Schedule your consultation today. We are here to provide expert care for your eyes.',
    'contact.addressTitle': 'Address',
    'contact.address': 'Alyantra Medicity\nVibhuti Khand, Gomti Nagar\nLucknow, Uttar Pradesh',
    'contact.phoneTitle': 'Phone',
    'contact.phone': '+91 7460088838',
    'contact.emailTitle': 'Email',
    'contact.email': 'contact@drsaumika.in',
    'contact.hoursTitle': 'Consultation Hours',
    'contact.hours': 'Monday - Saturday: 10:00 AM - 6:00 PM\nSunday: Closed',
    'contact.reqAppt': 'Request an Appointment',
    'contact.formName': 'Full Name',
    'contact.formPhone': 'Phone Number',
    'contact.formMessage': 'Message (Optional)',
    'contact.formSubmit': 'Submit Request',
    'contact.phoneError': 'Please enter a complete 10-digit phone number.',
    'contact.formNamePlaceholder': 'Name',
    'contact.formMessagePlaceholder': 'Tell us briefly about your condition...',

    // Service Detail Features
    'pt.f1': 'Comprehensive evaluation of eyelid function and vision impact.',
    'pt.f2': 'Customized surgical correction to elevate the eyelid.',
    'pt.f3': 'Focus on achieving natural symmetry and appearance.',
    'we.f1': 'Detailed tear duct patency testing (Syringing & Probing).',
    'we.f2': 'Advanced DCR (Dacryocystorhinostomy) surgery if indicated.',
    'we.f3': 'Minimally invasive approaches for rapid recovery.',
    'ae.f1': 'Expert surgical removal of the eye (Enucleation/Evisceration) if necessary.',
    'ae.f2': 'Implantation of advanced orbital implants for volume replacement.',
    'ae.f3': 'Custom fabrication and fitting of a realistic ocular prosthesis.',
    'te.f1': 'Multidisciplinary management of active thyroid eye inflammation.',
    'te.f2': 'Orbital decompression surgery for bulging eyes (proptosis).',
    'te.f3': 'Corrective surgery for double vision and eyelid retraction.',
    'tu.f1': 'Precise biopsy and removal of eyelid and orbital masses.',
    'tu.f2': 'Coordination with oncologists for comprehensive cancer care.',
    'tu.f3': 'Advanced reconstructive techniques to preserve eye function and aesthetics.',
    'ba.f1': 'Non-surgical wrinkle reduction using Botox and dermal fillers.',
    'ba.f2': 'Blepharoplasty (eyelid lift) for a refreshed, youthful appearance.',
    'ba.f3': 'Tailored treatments emphasizing natural facial harmony.',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
  },
  hi: {
    // Navbar
    'nav.home': 'मुख्य पृष्ठ',
    'nav.conditions': 'उपचार की जाने वाली स्थितियाँ',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क करें',
    'nav.bookNow': 'अपॉइंटमेंट बुक करें',
    
    // Home - Hero
    'home.specialist': 'विशेषज्ञ नेत्र देखभाल',
    'home.drName': 'डॉ. सौमिका\nसिंह',
    'home.subtitle': 'ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी सर्जन',
    'home.eyelid': 'पलकों के रोग (Eyelid Disorders)',
    'home.lacrimal': 'आंसू नलिका के रोग (Lacrimal Disorders)',
    'home.orbital': 'ऑर्बिटल रोग (Orbital Diseases)',
    'home.oncology': 'ओकुलर सरफेस और पेरिओकुलर ऑन्कोलॉजी',
    'home.artificial': 'कृत्रिम आंख और सॉकेट पुनर्वास',
    'home.aesthetics': 'पेरिओकुलर सौंदर्यशास्त्र (Aesthetics)',
    'home.bookConsultation': 'परामर्श बुक करें',
    'home.callNow': 'अभी कॉल करें',
    
    // Home - Commitment
    'home.commitmentTitle': 'उत्कृष्टता के प्रति प्रतिबद्धता',
    'home.commitmentDesc': 'डॉ. सौमिका सिंह एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी सर्जन हैं, जिन्हें पलकों के विकारों, लैक्रिमल बीमारियों, ऑर्बिटल पैथोलॉजी, ओकुलर सतह और पेरिओकुलर ट्यूमर, सॉकेट पुनर्निर्माण और पेरिओकुलर सौंदर्यशास्त्र के प्रबंधन में विशेषज्ञता प्राप्त है।',
    'home.location': 'अलियंत्रा मेडिसिटी, लखनऊ',
    
    // Home - Why Oculoplasty
    'home.whyTitle': 'ओकुलोप्लास्टी क्यों?',
    'home.whyDesc': 'आंख के आसपास की संरचनाओं के लिए विशेष और नाजुक देखभाल। यदि आप इन लक्षणों का अनुभव करते हैं, तो एक ओकुलोप्लास्टी विशेषज्ञ सटीक उपचार प्रदान करता है।',
    'home.conditionsTreated': 'उपचार की जाने वाली स्थितियाँ',
    'home.drooping': 'पलक विकार और पलक सर्जरी',
    'home.droopingSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में विशिष्ट ओकुलोप्लास्टी देखभाल',
    'home.droopingDesc': '',
    'home.watering': 'आंखों से पानी आना और आंसू नली के विकार',
    'home.wateringSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में आंखों से पानी आने और आंसू नली के विकारों का विशिष्ट निदान और उपचार',
    'home.wateringDesc': '',
    'home.artificialTitle': 'ऑर्बिटल विकार और ऑर्बिटल सर्जरी',
    'home.artificialSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में ऑर्बिटल विकारों का विशिष्ट निदान और उपचार',
    'home.artificialDesc': '',
    'home.thyroid': 'आँखों के ट्यूमर (ओकुलर ऑन्कोलॉजी)',
    'home.thyroidSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में आँखों के ट्यूमर का विशिष्ट निदान और उपचार',
    'home.thyroidDesc': '',
    'home.tumours': 'सॉकेट पुनर्निर्माण और कृत्रिम आँख पुनर्वास',
    'home.tumoursSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में सॉकेट पुनर्निर्माण और कृत्रिम आँख पुनर्वास के लिए व्यापक देखभाल',
    'home.tumoursDesc': '',
    'home.botox': 'नेत्र आघात, पलक और ऑर्बिटल पुनर्निर्माण',
    'home.botoxSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में विशिष्ट ओकुलोप्लास्टी आघात देखभाल',
    'home.botoxDesc': '',
    'home.botoxCosmetic': 'बोटॉक्स, आईलिड कॉस्मेटिक सर्जरी और पेरिओकुलर एस्थेटिक्स',
    'home.botoxCosmeticSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में बोटॉक्स, एस्थेटिक्स और पेरिओकुलर कॉस्मेटिक सर्जरी',
    'home.botoxCosmeticDesc': '',
    'home.whyChoose': 'ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी विशेषज्ञ को क्यों चुनें?',
    'home.whyChooseSub': 'डॉ. सौमिका सिंह द्वारा लखनऊ में सर्वश्रेष्ठ ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी देखभाल',
    'home.whyChooseDesc': '',
    'home.clickToExplore': 'विवरण और उपचार जानने के लिए क्लिक करें',
    'home.viewAll': 'अन्य उपचारित स्थितियां देखें',

    // Conditions
    'cond.title': 'उपचार की जाने वाली स्थितियाँ',
    'cond.desc': 'हम ओकुलोफेशियल स्थितियों की एक विस्तृत श्रृंखला के लिए व्यापक नैदानिक, चिकित्सा और शल्य चिकित्सा देखभाल प्रदान करते हैं।',
    
    // Gallery
    'gallery.title': 'नैदानिक परिणाम',
    'gallery.desc': 'कार्यात्मक और सौंदर्य संबंधी परिणाम दर्शाने वाले पहले और बाद के बदलाव देखें।',
    'gallery.photoGallery': 'फोटो गैलरी',
    'gallery.note': 'नोट: ये छवियां रोगी की सहमति से साझा की जाती हैं। परिणाम व्यक्तिगत नैदानिक स्थितियों के आधार पर भिन्न हो सकते हैं।',

    // Contact
    'contact.title': 'संपर्क और अपॉइंटमेंट',
    'contact.desc': 'आज ही अपना परामर्श निर्धारित करें। हम आपकी आंखों के लिए विशेषज्ञ देखभाल प्रदान करने के लिए यहां हैं।',
    'contact.addressTitle': 'पता',
    'contact.address': 'अलियंत्रा मेडिसिटी\nविभूति खंड, गोमती नगर\nलखनऊ, उत्तर प्रदेश',
    'contact.phoneTitle': 'फ़ोन',
    'contact.phone': '+91 7460088838',
    'contact.emailTitle': 'ईमेल',
    'contact.email': 'contact@drsaumika.in',
    'contact.hoursTitle': 'परामर्श का समय',
    'contact.hours': 'सोमवार - शनिवार: सुबह 10:00 - शाम 6:00\nरविवार: बंद',
    'contact.reqAppt': 'अपॉइंटमेंट का अनुरोध करें',
    'contact.formName': 'पूरा नाम',
    'contact.formPhone': 'फ़ोन नंबर',
    'contact.formMessage': 'संदेश (वैकल्पिक)',
    'contact.formSubmit': 'अनुरोध भेजें',
    'contact.phoneError': 'कृपया पूरा 10-अंकों का फ़ोन नंबर दर्ज करें।',
    'contact.formNamePlaceholder': 'नाम',
    'contact.formMessagePlaceholder': 'अपनी स्थिति के बारे में संक्षेप में बताएं...',

    // Service Detail Features
    'pt.f1': 'पलक की कार्यक्षमता और दृष्टि पर प्रभाव का व्यापक मूल्यांकन।',
    'pt.f2': 'पलक को ऊपर उठाने के लिए अनुकूलित सर्जिकल सुधार।',
    'pt.f3': 'प्राकृतिक समरूपता और उपस्थिति प्राप्त करने पर ध्यान दें।',
    'we.f1': 'विस्तृत आंसू नलिका परीक्षण (सिरिंजिंग और प्रोबिंग)।',
    'we.f2': 'आवश्यकता होने पर उन्नत डीसीआर (DCR) सर्जरी।',
    'we.f3': 'तेजी से ठीक होने के लिए न्यूनतम इनवेसिव दृष्टिकोण।',
    'ae.f1': 'आवश्यक होने पर आंख को विशेषज्ञ रूप से शल्य चिकित्सा द्वारा निकालना (Enucleation/Evisceration)।',
    'ae.f2': 'मात्रा प्रतिस्थापन के लिए उन्नत कक्षीय प्रत्यारोपण (orbital implants) का आरोपण।',
    'ae.f3': 'एक यथार्थवादी कृत्रिम आंख का कस्टम निर्माण और फिटिंग।',
    'te.f1': 'सक्रिय थायरॉयड आंख की सूजन का बहु-विषयक प्रबंधन।',
    'te.f2': 'उभरी हुई आंखों के लिए कक्षीय विसंपीड़न (Orbital decompression) सर्जरी।',
    'te.f3': 'दोहरी दृष्टि और पलक के पीछे हटने के लिए सुधारात्मक सर्जरी।',
    'tu.f1': 'पलक और कक्षीय द्रव्यमान की सटीक बायोप्सी और निष्कासन।',
    'tu.f2': 'व्यापक कैंसर देखभाल के लिए ऑन्कोलॉजिस्ट के साथ समन्वय।',
    'tu.f3': 'आंखों के कार्य और सौंदर्यशास्त्र को संरक्षित करने के लिए उन्नत पुनर्निर्माण तकनीकें।',
    'ba.f1': 'बोटॉक्स और डर्मल फिलर्स का उपयोग करके बिना सर्जरी के झुर्रियों को कम करना।',
    'ba.f2': 'तरोताजा, युवा रूप के लिए ब्लेफेरोप्लास्टी (पलक उठाना)।',
    'ba.f3': 'प्राकृतिक चेहरे के सामंजस्य पर जोर देने वाले अनुकूलित उपचार।',

    // Footer
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.contactInfo': 'संपर्क जानकारी',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const val = translations[language][key as keyof typeof translations['en']];
    return val !== undefined ? val : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
