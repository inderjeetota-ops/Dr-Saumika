import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const serviceKeys: Record<string, { titleKey: string; descKey: string; subKey?: string; features: string[] }> = {
  'eyelid-disorders-eyelid-surgery': {
    titleKey: 'home.drooping',
    descKey: 'home.droopingDesc',
    subKey: 'home.droopingSub',
    features: ['pt.f1', 'pt.f2', 'pt.f3']
  },
  'watering-eyes-tear-drainage-disorders': {
    titleKey: 'home.watering',
    descKey: 'home.wateringDesc',
    subKey: 'home.wateringSub',
    features: ['we.f1', 'we.f2', 'we.f3']
  },
  'orbital-disorders-orbital-surgery': {
    titleKey: 'home.artificialTitle',
    descKey: 'home.artificialDesc',
    subKey: 'home.artificialSub',
    features: ['ae.f1', 'ae.f2', 'ae.f3']
  },
  'eye-tumours-ocular-oncology': {
    titleKey: 'home.thyroid',
    descKey: 'home.thyroidDesc',
    subKey: 'home.thyroidSub',
    features: ['te.f1', 'te.f2', 'te.f3']
  },
  'socket-reconstruction-artificial-eye-rehabilitation': {
    titleKey: 'home.tumours',
    descKey: 'home.tumoursDesc',
    subKey: 'home.tumoursSub',
    features: ['tu.f1', 'tu.f2', 'tu.f3']
  },
  'eye-trauma-eyelid-orbital-reconstruction': {
    titleKey: 'home.botox',
    descKey: 'home.botoxDesc',
    subKey: 'home.botoxSub',
    features: ['ba.f1', 'ba.f2', 'ba.f3']
  },
  'botox-eyelid-cosmetic-surgery-periocular-aesthetics': {
    titleKey: 'home.botoxCosmetic',
    descKey: 'home.botoxCosmeticDesc',
    subKey: 'home.botoxCosmeticSub',
    features: []
  },
  'why-choose-an-oculoplasty-ocular-oncology-specialist': {
    titleKey: 'home.whyChoose',
    descKey: 'home.whyChooseDesc',
    subKey: 'home.whyChooseSub',
    features: []
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

const richTumourContent = {
  en: {
    introTitle: "Introduction",
    introParas: [
      "An eye tumour is an abnormal growth that may involve the eyelids, conjunctiva (surface of the eye), eyeball or the tissues surrounding the eye (orbit). While many eye tumours are benign (non-cancerous), some can be malignant and require timely diagnosis and treatment to preserve vision, appearance and, in some cases, life.",
      "Dr. Saumika Singh is a fellowship-trained Oculoplasty and Ocular Oncology surgeon specialising in the diagnosis, management and long-term follow-up of patients with ocular and periocular tumours. Treatment is planned individually, often in collaboration with oncologists, pathologists and other medical specialists whenever required."
    ],
    commonDisordersTitle: "Symptoms & Conditions We Treat",
    disorders: [
      {
        title: "Eyelid Tumours",
        desc: "Persistent eyelid lumps, ulcers, recurrent swellings or pigmented lesions may represent benign growths or eyelid cancers. Early diagnosis allows timely treatment while preserving eyelid function and appearance."
      },
      {
        title: "Conjunctival Tumours",
        desc: "Growths on the white part of the eye may range from harmless lesions to pre-cancerous or cancerous conditions. Any persistent conjunctival growth should be evaluated by an ocular oncology specialist."
      },
      {
        title: "Intraocular Tumours",
        desc: "Tumours arising inside the eye may affect vision and require specialised examination and imaging. Some are benign, while others require urgent treatment and long-term follow-up."
      },
      {
        title: "Orbital Tumours",
        desc: "Tumours involving the eye socket may present with bulging of the eye, swelling, double vision or gradual visual loss. Management depends on the type, size and location of the tumour."
      },
      {
        title: "Pigmented Lesions Around the Eye",
        desc: "Dark or changing pigmented lesions around the eyelids or eye surface should be assessed, especially if they increase in size, change colour or bleed."
      },
      {
        title: "Secondary (Metastatic) Eye Tumours",
        desc: "Occasionally, cancers from other parts of the body may spread to the eye or orbit. Early recognition helps guide further investigations and treatment."
      }
    ],
    whenToConsultTitle: "When Should You Seek Specialist Evaluation?",
    whenToConsultSubtitle: "You should consult an ocular oncology specialist if you notice:",
    whenToConsultBullets: [
      "A persistent lump on the eyelid",
      "A non-healing ulcer or sore around the eye",
      "A new growth on the white part of the eye",
      "Progressive bulging of one eye",
      "Unexplained loss of vision associated with an eye mass",
      "Rapidly increasing pigmentation around the eye",
      "Recurrent eyelid lesions despite previous treatment",
      "A diagnosis of an eye tumour requiring specialist opinion"
    ],
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Treatment depends on the type, location and extent of the tumour and may include:",
    treatmentOptionsBullets: [
      "Observation with regular monitoring",
      "Medical treatment for selected conditions",
      "Surgical biopsy",
      "Complete tumour excision",
      "Eyelid reconstruction following tumour removal",
      "Multidisciplinary cancer management",
      "Long-term surveillance for recurrence"
    ],
    treatmentOptionsFooter: "The treatment plan is individualised for every patient.",
    whyChooseTitle: "Why Consult an Ocular Oncology Specialist?",
    whyChooseText: "Eye tumours are uncommon and often require specialised evaluation. Early diagnosis not only improves treatment outcomes but can also help preserve vision and minimise the extent of surgery. As a fellowship-trained Oculoplasty and Ocular Oncology surgeon, Dr. Saumika Singh provides comprehensive assessment and works closely with other specialists whenever multidisciplinary cancer care is required.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Does every eyelid lump indicate cancer?",
        a: "No. Most eyelid lumps are benign, but persistent, recurrent or unusual lesions should always be examined to exclude eyelid cancer."
      },
      {
        q: "Can eye tumours be treated successfully?",
        a: "Many eye tumours can be treated successfully, particularly when diagnosed early. The treatment depends on the type and stage of the tumour."
      },
      {
        q: "Will every eye tumour require removal of the eye?",
        a: "No. Most eye tumours do not require removal of the eye. Many can be managed with observation, local surgery or other specialised treatments depending on the diagnosis."
      },
      {
        q: "Can an eye tumour come back after treatment?",
        a: "Some tumours require long-term follow-up because recurrence is possible. Regular reviews help detect any recurrence at an early stage."
      }
    ],
    consultationSection: {
      title: "Consultation",
      text: "If you have been diagnosed with an eye tumour, have a persistent eyelid or conjunctival growth, or would like a specialist opinion regarding an ocular or orbital tumour, consult Dr. Saumika Singh for a comprehensive evaluation and personalised treatment plan."
    }
  },
  hi: {
    introTitle: "परिचय",
    introParas: [
      "एक आँख का ट्यूमर एक असामान्य वृद्धि है जिसमें पलकें, कंजांक्टिवा (आँख की सतह), आँख की पुतली या आँख के आसपास के ऊतक (ऑर्बिट) शामिल हो सकते हैं। हालांकि कई आँख के ट्यूमर सौम्य (benign/गैर-कैंसरयुक्त) होते हैं, लेकिन कुछ घातक (malignant) हो सकते हैं और दृष्टि, रूप-रंग और कुछ मामलों में जीवन को बचाने के लिए समय पर निदान और उपचार की आवश्यकता होती है।",
      "डॉ. सौमिका सिंह एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन हैं, जो ओकुलर और पेरिओकुलर ट्यूमर वाले रोगियों के निदान, प्रबंधन और दीर्घकालिक अनुवर्ती देखभाल (follow-up) में विशेषज्ञता रखती हैं। उपचार की योजना प्रत्येक रोगी के अनुसार व्यक्तिगत रूप से बनाई जाती है, और आवश्यकता पड़ने पर ऑन्कोलॉजिस्ट, पैथोलॉजिस्ट और अन्य चिकित्सा विशेषज्ञों के साथ मिलकर काम किया जाता है।"
    ],
    commonDisordersTitle: "लक्षण और स्थितियां जिनका हम इलाज करते हैं",
    disorders: [
      {
        title: "पलक के ट्यूमर (Eyelid Tumours)",
        desc: "पलक पर लगातार गांठ, अल्सर, बार-बार होने वाली सूजन या रंगीन धब्बे सौम्य वृद्धि या पलक के कैंसर का संकेत हो सकते हैं। प्रारंभिक निदान पलक के कार्य और रूप-रंग को बनाए रखते हुए समय पर उपचार की अनुमति देता है।"
      },
      {
        title: "कंजांक्टिवल ट्यूमर (Conjunctival Tumours)",
        desc: "आँख के सफेद हिस्से पर होने वाली वृद्धि हानिरहित घावों से लेकर कैंसर-पूर्व या कैंसरयुक्त स्थितियों तक हो सकती है। किसी भी लगातार कंजांक्टिवल वृद्धि का मूल्यांकन ओकुलर ऑन्कोलॉजी विशेषज्ञ द्वारा किया जाना चाहिए।"
      },
      {
        title: "इंट्राओकुलर ट्यूमर (Intraocular Tumours)",
        desc: "आँख के अंदर होने वाले ट्यूमर दृष्टि को प्रभावित कर सकते हैं और इसके लिए विशिष्ट जांच और इमेजिंग की आवश्यकता होती है। कुछ सौम्य होते हैं, जबकि अन्य को तत्काल उपचार और दीर्घकालिक अनुवर्ती कार्रवाई की आवश्यकता होती है।"
      },
      {
        title: "ऑर्बिटल ट्यूमर (Orbital Tumours)",
        desc: "नेत्र कोटर (आई सॉकेट) से जुड़े ट्यूमर के कारण आँख का उभरना, सूजन, दोहरी दृष्टि या धीरे-धीरे दृष्टि हानि हो सकती है। इसका प्रबंधन ट्यूमर के प्रकार, आकार और स्थान पर निर्भर करता है।"
      },
      {
        title: "आँख के आसपास रंगीन धब्बे (Pigmented Lesions)",
        desc: "पलकों या आँख की सतह के आसपास के काले या बदलते रंग के धब्बों का मूल्यांकन किया जाना चाहिए, विशेष रूप से यदि वे आकार में बढ़ रहे हों, रंग बदल रहे हों या उनसे खून बह रहा हो।"
      },
      {
        title: "द्वितीयक (मेटास्टैटिक) आँख के ट्यूमर",
        desc: "कभी-कभी, शरीर के अन्य हिस्सों से कैंसर आँख या ऑर्बिट में फैल सकता है। शीघ्र पहचान आगे की जांच और उपचार का मार्गदर्शन करने में मदद करती है।"
      }
    ],
    whenToConsultTitle: "आपको ओकुलर ऑन्कोलॉजी विशेषज्ञ से कब परामर्श लेना चाहिए?",
    whenToConsultSubtitle: "विशेषज्ञ मूल्यांकन लें यदि आप अनुभव करते हैं:",
    whenToConsultBullets: [
      "पलक पर लगातार बनी रहने वाली गांठ",
      "आँख के आसपास न भरने वाला अल्सर या घाव",
      "आँख के सफेद हिस्से पर एक नई वृद्धि",
      "एक आँख का लगातार बाहर उभरना",
      "आँख के द्रव्यमान (mass) से जुड़ी अस्पष्टीकृत दृष्टि हानि",
      "आँख के आसपास तेजी से बढ़ता कालापन (pigmentation)",
      "पिछले उपचार के बावजूद पलक के घावों का दोबारा होना",
      "आँख के ट्यूमर का निदान जिसके लिए विशेषज्ञ की राय की आवश्यकता है"
    ],
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "उपचार पूरी तरह से ट्यूमर के प्रकार, स्थान और सीमा पर निर्भर करता है और इसमें शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "नियमित निगरानी के साथ अवलोकन",
      "चुनिंदा स्थितियों के लिए चिकित्सा उपचार (दवाएं)",
      "सर्जिकल बायोप्सी",
      "ट्यूमर को पूरी तरह से निकालना (Excision)",
      "ट्यूमर हटाने के बाद पलक का पुनर्निर्माण (Reconstruction)",
      "बहु-विषयक कैंसर प्रबंधन (Multidisciplinary care)",
      "पुनरावृत्ति (recurrence) के लिए दीर्घकालिक निगरानी"
    ],
    treatmentOptionsFooter: "प्रत्येक उपचार योजना रोगी की स्थिति के आधार पर व्यक्तिगत रूप से तैयार की जाती है।",
    whyChooseTitle: "ओकुलर ऑन्कोलॉजी विशेषज्ञ से क्यों परामर्श लें?",
    whyChooseText: "आँख के ट्यूमर असामान्य होते हैं और अक्सर विशिष्ट मूल्यांकन की आवश्यकता होती है। प्रारंभिक निदान न केवल उपचार के परिणामों में सुधार करता है बल्कि दृष्टि को संरक्षित करने और सर्जरी की सीमा को कम करने में भी मदद कर सकता है। एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन के रूप में, डॉ. सौमिका सिंह व्यापक मूल्यांकन प्रदान करती हैं और बहु-विषयक कैंसर देखभाल की आवश्यकता होने पर अन्य विशेषज्ञों के साथ मिलकर काम करती हैं।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    faqs: [
      {
        q: "क्या पलक की हर गांठ कैंसर का संकेत देती है?",
        a: "नहीं। पलक की अधिकांश गांठें सौम्य होती हैं, लेकिन पलक के कैंसर की संभावना को खारिज करने के लिए लगातार बनी रहने वाली, बार-बार होने वाली या असामान्य गांठों की हमेशा जांच की जानी चाहिए।"
      },
      {
        q: "क्या आँख के ट्यूमर का सफलतापूर्वक इलाज किया जा सकता है?",
        a: "हाँ, कई आँख के ट्यूमर का सफलतापूर्वक इलाज किया जा सकता है, विशेष रूप से तब जब उनका निदान प्रारंभिक चरण में हो जाता है। उपचार ट्यूमर के प्रकार और चरण पर निर्भर करता है।"
      },
      {
        q: "क्या हर आँख के ट्यूमर के लिए आँख निकालने की आवश्यकता होगी?",
        a: "नहीं। अधिकांश आँख के ट्यूमर में आँख निकालने की आवश्यकता नहीं होती है। निदान के आधार पर कई मामलों को अवलोकन, स्थानीय सर्जरी या अन्य विशिष्ट उपचारों के साथ प्रबंधित किया जा सकता है।"
      },
      {
        q: "क्या आँख का ट्यूमर इलाज के बाद वापस आ सकता है?",
        a: "कुछ ट्यूमर को दीर्घकालिक अनुवर्ती देखभाल की आवश्यकता होती है क्योंकि पुनरावृत्ति संभव है। नियमित समीक्षा शुरुआती चरण में किसी भी पुनरावृत्ति का पता लगाने में मदद करती है।"
      }
    ],
    consultationSection: {
      title: "परामर्श",
      text: "यदि आपको आँख के ट्यूमर का निदान हुआ है, पलक या कंजांक्टिवा पर लगातार वृद्धि है, या आँख या ऑर्बिटल ट्यूमर के संबंध में विशेषज्ञ की राय चाहते हैं, तो व्यापक मूल्यांकन और व्यक्तिगत उपचार योजना के लिए डॉ. सौमिका सिंह से परामर्श करें।"
    }
  }
};

