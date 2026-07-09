import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const serviceKeys: Record<string, { titleKey: string; descKey: string; subKey?: string; features: string[] }> = {
  'drooping-eyelids': {
    titleKey: 'home.drooping',
    descKey: 'home.droopingDesc',
    subKey: 'home.droopingSub',
    features: ['pt.f1', 'pt.f2', 'pt.f3']
  },
  'watering-eyes': {
    titleKey: 'home.watering',
    descKey: 'home.wateringDesc',
    subKey: 'home.wateringSub',
    features: ['we.f1', 'we.f2', 'we.f3']
  },
  'artificial-eye': {
    titleKey: 'home.artificialTitle',
    descKey: 'home.artificialDesc',
    subKey: 'home.artificialSub',
    features: ['ae.f1', 'ae.f2', 'ae.f3']
  },
  'thyroid-eye-disease': {
    titleKey: 'home.thyroid',
    descKey: 'home.thyroidDesc',
    features: ['te.f1', 'te.f2', 'te.f3']
  },
  'tumours': {
    titleKey: 'home.tumours',
    descKey: 'home.tumoursDesc',
    features: ['tu.f1', 'tu.f2', 'tu.f3']
  },
  'botox-aesthetics': {
    titleKey: 'home.botox',
    descKey: 'home.botoxDesc',
    features: ['ba.f1', 'ba.f2', 'ba.f3']
  }
};

