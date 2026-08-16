import { useTranslation } from 'react-i18next';

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const tr = (viText, enText) => {
    if (!isEn) return viText;
    return enText || viText;
  };

  return { t, i18n, isEn, tr, lang: i18n.language };
};

export const getCategoryLabel = (cat, isEn) => {
  if (!isEn) return cat;
  const map = {
    'Tất cả': 'All',
    'An toàn nhà ở': 'Home Safety',
    'An toàn tại nhà': 'Home Safety',
    'Tri ân khách hàng': 'Customer Appreciation',
    'Chăm sóc sức khỏe': 'Healthcare',
    'Sữa': 'Nutrition & Milk',
    'Tin tức': 'News & Updates'
  };
  return map[cat] || cat;
};

export const translateArticle = (article, isEn) => {
  if (!article || !isEn) return article;

  const translated = JSON.parse(JSON.stringify(article));
  translated.category = getCategoryLabel(translated.category, true);

  const enArticles = {
    'nghi-ngo-dot-quy-o-nguoi-cao-tuoi-nhung-viec-khong-nen-lam': {
      title: "Suspecting Stroke in Seniors: 5 Things You Must NEVER Do While Waiting for Ambulance",
      description: "Pricking fingertips, scraping skin, drinking sugar water — these common actions can cost an elder their life during a stroke. Here is what to do and avoid."
    },
    'phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha': {
      title: "Elderly Fall Prevention at Home: 7 Crucial Guidelines for Families",
      description: "Falls are the leading cause of injury in seniors. Learn how to audit your home environment and train balance for aging parents."
    },
    'trao-luu-chup-anh-mua-thu-ha-noi': {
      title: "Hanoi Autumn Photo Trend & Senior Health Care in Seasonal Changes",
      description: "Capturing beautiful Hanoi autumn moments while protecting aging parents from seasonal flu and respiratory risks."
    },
    'chuc-mung-ngay-quoc-te-phu-nu': {
      title: "Celebrating International Women's Day with ANTCARE Health Gifts",
      description: "Expressing deep gratitude to mothers and grandmothers with home healthcare companion packages."
    }
  };

  const key = translated.slug || translated.id;
  if (enArticles[key]) {
    translated.title = enArticles[key].title;
    translated.description = enArticles[key].description;
  }

  return translated;
};