const richSocketContent = {
  en: {
    introTitle: "Introduction",
    introParas: [
      "Losing an eye due to injury, infection, cancer or a painful blind eye can be emotionally and physically challenging. Modern oculoplastic surgery focuses not only on treating the underlying condition but also on restoring facial appearance, eyelid function and confidence through socket reconstruction and artificial eye rehabilitation.",
      "Dr. Saumika Singh provides specialised care for patients requiring eye removal surgery, socket reconstruction and long-term rehabilitation with customised ocular prostheses, with the aim of achieving the best possible functional and cosmetic outcome."
    ],
    commonDisordersTitle: "Symptoms & Conditions We Treat",
    disorders: [
      {
        title: "Painful Blind Eye",
        desc: "A severely damaged or blind eye that causes persistent pain may require surgical removal when medical treatment is no longer effective. The goal is to relieve pain while preparing the socket for future rehabilitation."
      },
      {
        title: "Eye Removal Surgery (Enucleation & Evisceration)",
        desc: "In selected situations such as severe trauma, painful blind eye or certain eye tumours, removal of the eye may be recommended. Every patient is counselled thoroughly regarding the procedure, implant options and the rehabilitation process."
      },
      {
        title: "Contracted Socket",
        desc: "Scarring of the eye socket may prevent comfortable fitting of an artificial eye and affect facial appearance. Socket reconstruction helps restore adequate space for prosthesis fitting."
      },
      {
        title: "Artificial Eye Rehabilitation",
        desc: "A customised artificial eye (ocular prosthesis) is designed to closely match the natural eye, improving facial symmetry and confidence. Proper socket preparation is essential for achieving the best cosmetic result."
      },
      {
        title: "Exposure or Extrusion of Orbital Implant",
        desc: "Occasionally, the implant placed after eye removal surgery may become exposed or displaced. Early specialist evaluation helps determine whether medical treatment or reconstructive surgery is required."
      },
      {
        title: "Congenital Small or Absent Eye",
        desc: "Children born with a small eye (microphthalmos) or absent eye (anophthalmos) require specialised long-term management to promote normal socket growth and facial development."
      }
    ],
    whenToConsultTitle: "When Should You Consult an Oculoplasty Surgeon?",
    whenToConsultSubtitle: "Seek specialist consultation if you experience:",
    whenToConsultBullets: [
      "Persistent pain in a blind eye",
      "Difficulty wearing an artificial eye",
      "Poor cosmetic appearance after eye removal surgery",
      "Recurrent discharge from the eye socket",
      "Shrinking or scarring of the socket",
      "Exposure of an orbital implant",
      "A child born with an underdeveloped or absent eye"
    ],
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Management may include:",
    treatmentOptionsBullets: [
      "Medical treatment for socket inflammation or infection",
      "Enucleation or evisceration when indicated",
      "Primary orbital implant placement",
      "Socket reconstruction surgery",
      "Mucous membrane grafting",
      "Dermis-fat grafting",
      "Management of implant exposure",
      "Coordination with an ocularist for customised artificial eye fitting"
    ],
    treatmentOptionsFooter: "Every treatment plan is individualised to optimise both comfort and appearance.",
    whyChooseTitle: "Why Consult an Oculoplasty Surgeon?",
    whyChooseText: "Successful socket rehabilitation involves much more than placing an artificial eye. It requires careful planning of eye removal surgery, preservation of socket anatomy, reconstruction when necessary and close coordination with an ocularist. As a fellowship-trained Oculoplasty and Ocular Oncology surgeon, Dr. Saumika Singh focuses on achieving a comfortable socket, natural appearance and long-term rehabilitation for every patient.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Will an artificial eye restore vision?",
        a: "No. An artificial eye does not restore sight, but it provides excellent cosmetic rehabilitation and helps maintain facial symmetry."
      },
      {
        q: "Will people be able to tell that I have an artificial eye?",
        a: "Modern customised prostheses closely resemble the natural eye. Most people notice little or no difference during routine interactions."
      },
      {
        q: "How long does recovery take after eye removal surgery?",
        a: "Healing usually takes several weeks. Once the socket has healed adequately, a customised artificial eye can be fitted."
      },
      {
        q: "Will my artificial eye move?",
        a: "Yes. A well-fitted prosthesis generally moves along with the other eye to a considerable extent, although the movement is usually less than that of a natural eye."
      },
      {
        q: "Can socket problems be corrected years after surgery?",
        a: "Yes. Many socket-related problems, including contracted sockets, implant exposure and poorly fitting prostheses, can often be improved with reconstructive surgery after appropriate evaluation."
      }
    ],
    consultationSection: {
      title: "Consultation",
      text: "If you have been advised eye removal surgery, are experiencing problems with an artificial eye or require specialised socket reconstruction, consult Dr. Saumika Singh for a comprehensive evaluation and personalised rehabilitation plan."
    }
  },
  hi: {
    introTitle: "परिचय",
    introParas: [
      "चोट, संक्रमण, कैंसर या दर्दनाक दृष्टिहीन आँख के कारण आँख खोना भावनात्मक और शारीरिक रूप से चुनौतीपूर्ण हो सकता है। आधुनिक ओकुलोप्लास्टिक सर्जरी न केवल अंतर्निहित स्थिति के इलाज पर ध्यान केंद्रित करती है, बल्कि सॉकेट पुनर्निर्माण और कृत्रिम आँख पुनर्वास के माध्यम से चेहरे के रूप-रंग, पलकों के कार्य और आत्मविश्वास को बहाल करने पर भी ध्यान केंद्रित करती है।",
      "डॉ. सौमिका सिंह सर्वोत्तम संभव कार्यात्मक और कॉस्मेटिक परिणाम प्राप्त करने के उद्देश्य से आँख निकालने की सर्जरी, सॉकेट पुनर्निर्माण और अनुकूलित ओकुलर प्रोस्थेसिस (कृत्रिम आँख) के साथ दीर्घकालिक पुनर्वास की आवश्यकता वाले रोगियों के लिए विशिष्ट देखभाल प्रदान करती हैं।"
    ],
    commonDisordersTitle: "लक्षण और स्थितियां जिनका हम इलाज करते हैं",
    disorders: [
      {
        title: "दर्दनाक दृष्टिहीन आँख (Painful Blind Eye)",
        desc: "एक गंभीर रूप से क्षतिग्रस्त या दृष्टिहीन आँख जो लगातार दर्द का कारण बनती है, उसे चिकित्सा उपचार प्रभावी न होने पर सर्जिकल हटाने की आवश्यकता हो सकती है। इसका उद्देश्य भविष्य के पुनर्वास के लिए सॉकेट तैयार करते समय दर्द से राहत देना है।"
      },
      {
        title: "आँख निकालने की सर्जरी (Enucleation और Evisceration)",
        desc: "गंभीर आघात, दर्दनाक दृष्टिहीन आँख या कुछ आँखों के ट्यूमर जैसी चुनिंदा स्थितियों में आँख निकालने की सिफारिश की जा सकती है। प्रक्रिया, इम्प्लांट विकल्पों और पुनर्वास प्रक्रिया के संबंध में प्रत्येक रोगी को पूरी तरह से परामर्श दिया जाता है।"
      },
      {
        title: "सिकुड़ा हुआ सॉकेट (Contracted Socket)",
        desc: "आँख के सॉकेट में घाव होने से कृत्रिम आँख पहनने में असुविधा हो सकती है और चेहरे का रूप प्रभावित हो सकता है। सॉकेट पुनर्निर्माण कृत्रिम आँख (प्रोस्थेसिस) लगाने के लिए पर्याप्त जगह बहाल करने में मदद करता है।"
      },
      {
        title: "कृत्रिम आँख पुनर्वास",
        desc: "एक अनुकूलित कृत्रिम आँख (ओकुलर प्रोस्थेसिस) प्राकृतिक आँख से काफी हद तक मेल खाने के लिए डिज़ाइन की जाती है, जिससे चेहरे की समरूपता और आत्मविश्वास में सुधार होता है। सर्वोत्तम कॉस्मेटिक परिणाम प्राप्त करने के लिए उचित सॉकेट की तैयारी आवश्यक है।"
      },
      {
        title: "ऑर्बिटल इम्प्लांट का निकलना या दिखना",
        desc: "कभी-कभी, आँख निकालने की सर्जरी के बाद रखा गया इम्प्लांट बाहर दिख सकता है या विस्थापित हो सकता है। प्रारंभिक विशेषज्ञ मूल्यांकन यह निर्धारित करने में मदद करता है कि चिकित्सा उपचार की आवश्यकता है या पुनर्निर्माण सर्जरी की।"
      },
      {
        title: "जन्मजात छोटी या अनुपस्थित आँख",
        desc: "छोटे आँख (माइक्रोफ्थैल्मोस) या अनुपस्थित आँख (एनोफ्थैल्मोस) के साथ पैदा हुए बच्चों को सामान्य सॉकेट विकास और चेहरे के विकास को बढ़ावा देने के लिए विशिष्ट दीर्घकालिक प्रबंधन की आवश्यकता होती है।"
      }
    ],
    whenToConsultTitle: "आपको ओकुलोप्लास्टी सर्जन से कब परामर्श लेना चाहिए?",
    whenToConsultSubtitle: "यदि आप अनुभव करते हैं तो विशेषज्ञ परामर्श लें:",
    whenToConsultBullets: [
      "एक दृष्टिहीन आँख में लगातार दर्द होना",
      "कृत्रिम आँख पहनने में कठिनाई",
      "आँख निकालने की सर्जरी के बाद खराब कॉस्मेटिक उपस्थिति",
      "आँख के सॉकेट से बार-बार पानी या मवाद आना",
      "सॉकेट का सिकुड़ना या उसमें घाव होना",
      "ऑर्बिटल इम्प्लांट का बाहर दिखना",
      "अविकसित या अनुपस्थित आँख के साथ पैदा हुआ बच्चा"
    ],
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "प्रबंधन में शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "सॉकेट की सूजन या संक्रमण के लिए चिकित्सा उपचार",
      "आवश्यकतानुसार इन्यूक्लिएशन (Enucleation) या एविसरेशन (Evisceration)",
      "प्राथमिक ऑर्बिटल इम्प्लांट प्लेसमेंट",
      "सॉकेट पुनर्निर्माण सर्जरी",
      "म्यूकोसल ग्राफ्टिंग (Mucous membrane grafting)",
      "डर्मिस-फैट ग्राफ्टिंग (Dermis-fat grafting)",
      "इम्प्लांट एक्सपोज़र का प्रबंधन",
      "अनुकूलित कृत्रिम आँख फिटिंग के लिए एक ओकुलरिस्ट के साथ समन्वय"
    ],
    treatmentOptionsFooter: "आराम और रूप-रंग दोनों को अनुकूलित करने के लिए प्रत्येक उपचार योजना व्यक्तिगत बनाई जाती है।",
    whyChooseTitle: "ओकुलोप्लास्टी सर्जन से क्यों परामर्श लें?",
    whyChooseText: "सफल सॉकेट पुनर्वास में केवल कृत्रिम आँख लगाने से कहीं अधिक शामिल है। इसके लिए आँख निकालने की सर्जरी की सावधानीपूर्वक योजना बनाने, सॉकेट की शारीरिक रचना के संरक्षण, आवश्यकता पड़ने पर पुनर्निर्माण और ओकुलरिस्ट के साथ निकट समन्वय की आवश्यकता होती है। फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन के रूप में, डॉ. सौमिका सिंह प्रत्येक रोगी के लिए एक आरामदायक सॉकेट, प्राकृतिक रूप और दीर्घकालिक पुनर्वास प्राप्त करने पर ध्यान केंद्रित करती हैं।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    faqs: [
      {
        q: "क्या कृत्रिम आँख से रोशनी वापस आएगी?",
        a: "नहीं। कृत्रिम आँख रोशनी को बहाल नहीं करती है, लेकिन यह उत्कृष्ट कॉस्मेटिक पुनर्वास प्रदान करती है और चेहरे की समरूपता बनाए रखने में मदद करती है।"
      },
      {
        q: "क्या लोगों को पता चल जाएगा कि मेरे पास कृत्रिम आँख है?",
        a: "आधुनिक अनुकूलित प्रोस्थेसिस प्राकृतिक आँख से काफी मेल खाते हैं। अधिकांश लोग नियमित बातचीत के दौरान कोई अंतर नहीं नोटिस कर पाते।"
      },
      {
        q: "आँख निकालने की सर्जरी के बाद ठीक होने में कितना समय लगता है?",
        a: "ठीक होने में आमतौर पर कई सप्ताह लगते हैं। एक बार जब सॉकेट पर्याप्त रूप से ठीक हो जाता है, तो एक अनुकूलित कृत्रिम आँख लगाई जा सकती है।"
      },
      {
        q: "क्या मेरी कृत्रिम आँख हिलेगी?",
        a: "हाँ। अच्छी तरह से फिट की गई कृत्रिम आँख आमतौर पर दूसरी आँख के साथ काफी हद तक हिलती है, हालांकि इसकी गति प्राकृतिक आँख की तुलना में थोड़ी कम होती है।"
      },
      {
        q: "क्या सर्जरी के वर्षों बाद भी सॉकेट की समस्याओं को ठीक किया जा सकता है?",
        a: "हाँ। कई सॉकेट-संबंधित समस्याओं, जिनमें सिकुड़े हुए सॉकेट, इम्प्लांट का दिखना और खराब फिटिंग वाली कृत्रिम आँख शामिल हैं, को उचित मूल्यांकन के बाद पुनर्निर्माण सर्जरी के साथ ठीक किया जा सकता है।"
      }
    ],
    consultationSection: {
      title: "परामर्श",
      text: "यदि आपको आँख निकालने की सर्जरी की सलाह दी गई है, कृत्रिम आँख के साथ समस्याओं का सामना करना पड़ रहा है या विशिष्ट सॉकेट पुनर्निर्माण की आवश्यकता है, तो व्यापक मूल्यांकन और व्यक्तिगत पुनर्वास योजना के लिए डॉ. सौमिका सिंह से परामर्श लें।"
    }
  }
};