const richEyelidContent = {
  en: {
    introTitle: "Introduction",
    introParas: [
      "Your eyelids do much more than blink. They protect the eyes, keep the surface moist, support healthy vision and contribute significantly to facial appearance. Disorders of the eyelids can affect vision, cause discomfort, alter appearance or, in some cases, indicate an underlying medical condition.",
      "As a fellowship-trained Oculoplasty and Ocular Oncology surgeon, Dr. Saumika Singh specialises in diagnosing and treating both functional and cosmetic eyelid disorders using modern medical and surgical techniques tailored to each patient."
    ],
    commonDisordersTitle: "Common Eyelid Disorders We Treat",
    disorders: [
      {
        title: "Droopy Eyelid (Ptosis)",
        desc: "A drooping upper eyelid may partially block vision, cause eye strain or create facial asymmetry. Ptosis may be present since birth or develop later in life due to ageing, nerve disorders or previous surgery. Treatment usually involves specialised eyelid surgery after careful evaluation."
      },
      {
        title: "Inward Turning Eyelid (Entropion)",
        desc: "When the eyelid turns inward, the eyelashes rub against the eye causing irritation, watering, redness and damage to the cornea. Surgery provides a long-term solution."
      },
      {
        title: "Outward Turning Eyelid (Ectropion)",
        desc: "An outward turning eyelid prevents normal tear drainage, leading to watering, dryness and recurrent infections. Surgical correction restores proper eyelid position."
      },
      {
        title: "Eyelid Lumps & Cysts",
        desc: "Lumps on the eyelid may be harmless conditions such as a chalazion or cyst, but some may represent eyelid tumours requiring specialised assessment. Persistent or recurrent eyelid swellings should always be evaluated."
      },
      {
        title: "Eyelid Tumours",
        desc: "Both benign and cancerous eyelid tumours require early diagnosis. Treatment may involve biopsy, complete removal and eyelid reconstruction while preserving eyelid function and appearance."
      },
      {
        title: "Facial Nerve Palsy & Inability to Close the Eye",
        desc: "Weakness of the facial nerve can prevent complete eyelid closure, exposing the eye to dryness and injury. Management ranges from lubrication to reconstructive eyelid procedures depending on severity."
      },
      {
        title: "Eyelid Retraction",
        desc: "An abnormally high upper eyelid or low lower eyelid may occur in thyroid eye disease or following trauma. Treatment aims to restore eyelid position and improve eye comfort."
      },
      {
        title: "Congenital Eyelid Disorders",
        desc: "Children may be born with droopy eyelids, abnormal eyelid development or other eyelid abnormalities that require timely evaluation to protect vision and ensure normal visual development."
      }
    ],
    whenToConsultTitle: "When Should You Consult an Oculoplasty Surgeon?",
    whenToConsultSubtitle: "You should seek specialist evaluation if you notice:",
    whenToConsultBullets: [
      "Drooping of one or both eyelids",
      "Persistent watering or irritation due to eyelid malposition",
      "A lump or growth on the eyelid",
      "Difficulty closing the eye",
      "Recurrent eyelid infections",
      "Changes in eyelid position after injury or previous surgery",
      "Any eyelid problem affecting vision or daily activities"
    ],
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Depending on the diagnosis, treatment may include:",
    treatmentOptionsBullets: [
      "Observation and medical management",
      "Minor office-based procedures",
      "Functional eyelid surgery",
      "Eyelid reconstruction",
      "Tumour excision with reconstruction",
      "Botox therapy for selected eyelid disorders"
    ],
    treatmentOptionsFooter: "Every treatment plan is individualised after a comprehensive examination.",
    whyChooseTitle: "Why Choose an Oculoplasty Surgeon?",
    whyChooseText: "Oculoplasty is a specialised branch of ophthalmology dedicated to diseases and surgery of the eyelids, tear drainage system and orbit. Many eyelid conditions require a balance between restoring function and achieving a natural cosmetic result. Fellowship-trained oculoplasty surgeons are specifically trained to manage these delicate structures while protecting vision.",
    faqsTitle: "FAQs",
    faqs: [
      {
        q: "Is every droopy eyelid treated with surgery?",
        a: "No. Treatment depends on the underlying cause, severity and its effect on vision. Some cases only require observation, while others benefit from surgery."
      },
      {
        q: "Can every eyelid lump be ignored?",
        a: "No. While many eyelid lumps are benign, persistent, recurrent or rapidly growing lesions should always be examined to rule out eyelid tumours."
      },
      {
        q: "Is eyelid surgery painful?",
        a: "Most eyelid procedures are performed under local anaesthesia with minimal discomfort, and recovery is generally quick."
      },
      {
        q: "Will eyelid surgery leave visible scars?",
        a: "Whenever possible, incisions are placed within the natural eyelid crease or along existing skin lines to minimise visible scarring."
      }
    ]
  },
  hi: {
    introTitle: "परिचय",
    introParas: [
      "आपकी पलकें केवल झपकने से कहीं अधिक काम करती हैं। वे आँखों की रक्षा करती हैं, सतह को नम रखती हैं, स्वस्थ दृष्टि का समर्थन करती हैं और चेहरे के रूप-रंग में महत्वपूर्ण योगदान देती हैं। पलकों के विकार दृष्टि को प्रभावित कर सकते हैं, असुविधा पैदा कर सकते हैं, रूप-रंग बदल सकते हैं या कुछ मामलों में, एक अंतर्निहित चिकित्सीय स्थिति का संकेत दे सकते हैं।",
      "फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन के रूप में, डॉ. सौमिका सिंह प्रत्येक रोगी के अनुसार आधुनिक चिकित्सा और सर्जिकल तकनीकों का उपयोग करके कार्यात्मक और कॉस्मेटिक दोनों तरह के पलक विकारों के निदान और उपचार में विशेषज्ञता रखती हैं।"
    ],
    commonDisordersTitle: "सामान्य पलक विकार जिनका हम इलाज करते हैं",
    disorders: [
      {
        title: "झुकी हुई पलकें (टोसिस / Ptosis)",
        desc: "ऊपरी पलक का झुकना आंशिक रूप से दृष्टि को अवरुद्ध कर सकता है, आँखों में खिंचाव पैदा कर सकता है या चेहरे की विषमता (असमरूपता) पैदा कर सकता है। टोसिस जन्म से मौजूद हो सकता है या उम्र बढ़ने, तंत्रिका विकारों या पिछली सर्जरी के कारण जीवन में बाद में विकसित हो सकता है। उपचार में आमतौर पर सावधानीपूर्वक मूल्यांकन के बाद विशेष पलक सर्जरी शामिल होती है।"
      },
      {
        title: "अंदर की ओर मुड़ने वाली पलक (एंट्रोपियन / Entropion)",
        desc: "जब पलक अंदर की ओर मुड़ जाती है, तो पलक के बाल आँख से रगड़ते हैं जिससे जलन, पानी आना, लालिमा और कॉर्निया को नुकसान होता है। सर्जरी एक दीर्घकालिक समाधान प्रदान करती है।"
      },
      {
        title: "बाहर की ओर मुड़ने वाली पलक (एक्ट्रोपियन / Ectropion)",
        desc: "बाहर की ओर मुड़ने वाली पलक सामान्य आँसू जल निकासी को रोकती है, जिससे पानी आना, सूखापन और बार-बार संक्रमण होता है। सर्जिकल सुधार पलक की उचित स्थिति को बहाल करता है।"
      },
      {
        title: "पलक की गांठें और सिस्ट (Lumps & Cysts)",
        desc: "पलक पर गांठें हानिरहित स्थितियां हो सकती हैं जैसे कि गुहेरी (chalazion) या सिस्ट, लेकिन कुछ पलक के ट्यूमर का प्रतिनिधित्व कर सकती हैं जिसके लिए विशेष मूल्यांकन की आवश्यकता होती है। लगातार या बार-बार होने वाली पलक की सूजन का हमेशा मूल्यांकन किया जाना चाहिए।"
      },
      {
        title: "पलक के ट्यूमर (Eyelid Tumours)",
        desc: "सौम्य (benign) और कैंसरयुक्त दोनों तरह के पलक ट्यूमर के लिए प्रारंभिक निदान की आवश्यकता होती है। उपचार में पलक के कार्य और रूप-रंग को संरक्षित करते हुए बायोप्सी, पूर्ण निष्कासन और पलक पुनर्निर्माण शामिल हो सकता है।"
      },
      {
        title: "फेशियल नर्व पाल्सी और आँख बंद करने में असमर्थता",
        desc: "चेहरे की तंत्रिका (facial nerve) की कमजोरी पलक को पूरी तरह से बंद होने से रोक सकती है, जिससे आँख में सूखापन और चोट लगने का खतरा रहता है। गंभीरता के आधार पर उपचार में लुब्रिकेशन (आई ड्रॉप) से लेकर पुनर्निर्माण संबंधी पलक प्रक्रियाएं शामिल हैं।"
      },
      {
        title: "पलक का खिंचाव (Eyelid Retraction)",
        desc: "थायरॉयड आँख की बीमारी या आघात (trauma) के बाद एक असामान्य रूप से ऊंची ऊपरी पलक या नीची निचली पलक हो सकती है। उपचार का उद्देश्य पलक की स्थिति को बहाल करना और आँख के आराम में सुधार करना है।"
      },
      {
        title: "जन्मजात पलक विकार (Congenital Eyelid Disorders)",
        desc: "बच्चे झुकी हुई पलकों, असामान्य पलक विकास या अन्य पलक विसंगतियों के साथ पैदा हो सकते हैं जिन्हें दृष्टि की रक्षा करने और सामान्य दृश्य विकास सुनिश्चित करने के लिए समय पर मूल्यांकन की आवश्यकता होती है।"
      }
    ],
    whenToConsultTitle: "आपको ओकुलोप्लास्टी सर्जन से कब परामर्श करना चाहिए?",
    whenToConsultSubtitle: "आपको विशेषज्ञ मूल्यांकन की आवश्यकता है यदि आप ध्यान दें:",
    whenToConsultBullets: [
      "एक या दोनों पलकों का झुकना",
      "पलक की गलत स्थिति के कारण लगातार पानी आना या जलन होना",
      "पलक पर गांठ या वृद्धि होना",
      "आँख बंद करने में कठिनाई",
      "बार-बार पलक का संक्रमण होना",
      "चोट या पिछली सर्जरी के बाद पलक की स्थिति में बदलाव",
      "दृष्टि या दैनिक गतिविधियों को प्रभावित करने वाली कोई भी पलक की समस्या"
    ],
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "निदान के आधार पर, उपचार में शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "अवलोकन और चिकित्सा प्रबंधन",
      "मामूली क्लिनिक-आधारित प्रक्रियाएं",
      "कार्यात्मक पलक सर्जरी",
      "पलक का पुनर्निर्माण",
      "पुनर्निर्माण के साथ ट्यूमर का निष्कासन",
      "चयनित पलक विकारों के लिए बोटॉक्स थेरेपी"
    ],
    treatmentOptionsFooter: "एक व्यापक परीक्षा के बाद प्रत्येक उपचार योजना व्यक्तिगत रूप से तैयार की जाती है।",
    whyChooseTitle: "ओकुलोप्लास्टी सर्जन क्यों चुनें?",
    whyChooseText: "ओकुलोप्लास्टी नेत्र विज्ञान (ophthalmology) की एक विशेष शाखा है जो पलकों, आंसू जल निकासी प्रणाली और आंख के सॉकेट (orbit) के रोगों और सर्जरी के लिए समर्पित है। कई पलक स्थितियों के लिए कार्य को बहाल करने और एक प्राकृतिक कॉस्मेटिक परिणाम प्राप्त करने के बीच संतुलन की आवश्यकता होती है। फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी सर्जनों को दृष्टि की रक्षा करते हुए इन नाजुक संरचनाओं का प्रबंधन करने के लिए विशेष रूप से प्रशिक्षित किया जाता है।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    faqs: [
      {
        q: "क्या हर झुकी हुई पलक का इलाज सर्जरी से किया जाता है?",
        a: "नहीं। उपचार अंतर्निहित कारण, गंभीरता और दृष्टि पर इसके प्रभाव पर निर्भर करता है। कुछ मामलों में केवल अवलोकन की आवश्यकता होती है, जबकि अन्य को सर्जरी से लाभ होता है।"
      },
      {
        q: "क्या पलक की हर गांठ को नजरअंदाज किया जा सकता है?",
        a: "नहीं। हालांकि पलक की कई गांठें सौम्य होती हैं, फिर भी लगातार, बार-बार होने वाली या तेजी से बढ़ने वाली गांठों की हमेशा जांच की होनी चाहिए ताकि पलक के ट्यूमर की संभावना को खारिज किया जा सके।"
      },
      {
        q: "क्या पलक की सर्जरी से दिखाई देने वाले निशान रह जाएंगे?",
        a: "जब भी संभव हो, दिखाई देने वाले निशान को कम करने के लिए चीरे प्राकृतिक पलक क्रीज के भीतर या मौजूदा त्वचा रेखाओं के साथ लगाए जाते हैं।"
      }
    ]
  }
};

