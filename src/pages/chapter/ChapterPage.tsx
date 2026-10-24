import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ShlokNavigation from "../../components/navigation/ShlokNavigation";
import ShlokCard from "../../components/shlok/ShlokCard";
import { useLanguage, type Language } from "../../context/LanguageContext";
import { chapter1Shlokas, type Shlok } from "../../data/chapter1";
import { chapter2Shlokas } from "../../data/chapter2";
import { chapter3Shlokas } from "../../data/chapter3";
import { chapter4Shlokas } from "../../data/chapter4";
import { chapter5Shlokas } from "../../data/chapter5";
import { chapter6Shlokas } from "../../data/chapter6";
import { chapter7Shlokas } from "../../data/chapter7";
import { chapter8Shlokas } from "../../data/chapter8";
import { chapter9Shlokas } from "../../data/chapter9";
import { chapter10Shlokas } from "../../data/chapter10";
import { chapter11Shlokas } from "../../data/chapter11";
import { chapter12Shlokas } from "../../data/chapter12";
import { chapter13Shlokas } from "../../data/chapter13";
import "../../styles/pages-style/chapterPage.css";

// Styled vector Peacock Feather (More Pankh) SVG component representing Sri Krishna
const PeacockFeather = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 150" className={`peacock-feather-svg ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 145 C50 115, 48 85, 50 20" stroke="#aa820a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M50 135 Q30 115 20 85 Q10 52 50 20 M50 135 Q70 115 80 85 Q90 52 50 20" stroke="rgba(27, 77, 62, 0.12)" strokeWidth="1" fill="none" />
    
    {/* Concentric glowing rings of the peacock eye (Ocellus) */}
    <ellipse cx="50" cy="50" rx="18" ry="22" fill="#aa820a" opacity="0.8" />
    <ellipse cx="50" cy="52" rx="14" ry="17" fill="#1b4d3e" />
    <ellipse cx="50" cy="54" rx="11" ry="13" fill="#d4af37" />
    <ellipse cx="50" cy="56" rx="8" ry="9" fill="#0c1d3b" />
    <ellipse cx="48" cy="57" rx="4" ry="4" fill="#00e5ff" opacity="0.9" />
    
    {/* Fine barbs along the center stem */}
    <path d="M50 65 Q35 55 25 45 M50 75 Q30 65 18 50 M50 85 Q32 75 15 57 M50 95 Q35 85 20 67 M50 105 Q38 95 25 75 M50 115 Q40 105 28 85 M50 125 Q42 115 32 95" stroke="#aa820a" strokeWidth="1" fill="none" opacity="0.75" />
    <path d="M50 65 Q65 55 75 45 M50 75 Q70 65 82 50 M50 85 Q68 75 85 57 M50 95 Q65 85 80 67 M50 105 Q62 95 75 75 M50 115 Q60 105 72 85 M50 125 Q58 115 68 95" stroke="#aa820a" strokeWidth="1" fill="none" opacity="0.75" />
  </svg>
);

interface ChapterData {
  number: number;
  titleKey: string;
  subKey: string;
  sanskritTitle: string;
  englishTitle: string;
  introduction: string;
  keyThemes: Record<Language, string[]>;
  totalShlokas: number;
  shlokas: Shlok[];
}