const richTraumaContent = {
  en: {
    introTitle: "Introduction",
    introParas: [
      "Injuries around the eye can affect the eyelids, tear drainage system (lacrimal passages), eye socket (orbit) and surrounding facial tissues. Prompt evaluation and timely reconstruction are essential to restore function, protect the eye and achieve the best possible cosmetic outcome.",
      "Dr. Saumika Singh specialises in the assessment and surgical management of periocular trauma, including eyelid injuries, tear drainage injuries and orbital fractures, using techniques aimed at preserving both vision and appearance."
    ],
    commonDisordersTitle: "Symptoms & Conditions We Treat",
    disorders: [
      {
        title: "Eyelid Lacerations",
        desc: "Cuts involving the eyelids require careful repair to restore normal eyelid position, blinking and eye protection. Complex eyelid injuries should be repaired by an oculoplasty surgeon to achieve the best functional and cosmetic results."
      },
      {
        title: "Canalicular (Tear Duct) Injuries",
        desc: "Injuries near the inner corner of the eyelids may damage the tear drainage channels, leading to persistent watering if left untreated. Early surgical repair with silicone stenting offers the best chance of restoring normal tear drainage."
      },
      {
        title: "Orbital (Eye Socket) Fractures",
        desc: "Blunt facial injuries may cause fractures of the eye socket, resulting in double vision, sunken appearance of the eye, restricted eye movements or numbness around the cheek. Some fractures require specialised reconstructive surgery."
      },
      {
        title: "Eyelid Tissue Loss",
        desc: "Animal bites, road traffic accidents and severe facial trauma may result in loss of eyelid tissue. Reconstructive eyelid surgery helps restore eyelid function while maintaining a natural appearance."
      },
      {
        title: "Foreign Bodies Around the Eye",
        desc: "Foreign objects lodged in the eyelids or surrounding tissues require careful evaluation and removal to prevent infection and long-term complications."
      },
      {
        title: "Post-Traumatic Eyelid Deformities",
        desc: "Poorly healed injuries may lead to eyelid malposition, scarring or cosmetic asymmetry. Secondary reconstructive surgery may improve both appearance and eyelid function."
      }
    ],
    whenToConsultTitle: "Why Consult an Oculoplasty Surgeon?",
    whenToConsultSubtitle: "The eyelids and surrounding structures are delicate and essential for protecting the eye and maintaining vision. Even seemingly small injuries can affect blinking, tear drainage and long-term appearance if not repaired appropriately.",
    whenToConsultBullets: [
      "A persistent lump on the eyelid or persistent swelling",
      "A non-healing ulcer or sore around the eye after injury",
      "Watering or blockages in the tear duct channels",
      "Double vision or pain with eye movements",
      "Asymmetry in eyelid shape or position",
      "Exposure or noticeable scarring from previous injuries"
    ],
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Management may include:",
    treatmentOptionsBullets: [
      "Emergency eyelid repair",
      "Canalicular repair with silicone tube intubation",
      "Eyelid reconstruction",
      "Orbital fracture repair",
      "Scar revision surgery",
      "Secondary eyelid reconstruction following previous trauma",
      "Multidisciplinary care with maxillofacial surgeons, neurosurgeons and other specialists when required"
    ],
    treatmentOptionsFooter: "The treatment plan is individualised for every patient.",
    whyChooseTitle: "Why Consult an Oculoplasty Surgeon?",
    whyChooseText: "The eyelids and surrounding structures are delicate and essential for protecting the eye and maintaining vision. Even seemingly small injuries can affect blinking, tear drainage and long-term appearance if not repaired appropriately. A fellowship-trained oculoplasty surgeon is specifically trained in reconstructive surgery of the eyelids, lacrimal system and orbit, helping restore both function and appearance after injury.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Does every eyelid cut require specialist repair?",
        a: "Minor superficial cuts may be managed conservatively, but injuries involving the eyelid margin, tear drainage system or deeper tissues should be evaluated by an oculoplasty surgeon."
      },
      {
        q: "Can tear duct injuries be repaired successfully?",
        a: "Yes. Early repair using specialised techniques and silicone stenting offers an excellent chance of restoring normal tear drainage."
      },
      {
        q: "Will every orbital fracture require surgery?",
        a: "No. Many fractures can be managed without surgery. The decision depends on double vision, eye position, fracture size and clinical findings."
      },
      {
        q: "Will reconstructive surgery leave visible scars?",
        a: "Every effort is made to place incisions along natural skin creases and restore the eyelid as anatomically as possible. While scars are inevitable after trauma, they usually become less noticeable with healing."
      }
    ],
    consultationSection: {
      title: "Consultation",
      text: "If you or a family member has sustained an injury involving the eyelids, tear drainage system or eye socket, early specialist assessment can significantly improve long-term functional and cosmetic outcomes. Consult Dr. Saumika Singh for comprehensive evaluation and personalised reconstructive care."
    }
  },
  hi: {
    introTitle: "परिचय",
    introParas: [
      "आँख के आसपास की चोटें पलकों, आंसू जल निकासी प्रणाली (अश्रु मार्ग/lacrimal passages), आँख के सॉकेट (ऑर्बिट) और आसपास के चेहरे के ऊतकों को प्रभावित कर सकती हैं। कार्यप्रणाली को बहाल करने, आँख की रक्षा करने और सर्वोत्तम संभव कॉस्मेटिक परिणाम प्राप्त करने के लिए त्वरित मूल्यांकन और समय पर पुनर्निर्माण आवश्यक है।",
      "डॉ. सौमिका सिंह पेरिओकुलर आघात (periocular trauma) के मूल्यांकन और सर्जिकल प्रबंधन में विशेषज्ञता रखती हैं, जिसमें पलक की चोटें, आंसू जल निकासी की चोटें और ऑर्बिटल फ्रैक्चर शामिल हैं, जिसमें दृष्टि और रूप-रंग दोनों को बनाए रखने के उद्देश्य से तकनीकों का उपयोग किया जाता है।"
    ],
    commonDisordersTitle: "लक्षण और स्थितियां जिनका हम इलाज करते हैं",
    disorders: [
      {
        title: "पलक के घाव (Eyelid Lacerations)",
        desc: "पलकों को शामिल करने वाले कटों को सामान्य पलक की स्थिति, पलक झपकने और आँख की सुरक्षा को बहाल करने के लिए सावधानीपूर्वक मरम्मत की आवश्यकता होती है। सर्वोत्तम कार्यात्मक और कॉस्मेटिक परिणाम प्राप्त करने के लिए एक ओकुलोप्लास्टी सर्जन द्वारा जटिल पलक की चोटों की मरम्मत की जानी चाहिए।"
      },
      {
        title: "आंसू वाहिनी की चोटें (Canalicular / Tear Duct Injuries)",
        desc: "पलकों के अंदरूनी कोने के पास की चोटें आंसू जल निकासी चैनलों को नुकसान पहुंचा सकती हैं, जिससे इलाज न किए जाने पर लगातार पानी आने लगता है। सिलिकॉन स्टेंटिंग के साथ प्रारंभिक सर्जिकल मरम्मत सामान्य आंसू जल निकासी को बहाल करने का सबसे अच्छा मौका देती है।"
      },
      {
        title: "ऑर्बिटल फ्रैक्चर (Orbital / Eye Socket Fractures)",
        desc: "चेहरे की चोटों के कारण आँख के सॉकेट में फ्रैक्चर हो सकता है, जिसके परिणामस्वरूप दोहरी दृष्टि, आँख का धंसा हुआ दिखना, आँख की सीमित गति या गाल के आसपास सुन्नता हो सकती है। कुछ फ्रैक्चरों के लिए विशिष्ट पुनर्निर्माण सर्जरी की आवश्यकता होती है।"
      },
      {
        title: "पलक के ऊतकों की क्षति (Eyelid Tissue Loss)",
        desc: "पशु के काटने, सड़क दुर्घटनाओं और चेहरे के गंभीर आघात के परिणामस्वरूप पलक के ऊतकों का नुकसान हो सकता है। पुनर्निर्माण पलक सर्जरी एक प्राकृतिक रूप बनाए रखने के साथ-साथ पलक के कार्य को बहाल करने में मदद करती है।"
      },
      {
        title: "आँख के आसपास बाहरी वस्तुएं (Foreign Bodies)",
        desc: "पलकों या आसपास के ऊतकों में फंसी बाहरी वस्तुओं को संक्रमण और दीर्घकालिक जटिलताओं को रोकने के लिए सावधानीपूर्वक मूल्यांकन और निकालने की आवश्यकता होती है।"
      },
      {
        title: "चोट के बाद पलक की विकृतियां (Post-Traumatic Eyelid Deformities)",
        desc: "खराब तरीके से ठीक हुई चोटों के कारण पलक की गलत स्थिति, निशान या कॉस्मेटिक विषमता हो सकती है। द्वितीयक पुनर्निर्माण सर्जरी रूप-रंग और पलक के कार्य दोनों में सुधार कर सकती है।"
      }
    ],
    whenToConsultTitle: "ओकुलोप्लास्टी सर्जन से क्यों परामर्श लें?",
    whenToConsultSubtitle: "पलकें और आसपास की संरचनाएं नाजुक होती हैं और आँख की सुरक्षा करने और दृष्टि बनाए रखने के लिए आवश्यक होती हैं। यदि उचित तरीके से मरम्मत न की जाए तो प्रतीत होने वाली छोटी चोटें भी पलक झपकने, आंसू की निकासी और दीर्घकालिक रूप-रंग को प्रभावित कर सकती हैं।",
    whenToConsultBullets: [
      "पलक पर लगातार बनी रहने वाली गांठ या लगातार सूजन",
      "चोट के बाद आँख के आसपास न भरने वाला अल्सर या घाव",
      "आंसू वाहिनी चैनलों में पानी या रुकावट",
      "दोहरी दृष्टि या आँख हिलाने के साथ दर्द",
      "पलक के आकार या स्थिति में विषमता",
      "पिछले आघात से निशान या विकृति"
    ],
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "प्रबंधन में शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "आपातकालीन पलक की मरम्मत",
      "सिलिकॉन ट्यूब इंटुबैषेण के साथ कैनालिकुलर मरम्मत",
      "पलक पुनर्निर्माण",
      "ऑर्बिटल फ्रैक्चर की मरम्मत",
      "निशान संशोधन सर्जरी",
      "पिछले आघात के बाद द्वितीयक पलक पुनर्निर्माण",
      "मैक्सिलोफेशियल सर्जनों, न्यूरोसर्जनों और अन्य विशेषज्ञों के साथ बहु-विषयक देखभाल जब आवश्यक हो"
    ],
    treatmentOptionsFooter: "प्रत्येक उपचार योजना रोगी की स्थिति के आधार पर व्यक्तिगत रूप से तैयार की जाती है।",
    whyChooseTitle: "ओकुलोप्लास्टी सर्जन से क्यों परामर्श लें?",
    whyChooseText: "पलकें और आसपास की संरचनाएं नाजुक होती हैं और आँख की सुरक्षा करने और दृष्टि बनाए रखने के लिए आवश्यक होती हैं। यदि उचित तरीके से मरम्मत न की जाए तो प्रतीत होने वाली छोटी चोटें भी पलक झपकने, आंसू की निकासी और दीर्घकालिक रूप-रंग को प्रभावित कर सकती हैं। एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी सर्जन विशेष रूप से पलकों, अश्रु प्रणाली और ऑर्बिट की पुनर्निर्माण सर्जरी में प्रशिक्षित होता है, जो चोट के बाद कार्य और रूप-रंग दोनों को बहाल करने में मदद करता है।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    faqs: [
      {
        q: "क्या पलक के हर कट के लिए विशेषज्ञ मरम्मत की आवश्यकता होती है?",
        a: "मामूली सतही कटों को सामान्य रूप से प्रबंधित किया जा सकता है, लेकिन पलक के किनारे, आंसू जल निकासी प्रणाली या गहरे ऊतकों को शामिल करने वाली चोटों का मूल्यांकन ओकुलोप्लास्टी सर्जन द्वारा किया जाना चाहिए।"
      },
      {
        q: "क्या आंसू वाहिनी की चोटों को सफलतापूर्वक ठीक किया जा सकता है?",
        a: "हाँ। विशिष्ट तकनीकों और सिलिकॉन स्टेंटिंग का उपयोग करके प्रारंभिक मरम्मत सामान्य आंसू जल निकासी को बहाल करने का एक उत्कृष्ट अवसर प्रदान करती है।"
      },
      {
        q: "क्या हर ऑर्बिटल फ्रैक्चर के लिए सर्जरी की आवश्यकता होगी?",
        a: "नहीं। कई फ्रैक्चर को बिना सर्जरी के प्रबंधित किया जा सकता है। निर्णय दोहरी दृष्टि, आँख की स्थिति, फ्रैक्चर के आकार और नैदानिक निष्कर्षों पर निर्भर करता है।"
      },
      {
        q: "क्या पुनर्निर्माण सर्जरी से दिखने वाले निशान रह जाएंगे?",
        a: "त्वचा की प्राकृतिक सिलवटों के साथ चीरे लगाने और पलक को शारीरिक रूप से बहाल करने का हर संभव प्रयास किया जाता है। हालांकि आघात के बाद निशान अपरिहार्य हैं, वे आमतौर पर उपचार के साथ कम ध्यान देने योग्य हो जाते हैं।"
      }
    ],
    consultationSection: {
      title: "परामर्श",
      text: "यदि आपको या आपके परिवार के किसी सदस्य को पलकों, आंसू जल निकासी प्रणाली या आँख के सॉकेट से जुड़ी चोट लगी है, तो प्रारंभिक विशेषज्ञ मूल्यांकन दीर्घकालिक कार्यात्मक और कॉस्मेटिक परिणामों में महत्वपूर्ण सुधार कर सकता है। व्यापक मूल्यांकन और व्यक्तिगत पुनर्निर्माण देखभाल के लिए डॉ. सौमिका सिंह से परामर्श करें।"
    }
  }
};