const richWateringContent = {
  en: {
    introTitle: "Introduction",
    introParas: [
      "Persistent watering of the eyes is more than just a nuisance. While many people assume it is caused by excessive tear production, the problem is often due to blockage or malfunction of the tear drainage system. Watering eyes can interfere with daily activities, increase the risk of recurrent infections and, if left untreated, may require more complex treatment.",
      "Dr. Saumika Singh specialises in the diagnosis and management of lacrimal (tear drainage) disorders in both adults and children, offering medical and surgical treatment in Lucknow tailored to the underlying cause."
    ],
    commonDisordersTitle: "Symptoms & Conditions We Treat",
    disorders: [
      {
        title: "Persistent Watering Eyes (Epiphora)",
        desc: "Continuous watering of one or both eyes may occur due to blockage of the tear drainage system, eyelid abnormalities or excessive tear production. A detailed examination helps determine the exact cause before treatment is planned."
      },
      {
        title: "Blocked Tear Duct (Nasolacrimal Duct Obstruction)",
        desc: "A blocked tear duct prevents normal drainage of tears, leading to constant watering, sticky discharge and recurrent infections. Depending on the site and severity of blockage, treatment may involve surgery to restore tear drainage."
      },
      {
        title: "Dacryocystitis (Lacrimal Sac Infection)",
        desc: "Infection of the lacrimal sac typically presents with painful swelling near the inner corner of the eye, redness and discharge. Early treatment is important to control infection and prevent complications."
      },
      {
        title: "Congenital Watering in Children",
        desc: "Many infants experience watering due to delayed opening of the tear duct after birth. While most improve spontaneously during the first year of life, persistent watering may require probing or other procedures to restore tear drainage."
      },
      {
        title: "Canalicular Injuries",
        desc: "Injuries involving the delicate tear drainage channels are commonly seen after facial trauma, road traffic accidents or animal bites. Early surgical repair offers the best chance of restoring normal tear drainage."
      },
      {
        title: "Failed Previous Tear Duct Surgery",
        desc: "Persistent watering despite previous lacrimal surgery requires careful evaluation to identify the cause of failure. Revision surgery may be recommended in selected cases."
      }
    ],
    whenToConsultTitle: "Common Symptoms That Need Evaluation",
    whenToConsultSubtitle: "You should seek specialist consultation if you experience:",
    whenToConsultBullets: [
      "Constant watering from one or both eyes",
      "Sticky or mucous discharge",
      "Recurrent swelling near the inner corner of the eye",
      "Painful redness around the tear sac",
      "Watering persisting despite eye drops",
      "Watering following facial injury",
      "Persistent watering in children beyond one year of age"
    ],
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Depending on the diagnosis, treatment may include:",
    treatmentOptionsBullets: [
      "Medical treatment for infection and inflammation",
      "Tear duct probing in selected children",
      "Silicone tube intubation",
      "Dacryocystorhinostomy (DCR) surgery",
      "Canalicular repair following trauma",
      "Revision lacrimal surgery for failed previous procedures"
    ],
    treatmentOptionsFooter: "Every treatment plan is individualised after careful clinical assessment.",
    whyChooseTitle: "Why Consult an Oculoplasty Surgeon?",
    whyChooseText: "The tear drainage system is delicate and closely related to the eyelids, nose and surrounding structures. Fellowship-trained oculoplasty surgeons are specially trained to diagnose the exact cause of watering eyes and perform lacrimal surgeries while preserving eyelid function and cosmetic appearance. Not every patient with watering eyes requires surgery. Identifying the underlying cause is the most important step in choosing the right treatment.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Are watering eyes always due to blocked tear ducts?",
        a: "No. Watering may result from excessive tear production, eyelid abnormalities, dry eye disease or blockage of the tear drainage system. A proper examination helps determine the exact cause."
      },
      {
        q: "Will every blocked tear duct require surgery?",
        a: "Not always. Treatment depends on the location and severity of the blockage, the patient's symptoms and age. Some conditions can be managed without surgery."
      },
      {
        q: "Is DCR surgery painful?",
        a: "DCR surgery is usually performed under local or general anaesthesia depending on the individual case. Most patients experience only mild discomfort during recovery."
      },
      {
        q: "Can children outgrow watering eyes?",
        a: "Yes. Many infants improve naturally during the first year of life. Persistent watering beyond this period should be evaluated by an oculoplasty specialist."
      },
      {
        q: "Can watering return after surgery?",
        a: "Most patients experience excellent long-term relief after successful surgery, although recurrence can occur in a small number of cases and may require further evaluation."
      }
    ],
    dcrSection: {
      title: "What is DCR Surgery?",
      text: "Dacryocystorhinostomy (DCR) is the most commonly performed operation for a blocked tear duct. The surgery creates a new passage for tears to drain directly into the nose, relieving persistent watering and reducing recurrent infections.\nDepending on the individual case, it might require intubation or additional procedures. The choice is based on the patient's condition and detailed evaluation."
    },
    consultationSection: {
      title: "Consultation",
      text: "If you have persistent watering, recurrent tear sac infections or have been advised tear duct surgery, schedule a consultation with Dr. Saumika Singh for a comprehensive lacrimal evaluation and personalised treatment plan."
    }
  },
  hi: {
    introTitle: "परिचय",
    introParas: [
      "आंखों से लगातार पानी आना सिर्फ एक परेशानी नहीं है। हालांकि कई लोग मानते हैं कि यह अत्यधिक आंसू उत्पादन के कारण होता है, लेकिन समस्या अक्सर आंसू जल निकासी प्रणाली (tear drainage system) के अवरुद्ध होने या खराब होने के कारण होती है। आंखों से पानी आना दैनिक गतिविधियों में बाधा डाल सकता है, बार-बार संक्रमण के जोखिम को बढ़ा सकता है और यदि इसका इलाज न किया जाए, तो अधिक जटिल उपचार की आवश्यकता हो सकती है।",
      "डॉ. सौमिका सिंह वयस्कों और बच्चों दोनों में लैक्रिमल (आंसू जल निकासी) विकारों के निदान और प्रबंधन में विशेषज्ञता रखती हैं, और अंतर्निहित कारण के अनुरूप लखनऊ में चिकित्सा और सर्जिकल उपचार प्रदान करती हैं।"
    ],
    commonDisordersTitle: "लक्षण और स्थितियां जिनका हम इलाज करते हैं",
    disorders: [
      {
        title: "आंखों से लगातार पानी आना (एपिफोरा / Epiphora)",
        desc: "आंसू जल निकासी प्रणाली में रुकावट, पलक की असामान्यताओं या अत्यधिक आंसू उत्पादन के कारण एक या दोनों आंखों से लगातार पानी आ सकता है। उपचार की योजना बनाने से पहले एक विस्तृत जांच सटीक कारण निर्धारित करने में मदद करती है।"
      },
      {
        title: "अवरुद्ध आंसू वाहिनी (नासोलैक्रिमल डक्ट रुकावट / Blocked Tear Duct)",
        desc: "अवरुद्ध आंसू वाहिनी आंसुओं के सामान्य निकास को रोकती है, जिससे लगातार पानी आना, चिपचिपा स्राव और बार-बार संक्रमण होता है। रुकावट के स्थान और गंभीरता के आधार पर, आंसू जल निकासी को बहाल करने के लिए उपचार में सर्जरी शामिल हो सकती है।"
      },
      {
        title: "डैक्रियोसिस्टाइटिस (आंसू थैली का संक्रमण / Dacryocystitis)",
        desc: "आंसू थैली (lacrimal sac) के संक्रमण में आमतौर पर आंख के आंतरिक कोने के पास दर्दनाक सूजन, लालिमा और स्राव होता है। संक्रमण को नियंत्रित करने और जटिलताओं को रोकने के लिए प्रारंभिक उपचार महत्वपूर्ण है।"
      },
      {
        title: "बच्चों में जन्मजात आंखों से पानी आना",
        desc: "जन्म के बाद आंसू नली के खुलने में देरी के कारण कई शिशुओं को आंखों से पानी आने की समस्या का अनुभव होता है। हालांकि अधिकांश शिशुओं में जीवन के पहले वर्ष के दौरान स्वतः सुधार हो जाता है, लेकिन लगातार पानी आने पर आंसू निकास को बहाल करने के लिए प्रोबिंग (probing) या अन्य प्रक्रियाओं की आवश्यकता हो सकती है।"
      },
      {
        title: "कैनालिकुलर चोटें (Canalicular Injuries)",
        desc: "चेहरे के आघात (facial trauma), सड़क यातायात दुर्घटनाओं या जानवरों के काटने के बाद नाजुक आंसू जल निकासी चैनलों से जुड़ी चोटें आमतौर पर देखी जाती हैं। प्रारंभिक सर्जिकल मरम्मत सामान्य आंसू जल निकासी को बहाल करने का सबसे अच्छा अवसर प्रदान करती है।"
      },
      {
        title: "पिछली आंसू वाहिनी सर्जरी की विफलता",
        desc: "पिछली लैक्रिमल सर्जरी के बावजूद लगातार पानी आने की समस्या होने पर विफलता के कारण की पहचान करने के लिए सावधानीपूर्वक मूल्यांकन की आवश्यकता होती है। चुनिंदा मामलों में पुनरीक्षण (revision) सर्जरी की सिफारिश की जा सकती है।"
      }
    ],
    whenToConsultTitle: "सामान्य लक्षण जिनके लिए मूल्यांकन की आवश्यकता है",
    whenToConsultSubtitle: "यदि आप अनुभव करते हैं तो आपको विशेषज्ञ परामर्श लेना चाहिए:",
    whenToConsultBullets: [
      "एक या दोनों आंखों से लगातार पानी आना",
      "चिपचिपा या श्लेष्म (mucous) स्राव होना",
      "आंख के भीतरी कोने के पास बार-बार सूजन आना",
      "आंसू थैली के आसपास दर्दनाक लालिमा",
      "आई ड्रॉप्स के बावजूद पानी आना जारी रहना",
      "चेहरे की चोट के बाद आंखों से पानी आना",
      "एक वर्ष की आयु के बाद भी बच्चों में लगातार पानी आना"
    ],
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "निदान के आधार पर, उपचार में शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "संक्रमण और सूजन के लिए चिकित्सा उपचार (दवाएं)",
      "चुनिंदा बच्चों में टियर डक्ट प्रोबिंग (probing)",
      "सिलिकॉन ट्यूब इंट्यूबेशन",
      "डैक्रियोसिस्टोरहिनोस्टॉमी (DCR) सर्जरी",
      "आघात (trauma) के बाद कैनालिकुलर मरम्मत",
      "पिछली विफल प्रक्रियाओं के लिए पुनरीक्षण (revision) लैक्रिमल सर्जरी"
    ],
    treatmentOptionsFooter: "सावधानीपूर्वक नैदानिक मूल्यांकन के बाद प्रत्येक उपचार योजना व्यक्तिगत रूप से तैयार की जाती है।",
    whyChooseTitle: "ओकुलोप्लास्टी सर्जन से क्यों परामर्श लें?",
    whyChooseText: "आंसू जल निकासी प्रणाली नाजुक होती है और पलकों, नाक और आसपास की संरचनाओं से निकटता से जुड़ी होती है। फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी सर्जनों को विशेष रूप से आंखों से पानी आने के सटीक कारण का निदान करने और पलक के कार्य एवं कॉस्मेटिक रूप-रंग को बनाए रखते हुए लैक्रिमल सर्जरी करने के लिए प्रशिक्षित किया जाता है। आंखों से पानी आने वाले हर मरीज को सर्जरी की जरूरत नहीं होती है। अंतर्निहित कारण की पहचान करना सही उपचार चुनने में सबसे महत्वपूर्ण कदम है।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    faqs: [
      {
        q: "क्या आंखों से पानी आना हमेशा अवरुद्ध आंसू नलिकाओं के कारण होता है?",
        a: "नहीं। आंखों से पानी आना अत्यधिक आंसू उत्पादन, पलक की असामान्यताओं, सूखी आंख की बीमारी (dry eye disease) या आंसू जल निकासी प्रणाली में रुकावट के कारण हो सकता है। एक उचित जांच सटीक कारण निर्धारित करने में मदद करती है।"
      },
      {
        q: "क्या हर अवरुद्ध आंसू नली के लिए सर्जरी की आवश्यकता होगी?",
        a: "हमेशा नहीं। उपचार रुकावट के स्थान और गंभीरता, रोगी के लक्षणों और आयु पर निर्भर करता है। कुछ स्थितियों का प्रबंधन बिना सर्जरी के भी किया जा सकता है।"
      },
      {
        q: "क्या DCR सर्जरी दर्दनाक होती है?",
        a: "DCR सर्जरी आमतौर पर व्यक्तिगत मामले के आधार पर स्थानीय या सामान्य संज्ञाहरण (local or general anaesthesia) के तहत की जाती है। अधिकांश रोगियों को रिकवरी के दौरान केवल हल्की असुविधा का अनुभव होता है।"
      },
      {
        q: "क्या बच्चे आंखों से पानी आने की समस्या से स्वतः ठीक हो सकते हैं?",
        a: "हां। कई शिशुओं में जीवन के पहले वर्ष के दौरान प्राकृतिक रूप से सुधार हो जाता है। इस अवधि के बाद भी लगातार पानी आने की समस्या का मूल्यांकन ओकुलोप्लास्टी विशेषज्ञ द्वारा किया जाना चाहिए।"
      },
      {
        q: "क्या सर्जरी के बाद आंखों से पानी आना वापस आ सकता है?",
        a: "सफल सर्जरी के बाद अधिकांश रोगियों को उत्कृष्ट दीर्घकालिक राहत मिलती है, हालांकि कम संख्या में मामलों में पुनरावृत्ति (recurrence) हो सकती है और इसके लिए आगे के मूल्यांकन की आवश्यकता हो सकती है।"
      }
    ],
    dcrSection: {
      title: "DCR सर्जरी क्या है?",
      text: "डैक्रियोसिस्टोरहिनोस्टॉमी (DCR) अवरुद्ध आंसू वाहिनी के लिए सबसे अधिक की जाने वाली सर्जरी है। यह सर्जरी आंसुओं को सीधे नाक में बहाने के लिए एक नया रास्ता बनाती है, जिससे लगातार पानी आने से राहत मिलती है और बार-बार होने वाले संक्रमण कम होते हैं। व्यक्तिगत मामले के आधार पर, इसमें इंट्यूबेशन या अतिरिक्त प्रक्रियाओं की आवश्यकता हो सकती है। चयन रोगी की स्थिति और विस्तृत मूल्यांकन पर आधारित होता है।"
    },
    consultationSection: {
      title: "परामर्श",
      text: "यदि आपको लगातार आंखों से पानी आने, आंसू थैली में बार-बार संक्रमण होने या आंसू नली की सर्जरी की सलाह दी गई है, तो व्यापक लैक्रिमल मूल्यांकन और व्यक्तिगत उपचार योजना के लिए डॉ. सौमिका सिंह के साथ परामर्श का समय निर्धारित करें।"
    }
  }
};