export const translatePageData = (data, isEn) => {
  if (!data || !isEn) return data;

  const translated = JSON.parse(JSON.stringify(data));

  // 1. Situations
  if (translated.situations) {
    const enSituations = [
      {
        title: "“I want to escort my parents to medical checkups safely, but work is too busy”",
        description: "Professional medical escort service allows you to work with peace of mind while your parents receive dedicated care."
      },
      {
        title: "“I want my parents to have daily healthcare & physical exercise at home”",
        description: "Proactive healthcare program helps elderly parents train physical fitness, memory, and enjoy daily life."
      },
      {
        title: "“I want my loved ones to have warm companionship & tidy home care”",
        description: "Home visit service provides household assistance, light meal preparation, and comforting conversations with seniors."
      }
    ];
    translated.situations.forEach((item, idx) => {
      if (enSituations[idx]) {
        item.title = enSituations[idx].title;
        item.description = enSituations[idx].description;
      }
    });
  }

  // 2. Medical Shares
  if (translated.medicalShares) {
    const enShares = [
      {
        name: "Assoc. Prof. Dr. Nguyen Van Tuan",
        title: "Director of Institute of Mental Health (Bach Mai Hospital)",
        quote: "“In the stages of human life, old age is when people are most vulnerable to deep loneliness — a silent hazard to mental health.”"
      },
      {
        name: "Nurse Nguyen Kim Thanh",
        title: "Proactive Care Specialist",
        quote: "“Daily brain exercises are the golden key to preventing memory decline.”"
      }
    ];
    translated.medicalShares.forEach((item, idx) => {
      if (enShares[idx]) {
        item.name = enShares[idx].name;
        item.title = enShares[idx].title;
        item.quote = enShares[idx].quote;
      }
    });
  }

  // 3. Why ANTCARE
  if (translated.whyAntcare) {
    translated.whyAntcare.title = "Why Choose ANTCARE ?";
    translated.whyAntcare.quote = "“We believe health should not only be cared for after illness strikes.”";
    if (translated.whyAntcare.comparison) {
      const enComparison = [
        "Basic health parameter checks at home",
        "Tracking & comparing health metrics via App",
        "Physical recovery exercises tailored for seniors",
        "Brain training exercises tailored for seniors",
        "Daily medication reminders",
        "Door-to-door medical checkup transportation",
        "Pre and post-checkup health monitoring",
        "Companionship & connecting with family"
      ];
      translated.whyAntcare.comparison.forEach((row, idx) => {
        if (enComparison[idx]) {
          row.feature = enComparison[idx];
        }
      });
    }
  }

  // 4. Comprehensive Solutions (Section 4 Cards shown in screenshot!)
  if (translated.comprehensiveSolutions) {
    const enSolutions = [
      {
        title: "Health Assistant",
        description: "Adopting US Senior Fitness & Singapore Active Ageing standards, our professional team visits your home for vital checks, physical/brain exercises, and updates family via App.",
        features: [
          "Vital signs check: Blood pressure, heart rate, SpO2, blood sugar...",
          "Physical exercises",
          "Brain training exercises",
          "Daily medication reminders",
          "Weekly conversations & new experiences",
          "App report updates"
        ]
      },
      {
        title: "Medical Escort & Companionship",
        description: "Professional team escorting seniors and children to medical facilities safely and attentively.",
        features: [
          "Pre-booking medical appointments",
          "Pre-departure health check",
          "Door-to-door transportation",
          "Companionship throughout checkup",
          "Complete checkup reports via App"
        ]
      },
      {
        title: "Home Safety & Care",
        description: "Auditing home safety risks for seniors. Assisting household chores and sharing daily warm conversations.",
        features: [
          "Elderly home safety inspection",
          "Clearing safety hazards within scope",
          "Housekeeping or cooking support per request",
          "App notifications for house owners"
        ]
      },
      {
        title: "Medical Care Services",
        description: "ANTCARE platform connects families with experienced medical staff, systematically trained to support loved ones during illness or recovery.",
        features: [
          "In-home sick care",
          "In-hospital sick care",
          "Rehabilitation exercises"
        ]
      }
    ];

    translated.comprehensiveSolutions.forEach((item, idx) => {
      if (enSolutions[idx]) {
        item.title = enSolutions[idx].title;
        item.description = enSolutions[idx].description;
        item.features = enSolutions[idx].features;
      }
    });
  }

  // 5. Care Service Details (Section 5 Comparison Table)
  if (translated.careServiceDetails) {
    const enDetails = [
      {
        title: "Health Assistant",
        target: "Seniors needing periodic health monitoring, or those with chronic conditions.",
        goal: "Effective health metric control, maintaining timely medication routines.",
        details: [
          "Vital signs check: Blood pressure, heart rate, SpO2, blood sugar...",
          "Physical exercises",
          "Brain training exercises",
          "Daily medication reminders",
          "Weekly conversations & new experiences",
          "App report updates"
        ]
      },
      {
        title: "Medical Escort & Companionship",
        target: "Seniors & children needing specialist checkups or hospital follow-ups.",
        goal: "Medical safety, reducing time burden for family members.",
        details: [
          "Pre-booking medical appointments",
          "Pre-departure health check",
          "Door-to-door transportation",
          "Companionship throughout checkup",
          "Complete checkup reports via App"
        ]
      },
      {
        title: "Home Safety & Care",
        target: "Solitary seniors or those needing daily living assistance.",
        goal: "Ensuring nutrition, hygiene, and warm companionship.",
        details: [
          "Elderly home safety inspection",
          "Clearing safety hazards within scope",
          "Housekeeping or cooking support per request",
          "App notifications for house owners"
        ]
      },
      {
        title: "Medical Care Services",
        target: "Seniors facing illness or recovering after hospital stay.",
        goal: "Health recovery and stabilization.",
        details: [
          "In-home sick care",
          "In-hospital sick care",
          "Rehabilitation exercises"
        ]
      }
    ];

    translated.careServiceDetails.forEach((item, idx) => {
      if (enDetails[idx]) {
        item.title = enDetails[idx].title;
        item.target = enDetails[idx].target;
        item.goal = enDetails[idx].goal;
        item.details = enDetails[idx].details;
      }
    });
  }

  // 6. Health Monitor Packages
  if (translated.healthMonitorPackages) {
    const enPackages = [
      {
        name: "CARE PACKAGE",
        price: "990,000",
        unit: "VND/month",
        dailyPrice: "only 33,000 VND/day",
        suitability: "Suitable if parents remain active in daily living",
        frequency: "2 visits / month",
        features: [
          "Home visit & vital signs check: BP, HR, Temp, SpO2 (2 times/month)",
          "Physical & brain exercise (US Senior Fitness & Singapore Active Ageing)",
          "Companionship & technology experience with seniors",
          "Daily medication reminder messages",
          "Health status reports to family"
        ]
      },
      {
        name: "ATTENTION PACKAGE",
        price: "1,750,000",
        unit: "VND/month",
        tag: "Popular",
        suitability: "Suitable if parents have chronic conditions to monitor",
        frequency: "4 visits / month",
        features: [
          "Home visit & vital signs check: BP, HR, Temp, SpO2 (4 times/month)",
          "Physical & brain exercise (US Senior Fitness & Singapore Active Ageing)",
          "Companionship & technology experience with seniors",
          "Daily medication reminder messages",
          "Health status reports to family"
        ]
      },
      {
        name: "DEVOTION PACKAGE",
        price: "3,190,000",
        unit: "VND/month",
        suitability: "Suitable if parents need more daily companionship",
        frequency: "8 visits / month",
        features: [
          "Home visit & vital check: BP, HR, Temp, SpO2 + Blood Sugar test (8 times/month)",
          "Physical & brain exercise (US Senior Fitness & Singapore Active Ageing)",
          "Companionship & technology experience with seniors",
          "Daily medication reminder messages",
          "Health status reports to family"
        ]
      }
    ];

    translated.healthMonitorPackages.forEach((item, idx) => {
      if (enPackages[idx]) {
        item.name = enPackages[idx].name;
        item.price = enPackages[idx].price;
        item.unit = enPackages[idx].unit;
        if (enPackages[idx].dailyPrice) item.dailyPrice = enPackages[idx].dailyPrice;
        if (enPackages[idx].tag) item.tag = enPackages[idx].tag;
        item.suitability = enPackages[idx].suitability;
        item.frequency = enPackages[idx].frequency;
        item.features = enPackages[idx].features;
      }
    });
  }

  // 7. Medical Packages
  if (translated.medicalPackages) {
    const enMedPkgs = [
      "Medical Escort",
      "Hospital In-Patient Care",
      "In-Home Sick Care",
      "Home Safety & Care"
    ];
    translated.medicalPackages.forEach((item, idx) => {
      if (enMedPkgs[idx]) {
        item.title = enMedPkgs[idx];
      }
    });
  }

  // 8. Founder Story
  if (translated.founderStory) {
    translated.founderStory.title = "Story of ANT — Caring for the Nest";
    translated.founderStory.subtitle = "Dedicated to those who cared for us";
    translated.founderStory.quote = "“ANTCARE was born from a daughter's desire: to ensure parents are always cared for with love, dignity, and scientific standard.”";
    translated.founderStory.content = "Just as ants diligently care for their nest, ANTCARE's team of Health Assistants accompanies your parents with patience, affection, and professional expertise every single week.";
  }

  // 9. FAQ
  if (translated.faq) {
    const enFaq = [
      {
        question: "Are ANTCARE Health Assistants medical staff?",
        answer: "ANTCARE Health Assistants are trained in basic first aid, senior communication, and vital monitoring. They do not perform complex medical procedures or replace doctors."
      },
      {
        question: "How do families track the care progress?",
        answer: "Families receive detailed photo & metric reports via Zalo/App immediately after each home visit."
      },
      {
        question: "How can I register for a trial session?",
        answer: "You can click 'Get Free Consultation' or call Hotline 0969 032 360 for immediate assistance."
      }
    ];
    translated.faq.forEach((item, idx) => {
      if (enFaq[idx]) {
        item.question = enFaq[idx].question;
        item.answer = enFaq[idx].answer;
      }
    });
  }

  return translated;
};