const richBotoxContent = {
  en: {
    introParas: [
      "The eyes are often the first feature to reflect ageing, fatigue or facial asymmetry. Modern Oculoplastic Surgery combines specialised knowledge of eyelid anatomy with aesthetic principles to achieve natural-looking results while preserving normal eyelid function and eye health.",
      "Dr. Saumika Singh offers both medical and cosmetic Periocular procedures, including Botox treatment, blepharoplasty (eyelid surgery) and selected minimally invasive procedures, with treatment tailored to each individual's concerns and facial anatomy."
    ],
    commonDisordersTitle: "Medical & Cosmetic Treatments We Offer",
    disorders: [
      {
        title: "Botox for Blepharospasm",
        desc: "Blepharospasm is a condition in which involuntary eyelid muscle contractions interfere with normal blinking and daily activities. Botox injections help relax the affected muscles, providing significant symptomatic relief."
      },
      {
        title: "Botox for Hemifacial Spasm",
        desc: "Involuntary twitching affecting one side of the face can often be effectively managed with carefully administered Botox injections, reducing muscle spasms and improving comfort."
      },
      {
        title: "Cosmetic Botox Around the Eyes",
        desc: "Botox may be used to soften fine lines around the eyes, reduce crow's feet and achieve a refreshed appearance while maintaining natural facial expression."
      },
      {
        title: "Upper Eyelid Blepharoplasty",
        desc: "Excess upper eyelid skin may create a tired appearance, interfere with vision or make daily activities uncomfortable. Blepharoplasty removes excess skin and, when required, fat to restore a more youthful and functional eyelid."
      },
      {
        title: "Lower Eyelid Blepharoplasty",
        desc: "Lower eyelid surgery helps improve under-eye bags, puffiness and excess skin, creating a smoother and more rested appearance."
      },
      {
        title: "Periocular Rejuvenation",
        desc: "Selected patients may benefit from procedures designed to improve the appearance of the eyelids and surrounding tissues while preserving a natural look."
      },
      {
        title: "Functional Eyelid Surgery",
        desc: "Some patients require eyelid surgery not only for cosmetic improvement but also to restore vision, improve eyelid closure or correct eyelid malposition. Treatment is planned according to both functional and aesthetic needs."
      }
    ],
    whenToConsultTitle: "Who Can Benefit?",
    whenToConsultSubtitle: "You may benefit from consultation if you experience:",
    whenToConsultBullets: [
      "Excess upper eyelid skin affecting vision",
      "Heavy or tired-looking eyelids",
      "Under-eye bags or puffiness",
      "Crow's feet around the eyes",
      "Involuntary eyelid twitching or spasms",
      "Facial asymmetry due to muscle overactivity",
      "Age-related changes around the eyes"
    ],
    treatmentOptionsTitle: "Treatment Options",
    treatmentOptionsSubtitle: "Depending on your concerns, treatment may include:",
    treatmentOptionsBullets: [
      "Therapeutic Botox injections",
      "Cosmetic Botox around the eyes",
      "Upper eyelid blepharoplasty",
      "Lower eyelid blepharoplasty",
      "Functional eyelid surgery",
      "Combined medical and aesthetic procedures where appropriate"
    ],
    treatmentOptionsFooter: "",
    whyChooseTitle: "Why Choose an Oculoplasty Surgeon?",
    whyChooseText: "The eyelids are delicate structures that protect the eyes and preserve vision. Cosmetic procedures around the eyes require a detailed understanding of eyelid anatomy, blinking, tear production and ocular health.\nAs a fellowship-trained Oculoplasty surgeon, Dr. Saumika Singh performs both functional and aesthetic eyelid procedures with emphasis on patient safety, natural appearance and preservation of normal eyelid function.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Is Botox safe around the eyes?",
        a: "Yes. When performed by a trained oculoplasty specialist, Botox is a safe and effective treatment for selected medical and cosmetic conditions around the eyes."
      },
      {
        q: "How long does Botox last?",
        a: "The effects typically last around 3–4 months, although this may vary between individuals."
      },
      {
        q: "Will blepharoplasty leave visible scars?",
        a: "Incisions are usually placed within the natural eyelid crease or just below the eyelashes, making scars minimally visible after healing."
      },
      {
        q: "Is eyelid cosmetic surgery only for appearance?",
        a: "No. Many patients undergo blepharoplasty because excess eyelid skin interferes with vision, causes heaviness or contributes to eye strain."
      },
      {
        q: "How soon can I return to work after blepharoplasty?",
        a: "Most patients resume routine activities within 1–2 weeks, although recovery varies depending on the individual and the procedure performed."
      }
    ],
    consultationSection: {
      title: "Consultation",
      text: "Whether you are seeking relief from eyelid spasms or wish to improve the appearance of your eyelids with natural-looking results, consult Dr. Saumika Singh for a personalised evaluation and treatment plan."
    }
  },
  hi: {
    introParas: [
      "आंखें अक्सर उम्र बढ़ने, थकान या चेहरे की विषमता को दर्शाने वाली पहली विशेषता होती हैं। आधुनिक ओकुलोप्लास्टिक सर्जरी प्राकृतिक रूप-रंग बनाए रखते हुए सामान्य पलक समारोह और आंखों के स्वास्थ्य को संरक्षित करने के लिए सौंदर्य सिद्धांतों के साथ पलक शरीर रचना विज्ञान के विशेष ज्ञान को जोड़ती है।",
      "डॉ. सौमिका सिंह बोतॉक्स उपचार, ब्लेफेरोप्लास्टी (पलक सर्जरी) और न्यूनतम आक्रामक प्रक्रियाओं सहित चिकित्सा और कॉस्मेटिक पेरिओकुलर दोनों प्रक्रियाएं प्रदान करती हैं, जिसमें प्रत्येक व्यक्ति की चिंताओं और चेहरे की शरीर रचना के अनुरूप उपचार होता है।"
    ],
    commonDisordersTitle: "मेडिकल और कॉस्मेटिक उपचार जो हम प्रदान करते हैं",
    disorders: [
      {
        title: "ब्लेफेरोस्पाज्म के लिए बोटॉक्स",
        desc: "ब्लेफेरोस्पाज्म एक ऐसी स्थिति है जिसमें अनैच्छिक पलक की मांसपेशियों का संकुचन सामान्य पलक झपकने और दैनिक गतिविधियों में हस्तक्षेप करता है। बोटॉक्स इंजेक्शन प्रभावित मांसपेशियों को आराम देने में मदद करते हैं, जिससे महत्वपूर्ण रोगसूचक राहत मिलती है।"
      },
      {
        title: "हेमीफेशियल ऐंठन के लिए बोटॉक्स",
        desc: "चेहरे के एक हिस्से को प्रभावित करने वाले अनैच्छिक फड़कने को अक्सर बोटॉक्स इंजेक्शन के माध्यम से प्रभावी ढंग से प्रबंधित किया जा सकता है, जिससे मांसपेशियों में ऐंठन कम होती है और आराम में सुधार होता है।"
      },
      {
        title: "आंखों के आसपास कॉस्मेटिक बोटॉक्स",
        desc: "बोटॉक्स का उपयोग आंखों के आसपास महीन रेखाओं को नरम करने, क्रो फीट को कम करने और प्राकृतिक चेहरे की अभिव्यक्ति को बनाए रखते हुए एक ताज़ा उपस्थिति प्राप्त करने के लिए किया जा सकता है।"
      },
      {
        title: "अपर आईलिड ब्लेफेरोप्लास्टी",
        desc: "अतिरिक्त ऊपरी पलक की त्वचा थका हुआ रूप दे सकती है, दृष्टि में हस्तक्षेप कर सकती है या दैनिक गतिविधियों को असुविधाजनक बना सकती है। ब्लेफेरोप्लास्टी अतिरिक्त त्वचा और, जब आवश्यक हो, वसा को हटाकर अधिक युवा और कार्यात्मक पलक को बहाल करती है।"
      },
      {
        title: "लोअर आईलिड ब्लेफेरोप्लास्टी",
        desc: "निचली पलक की सर्जरी आंखों के नीचे के बैग, सूजन और अतिरिक्त त्वचा को बेहतर बनाने में मदद करती है, जिससे एक चिकना और अधिक आराम वाला लुक मिलता है।"
      },
      {
        title: "पेरिओकुलर रिजूवनेशन",
        desc: "चुनिंदा रोगियों को प्राकृतिक रूप बनाए रखते हुए पलकों और आसपास के ऊतकों की उपस्थिति में सुधार करने के लिए डिज़ाइन की गई प्रक्रियाओं से लाभ हो सकता है।"
      },
      {
        title: "फंक्शनल आईलिड सर्जरी",
        desc: "कुछ रोगियों को केवल कॉस्मेटिक सुधार के लिए ही नहीं बल्कि दृष्टि बहाल करने, पलक बंद करने में सुधार करने या पलक की गलत स्थिति को ठीक करने के लिए पलक सर्जरी की आवश्यकता होती है। कार्यात्मक और सौंदर्य संबंधी दोनों जरूरतों के अनुसार उपचार की योजना बनाई जाती है।"
      }
    ],
    whenToConsultTitle: "कौन लाभ उठा सकता है?",
    whenToConsultSubtitle: "यदि आप निम्न अनुभव करते हैं तो आप परामर्श से लाभान्वित हो सकते हैं:",
    whenToConsultBullets: [
      "अतिरिक्त ऊपरी पलक त्वचा दृष्टि को प्रभावित कर रही है",
      "भारी या थकी हुई दिखने वाली पलकें",
      "आंखों के नीचे बैग या सूजन",
      "आंखों के आसपास कौवे के पैर (Crow's feet)",
      "अनैच्छिक पलक फड़कना या ऐंठन",
      "मांसपेशियों की अति सक्रियता के कारण चेहरे की विषमता",
      "आंखों के आसपास उम्र से संबंधित बदलाव"
    ],
    treatmentOptionsTitle: "उपचार के विकल्प",
    treatmentOptionsSubtitle: "आपकी चिंताओं के आधार पर, उपचार में शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "चिकित्सीय बोटॉक्स इंजेक्शन",
      "आंखों के आसपास कॉस्मेटिक बोटॉक्स",
      "ऊपरी पलक ब्लेफेरोप्लास्टी",
      "निचली पलक ब्लेफेरोप्लास्टी",
      "कार्यात्मक पलक सर्जरी",
      "जहां उचित हो, संयुक्त चिकित्सा और सौंदर्य प्रक्रियाएं"
    ],
    treatmentOptionsFooter: "",
    whyChooseTitle: "ओकुलोप्लास्टी सर्जन क्यों चुनें?",
    whyChooseText: "पलकें नाजुक संरचनाएं हैं जो आंखों की रक्षा करती हैं और दृष्टि को सुरक्षित रखती हैं। आंखों के आसपास कॉस्मेटिक प्रक्रियाओं के लिए पलक शरीर रचना, पलक झपकना, आंसू उत्पादन और आंखों के स्वास्थ्य की विस्तृत समझ की आवश्यकता होती है।\nएक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी सर्जन के रूप में, डॉ. सौमिका सिंह रोगी की सुरक्षा, प्राकृतिक उपस्थिति और सामान्य पलक समारोह के संरक्षण पर जोर देने के साथ कार्यात्मक और सौंदर्य संबंधी पलक प्रक्रियाएं दोनों करती हैं।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqs: [
      {
        q: "क्या आंखों के आसपास बोटॉक्स सुरक्षित है?",
        a: "हाँ। जब एक प्रशिक्षित ओकुलोप्लास्टी विशेषज्ञ द्वारा किया जाता है, तो बोटॉक्स आंखों के आसपास चयनित चिकित्सा और कॉस्मेटिक स्थितियों के लिए एक सुरक्षित और प्रभावी उपचार है।"
      },
      {
        q: "बोटॉक्स का असर कितने समय तक रहता है?",
        a: "प्रभाव आमतौर पर लगभग 3-4 महीने तक रहते हैं, हालांकि यह व्यक्तियों के बीच भिन्न हो सकता है।"
      },
      {
        q: "क्या ब्लेफेरोप्लास्टी से निशान दिखाई देंगे?",
        a: "चीरे आमतौर पर प्राकृतिक पलक क्रीज के भीतर या पलकों के ठीक नीचे लगाए जाते हैं, जिससे उपचार के बाद निशान कम से कम दिखाई देते हैं।"
      },
      {
        q: "क्या पलक कॉस्मेटिक सर्जरी केवल दिखने के लिए है?",
        a: "नहीं। कई रोगी ब्लेफेरोप्लास्टी से गुजरते हैं क्योंकि अतिरिक्त पलक की त्वचा दृष्टि में बाधा डालती है, भारीपन का कारण बनती है या आंखों में खिंचाव में योगदान करती है।"
      },
      {
        q: "ब्लेफेरोप्लास्टी के बाद मैं कितनी जल्दी काम पर लौट सकता हूं?",
        a: "अधिकांश रोगी 1-2 सप्ताह के भीतर नियमित गतिविधियां फिर से शुरू कर देते हैं, हालांकि रिकवरी व्यक्ति और की गई प्रक्रिया के आधार पर भिन्न होती है।"
      }
    ],
    consultationSection: {
      title: "परामर्श",
      text: "चाहे आप पलकों की ऐंठन से राहत पा रहे हों या प्राकृतिक दिखने वाले परिणामों के साथ अपनी पलकों की उपस्थिति में सुधार करना चाहते हों, व्यक्तिगत मूल्यांकन और उपचार योजना के लिए डॉ. सौमिका सिंह से परामर्श लें।"
    }
  }
};