const richOrbitalContent = {
  en: {
    introTitle: "Introduction",
    introParas: [
      "The orbit is the bony cavity that houses the eye, eye muscles, nerves, blood vessels and surrounding soft tissues. Disorders affecting the orbit can cause protrusion of the eye, swelling around the eye, double vision, pain, restricted eye movements or even vision loss if left untreated.",
      "Dr. Saumika Singh is a fellowship-trained Oculoplasty and Ocular Oncology surgeon with expertise in diagnosing and managing a wide range of orbital diseases using medical and surgical treatment tailored to each patient."
    ],
    commonDisordersTitle: "Symptoms & Conditions We Treat",
    disorders: [
      {
        title: "Bulging Eyes (Proptosis)",
        desc: "One or both eyes may gradually appear more prominent or bulge forward due to thyroid eye disease, orbital tumours, inflammation or other orbital conditions. Early evaluation helps identify the underlying cause and prevent vision-threatening complications."
      },
      {
        title: "Thyroid Eye Disease",
        desc: "Thyroid-related eye disease may cause bulging eyes, eyelid retraction, swelling around the eyes, redness, dryness and double vision. Treatment depends on the severity of the disease and may range from medical therapy to specialised orbital surgery."
      },
      {
        title: "Orbital Tumours",
        desc: "Tumours within the orbit may be benign or malignant. Patients may notice bulging of the eye, swelling, double vision, pain or gradual loss of vision. Comprehensive evaluation including imaging and biopsy, when required, helps determine the most appropriate treatment."
      },
      {
        title: "Orbital Inflammation",
        desc: "Inflammation within the orbit may present with painful swelling around the eye, redness, restricted eye movements and double vision. Early diagnosis is important as treatment varies depending on the underlying cause."
      },
      {
        title: "Orbital Infections",
        desc: "Infections involving the tissues around the eye require urgent evaluation and treatment to prevent serious complications. Symptoms may include eyelid swelling, fever, pain, redness and reduced vision."
      },
      {
        title: "Orbital Fractures",
        desc: "Facial injuries following road traffic accidents, falls or sports trauma may result in fractures of the eye socket. Patients may experience double vision, sunken appearance of the eye, numbness around the cheek or restricted eye movements. Surgical repair may be required in selected cases."
      },
      {
        title: "Congenital Orbital Disorders",
        desc: "Certain orbital conditions are present from birth and may affect eye position, eyelid development or facial symmetry. Early specialist assessment helps guide appropriate management."
      }
    ],
    whenToConsultTitle: "When Should You Consult an Oculoplasty Surgeon?",
    whenToConsultSubtitle: "Seek specialist evaluation if you experience:",
    whenToConsultBullets: [
      "One eye appearing larger or more prominent than the other",
      "Sudden or progressive bulging of the eye",
      "Persistent swelling around the eye",
      "Double vision",
      "Pain while moving the eyes",
      "Restricted eye movements",
      "Sunken eye following facial injury",
      "Gradual change in eye position",
      "Unexplained vision changes associated with orbital swelling"
    ],
    howDiagnosedSection: {
      title: "How Are Orbital Disorders Diagnosed?",
      subtitle: "A detailed orbital evaluation may include:",
      bullets: [
        "Comprehensive eye examination",
        "Assessment of vision and eye movements",
        "Measurement of eye prominence",
        "CT scan or MRI of the orbit",
        "Blood investigations where indicated",
        "Biopsy for selected orbital masses"
      ],
      footer: "Accurate diagnosis is essential because orbital diseases often require different treatment approaches despite having similar symptoms."
    },
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Treatment depends entirely on the underlying diagnosis and may include:",
    treatmentOptionsBullets: [
      "Observation and regular monitoring",
      "Medical treatment for inflammation or thyroid eye disease",
      "Antibiotics for orbital infections",
      "Orbital biopsy",
      "Orbital tumour surgery",
      "Orbital fracture repair",
      "Orbital decompression surgery",
      "Multidisciplinary care with endocrinologists, ENT surgeons, neurosurgeons and oncologists when required"
    ],
    treatmentOptionsFooter: "Every treatment plan is individualised based on the patient's condition.",
    whyChooseTitle: "Why Consult an Oculoplasty Surgeon?",
    whyChooseText: "Orbital disorders are among the most complex conditions affecting the eye and surrounding structures. Their management often requires specialised knowledge of the eyelids, orbit, tear drainage system and ocular anatomy. As a fellowship-trained Oculoplasty and Ocular Oncology surgeon, Dr. Saumika Singh provides comprehensive evaluation and treatment while working closely with other medical specialists whenever multidisciplinary care is needed.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Does every bulging eye indicate thyroid disease?",
        a: "No. Although thyroid eye disease is a common cause, bulging of the eye may also result from orbital tumours, inflammation, vascular abnormalities or infections. A thorough evaluation is essential."
      },
      {
        q: "Are all orbital tumours cancerous?",
        a: "No. Many orbital tumours are benign. However, imaging and, in selected cases, biopsy are necessary to establish the diagnosis and determine appropriate treatment."
      },
      {
        q: "Will every orbital fracture require surgery?",
        a: "Not always. The need for surgery depends on the size of the fracture, double vision, eye position and symptoms. Some fractures can be managed conservatively with close follow-up."
      },
      {
        q: "Can thyroid eye disease be treated?",
        a: "Yes. Treatment depends on the stage and severity of the disease and may include medications, lubricants, lifestyle modification and surgery in selected patients."
      }
    ],
    consultationSection: {
      title: "Consultation",
      text: "If you notice bulging of the eye, persistent swelling around the eye, double vision, orbital pain or have been advised evaluation for an orbital tumour or fracture, consult Dr. Saumika Singh in Lucknow for a comprehensive orbital assessment and personalised treatment plan."
    }
  },
  hi: {
    introTitle: "परिचय",
    introParas: [
      "ऑर्बिट (नेत्र कोटर) वह हड्डी की गुहा है जिसमें आंख, आंखों की मांसपेशियां, नसें, रक्त वाहिकाएं और आसपास के नरम ऊतक (soft tissues) होते हैं। ऑर्बिट को प्रभावित करने वाले विकारों के कारण आंख बाहर की ओर निकल सकती है (protrusion), आंख के आसपास सूजन, दोहरी दृष्टि (double vision), दर्द, आंखों की गतिविधियों में रुकावट या इलाज न किए जाने पर दृष्टि हानि भी हो सकती है।",
      "डॉ. सौमिका सिंह एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन हैं, जो प्रत्येक रोगी के अनुरूप चिकित्सा और सर्जिकल उपचार का उपयोग करके ऑर्बिटल रोगों की एक विस्तृत श्रृंखला के निदान और प्रबंधन में विशेषज्ञता रखती हैं।"
    ],
    commonDisordersTitle: "लक्षण और स्थितियां जिनका हम इलाज करते हैं",
    disorders: [
      {
        title: "उभरी हुई आंखें (प्रॉप्टोसिस / Proptosis)",
        desc: "थायरॉयड नेत्र रोग, ऑर्बिटल ट्यूमर, सूजन या अन्य ऑर्बिटल स्थितियों के कारण एक या दोनों आंखें धीरे-धीरे अधिक प्रमुख दिखाई दे सकती हैं या आगे की ओर उभर सकती हैं। प्रारंभिक मूल्यांकन अंतर्निहित कारण की पहचान करने और दृष्टि के लिए खतरा पैदा करने वाली जटिलताओं को रोकने में मदद करता है।"
      },
      {
        title: "थायराइड नेत्र रोग",
        desc: "थायरॉयड से संबंधित नेत्र रोग के कारण आंखें उभरी हुई, पलकें सिकुड़ी हुई, आंखों के आसपास सूजन, लालिमा, सूखापन और दोहरी दृष्टि हो सकती है। उपचार रोग की गंभीरता पर निर्भर करता है और चिकित्सा चिकित्सा (medical therapy) से लेकर विशिष्ट ऑर्बिटल सर्जरी तक हो सकता है।"
      },
      {
        title: "ऑर्बिटल ट्यूमर",
        desc: "ऑर्बिट के भीतर ट्यूमर सौम्य (benign) या घातक (malignant) हो सकते हैं। मरीज आंख का उभरना, सूजन, दोहरी दृष्टि, दर्द या धीरे-धीरे दृष्टि की हानि महसूस कर सकते हैं। इमेजिंग और आवश्यकता पड़ने पर बायोप्सी सहित व्यापक मूल्यांकन सबसे उपयुक्त उपचार निर्धारित करने में मदद करता है।"
      },
      {
        title: "ऑर्बिटल सूजन",
        desc: "ऑर्बिट के भीतर सूजन होने पर आंख के आसपास दर्दनाक सूजन, लालिमा, आंखों की प्रतिबंधित गतिविधियां और दोहरी दृष्टि हो सकती है। शीघ्र निदान महत्वपूर्ण है क्योंकि अंतर्निहित कारण के आधार पर उपचार भिन्न होता है।"
      },
      {
        title: "ऑर्बिटल संक्रमण",
        desc: "आंख के आसपास के ऊतकों से जुड़े संक्रमणों को गंभीर जटिलताओं से बचाने के लिए तत्काल मूल्यांकन और उपचार की आवश्यकता होती है। लक्षणों में पलक की सूजन, बुखार, दर्द, लालिमा और कम दृष्टि शामिल हो सकती है।"
      },
      {
        title: "ऑर्बिटल फ्रैक्चर",
        desc: "सड़क यातायात दुर्घटनाओं, गिरने या खेल के आघात के बाद चेहरे की चोटों के परिणामस्वरूप आंख की सॉकेट में फ्रैक्चर हो सकता है। मरीजों को दोहरी दृष्टि, आंख का धंसा हुआ दिखना, गाल के आसपास सुन्नता या आंखों की प्रतिबंधित गतिविधियों का अनुभव हो सकता है। चुनिंदा मामलों में सर्जिकल मरम्मत की आवश्यकता हो सकती है।"
      },
      {
        title: "जन्मजात ऑर्बिटल विकार",
        desc: "कुछ ऑर्बिटल स्थितियां जन्म से ही मौजूद होती हैं और आंख की स्थिति, पलकों के विकास या चेहरे की समरूपता (symmetry) को प्रभावित कर सकती हैं। प्रारंभिक विशेषज्ञ मूल्यांकन उपयुक्त प्रबंधन का मार्गदर्शन करने में मदद करता है।"
      }
    ],
    whenToConsultTitle: "आपको ओकुलोप्लास्टी सर्जन से कब परामर्श लेना चाहिए?",
    whenToConsultSubtitle: "विशेषज्ञ मूल्यांकन लें यदि आप अनुभव करते हैं:",
    whenToConsultBullets: [
      "एक आंख दूसरी की तुलना में बड़ी या अधिक उभरी हुई दिखाई देना",
      "आंख का अचानक या लगातार बाहर की ओर उभरना",
      "आंख के आसपास लगातार सूजन रहना",
      "दोहरी दृष्टि (एक का दो दिखना)",
      "आंको की गतिविधियों में रुकावट",
      "आंखों को हिलाते समय दर्द होना",
      "चेहरे की चोट के बाद आंख का धंसा हुआ दिखना",
      "आंख की स्थिति में धीरे-धीरे बदलाव आना",
      "ऑर्बिटल सूजन से जुड़े अस्पष्टीकृत दृष्टि परिवर्तन"
    ],
    howDiagnosedSection: {
      title: "ऑर्बिटल विकारों का निदान कैसे किया जाता है?",
      subtitle: "एक विस्तृत ऑर्बिटल मूल्यांकन में शामिल हो सकते हैं:",
      bullets: [
        "व्यापक नेत्र जांच",
        "दृष्टि और आंखों की गतिविधियों का मूल्यांकन",
        "आंख के उभार का मापन",
        "ऑर्बिट का सीटी स्कैन (CT scan) या एमआरआई (MRI)",
        "आवश्यकतानुसार रक्त जांच",
        "चुनिंदा ऑर्बिटल गांठों के लिए बायोप्सी"
      ],
      footer: "सटीक निदान आवश्यक है क्योंकि समान लक्षण होने के बावजूद ऑर्बिटल रोगों के लिए अक्सर विभिन्न उपचार दृष्टिकोणों की आवश्यकता होती है।"
    },
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "उपचार पूरी तरह से अंतर्निहित निदान पर निर्भर करता है और इसमें शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "अवलोकन और नियमित निगरानी",
      "सूजन या थायराइड नेत्र रोग के लिए चिकित्सा उपचार (दवाएं)",
      "ऑर्बिटल संक्रमण के लिए एंटीबायोटिक्स",
      "ऑर्बिटल बायोप्सी",
      "ऑर्बिटल ट्यूमर सर्जरी",
      "ऑर्बिटल फ्रैक्चर मरम्मत",
      "ऑर्बिटल डीकंप्रेशन सर्जरी",
      "आवश्यकता पड़ने पर एंडोक्रिनोलॉजिस्ट, ईएनटी सर्जन, न्यूरोसर्जन और ऑन्कोलॉजिस्ट के साथ बहु-विषयक (multidisciplinary) देखभाल"
    ],
    treatmentOptionsFooter: "प्रत्येक उपचार योजना रोगी की स्थिति के आधार पर व्यक्तिगत रूप से तैयार की जाती है।",
    whyChooseTitle: "ओकुलोप्लास्टी सर्जन से क्यों परामर्श लें?",
    whyChooseText: "ऑर्बिटल विकार आंख और आसपास की संरचनाओं को प्रभावित करने वाली सबसे जटिल स्थितियों में से हैं। उनके प्रबंधन के लिए अक्सर पलकों, ऑर्बिट, आंसू जल निकासी प्रणाली और नेत्र शरीर रचना (ocular anatomy) के विशेष ज्ञान की आवश्यकता होती है। एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन के रूप में, डॉ. सौमिका सिंह व्यापक मूल्यांकन और उपचार प्रदान करती हैं, और जब भी बहु-विषयक देखभाल की आवश्यकता होती, अन्य चिकित्सा विशेषज्ञों के साथ मिलकर काम करती हैं।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    faqs: [
      {
        q: "क्या हर उभरी हुई आंख थायराइड की बीमारी का संकेत देती है?",
        a: "नहीं। हालांकि थायराइड नेत्र रोग एक सामान्य कारण है, फिर भी आंख का उभरना ऑर्बिटल ट्यूमर, सूजन, संवहनी (vascular) असामान्यताओं या संक्रमण के कारण भी हो सकता है। एक संपूर्ण मूल्यांकन आवश्यक है।"
      },
      {
        q: "क्या सभी ऑर्बिटल ट्यूमर कैंसरयुक्त होते हैं?",
        a: "नहीं। कई ऑर्बिटल ट्यूमर सौम्य (non-cancerous) होते हैं। हालांकि, निदान स्थापित करने और उचित उपचार निर्धारित करने के लिए इमेजिंग और, कुछ चुनिंदा मामलों में बायोप्सी आवश्यक है।"
      },
      {
        q: "क्या हर ऑर्बिटल फ्रैक्चर के लिए सर्जरी की आवश्यकता होगी?",
        a: "हमेशा नहीं। सर्जरी की आवश्यकता फ्रैक्चर के आकार, दोहरी दृष्टि, आंख की स्थिति और लक्षणों पर निर्भर करती है। कुछ फ्रैक्चरों को करीबी फॉलो-अप के साथ रूढ़िवादी तरीके (बिना सर्जरी) से प्रबंधित किया जा सकता है।"
      },
      {
        q: "क्या थायराइड नेत्र रोग का इलाज किया जा सकता है?",
        a: "हां। उपचार रोग के चरण और गंभीरता पर निर्भर करता है और इसमें दवाएं, लुब्रिकेंट्स, जीवनशैली में बदलाव और चुनिंदा रोगियों में सर्जरी शामिल हो सकती है।"
      }
    ],
    consultationSection: {
      title: "परामर्श",
      text: "यदि आप आंख का उभरना, आंख के आसपास लगातार सूजन, दोहरी दृष्टि, ऑर्बिटल दर्द महसूस करते हैं या ऑर्बिटल ट्यूमर या फ्रैक्चर के मूल्यांकन की सलाह दी गई है, तो व्यापक ऑर्बिटल मूल्यांकन और व्यक्तिगत उपचार योजना के लिए लखनऊ में डॉ. सौमिका सिंह से परामर्श करें।"
    }
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  const service = id ? serviceKeys[id] : null;

  if (!service) {
    return (
      <div id="service-not-found" className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <SEO title="Service Not Found" description="The requested service could not be found." />
        <h2 id="service-not-found-heading" className="text-3xl font-bold text-navy mb-4">Service Not Found</h2>
        <Link id="service-not-found-back" to="/" className="text-gold font-bold hover:text-navy transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const isEyelidSurgery = id === 'drooping-eyelids';
  const isWateringEyes = id === 'watering-eyes';
  const isOrbitalSurgery = id === 'artificial-eye';
  const isRichService = isEyelidSurgery || isWateringEyes || isOrbitalSurgery;
  const currentLang = (language === 'hi' ? 'hi' : 'en') as 'en' | 'hi';
  const richData = (isEyelidSurgery 
    ? richEyelidContent[currentLang] 
    : (isWateringEyes 
      ? richWateringContent[currentLang] 
      : (isOrbitalSurgery 
        ? richOrbitalContent[currentLang] 
        : null))) as any;

  return (
    <div id="service-detail-root" className="flex flex-col">
      <SEO 
        title={t(service.titleKey)} 
        description={t(service.descKey) || (isRichService && richData ? richData.introParas[0] : '')} 
      />
      <div id="service-detail-container" className="w-full max-w-[1200px] mx-auto p-4 md:p-8">
        <Link id="service-detail-back-link" to="/" className="inline-flex items-center text-navy/60 hover:text-gold transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('nav.home')}
        </Link>

        <motion.div
          id="service-detail-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card bg-white p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div id="service-detail-inner" className={`relative z-10 ${isRichService ? 'max-w-4xl' : 'max-w-3xl'}`}>
            <h1 id="service-detail-heading" className="text-3xl md:text-5xl font-bold text-navy mb-6">
              {t(service.titleKey)}
            </h1>
            {service.subKey && t(service.subKey) && (
              <p id="service-detail-subheading" className="text-lg md:text-2xl font-semibold text-gold mb-8 leading-snug">
                {t(service.subKey)}
              </p>
            )}
            {t(service.descKey) && (
              <p id="service-detail-description" className="text-lg md:text-xl text-navy-light mb-10 leading-relaxed">
                {t(service.descKey)}
              </p>
            )}

            {isRichService && richData ? (
              // Custom Rich structured content
              <div id="rich-service-content" className="space-y-12">
                {/* Introduction */}
                <section id="service-intro" className="space-y-4">
                  {richData.introParas.map((para, idx) => (
                    <p key={idx} className="text-navy/80 text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </section>

                {/* Common Disorders Grid */}
                <section id="service-disorders" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy border-b border-gold/20 pb-2">
                    {richData.commonDisordersTitle}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {richData.disorders.map((disorder, idx) => (
                      <div 
                        key={idx} 
                        className="p-5 border border-gold/10 bg-ivory/20 rounded-sm hover:border-gold/40 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-navy mb-2 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                          {disorder.title}
                        </h3>
                        <p className="text-sm text-navy/70 leading-relaxed">
                          {disorder.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* When to Consult Alert Box */}
                <section id="service-consultation-trigger" className="bg-navy/5 border border-navy/10 p-6 md:p-8 rounded-sm">
                  <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">
                    {richData.whenToConsultTitle}
                  </h2>
                  <p className="text-navy/80 mb-4 font-medium">
                    {richData.whenToConsultSubtitle}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {richData.whenToConsultBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-sm text-navy/80">
                        <CheckCircle2 className="w-5 h-5 text-gold mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Optional How Diagnosed Section */}
                {richData.howDiagnosedSection && (
                  <section id="service-diagnosed-details" className="space-y-4">
                    <h2 className="text-2xl font-bold text-navy border-b border-gold/20 pb-2">
                      {richData.howDiagnosedSection.title}
                    </h2>
                    {richData.howDiagnosedSection.subtitle && (
                      <p className="text-navy/80 font-medium">
                        {richData.howDiagnosedSection.subtitle}
                      </p>
                    )}
                    <ul className="space-y-3 pl-1">
                      {richData.howDiagnosedSection.bullets.map((bullet: string, idx: number) => (
                        <li key={idx} className="flex items-start text-navy/80">
                          <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {richData.howDiagnosedSection.footer && (
                      <p className="text-navy/60 text-sm italic mt-2">
                        {richData.howDiagnosedSection.footer}
                      </p>
                    )}
                  </section>
                )}

                {/* Treatment Options */}
                <section id="service-treatments" className="space-y-4">
                  <h2 className="text-2xl font-bold text-navy border-b border-gold/20 pb-2">
                    {richData.treatmentOptionsTitle}
                  </h2>
                  <p className="text-navy/80 font-medium">
                    {richData.treatmentOptionsSubtitle}
                  </p>
                  <ul className="space-y-3 pl-1">
                    {richData.treatmentOptionsBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center text-navy/80">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-navy/60 text-sm italic mt-2">
                    {richData.treatmentOptionsFooter}
                  </p>
                </section>

                {/* Optional DCR Section */}
                {richData.dcrSection && (
                  <section id="service-dcr-details" className="bg-navy/5 border border-navy/10 p-6 rounded-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                      {richData.dcrSection.title}
                    </h2>
                    <p className="text-navy/80 leading-relaxed whitespace-pre-line">
                      {richData.dcrSection.text}
                    </p>
                  </section>
                )}

                {/* Why Choose Oculoplasty */}
                <section id="service-why-choose" className="bg-ivory-dark/20 border border-gold/20 p-6 rounded-sm">
                  <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                    {richData.whyChooseTitle}
                  </h2>
                  <p className="text-navy/80 leading-relaxed">
                    {richData.whyChooseText}
                  </p>
                </section>

                {/* FAQs Accordion/Style */}
                <section id="service-faqs" className="space-y-6">
                  <h2 className="text-2xl font-bold text-navy border-b border-gold/20 pb-2">
                    {richData.faqsTitle}
                  </h2>
                  <div className="space-y-4">
                    {richData.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-navy/10 pb-4">
                        <h3 className="font-bold text-navy text-lg mb-2 flex items-start">
                          <span className="text-gold font-serif mr-2">Q.</span>
                          {faq.q}
                        </h3>
                        <p className="text-navy/70 pl-6 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Optional Consultation Section */}
                {richData.consultationSection && (
                  <section id="service-consultation-section" className="bg-gold/5 border border-gold/20 p-6 rounded-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                      {richData.consultationSection.title}
                    </h2>
                    <p className="text-navy/80 leading-relaxed whitespace-pre-line">
                      {richData.consultationSection.text}
                    </p>
                  </section>
                )}
              </div>
            ) : (
              // Regular generic features list
              <div id="generic-service-features" className="bg-ivory-dark/30 border border-gold/20 p-6 md:p-8 rounded-sm mb-10">
                <h3 className="text-xl font-bold text-navy mb-6">Treatment & Care Overview</h3>
                <ul className="space-y-4">
                  {service.features.map((featureKey, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-navy/80">{t(featureKey) || 'Detailed care and comprehensive evaluation.'}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div id="book-consultation-container" className="mt-12">
              <Link 
                id="service-detail-book-btn"
                to="/#contact" 
                className="inline-block px-8 py-4 bg-navy text-ivory text-center font-bold uppercase tracking-wider hover:bg-navy-light transition-colors"
              >
                {t('home.bookConsultation')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