const chapterData: Record<string, ChapterData> = {
  "1": {
    number: 1,
    titleKey: "ch1_title",
    subKey: "ch1_subtitle",
    sanskritTitle: "अर्जुन विषाद योग",
    englishTitle: "Arjuna Vishada Yoga",
    introduction:
      "भगवद्गीता का प्रथम अध्याय 'अर्जुन विषाद योग' कुरुक्षेत्र की रणभूमि पर घटित होता है। जब अर्जुन दोनों सेनाओं में अपने प्रियजनों — गुरुओं, पितामहों, भाइयों और मित्रों को देखते हैं, तो वे गहरे विषाद में डूब जाते हैं। उनके हाथ से धनुष गिर जाता है, अंग शिथिल हो जाते हैं और वे युद्ध न करने का निश्चय कर लेते हैं। यही विषाद (दुःख) समस्त गीता उपदेश की नींव बनता है। || The first chapter of the Bhagavad Gita, 'Arjuna Vishada Yoga', is set on the battlefield of Kurukshetra. When Arjuna sees his dear ones — teachers, grandfathers, brothers, and friends — arrayed on both sides, he is overcome with grief. His bow slips from his hand, his limbs fail, and he resolves not to fight. This sorrow (vishada) becomes the very foundation of the entire divine discourse that follows.",
    keyThemes: {
      en: [
        "Arjuna observes both armies at Kurukshetra and falls into deep moral despair and confusion.",
        "Grief and overwhelming personal attachment cause him to drop his Gandiva bow and contemplate renunciation.",
        "True spiritual awakening begins when a seeker recognizes personal limitations and surrenders to the Divine Guide."
      ],
      hi: [
        "कुरुक्षेत्र में दोनों सेनाओं का अवलोकन और अर्जुन का गहरा मानसिक संशय एवं विषाद।",
        "अहंकार और मोह के कारण कर्तव्य से पलायन का प्रयास एवं गाण्डीव का त्याग।",
        "सच्चे आत्म-विकास का आरंभ तब होता है जब मनुष्य अपनी सीमाएं पहचानकर भगवान के आगे समर्पित होता है।"
      ],
      te: [
        "కురుక్షేత్ర రణభూమిలో బంధువులను చూసి అర్జునుడు తీవ్ర విషాదం మరియు మానసిక సంక్షోభంలో పడ్డాడు.",
        "మోహం మరియు మమకారం కారణంగా గాండీవాన్ని విడిచిపెట్టి కర్తవ్య విముఖుడయ్యాడు.",
        "మానవుడు తన పరిమితులను గుర్తించి శ్రీకృష్ణుడికి ఆత్మసమర్పణ చేసినప్పుడే నిజమైన ఆధ్యాత్మిక జ్ఞానోదయం ప్రారంభమవుతుంది."
      ],
    },
    totalShlokas: 47,
    shlokas: chapter1Shlokas,
  },
  "2": {
    number: 2,
    titleKey: "ch2_title",
    subKey: "ch2_subtitle",
    sanskritTitle: "सांख्य योग",
    englishTitle: "Sankhya Yoga",
    introduction:
      "भगवद्गीता का द्वितीय अध्याय 'सांख्य योग' गीता का दार्शनिक आधार है। भगवान श्री कृष्ण यहाँ अर्जुन को आत्मा के अजन्मा और अविनाशी स्वरूप का बोध कराते हैं। वे समझाते हैं कि शरीर नश्वर है किंतु आत्मा शाश्वत है। इसके उपरांत, कृष्ण निष्काम कर्मयोग का अमर सूत्र 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन' देते हैं और एक समत्व बुद्धियुक्त 'स्थितप्रज्ञ' साधक के लक्षण प्रस्तुत करते हैं। || In this pivotal chapter, Krishna begins his spiritual instruction to Arjuna by explaining the eternal nature of the soul (Atman). He describes the immortal self that cannot be killed, and introduces the concept of Nishkama Karma — performing one's duty without attachment to results. This chapter lays the philosophical foundation of the Gita.",
    keyThemes: {
      en: [
        "The Soul (Atman) is eternal and indestructible — it never dies, nor was it ever born (Na Jayate Mriyate Va).",
        "Nishkama Karma — You have a right only to perform your prescribed duty, never to the fruits of action (Karmanyevadhikaraste).",
        "The Sthitaprajna Sage — The enlightened master who remains serene in pleasure and pain, free from fear and anger."
      ],
      hi: [
        "आत्मा शाश्वत और अमर है — न यह कभी जन्म लेती है और न कभी मरती है (न जायते म्रियते वा)।",
        "निष्काम कर्मयोग — केवल कर्म पर तुम्हारा अधिकार है, उसके फलों पर कभी नहीं (कर्मण्येवाधिकारस्ते)।",
        "स्थितप्रज्ञ के लक्षण — जो सुख-दुःख, राग-द्वेष और भय में समभाव रखता है, वही सच्चा आत्मज्ञानी है।"
      ],
      te: [
        "ఆత్మ శాశ్వతమైనది మరియు నాశనం లేనిది — ఆత్మకు చావు పుట్టుకలు లేవు (న జాయతే మ్రియతే వా).",
        "నిష్కామ కర్మయోగం — కర్మను ఆచరించడంలోనే నీకు అధికారం ఉంది, ఫలితాల మీద ఎన్నడూ లేదు (కర్మణ్యేవాధికారస్తే).",
        "స్థితప్రజ్ఞుడి లక్షణాలు — సుఖదుఃఖాలు, భయం మరియు కోపాలను జయించి నిశ్చల బుద్ధితో ఉండేవాడే నిజమైన జ్ఞాని."
      ],
    },
    totalShlokas: 72,
    shlokas: chapter2Shlokas,
  },
  "3": {
    number: 3,
    titleKey: "ch3_title",
    subKey: "ch3_subtitle",
    sanskritTitle: "कर्म योग",
    englishTitle: "Karma Yoga",
    introduction:
      "भगवद्गीता का तृतीय अध्याय 'कर्म योग' जीवन में कर्म की अनिवार्यता और निष्काम कर्म के दिव्य विज्ञान का उद्घाटन करता है। अर्जुन ज्ञान और कर्म के द्वंद्व में उलझकर कर्म से भागने का विचार करते हैं। तब भगवान श्री कृष्ण उन्हें समझाते हैं कि कर्म से कोई भी प्राणी बच नहीं सकता; इसलिए आसक्ति और फल की चिंता छोड़कर लोक-कल्याण की भावना से कर्म करना ही सच्चा योग और मुक्ति का मार्ग है। || The third chapter of the Bhagavad Gita, 'Karma Yoga', unveils the divine science of selfless action and the inevitability of work in human life. Perplexed by the apparent contradiction between contemplative wisdom and active duty, Arjuna contemplates abandoning action. Sri Krishna enlightens him that no living being can remain inactive even for a moment; therefore, performing one's natural duty with dedication, without selfish attachment to the fruits of work, is the supreme path to inner purification and spiritual liberation.",
    keyThemes: {
      en: [
        "No living being can remain inactive even for a moment; dedicated selfless action is the highest spiritual path.",
        "The Cosmic Cycle of Yajna — Contributing back to society and nature in the sacred spirit of mutual sacrifice.",
        "Loka-sangraha (Exemplary Leadership) — Setting inspiring standards through noble personal conduct for the welfare of the world.",
        "Conquering Kama (Selfish Desire) and Krodha (Anger) — Overcoming inner vices through higher spiritual intellect."
      ],
      hi: [
        "कर्म से कोई प्राणी एक क्षण भी मुक्त नहीं रह सकता; अतः निस्वार्थ कर्तव्य-पालन ही सर्वश्रेष्ठ योग है।",
        "यज्ञ-चक्र (पारस्परिक त्याग) — प्रकृति और समाज से जो प्राप्त हो, उसे सेवा रूपी आहुति से लौटाना।",
        "लोक-संग्रह (नेतृत्व) — श्रेष्ठ पुरुष जैसा आचरण करते हैं, सारा समाज उसी का अनुकरण करता है।",
        "काम और क्रोध मनुष्य के सबसे बड़े शत्रु हैं, जिन्हें बुद्धि और आत्म-संयम से जीतना आवश्यक है।"
      ],
      te: [
        "ఏ ప్రాణి కూడా ఒక్క క్షణం కూడా కర్మ చేయకుండా ఉండలేదు; నిస్వార్థ కర్తవ్య పాలనే ఉత్తమ యోగం.",
        "యజ్ఞ చక్రం — సమాజం మరియు ప్రకృతి నుండి పొందిన దానిని నిస్వార్థ సేవ మరియు త్యాగంతో తిరిగి అందించడం.",
        "లోకసంగ్రహం (ఆదర్శ నాయకత్వం) — ఉత్తమ వ్యక్తులు ఆచరించే మార్గాన్నే సామాన్య ప్రజలు అనుసరిస్తారు.",
        "కామం మరియు క్రోధం ఆత్మకు పరమ శత్రువులు, వాటిని ఆత్మజ్ఞానము మరియు బుద్ధి ద్వారా జయించాలి."
      ],
    },
    totalShlokas: 43,
    shlokas: chapter3Shlokas,
  },
  "4": {
    number: 4,
    titleKey: "ch4_title",
    subKey: "ch4_subtitle",
    sanskritTitle: "ज्ञान कर्म संन्यास योग",
    englishTitle: "Jnana Karma Sanyasa Yoga",
    introduction:
      "भगवद्गीता का चतुर्थ अध्याय 'ज्ञान कर्म संन्यास योग' दिव्य ज्ञान और कर्म के संन्यास का रहस्य उद्घाटित करता है। भगवान श्री कृष्ण यहाँ अवतार के उद्देश्य, चतुर्वर्ण व्यवस्था, कर्म-अकर्म-विकर्म के सूक्ष्म भेद और ज्ञान रूपी अग्नि द्वारा समस्त पापों व कर्म बंधनों के भस्म होने का उपदेश देते हैं। || The fourth chapter of the Bhagavad Gita, 'Jnana Karma Sanyasa Yoga', reveals the transcendental science of divine wisdom and renunciation of action. Sri Krishna expounds the purpose of divine incarnations (Avatara), the fourfold social order based on qualities and work, the subtle distinctions between action, inaction, and forbidden action, and how the blazing fire of spiritual wisdom consumes all karmic reactions.",
    keyThemes: {
      en: [
        "The primordial lineage of Yoga and the eternal Guru-Shishya Parampara.",
        "The divine nature of Lord Krishna's birth and deeds (Janma Karma Cha Me Divyam).",
        "The subtle distinctions between Action (Karma), Inaction (Akarma), and Forbidden Action (Vikarma).",
        "The blazing fire of transcendental knowledge that burns all karmic reactions to ashes (Jnanagnih Sarva-karmani)."
      ],
      hi: [
        "योग की सनातन परंपरा और गुरु-शिष्य परंपरा का अविनाशी चक्र।",
        "भगवान के दिव्य जन्म और कर्म का रहस्य (जन्म कर्म च मे दिव्यम्)।",
        "कर्म, अकर्म और विकर्म का सूक्ष्म दार्शनिक अंतर।",
        "ज्ञान रूपी पवित्र अग्नि जो समस्त कर्मों और पापों को भस्म कर देती है (ज्ञानाग्निः सर्वकर्माणि)।"
      ],
      te: [
        "సనాతన యోగ పరంపర మరియు గురు-శిష్య సంబంధం.",
        "భగవంతుని దివ్య జన్మ మరియు కర్మల రహస్యం (జన్మ కర్మ చ మే దివ్యమ్).",
        "కర్మ, అకర్మ మరియు వికర్మల మధ్య సూక్ష్మ భేదం.",
        "సమస్త కర్మ బంధాలను భస్మం చేసే దివ్య జ్ఞానాగ్ని (జ్ఞానాగ్నిః సర్వకర్మాణి)."
      ],
    },
    totalShlokas: 42,
    shlokas: chapter4Shlokas,
  },
  "5": {
    number: 5,
    titleKey: "ch5_title",
    subKey: "ch5_subtitle",
    sanskritTitle: "कर्म संन्यास योग",
    englishTitle: "Karma Sanyasa Yoga",
    introduction:
      "पांचवें अध्याय में अर्जुन पुनः संन्यास (ज्ञान मार्ग) और कर्मयोग (निष्काम कर्म) की तुलना करते हुए श्री कृष्ण से पूछते हैं कि दोनों में कौन सा मार्ग अधिक श्रेयस्कर है। भगवान श्री कृष्ण स्पष्ट करते हैं कि यद्यपि दोनों का गंतव्य एक ही मोक्ष है, किंतु साधन के रूप में कर्मयोग अधिक सुगम और श्रेष्ठ है। वे बताते हैं कि कर्म करते हुए भी अनासक्त भाव से कैसे ब्रह्म-निर्वाण और परम शांति प्राप्त की जा सकती है।",
    keyThemes: {
      en: [
        "Decisive synthesis between the path of action (Karma Yoga) and renunciation (Sannyasa).",
        "The true Sannyasi: Emotional freedom through transcending craving and aversion (Nirdvandva).",
        "Equivalence of Sankhya and Yoga: Diverse roads culminating in the identical summit of liberation.",
        "The lotus leaf analogy: Living untainted in the world by offering all actions to the Supreme.",
        "Attainment of Brahmanirvana and inner serenity through self-control and meditation.",
      ],
      hi: [
        "कर्म-संन्यास और निष्काम कर्मयोग का दिव्य समन्वय व तुलना।",
        "नित्य संन्यासी का वास्तविक स्वरूप: राग-द्वेष से परे होकर सहज मुक्ति।",
        "सांख्य और कर्मयोग का एकत्व: दोनों मार्गों का अंतिम फल एक ही परमात्मा की प्राप्ति।",
        "कमल-पत्र की भाँति संसार में रहते हुए भी समस्त कर्मों के बंधनों से पूर्ण निर्लेप रहना।",
        "इंद्रिय-संयम और आत्म-स्थिति द्वारा ब्रह्म-निर्वाण व परम शांति की प्राप्ति।",
      ],
      te: [
        "కర్మ సన్న్యాసము మరియు నిష్కామ కర్మయోగం మధ్య సమన్వయం.",
        "నిత్య సన్న్యాసి లక్షణాలు: రాగద్వేషాలకు అతీతమైన మనస్సు.",
        "సాంఖ్య మరియు కర్మయోగాల ఏకత్వం: ఒకే ముక్తి స్థానం.",
        "తామరాకుపై నీటిబొట్టులా సంసార బంధాలకు అంటని జీవన విధానం.",
        "ఇంద్రియ నిగ్రహం మరియు ఆత్మస్థితి ద్వారా బ్రహ్మనిర్వాణ ప్రాప్తి.",
      ],
    },
    totalShlokas: 29,
    shlokas: chapter5Shlokas,
  },
  "6": {
    number: 6,
    titleKey: "ch6_title",
    subKey: "ch6_subtitle",
    sanskritTitle: "आत्मसंयम योग",
    englishTitle: "Dhyana Yoga / Atma Samyama Yoga",
    introduction:
      "भगवद्गीता का छठा अध्याय 'आत्मसंयम योग' (जिसे 'ध्यान योग' भी कहा जाता है) मन की चंचलता को जीतकर आत्म-साक्षात्कार प्राप्त करने का व्यावहारिक विज्ञान है। भगवान श्री कृष्ण यहाँ ध्यान की संपूर्ण विधि—उचित आसन, एकाग्रता, आहार-विहार का नियमन, और प्राणायाम—विस्तार से समझाते हैं। वे अर्जुन को सिखाते हैं कि मनुष्य का अपना मन ही उसका सबसे बड़ा मित्र है और असंयमित होने पर वही उसका सबसे बड़ा शत्रु है। जब अर्जुन मन की चंचलता (वायु की भाँति रोकना कठिन) का प्रश्न उठाते हैं, तो श्री कृष्ण 'अभ्यास' और 'वैराग्य' द्वारा मन को वश में करने का मार्ग बताते हैं। || The sixth chapter of the Bhagavad Gita, 'Atma Samyama Yoga' (also known as 'Dhyana Yoga'), reveals the practical science of mastering the restless mind to attain divine self-realization. Sri Krishna elucidates the complete mechanics of meditation—proper posture, concentration, moderation in food and sleep, and breath harmony. He teaches that an individual's own mind is their greatest friend when disciplined, and deadliest enemy when uncontrolled. When Arjuna questions the uncontrollable turbulence of the mind, the Lord provides the ultimate solution: persistent practice (Abhyasa) and dispassion (Vairagya).",
    keyThemes: {
      en: [
        "The mind as your greatest friend when disciplined, and worst enemy when uncontrolled.",
        "The definition of a true Yogi: renouncing selfish mental projections (Sankalpa).",
        "The ascending stages of Yoga: Selfless action (Karma) for aspirants and serenity (Shama) for the established.",
        "The practical mechanics of meditation: posture, sacred environment, and breath harmony.",
        "Moderation in living: Yoga is not for one who eats or sleeps too much, nor too little.",
        "Conquering the restless mind through consistent practice (Abhyasa) and dispassion (Vairagya).",
      ],
      hi: [
        "संयमित मन ही मनुष्य का सबसे बड़ा मित्र है और असंयमित मन सबसे बड़ा शत्रु।",
        "सच्चे योगी की पहचान: स्वार्थपूर्ण संकल्पों और कामनाओं का संपूर्ण संन्यास।",
        "योग की दो अवस्थाएं: साधक के लिए निष्काम कर्म और सिद्ध योगी के लिए शम (मानसिक शांति)।",
        "ध्यान की व्यावहारिक प्रक्रिया: पवित्र स्थान, सम आसन और दृष्टि की एकाग्रता।",
        "जीवन में सम्यक संतुलन: अति-भोजन या उपवास, और अति-निद्रा या जागरण से योग सिद्ध नहीं होता।",
        "अभ्यास और वैराग्य द्वारा चंचल मन पर विजय प्राप्त करने का अमोघ उपाय।",
      ],
      te: [
        "నిగ్రహించబడిన మనస్సు పరమ మిత్రుడు, నియంత్రణ లేని మనస్సు పరమ శత్రువు.",
        "నిజమైన యోగి లక్షణం: స్వార్థ సంకల్పాల మరియు కోరికల త్యాగం.",
        "యోగ సాధనలో రెండు దశలు: సాధకుడికి నిష్కామ కర్మ, సిద్ధుడికి మనశ్శాంతి (శమము).",
        "ధ్యాన సాధన విధానం: పవిత్ర ప్రదేశం, సరైన ఆసనము మరియు దృష్టి ఏకాగ్రత.",
        "జీవితంలో సమతుల్యత: అతిగా తినడం లేదా నిద్రపోవడం యోగానికి అనుకూలం కాదు.",
        "అభ్యాసము మరియు వైరాగ్యము ద్వారా చంచల మనస్సును వశపరుచుకోవడం.",
      ],
    },
    totalShlokas: 47,
    shlokas: chapter6Shlokas,
  },
  "7": {
    number: 7,
    titleKey: "ch7_title",
    subKey: "ch7_subtitle",
    sanskritTitle: "ज्ञानविज्ञान योग",
    englishTitle: "Jnana Vijnana Yoga",
    introduction:
      "भगवद्गीता का सातवाँ अध्याय 'ज्ञानविज्ञान योग' तत्वज्ञान (सैद्धांतिक सत्य) और विज्ञान (प्रत्यक्ष आत्म-अनुभूति) का अनुपम संगम है। भगवान श्री कृष्ण यहाँ अपनी दो प्रकृतियों—अपरा (आठ घटकों वाली भौतिक प्रकृति: भूमि, जल, अग्नि, वायु, आकाश, मन, बुद्धि, अहंकार) और परा (जीव शक्ति/चेतना)—का रहस्य खोलते हैं। वे बताते हैं कि जैसे धागे में मणियाँ पिरोई होती हैं, वैसे ही संपूर्ण ब्रह्मांड उन्हीं में ओत-प्रोत है। वे जल में रस, सूर्य-चंद्रमा में प्रभा, और ओंकार में शब्द हैं। भगवान यहाँ चार प्रकार के भक्तों (आर्त, जिज्ञासु, अर्थार्थी, ज्ञानी) का वर्णन करते हैं और अनन्य ज्ञानी भक्त को अपना ही स्वरूप बताते हैं। || The seventh chapter of the Bhagavad Gita, 'Jnana Vijnana Yoga' (The Yoga of Knowledge and Wisdom), reveals the mystery of the Absolute Truth and experiential divine realization. Sri Krishna explains His two energies—Apara Prakriti (the eightfold material energy: earth, water, fire, air, space, mind, intellect, and ego) and Para Prakriti (the spiritual energy of conscious souls). He declares that all existence is strung upon Him like pearls on a sacred thread. He identifies the four types of pious seekers—the distressed, the seeker of knowledge, the seeker of wealth, and the wise seer—and proclaims the wise, surrendered devotee as His very Self.",
    keyThemes: {
      en: [
        "The dual energies of the Divine: Material nature (Apara Prakriti) and the living conscious soul (Para Prakriti).",
        "Sri Krishna as the ultimate source, sustainer, and dissolver of the entire cosmic manifestation.",
        "The Divine essence in all elements: The taste in water, the radiance of the sun, and the sacred Om in the Vedas.",
        "Maya and the three Gunas: The divine illusory energy that is impossible to overcome without surrender.",
        "The four types of seekers: The distressed, the seeker of wealth, the curious inquirer, and the wise devotee."
      ],
      hi: [
        "भगवान की दोहरी प्रकृतियाँ: आठ तत्वों वाली अपरा (भौतिक) प्रकृति और परा (चेतन जीव) प्रकृति।",
        "श्री कृष्ण ही संपूर्ण ब्रह्मांड के मूल उद्भव, पालनकर्ता और प्रलयकर्ता हैं (सूत्र में मणियों के समान)।",
        "सृष्टि के समस्त तत्वों में परमात्मा का सार: जल में रस, सूर्य-चंद्र में प्रकाश, और वेदों में प्रणव (ॐ)।",
        "त्रिगुणमयी दैवी माया: जिसे पार करना दुष्कर है, किंतु भगवान की शरण लेने पर सहज ही पार हो जाती है।",
        "चार प्रकार के भक्त: आर्त (दुःखी), अर्थार्थी (इच्छुक), जिज्ञासु और ज्ञानी (जिसमें ज्ञानी भक्त भगवान को अत्यंत प्रिय है)।"
      ],
      te: [
        "పరమాత్మ యొక్క ద్వంద్వ శక్తులు: అపరా ప్రకృతి (భౌతిక జగత్తు) మరియు పరా ప్రకృతి (జీవశక్తి).",
        "సమస్త విశ్వానికి శ్రీకృష్ణుడే మూలకారణం, పోషకుడు మరియు లయకారుడు.",
        "సృష్టిలోని ప్రతి వస్తువులో పరమాత్మ సారాంశం: నీటిలో రుచి, సూర్యచంద్రులలో కాంతి, వేదాలలో ఓంకారము.",
        "త్రిగుణాత్మక దైవీ మాయ: భగవంతునికి ఆత్మసమర్పణ చేసినప్పుడే ఈ మాయను దాటగలము.",
        "నాలుగు రకాల భక్తులు: ఆర్తుడు, అర్థార్థి, జిజ్ఞాసువు మరియు జ్ఞాని (జ్ఞాని భగవంతునికి అత్యంత ప్రియమైనవాడు)."
      ],
    },
    totalShlokas: 30,
    shlokas: chapter7Shlokas,
  },
  "8": {
    number: 8,
    titleKey: "ch8_title",
    subKey: "ch8_subtitle",
    sanskritTitle: "अक्षरब्रह्म योग",
    englishTitle: "Akshara Brahma Yoga",
    introduction:
      "भगवद्गीता का आठवाँ अध्याय 'अक्षरब्रह्म योग' जीवन, मृत्यु और परम मुक्ति (मोक्ष) के परम विज्ञान का अनावरण करता है। अर्जुन के सात प्रश्नों—ब्रह्म, अध्यात्म, कर्म, अधिभूत, अधिदैव, अधियज्ञ और मृत्यु के समय परमात्मा के स्मरण—का उत्तर देते हुए भगवान श्री कृष्ण समझाते हैं कि अंतकाल में मनुष्य जिस भाव का स्मरण करते हुए देह त्यागता है, उसी भाव को वह प्राप्त होता है ('यं यं वापि स्मरन्भावं')। अतः वे निरंतर 'मामनुस्मर युध्य च' (मेरा स्मरण करते हुए कर्तव्य-युद्ध करो) का अमर संदेश देते हैं। वे ओंकार (ॐ) की साधना, योगधारणा, और उत्तरायण-दक्षिणायन (शुक्ल और कृष्ण) दोनों मार्गों का आध्यात्मिक रहस्य प्रकट करते हैं। || The eighth chapter of the Bhagavad Gita, 'Akshara Brahma Yoga' (The Yoga of the Imperishable Absolute), unveils the profound science of life, death, and supreme spiritual liberation. Answering Arjuna’s seven inquiries regarding Brahman, Adhyatma, Karma, Adhibhuta, Adhidaiva, Adhiyajna, and consciousness at the moment of passing, Sri Krishna reveals that one’s final state of mind determines their next destination. Thus, He delivers the timeless directive: 'Remember Me at all times and perform your duty.' He expounds the meditation on the sacred syllable Om, yogic concentration, and the two cosmic paths of departure—the path of light (leading to liberation) and the path of darkness (leading to return).",
    keyThemes: {
      en: [
        "The definitions of Brahman (the Absolute), Adhyatma (the soul), Karma (creation), and Adhiyajna (the indwelling Lord).",
        "The pivotal law of transition: One attains whatever state of being they remember at the time of death (Yam Yam Vapi Smaran Bhavam).",
        "The supreme prescription: 'Remember Me at all times and fight' (Mam Anusmara Yudhya Cha)—harmonizing meditation with daily duty.",
        "Yoga of the sacred syllable Om (Pranava) and concentrating the life-force in the Ajna chakra.",
        "The two cosmic pathways after death: The Path of Light (Shukla Gati - no return) and the Path of Darkness (Krishna Gati - cycle of return)."
      ],
      hi: [
        "ब्रह्म (परम सत्य), अध्यात्म (जीवात्मा), कर्म (सृष्टि-चक्र) और अधियज्ञ (हृदयस्थ परमात्मा) की वैज्ञानिक परिभाषाएं।",
        "मृत्यु के समय चेतना का शाश्वत नियम: अंतकाल में मनुष्य जिस भाव का स्मरण करता है, वही गति प्राप्त करता है।",
        "जीवन का मूल मंत्र: 'मामनुस्मर युध्य च'—हर क्षण परमात्मा का स्मरण करते हुए अपने सांसारिक कर्तव्यों का निष्ठा से पालन।",
        "ओंकार (ॐ) की एकाग्र साधना और प्राणों को आज्ञा चक्र में स्थित करने की यौगिक विधि।",
        "प्रयाण के दो मार्ग: शुक्ल मार्ग (प्रकाश का मार्ग, जिससे मोक्ष मिलता है) और कृष्ण मार्ग (अंधकार का मार्ग, जिससे पुनर्जन्म होता है)।"
      ],
      te: [
        "బ్రహ్మము, అధ్యాత్మము, కర్మము మరియు అధియజ్ఞము యొక్క దైవీయ నిర్వచనాలు.",
        "మరణ సమయ నియమము: అంతకాలమందు మానవుడు దేనిని స్మరించునో ఆ భావాన్నే పొందుతాడు.",
        "జీవన మూల సూత్రం: 'మామనుస్మర యుధ్య చ'—ప్రతి క్షణం పరమాత్మను స్మరిస్తూ కర్తవ్యాన్ని నిర్వహించడం.",
        "ఓంకార (ॐ) ఏకాగ్ర సాధన మరియు ప్రాణవాయువును ఆజ్ఞా చక్రంలో నిలుపు యోగ పద్ధతి.",
        "ప్రయాణ మార్గాలు: శుక్ల మార్గం (ముక్తి మార్గము) మరియు కృష్ణ మార్గం (పునర్జన్మ మార్గము)."
      ],
    },
    totalShlokas: 28,
    shlokas: chapter8Shlokas,
  },
  "9": {
    number: 9,
    titleKey: "ch9_title",
    subKey: "ch9_subtitle",
    sanskritTitle: "राजविद्याराजगुह्य योग",
    englishTitle: "Raja Vidya Raja Guhya Yoga",
    introduction:
      "भगवद्गीता का नवम अध्याय 'राजविद्याराजगुह्य योग' गीता का सर्वाधिक पावन और परम गोपनीय हृदय-स्थल है। भगवान श्री कृष्ण यहाँ अर्जुन को 'राजविद्या' (समस्त विद्याओं का राजा) और 'राजगुह्य' (समस्त रहस्यों का राजा) का उद्घाटन करते हैं। वे समझाते हैं कि यह संपूर्ण जगत उनके अव्यक्त रूप से व्याप्त है, सब प्राणी उनमें स्थित हैं किंतु वे भौतिक रूप से उनमें सीमित नहीं हैं। प्रकृति उनकी अध्यक्षता में समस्त सृष्टि को रचती है। वे सकाम कर्म और निष्काम अनन्य भक्ति का भेद स्पष्ट करते हुए अपना विश्व-प्रसिद्ध अभय-वचन देते हैं: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते । तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्'—जो अनन्य भाव से मेरा चिंतन करते हैं, उनका योगक्षेम मैं स्वयं वहन करता हूँ। || The ninth chapter of the Bhagavad Gita, 'Raja Vidya Raja Guhya Yoga' (The Yoga of the Sovereign Science and Sovereign Secret), is the spiritual summit and sanctum sanctorum of the Gita. Sri Krishna reveals to Arjuna the sovereign king of all sciences and secrets—knowledge that is supremely pure, directly realizable, righteous, blissful to practice, and eternal. He expounds His cosmic relationship with creation: pervading the entire cosmos in His unmanifest form, holding all beings within His energy, yet remaining completely transcendent and unattached. Material nature operates under His divine supervision. He contrasts ritualistic fruitive desire with pure unalloyed devotion, crowning the discourse with His immortal covenant: 'To those who always worship Me with exclusive devotion, I personally carry what they lack and preserve what they have (Yoga-kshemam vahamy aham).'",
    keyThemes: {
      en: [
        "The Sovereign Science and Sovereign Secret (Raja Vidya Raja Guhya) — supremely pure, directly realizable, righteous, and eternal.",
        "Cosmic Omnipresence & Transcendence: All beings dwell in the Divine, yet the Divine is not confined by them (Maya Tatam Idam Sarvam).",
        "Prakriti (Material Nature) creates and dissolves all cosmic manifestations under the supervision of the Supreme Lord.",
        "The Deluded vs. The Great Souls: Fools mock the Divine in human form, while Mahatmas worship Him with single-minded devotion.",
        "The Immortal Promise of Total Grace: 'To those who worship Me with undivided mind, I personally provide their needs and protect what they have' (Yoga-kshemam Vahamy Aham)."
      ],
      hi: [
        "राजविद्या एवं राजगुह्य: यह ज्ञान समस्त विद्याओं का राजा, परम पवित्र, प्रत्यक्ष अनुभूत होने वाला, धर्मयुक्त और अविनाशी है।",
        "ईश्वर की सर्वव्यापकता और असंगता: यह संपूर्ण जगत भगवान के अव्यक्त रूप से व्याप्त है; सब प्राणी उनमें हैं, पर वे उनमें सीमित नहीं हैं।",
        "प्रकृति भगवान की अध्यक्षता में चर-अचर सहित संपूर्ण सृष्टि का सृजन और संहार करती है (मयाध्यक्षेण प्रकृतिः सूयते सचराचरम्)।",
        "अज्ञानी बनाम महात्मा: मूढ़ मनुष्य भगवान के मनुष्य रूप का उपहास करते हैं, जबकि महात्मा जन अनन्य प्रेम से उनका भजन करते हैं।",
        "भगवान का अमर अभय-वचन: 'जो अनन्य भाव से मेरा चिंतन करते हैं, उनके योगक्षेम (आवश्यकताओं की पूर्ति और संरक्षण) का भार मैं स्वयं उठाता हूँ।' (योगक्षेमं वहाम्यहम्)"
      ],
      te: [
        "రాజవిద్య మరియు రాజగుహ్యము: సమస్త విద్యలలో శ్రేష్ఠమైనది, పరమ పవిత్రమైనది, ప్రత్యక్ష అనుభవము మరియు శాశ్వతమైనది.",
        "సర్వవ్యాపకత్వము: సమస్త ప్రాణులు భగవంతునియందే ఉన్నవి, కానీ భగవంతుడు దేనికీ బద్ధుడై లేడు (మయా తతమిదం సర్వం).",
        "భగవంతుని పర్యవేక్షణలోనే ప్రకృతి సమస్త చరాచర సృష్టిని నడుపుతుంది.",
        "మూఢులు భగవంతుని దివ్యత్వాన్ని గుర్తించలేరు, కానీ మహాత్ములు అనన్య భక్తితో సేవిస్తారు.",
        "పరమాత్మ యొక్క అమృత వాగ్దానము: అనన్య భక్తితో సేవించే భక్తుల యోగక్షేమాలను భగవంతుడే స్వయంగా వహిస్తాడు (యోగక్షేమం వహామ్యహమ్)."
      ],
    },
    totalShlokas: 34,
    shlokas: chapter9Shlokas,
  },
  "10": {
    number: 10,
    titleKey: "ch10_title",
    subKey: "ch10_subtitle",
    sanskritTitle: "विभूति योग",
    englishTitle: "Vibhuti Yoga",
    introduction:
      "भगवद्गीता का दशम अध्याय 'विभूति योग' परमात्मा की असीम, अनंत और दिव्य विभूतियों (ऐश्वर्यों) का महाकाव्य है। भगवान श्रीकृष्ण यहाँ अर्जुन को — और समस्त मानवजाति को — यह अद्भुत रहस्य बताते हैं कि इस ब्रह्मांड में जो भी श्रेष्ठ, सुंदर, शक्तिशाली, तेजस्वी और प्रभावशाली है, वह सब परमात्मा का ही एक अंश और प्रकाश है। देवता हों या ऋषि, ग्रह हों या नक्षत्र, नदियाँ हों या पर्वत, वीर योद्धा हों या परम ज्ञानी — सबकी श्रेष्ठता उसी एक परम दिव्य चेतना की विभूति है। इस अध्याय का अध्ययन साधक की आँखें खोल देता है और वह संसार की हर वस्तु में परमात्मा का दर्शन करने लगता है।",
    keyThemes: {
      en: [
        "The unknowable divine origin: Even gods and sages cannot fully comprehend the Lord's prabhava (true nature and advent).",
        "Twenty divine emanations: Qualities like intelligence, wisdom, forgiveness, non-violence, equanimity, and even sorrow and fear all arise from the Divine.",
        "The immense catalog of vibhutis: Krishna reveals Himself as the best, greatest, and most luminous among all categories of existence.",
        "The essence of Yoga: All of creation is sustained by merely a fragment of divine power — Ekāṁśena sthito jagat.",
      ],
      hi: [
        "परम अज्ञेय उद्भव: देवता और महर्षि भी परमात्मा के प्रभव को पूर्णतः नहीं जान सकते।",
        "बीस दिव्य विभूतियाँ: बुद्धि, ज्ञान, क्षमा, अहिंसा, समता, सुख-दुख — सब परमात्मा से ही प्रकट होते हैं।",
        "विभूतियों की विशाल सूची: श्रीकृष्ण सृष्टि के प्रत्येक वर्ग में अपना सर्वश्रेष्ठ रूप प्रकट करते हैं।",
        "योग का सार: संपूर्ण जगत् उनकी शक्ति के एक अंश मात्र से धारण किया जाता है (एकांशेन स्थितो जगत्)।",
      ],
      te: [
        "తెలుసుకోలేని దివ్య ఉద్భవం: దేవతలు మరియు మహర్షులు కూడా భగవంతుని ప్రభవాన్ని పూర్తిగా అర్థం చేసుకోలేరు.",
        "ఇరవై దివ్య విభూతులు: బుద్ధి, జ్ఞానం, క్షమ, అహింస, సమత్వం, సుఖదుఃఖాలు అన్నీ భగవంతుని నుండే ఉద్భవిస్తాయి.",
        "విభూతుల వివరణ: శ్రీకృష్ణుడు సృష్టిలోని ప్రతి వర్గంలో తన అత్యుత్తమ రూపాన్ని వెల్లడిస్తాడు.",
        "యోగ సారం: సమస్త జగత్తు భగవంతుని శక్తిలో ఒక అంశం మాత్రమే (ఏకాంశేన స్థితో జగత్).",
      ],
    },
    totalShlokas: 42,
    shlokas: chapter10Shlokas,
  },
  "11": {
    number: 11,
    titleKey: "ch11_title",
    subKey: "ch11_subtitle",
    sanskritTitle: "विश्वरूप दर्शन योग",
    englishTitle: "Vishwaroopa Darshana Yoga",
    introduction:
      "श्रीमद्भगवद्गीता का एकादश अध्याय 'विश्वरूप दर्शन योग' संपूर्ण गीता का सबसे विस्मयकारी, अलौकिक और रोमांचकारी शिखर है। अर्जुन की उत्कट प्रार्थना पर भगवान श्रीकृष्ण उसे 'दिव्य दृष्टि' (दिव्य चक्षु) प्रदान करते हैं और अपना चराचर-व्यापक विराट विश्वरूप प्रकट करते हैं। इस रूप में अर्जुन सहस्रों मुख, नेत्र, सूर्य-समान तेज, समस्त लोकों, काल-मुख, और संपूर्ण ब्रह्मांड को एक ही स्थान पर समाहित देखता है। इस अध्याय में परमात्मा का सौम्य और संहारक दोनों रूप प्रकट होता है, जिससे अर्जुन को यह अंतिम बोध होता है कि काल के रूप में भगवान ही सब कुछ संचालित कर रहे हैं और मनुष्य केवल 'निमित्त मात्र' है।",
    keyThemes: {
      en: [
        "Arjuna's yearning for direct realization: Transitioning from hearing theoretical wisdom to seeking visual, experiential confrontation with the Divine.",
        "The gift of divine sight: Mortal eyes cannot behold the Infinite; Krishna grants the divine eye (Divya Chakshu) to reveal His cosmic form.",
        "The infinite cosmic vision: Millions of blazing suns, all gods, sages, planets, and realms coexisting in a single transcendental body.",
        "The revelation of Kala (Time): God reveals Himself as all-devouring Time, demanding that Arjuna arise as an instrument of cosmic destiny (Nimitta-matra).",
      ],
      hi: [
        "प्रत्यक्ष दर्शन की उत्कट प्रार्थना: सिद्धांत सुनने से आगे बढ़कर परमात्मा के विराट रूप का साक्षात् अनुभव करने की जिज्ञासा।",
        "दिव्य दृष्टि का वरदान: चर्म-चक्षुओं से अनंत को नहीं देखा जा सकता; श्रीकृष्ण अर्जुन को 'दिव्य चक्षु' प्रदान करते हैं।",
        "अनंत विश्वरूप का प्राकट्य: सहस्रों सूर्य, समस्त देवगण, ऋषि, ग्रह-नक्षत्र और काल-चक्र एक ही विराट देह में प्रत्यक्ष।",
        "महाकाल का साक्षात्कार: परमात्मा का सर्वग्रासी संहारक रूप और अर्जुन को ईश्वरीय कार्य में केवल 'निमित्त मात्र' बनने का आदेश।",
      ],
      te: [
        "ప్రత్యక్ష దర్శన కాంక్ష: బోధనలు వినడమే కాక పరమాత్మ విరాట్ రూపాన్ని ప్రత్యక్షంగా దర్శించాలనే అర్జునుని ఆకాంక్ష.",
        "దివ్య దృష్టి ప్రసాదం: సాధారణ నేత్రాలతో అనంతాన్ని చూడలేము; శ్రీకృష్ణుడు అర్జునునికి దివ్య చక్షువులను ప్రసాదిస్తాడు.",
        "అనంత విశ్వరూప దర్శనం: వేలాది సూర్యుల తేజస్సు, సమస్త దేవతలు, లోకాలు పరమాత్మ శరీరంలో ఏకకాలంలో దర్శనమిస్తాయి.",
        "మహాకాలుని సాక్షాత్కారం: సమస్తాన్ని లయం చేసే కాల స్వరూపంగా పరమాత్మ దర్శనమిచ్చి, అర్జునుడిని కేవలం నిమిత్తమాత్రునిగా నిలవమని ఆదేశిస్తాడు.",
      ],
    },
    totalShlokas: 55,
    shlokas: chapter11Shlokas,
  },
  "12": {
    number: 12,
    titleKey: "ch12_title",
    subKey: "ch12_subtitle",
    sanskritTitle: "भक्ति योग",
    englishTitle: "Bhakti Yoga",
    introduction:
      "श्रीमद्भगवद्गीता का द्वादश अध्याय 'भक्ति योग' संपूर्ण गीता के सबसे मधुर, प्रामाणिक और हृदयस्पर्शी अध्यायों में से एक है। अध्याय 11 के विराट विश्वरूप दर्शन के उपरांत, अर्जुन जिज्ञासा करते हैं कि सगुण-साकार भगवान की अनन्य उपासना श्रेष्ठ है या निर्गुण-निराकार ब्रह्म का ध्यान? भगवान श्रीकृष्ण दोनों मार्गों की प्रामाणिकता स्वीकार करते हुए देहधारियों के लिए सगुण भक्तियोग को परम सुगम, मधुर और सर्वोत्तम घोषित करते हैं। इसके साथ ही भगवान सच्चे भक्त के 35 से अधिक दिव्य लक्षणों — समता, क्षमा, करुणा, अनासक्ति, और निर्मल प्रेम — का विशद वर्णन करते हैं जो भगवान को अत्यंत प्रिय हैं।",
    keyThemes: {
      en: [
        "Saguṇa vs Nirguṇa Upāsanā: Resolving the ancient paradox between worshiping a personal loving God and meditating on the unmanifest Absolute.",
        "The supremacy and sweetness of Bhakti: Why devotional surrender is the most accessible, direct, and joyous path for embodied beings.",
        "The graded hierarchy of spiritual practice: From total mind absorption to regular yoga practice, dedicated selfless service, and finally renunciation of results.",
        "The 35 divine virtues of the ideal devotee: Living in freedom from envy, malice, attachment, and agitation, dear to the Divine.",
      ],
      hi: [
        "सगुण बनाम निर्गुण उपासना: सगुण-साकार भगवान की प्रेममयी भक्ति और अव्यक्त-निराकार ब्रह्म के ध्यान का तुलनात्मक बोध।",
        "भक्तियोग की सुगमता और मधुरता: देहधारियों के लिए अव्यक्त मार्ग का कठिन होना तथा सगुण भक्ति का सर्वसुलभ और कल्याणकारी मार्ग होना।",
        "आध्यात्मिक साधना के व्यावहारिक सोपान: मन को ईश्वर में लगाना, अभ्यास योग, भगवदर्थ कर्म करना, और कर्मफल का त्याग।",
        "आदर्श भक्त के दिव्य लक्षण: समता, क्षमा, अनासक्ति, निर्वैर भाव और शांत चित्त वाले भक्त भगवान को अत्यंत प्रिय हैं।",
      ],
      te: [
        "సగుణ వర్సెస్ నిర్గుణ ఉపాసన: సాకార భగవంతుని భక్తి మరియు నిరాకార బ్రహ్మ ధ్యానాల మధ్య తారతమ్య విచారణ.",
        "భక్తి యోగ సులభత మరియు మాధుర్యం: దేహధారులకు అవ్యక్త మార్గం కష్టతరం, సగుణ భక్తి అత్యంత సులభం మరియు శ్రేష్ఠం.",
        "ఆధ్యాత్మిక సాధనా క్రమం: మనస్సును భగవంతునిపై లగ్నం చేయడం, అభ్యాస యోగం, భగవత్ ప్రీత్యర్థ కర్మలు, కర్మఫల త్యాగం.",
        "భక్తుని దివ్య లక్షణాలు: అద్వేషం, కరుణ, సమత్వం, అహంకార రాహిత్యంతో కూడిన భక్తుడు భగవంతునికి అత్యంత ప్రియుడు.",
      ],
    },
    totalShlokas: 20,
    shlokas: chapter12Shlokas,
  },
  "13": {
    number: 13,
    titleKey: "ch13_title",
    subKey: "ch13_subtitle",
    sanskritTitle: "क्षेत्र-क्षेत्रज्ञ विभाग योग",
    englishTitle: "Kshetra Kshetragya Vibhaga Yoga",
    introduction:
      "श्रीमद्भगवद्गीता का त्रयोदश अध्याय 'क्षेत्र-क्षेत्रज्ञ विभाग योग' ज्ञान-षटक (अध्याय 13-18) का भव्य शुभारंभ है। यहाँ भगवान श्रीकृष्ण अर्जुन के छह मौलिक प्रश्नों — प्रकृति, पुरुष, क्षेत्र (शरीर), क्षेत्रज्ञ (आत्मा), ज्ञान, और ज्ञेय (परमात्मा) — का विशद दार्शनिक विवेचन करते हैं। भगवान स्पष्ट करते हैं कि यह 24 तत्वों से बना नाशवान शरीर 'क्षेत्र' है और इसमें साक्षी रूप से निवास करने वाली अजर-अमर चेतना 'क्षेत्रज्ञ' है। समस्त शरीरों में विद्यमान इस चेतन आत्मा को परमात्मा का ही अविभाज्य स्वरूप जानना और जड़ व चेतन के भेद को समझना ही सच्चा 'ज्ञान' है।",
    keyThemes: {
      en: [
        "The Six Metaphysical Pillars: In-depth inquiry into Prakriti (Nature), Purusha (Spirit), Kshetra (Field), Kshetragna (Knower), Jnana (Wisdom), and Jneya (Truth).",
        "The Field and the Knower: Distinguishing between the 24 material components of the body-mind complex and the silent conscious observer within.",
        "The Universal Knower: The profound non-dual truth that the indwelling consciousness in all creatures is one and the same Supreme Lord (Kshetrajnam capi mam viddhi).",
        "The 20 Virtues of True Knowledge: Humility, non-violence, patience, purity, steadfastness, self-control, and unswerving devotion as the hallmarks of genuine wisdom.",
      ],
      hi: [
        "छह तात्विक आधार: प्रकृति, पुरुष, क्षेत्र (शरीर), क्षेत्रज्ञ (जीवात्मा), ज्ञान और ज्ञेय (परमात्मा) का वैज्ञानिक व दार्शनिक विवेचन।",
        "क्षेत्र और क्षेत्रज्ञ का भेद: 24 तत्वों से बने भौतिक देह-मन के ढांचे (दृश्य) और उसके साक्षी ज्ञाता (द्रष्टा) का सूक्ष्म अंतर।",
        "सर्वव्यापी क्षेत्रज्ञ: घट-घट में वास करने वाली चैतन्य सत्ता को एक ही परमात्मा का स्वरूप जानना (क्षेत्रज्ञं चापि मां विद्धि)।",
        "ज्ञान के 20 दिव्य सद्गुण: अमानित्व (विनम्रता), अहिंसा, क्षमाशीलता, अंतःकरण की शुद्धि और अनन्य भक्ति ही सच्चा ज्ञान है।",
      ],
      te: [
        "ఆరు తాత్విక అంశాలు: ప్రకృతి, పురుషుడు, క్షేత్రం, క్షేత్రజ్ఞుడు, జ్ఞానం మరియు జ్ఞేయముల సమగ్ర విచారణ.",
        "క్షేత్ర మరియు క్షేత్రజ్ఞుల భేదం: 24 తత్వాల దేహ స్వభావం మరియు దానిని గమనించే అంతరాత్మ సాక్షి చైతన్య వివేకం.",
        "సర్వవ్యాప్త క్షేత్రజ్ఞుడు: సర్వ దేహములలో విలసిల్లే ఆత్మ చైతన్యం పరమాత్మయేనని తెలుసుకొనుట.",
        "జ్ఞాన సాధన దివ్య గుణాలు: వినయం, అహింస, ఓర్పు, శుద్ధి మరియు భగవద్భక్తులే నిజమైన జ్ఞాన లక్షణాలు.",
      ],
    },
    totalShlokas: 35,
    shlokas: chapter13Shlokas,
  },
};