const richWhyChooseContent = {
  en: {
    introParas: [
      "Most eye problems can be effectively diagnosed and treated by a general ophthalmologist. However, certain conditions affecting the eyelids, tear drainage system, eye socket (orbit), and tumours involving the eye and surrounding tissues often benefit from evaluation by a specialist trained specifically in these areas.",
      "An Oculoplasty & Ocular Oncology Surgeon is an ophthalmologist who has undergone advanced fellowship training to manage these complex conditions. The specialty combines precision microsurgery, reconstructive techniques and tumour management with a thorough understanding of eye health—helping patients achieve the best possible functional, medical and cosmetic outcomes."
    ],
    commonDisordersTitle: "Conditions commonly managed by an Oculoplasty & Ocular Oncology Specialist",
    disorders: [
      {
        title: "Evaluation & Treatment",
        desc: "Specialist evaluation may be recommended for various complex conditions affecting the eye and surrounding structures."
      }
    ],
    whenToConsultTitle: "Who Can Benefit?",
    whenToConsultSubtitle: "Specialist evaluation may be recommended for:",
    whenToConsultBullets: [
      "Drooping eyelids (Ptosis)",
      "Watering eyes and blocked tear ducts",
      "Eyelid lumps, cysts and swellings",
      "Eyelids turning inward (Entropion) or outward (Ectropion)",
      "Eyelid injuries and facial trauma around the eyes",
      "Thyroid Eye Disease and prominent eyes",
      "Orbital disorders and orbital tumours",
      "Eyelid, conjunctival and ocular surface tumours",
      "Suspicious pigmented lesions around the eyes",
      "Artificial eye fitting and socket reconstruction",
      "Functional and cosmetic eyelid procedures, including blepharoplasty and Botox"
    ],
    treatmentOptionsTitle: "A personalised approach to every patient",
    treatmentOptionsSubtitle: "Care may include:",
    treatmentOptionsBullets: [
      "Eyelid surgery and reconstruction",
      "Tear duct (lacrimal) surgery",
      "Management of eyelid, ocular surface and orbital tumours",
      "Orbital surgery",
      "Socket reconstruction and artificial eye rehabilitation",
      "Eye trauma repair",
      "Botox and periocular aesthetic procedures",
      "Long-term follow-up whenever required"
    ],
    treatmentOptionsFooter: "No two patients are alike, and neither are their treatment plans. Some conditions can be treated with medication or minimally invasive procedures, while others require specialised surgery or long-term monitoring. Every consultation begins with understanding the patient's symptoms, concerns and expectations before recommending the most appropriate treatment.",
    whyChooseTitle: "Why does specialised care make a difference?",
    whyChooseText: "The eyelids and tissues around the eyes do much more than frame our face. They protect the eye, distribute tears, maintain comfortable vision and contribute to normal facial expression.\nTreatment in this region often requires careful planning because every decision affects both eye function and appearance. Whether managing a blocked tear duct, repairing an eyelid after trauma, removing a tumour or reconstructing delicate tissues, the goal is always to preserve vision, restore function and achieve a natural result.\nSimilarly, ocular oncology focuses on the diagnosis and management of tumours involving the eyelids, conjunctiva, eye socket and surrounding tissues. Early recognition of suspicious lesions, timely biopsy when required and appropriate treatment can make a significant difference to both eye health and long-term outcomes.",
    faqsTitle: "Choosing the right specialist",
    faqs: [
      {
        q: "When to see a specialist?",
        a: "Many patients are referred to an oculoplasty specialist by their ophthalmologist, while others seek consultation directly after noticing symptoms such as persistent watering, a drooping eyelid, an eyelid growth, swelling around the eye or changes in eye appearance."
      },
      {
        q: "Does this replace my regular eye doctor?",
        a: "Seeking specialist care does not replace comprehensive eye care—it complements it. Working alongside your ophthalmologist, an Oculoplasty & Ocular Oncology Surgeon provides focused expertise for conditions affecting the structures around the eye, ensuring that treatment is tailored to both your eye health and your overall well-being."
      }
    ],
    consultationSection: {
      title: "Compassionate, Specialised Care",
      text: "Every patient deserves to understand their condition, feel comfortable asking questions and be involved in decisions about their treatment. Whether the problem is functional, reconstructive, traumatic, oncological or aesthetic, the aim is to provide thoughtful, evidence-based care with clear communication and a treatment plan tailored to your individual needs."
    }
  },
  hi: {
    introParas: [
      "अधिकांश आंखों की समस्याओं का प्रभावी ढंग से निदान और उपचार एक सामान्य नेत्र रोग विशेषज्ञ द्वारा किया जा सकता है। हालांकि, पलकों, आंसू जल निकासी प्रणाली, आंख के सॉकेट (ऑर्बिट) और आंख और आसपास के ऊतकों को प्रभावित करने वाले ट्यूमर को प्रभावित करने वाली कुछ स्थितियों को अक्सर इन क्षेत्रों में विशेष रूप से प्रशिक्षित विशेषज्ञ द्वारा मूल्यांकन से लाभ होता है।",
      "एक ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन एक नेत्र रोग विशेषज्ञ है जिसने इन जटिल स्थितियों का प्रबंधन करने के लिए उन्नत फेलोशिप प्रशिक्षण प्राप्त किया है। विशेषता आंखों के स्वास्थ्य की पूरी समझ के साथ सटीक माइक्रोसर्जरी, पुनर्निर्माण तकनीक और ट्यूमर प्रबंधन को जोड़ती है-रोगियों को सर्वोत्तम संभव कार्यात्मक, चिकित्सा और कॉस्मेटिक परिणाम प्राप्त करने में मदद करती है।"
    ],
    commonDisordersTitle: "आमतौर पर ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी विशेषज्ञ द्वारा प्रबंधित स्थितियां",
    disorders: [
      {
        title: "मूल्यांकन और उपचार",
        desc: "आंखों और आसपास की संरचनाओं को प्रभावित करने वाली विभिन्न जटिल स्थितियों के लिए विशेषज्ञ मूल्यांकन की सिफारिश की जा सकती है।"
      }
    ],
    whenToConsultTitle: "कौन लाभ उठा सकता है?",
    whenToConsultSubtitle: "विशेषज्ञ मूल्यांकन की सिफारिश निम्न के लिए की जा सकती है:",
    whenToConsultBullets: [
      "झुकी हुई पलकें (Ptosis)",
      "पानी आना और अवरुद्ध आंसू नलिकाएं",
      "पलक में गांठ, सिस्ट और सूजन",
      "पलकों का अंदर की ओर (Entropion) या बाहर की ओर (Ectropion) मुड़ना",
      "पलक में चोट और आंखों के आसपास चेहरे का आघात",
      "थायरॉइड आई डिजीज और उभरी हुई आंखें",
      "ऑर्बिटल विकार और ऑर्बिटल ट्यूमर",
      "पलक, कंजंक्टाइवल और ओकुलर सरफेस ट्यूमर",
      "आंखों के आसपास संदिग्ध पिगमेंटेड घाव",
      "कृत्रिम आंख लगाना और सॉकेट पुनर्निर्माण",
      "ब्लेफेरोप्लास्टी और बोटॉक्स सहित कार्यात्मक और कॉस्मेटिक पलक प्रक्रियाएं"
    ],
    treatmentOptionsTitle: "हर मरीज के लिए एक व्यक्तिगत दृष्टिकोण",
    treatmentOptionsSubtitle: "देखभाल में शामिल हो सकते हैं:",
    treatmentOptionsBullets: [
      "पलक की सर्जरी और पुनर्निर्माण",
      "आंसू वाहिनी (लैक्रिमल) सर्जरी",
      "पलक, ओकुलर सतह और ऑर्बिटल ट्यूमर का प्रबंधन",
      "ऑर्बिटल सर्जरी",
      "सॉकेट पुनर्निर्माण और कृत्रिम आंख पुनर्वास",
      "आंखों के आघात की मरम्मत",
      "बोटॉक्स और पेरिओकुलर सौंदर्य प्रक्रियाएं",
      "जब भी आवश्यक हो दीर्घकालिक अनुवर्ती कार्रवाई"
    ],
    treatmentOptionsFooter: "कोई भी दो मरीज एक जैसे नहीं होते हैं, और न ही उनकी उपचार योजनाएं होती हैं। कुछ स्थितियों का इलाज दवा या न्यूनतम आक्रामक प्रक्रियाओं से किया जा सकता है, जबकि अन्य के लिए विशेष सर्जरी या दीर्घकालिक निगरानी की आवश्यकता होती है। प्रत्येक परामर्श सबसे उपयुक्त उपचार की सिफारिश करने से पहले रोगी के लक्षणों, चिंताओं और अपेक्षाओं को समझने से शुरू होता है।",
    whyChooseTitle: "विशेषज्ञ देखभाल से क्या फर्क पड़ता है?",
    whyChooseText: "पलकें और आंखों के आसपास के ऊतक हमारे चेहरे को फ्रेम करने से कहीं अधिक काम करते हैं। वे आंख की रक्षा करते हैं, आंसू वितरित करते हैं, आरामदायक दृष्टि बनाए रखते हैं और सामान्य चेहरे की अभिव्यक्ति में योगदान करते हैं।\nइस क्षेत्र में उपचार के लिए अक्सर सावधानीपूर्वक योजना की आवश्यकता होती है क्योंकि हर निर्णय आंखों के कार्य और उपस्थिति दोनों को प्रभावित करता है। चाहे अवरुद्ध आंसू वाहिनी का प्रबंधन करना हो, आघात के बाद पलक की मरम्मत करना हो, ट्यूमर को हटाना हो या नाजुक ऊतकों का पुनर्निर्माण करना हो, लक्ष्य हमेशा दृष्टि को संरक्षित करना, कार्य को बहाल करना और एक प्राकृतिक परिणाम प्राप्त करना है।\nइसी तरह, ओकुलर ऑन्कोलॉजी पलकों, कंजंक्टिवा, आंख के सॉकेट और आसपास के ऊतकों से जुड़े ट्यूमर के निदान और प्रबंधन पर केंद्रित है। संदिग्ध घावों की शीघ्र पहचान, आवश्यकता पड़ने पर समय पर बायोप्सी और उचित उपचार आंखों के स्वास्थ्य और दीर्घकालिक परिणामों दोनों में महत्वपूर्ण अंतर ला सकते हैं।",
    faqsTitle: "सही विशेषज्ञ का चुनाव",
    faqs: [
      {
        q: "विशेषज्ञ से कब मिलें?",
        a: "कई रोगियों को उनके नेत्र रोग विशेषज्ञ द्वारा ओकुलोप्लास्टी विशेषज्ञ के पास भेजा जाता है, जबकि अन्य लगातार पानी आने, पलक झुकने, पलक बढ़ने, आंख के आसपास सूजन या आंख के रूप में बदलाव जैसे लक्षणों को देखने के बाद सीधे परामर्श लेते हैं।"
      },
      {
        q: "क्या यह मेरे नियमित नेत्र चिकित्सक का स्थान लेता है?",
        a: "विशेषज्ञ की देखभाल की तलाश व्यापक आंखों की देखभाल की जगह नहीं लेती है - यह इसे पूरक करती है। आपके नेत्र रोग विशेषज्ञ के साथ काम करते हुए, एक ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी सर्जन आंख के आसपास की संरचनाओं को प्रभावित करने वाली स्थितियों के लिए केंद्रित विशेषज्ञता प्रदान करता है, यह सुनिश्चित करते हुए कि उपचार आपके आंखों के स्वास्थ्य और आपके समग्र कल्याण दोनों के अनुरूप है।"
      }
    ],
    consultationSection: {
      title: "करुणापूर्ण, विशेषज्ञ देखभाल",
      text: "हर मरीज अपनी स्थिति को समझने, सवाल पूछने में सहज महसूस करने और अपने उपचार के बारे में निर्णयों में शामिल होने का हकदार है। चाहे समस्या कार्यात्मक, पुनर्निर्माण, दर्दनाक, ऑन्कोलॉजिकल या सौंदर्यपूर्ण हो, उद्देश्य स्पष्ट संचार के साथ विचारशील, साक्ष्य-आधारित देखभाल और आपकी व्यक्तिगत आवश्यकताओं के अनुरूप उपचार योजना प्रदान करना है।"
    }
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const redirects: Record<string, string> = {
    'drooping-eyelids': 'eyelid-disorders-eyelid-surgery',
    'watering-eyes': 'watering-eyes-tear-drainage-disorders',
    'artificial-eye': 'orbital-disorders-orbital-surgery',
    'thyroid-eye-disease': 'eye-tumours-ocular-oncology',
    'tumours': 'socket-reconstruction-artificial-eye-rehabilitation',
    'botox-aesthetics': 'eye-trauma-eyelid-orbital-reconstruction'
  };

  const isRedirecting = id && redirects[id];

  React.useEffect(() => {
    if (id && redirects[id]) {
      navigate(`/services/${redirects[id]}`, { replace: true });
    }
  }, [id, navigate]);

  const service = id ? serviceKeys[id] : null;

  if (isRedirecting) {
    return null;
  }

  if (!service) {
    return (
      <div id="service-not-found" className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <SEO title="Service Not Found" description="The requested service could not be found." />
        <h1 id="service-not-found-heading" className="text-3xl font-bold text-navy mb-4">Service Not Found</h1>
        <Link id="service-not-found-back" to="/" className="text-gold font-bold hover:text-navy transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const isEyelidSurgery = id === 'eyelid-disorders-eyelid-surgery';
  const isWateringEyes = id === 'watering-eyes-tear-drainage-disorders';
  const isOrbitalSurgery = id === 'orbital-disorders-orbital-surgery';
  const isTumoursService = id === 'eye-tumours-ocular-oncology';
  const isSocketService = id === 'socket-reconstruction-artificial-eye-rehabilitation';
  const isTraumaService = id === 'eye-trauma-eyelid-orbital-reconstruction';
  const isBotoxService = id === 'botox-eyelid-cosmetic-surgery-periocular-aesthetics';
  const isWhyChooseService = id === 'why-choose-an-oculoplasty-ocular-oncology-specialist';
  const isRichService = isEyelidSurgery || isWateringEyes || isOrbitalSurgery || isTumoursService || isSocketService || isTraumaService || isBotoxService || isWhyChooseService;
  const currentLang = (language === 'hi' ? 'hi' : 'en') as 'en' | 'hi';
  const richData = (isEyelidSurgery 
    ? richEyelidContent[currentLang] 
    : (isWateringEyes 
      ? richWateringContent[currentLang] 
      : (isOrbitalSurgery 
        ? richOrbitalContent[currentLang] 
        : (isTumoursService
          ? richTumourContent[currentLang]
          : (isSocketService
            ? richSocketContent[currentLang]
            : (isTraumaService
              ? richTraumaContent[currentLang]
              : (isBotoxService
                ? richBotoxContent[currentLang]
                : (isWhyChooseService
                  ? richWhyChooseContent[currentLang]
                  : null)))))))) as any;

  return (
    <div id="service-detail-root" className="flex flex-col">
      <SEO 
        title={t(service.titleKey)} 
        description={t(service.descKey) || (isRichService && richData ? richData.introParas[0] : '')} 
        url={`https://drsaumika.in/services/${id}`}
      />
      <div id="service-detail-container" className="w-full max-w-[1200px] mx-auto p-4 md:p-8">
        <Link id="service-detail-back-link" to="/#conditions" aria-label={`Back to ${t('nav.home')}`} className="inline-flex items-center text-navy/60 hover:text-gold transition-colors mb-8 font-medium focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-sm">
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          {t('nav.home')}
        </Link>

        <motion.div
          id="service-detail-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card bg-white/80 backdrop-blur-md p-8 md:p-12 relative overflow-hidden"
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

        {/* Cross-linking to other services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-5xl mx-auto pb-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              {t('home.viewAll') || 'Explore Other Conditions'}
            </h2>
            <div className="w-16 h-0.5 bg-gold/40 mx-auto mt-4" />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
          >
            {Object.entries(serviceKeys)
              .filter(([key]) => key !== id) // Exclude current service
              .map(([key, item]) => (
                <motion.div
                  key={key}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                  }}
                  className="h-full"
                >
                  <Link
                    to={`/services/${key}`}
                    className="group block p-5 md:p-6 bg-white/70 backdrop-blur-sm border border-gold/15 rounded-xl hover:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 shadow-sm hover:shadow-md transition-all text-center relative overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    <h3 className="font-bold text-navy group-hover:text-gold transition-colors text-lg mb-3">{t(item.titleKey)}</h3>
                    <div className="text-xs font-bold text-gold/80 tracking-wider uppercase flex items-center justify-center gap-1.5 group-hover:text-gold transition-all duration-300">
                      <span>{t('home.clickToExplore') || 'Click to explore'}</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