const ChapterPage = () => {
  const { chapterNumber } = useParams<{ chapterNumber: string }>();
  const [currentShlok, setCurrentShlok] = useState(1);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [globalLang, setGlobalLang] = useState<"both" | "hindi" | "english">("both");
  const [fontScale, setFontScale] = useState<"normal" | "large" | "xlarge">("normal");
  const [showThemes, setShowThemes] = useState(true);
  const [jumpInput, setJumpInput] = useState("");

  const { language, t } = useLanguage();
  const chapter = chapterData[chapterNumber || "1"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentShlok(1);
    setIsMobileNavOpen(false);
    setJumpInput("");
  }, [chapterNumber]);

  // Observer to track which shlok is currently in view
  useEffect(() => {
    const handleScrollTracking = () => {
      const shlokCards = document.querySelectorAll<HTMLElement>("[data-shlok-number]");
      // Dynamically calculate based on viewport height for accurate mobile/desktop detection
      const scrollPosition = window.scrollY + Math.min(window.innerHeight * 0.45, 260);

      for (let i = shlokCards.length - 1; i >= 0; i--) {
        const card = shlokCards[i];
        if (card.offsetTop <= scrollPosition) {
          const num = parseInt(card.getAttribute("data-shlok-number") || "1", 10);
          setCurrentShlok(num);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollTracking);
  }, [chapterNumber]);

  // Lock body scroll and handle Escape key when mobile shlok drawer is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileNavOpen]);

  const handleShlokSelect = (shlok: number) => {
    setCurrentShlok(shlok);
    setIsMobileNavOpen(false);
    setTimeout(() => {
      const element = document.getElementById(`shlok-${shlok}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num) && num >= 1 && num <= chapter.totalShlokas) {
      handleShlokSelect(num);
      setJumpInput("");
    }
  };

  if (!chapter) {
    return (
      <div className="chapter-error">
        <h1>Chapter Not Found</h1>
        <p>This chapter is currently in preparation.</p>
        <Link to="/chapters" className="btn dark">
          View All Chapters
        </Link>
      </div>
    );
  }

  const shlokas =
    chapter.shlokas.length > 0
      ? chapter.shlokas
      : (Array.from({ length: chapter.totalShlokas }, (_, i) => ({
          number: i + 1,
          sanskritText: `श्लोक ${i + 1} — जल्द आ रहा है`,
          transliteration: `Shlok ${i + 1} — Coming Soon`,
          hindiMeaning: `अध्याय ${chapter.number} के श्लोक ${i + 1} का हिंदी अर्थ जल्द ही जोड़ा जाएगा।`,
          englishMeaning: `The meaning for Shlok ${i + 1} of Chapter ${chapter.number} will be added soon.`,
        })) as Shlok[]);

  // Localized main title and subtitle based on selected UI language
  const primaryTitle = language === "en" ? chapter.englishTitle : t(chapter.titleKey);
  const secondaryTitle = language === "en" ? chapter.sanskritTitle : chapter.englishTitle;
  const chapterTagline = t(chapter.subKey);
  const currentThemes = chapter.keyThemes[language] || chapter.keyThemes.en;

  return (
    <div className="chapter-page">
      <div className="chapter-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">{t("breadcrumb_home")}</Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link to="/chapters">{t("breadcrumb_chapters")}</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span>
            {t("breadcrumb_chapter")} {chapter.number}
          </span>
        </nav>

        {/* Quick Chapter Pill Switcher Bar */}
        <div className="chapter-pill-switcher">
          <div className="pill-switcher-label">
            <i className="ri-compass-3-line"></i>
            <span>{t("select_chapter")}</span>
          </div>
          <div className="pill-list">
            <Link
              to="/chapter/1"
              className={`chapter-pill ${chapter.number === 1 ? "active" : ""}`}
            >
              <span className="pill-num">1</span>
              <span>{t("ch1_title")}</span>
            </Link>
            <Link
              to="/chapter/2"
              className={`chapter-pill ${chapter.number === 2 ? "active" : ""}`}
            >
              <span className="pill-num">2</span>
              <span>{t("ch2_title")}</span>
            </Link>
            <Link
              to="/chapter/3"
              className={`chapter-pill ${chapter.number === 3 ? "active" : ""}`}
            >
              <span className="pill-num">3</span>
              <span>{t("ch3_title")}</span>
            </Link>
                        <Link
              to="/chapter/4"
              className={`chapter-pill ${chapter.number === 4 ? "active" : ""}`}
            >
              <span className="pill-num">4</span>
              <span>{t("ch4_title")}</span>
            </Link>
            <Link
              to="/chapter/5"
              className={`chapter-pill ${chapter.number === 5 ? "active" : ""}`}
            >
              <span className="pill-num">5</span>
              <span>{t("ch5_title")}</span>
            </Link>
            <Link
              to="/chapter/6"
              className={`chapter-pill ${chapter.number === 6 ? "active" : ""}`}
            >
              <span className="pill-num">6</span>
              <span>{t("ch6_title")}</span>
            </Link>
            <Link to="/chapters" className="chapter-pill all-pill">
              <i className="ri-list-unordered"></i>
              <span>{t("all_chapters_btn")}</span>
            </Link>
          </div>
        </div>

        <div className="chapter-layout">
          {/* Mobile Nav Trigger Button */}
          <div className="mobile-nav">
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open shlok list"
            >
              <span>
                <i className="ri-book-open-line"></i> {t("shlokas_list")} ({t("shlok_prefix")} {currentShlok}/{chapter.totalShlokas})
              </span>
              <i className="ri-menu-search-line"></i>
            </button>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <ShlokNavigation
              totalShlokas={chapter.totalShlokas}
              currentShlok={currentShlok}
              onShlokSelect={handleShlokSelect}
            />
          </aside>

          {/* Main Content */}
          <main className="chapter-content">
            {/* Header with peacock feather ornament */}
            <div className="chapter-header">
              <div className="chapter-header-left">
                <div className="chapter-number">{chapter.number}</div>
                <div>
                  <h1>{primaryTitle}</h1>
                  <p className="chapter-subtitle-en">
                    {secondaryTitle}
                  </p>
                  <p className="chapter-tagline">{chapterTagline}</p>
                </div>
              </div>
              <div className="chapter-header-right">
                <PeacockFeather className="header-feather" />
              </div>
            </div>

            {/* Stats Bar */}
            <div className="chapter-stats">
              <span>
                <i className="ri-book-2-line"></i> {chapter.totalShlokas} {t("verses_suffix")}
              </span>
              <span>
                <i className="ri-translate-line"></i> {t("stat_translations")}
              </span>
              <span>
                <i className="ri-file-text-line"></i> {t("stat_sanskrit")}
              </span>
            </div>

            {/* Key Themes Guide Banner (अध्याय सार एवं प्रमुख सूत्र) */}
            {currentThemes && (
              <div className="chapter-themes-box">
                <div
                  className="themes-header"
                  onClick={() => setShowThemes(!showThemes)}
                >
                  <div className="themes-title">
                    <span className="themes-icon">🕉️</span>
                    <h3>{t("core_insights")}</h3>
                  </div>
                  <button
                    className="themes-toggle-btn"
                    aria-label="Toggle themes view"
                  >
                    <span>{showThemes ? t("btn_hide") : t("btn_view")}</span>
                    <i
                      className={`ri-arrow-${showThemes ? "up" : "down"}-s-line`}
                    ></i>
                  </button>
                </div>

                {showThemes && (
                  <div className="themes-content">
                    <ul>
                      {currentThemes.map((pt, idx) => (
                        <li key={idx}>
                          <span className="theme-bullet">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Intro with peacock feather watermark */}
            <div className="chapter-intro">
              <div className="intro-peacock-watermark">
                <PeacockFeather />
              </div>
              <h2>
                <i className="ri-information-line"></i> {t("chapter_overview")}
              </h2>
              <p>{chapter.introduction}</p>
            </div>

            {/* Reading Comfort Controls Toolbar */}
            <div className="reading-toolbar">
              <div className="toolbar-section">
                <span className="toolbar-label">
                  <i className="ri-translate"></i> {t("toolbar_meaning_lang")}
                </span>
                <div className="toolbar-btn-group">
                  <button
                    className={`toolbar-btn ${globalLang === "both" ? "active" : ""}`}
                    onClick={() => setGlobalLang("both")}
                  >
                    {t("toolbar_lang_both")}
                  </button>
                  <button
                    className={`toolbar-btn ${globalLang === "hindi" ? "active" : ""}`}
                    onClick={() => setGlobalLang("hindi")}
                  >
                    {t("toolbar_lang_hindi")}
                  </button>
                  <button
                    className={`toolbar-btn ${globalLang === "english" ? "active" : ""}`}
                    onClick={() => setGlobalLang("english")}
                  >
                    {t("toolbar_lang_english")}
                  </button>
                </div>
              </div>

              <div className="toolbar-section">
                <span className="toolbar-label">
                  <i className="ri-font-size-2"></i> {t("toolbar_font_size")}
                </span>
                <div className="toolbar-btn-group font-group">
                  <button
                    className={`toolbar-btn ${fontScale === "normal" ? "active" : ""}`}
                    onClick={() => setFontScale("normal")}
                    title="Normal Size"
                  >
                    A
                  </button>
                  <button
                    className={`toolbar-btn ${fontScale === "large" ? "active" : ""}`}
                    onClick={() => setFontScale("large")}
                    title="Large Size"
                  >
                    A+
                  </button>
                  <button
                    className={`toolbar-btn ${fontScale === "xlarge" ? "active" : ""}`}
                    onClick={() => setFontScale("xlarge")}
                    title="Extra Large Size"
                  >
                    A++
                  </button>
                </div>
              </div>

              {/* Quick Shlok Jumper Form */}
              <form className="shlok-jumper-form" onSubmit={handleJumpSubmit}>
                <span className="toolbar-label">
                  <i className="ri-search-eye-line"></i> {t("toolbar_direct_jump")}
                </span>
                <div className="jumper-input-wrapper">
                  <input
                    type="number"
                    min="1"
                    max={chapter.totalShlokas}
                    placeholder={`1-${chapter.totalShlokas}`}
                    value={jumpInput}
                    onChange={(e) => setJumpInput(e.target.value)}
                    className="jumper-input"
                  />
                  <button type="submit" className="jumper-btn">
                    {t("btn_go")}
                  </button>
                </div>
              </form>
            </div>

            {/* Shlokas List */}
            <div className="shlokas-container">
              {shlokas.map((shlok) => (
                <ShlokCard
                  key={shlok.number}
                  number={shlok.number}
                  sanskritText={shlok.sanskritText}
                  transliteration={shlok.transliteration}
                  wordMeanings={shlok.wordMeanings}
                  hindiMeaning={shlok.hindiMeaning}
                  englishMeaning={shlok.englishMeaning}
                  lifeLesson={shlok.lifeLesson}
                  globalLang={globalLang}
                  fontScale={fontScale}
                />
              ))}
            </div>

            {/* Footer Navigation between chapters */}
            <div className="chapter-footer">
              {chapter.number > 1 && (
                <Link
                  to={`/chapter/${chapter.number - 1}`}
                  className="btn light"
                >
                  {t("prev_chapter")} (Ch {chapter.number - 1})
                </Link>
              )}
              <Link to="/chapters" className="btn outline">
                {t("all_18_chapters_footer")}
              </Link>
              {chapterData[(chapter.number + 1).toString()] && (
                <Link
                  to={`/chapter/${chapter.number + 1}`}
                  className="btn dark"
                >
                  {t("next_chapter")} (Ch {chapter.number + 1})
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Shlok Navigation Drawer Overlay */}
      {isMobileNavOpen && (
        <div
          className="shlok-drawer-backdrop"
          onClick={() => setIsMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Shlok Navigation Drawer (Bottom Sheet) */}
      <aside
        className={`shlok-drawer ${isMobileNavOpen ? "open" : ""}`}
        aria-label="Mobile shlok navigation drawer"
        aria-hidden={!isMobileNavOpen}
      >
        <div className="shlok-drawer-header">
          <div
            className="shlok-drawer-handle-bar"
            onClick={() => setIsMobileNavOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close drawer"
          />
          <div className="shlok-drawer-title-row">
            <div className="shlok-drawer-title-info">
              <span className="shlok-drawer-badge">
                {language === "hi"
                  ? `अध्याय ${chapter.number}`
                  : language === "te"
                  ? `అధ్యాయం ${chapter.number}`
                  : `Chapter ${chapter.number}`}
              </span>
              <h3 className="shlok-drawer-heading">{t("shlokas_list")}</h3>
              <span className="shlok-drawer-count">
                ({t("shlok_prefix")} {currentShlok}/{chapter.totalShlokas})
              </span>
            </div>
            <button
              type="button"
              className="shlok-drawer-close"
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Close shlok list"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>

        <div className="shlok-drawer-content">
          <ShlokNavigation
            totalShlokas={chapter.totalShlokas}
            currentShlok={currentShlok}
            onShlokSelect={handleShlokSelect}
          />
        </div>
      </aside>

      {/* Floating Shlok Navigation Button on Mobile */}
      <button
        type="button"
        className={`floating-btn ${isMobileNavOpen ? "active" : ""}`}
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
        title={t("shlokas_list")}
        aria-label="Toggle shlok navigation drawer"
        aria-expanded={isMobileNavOpen}
      >
        <i className={isMobileNavOpen ? "ri-close-line" : "ri-list-unordered"}></i>
        {!isMobileNavOpen && (
          <span className="floating-badge">{currentShlok}</span>
        )}
      </button>
    </div>
  );
};

export default ChapterPage;
