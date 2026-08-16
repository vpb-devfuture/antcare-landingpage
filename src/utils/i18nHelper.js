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

  // Translation maps for articles by ID or slug
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

  // 4. Services
  if (translated.services) {
    const enServices = [
      {
        title: "Home Health Assistant",
        subtitle: "Periodic health metric tracking & physical exercise at home",
        description: "Vital signs measurement, medication box management, active ageing exercises, and post-session Zalo reports."
      },
      {
        title: "Hospital Companionship",
        subtitle: "Door-to-door medical escort & hospital procedure assistance",
        description: "Home pick-up, hospital procedure assistance, doctor note recording, and direct family reporting."
      },
      {
        title: "Electronic Health Profile",
        subtitle: "24/7 digital health monitoring for remote family members",
        description: "Continuous health metric storage, monthly trend analysis, and remote family access."
      },
      {
        title: "Family Training & Guidance",
        subtitle: "Fall prevention & home emergency response skills for families",
        description: "15-point home safety audit, stroke first aid training, and senior ergonomics guidance."
      }
    ];
    translated.services.forEach((item, idx) => {
      if (enServices[idx]) {
        item.title = enServices[idx].title;
        item.subtitle = enServices[idx].subtitle;
        item.description = enServices[idx].description;
      }
    });
  }

  // 5. Care Processes
  if (translated.careProcesses) {
    const enProcesses = [
      {
        step: "01",
        title: "Survey & Consultation",
        description: "Listening to family needs and evaluating the senior's health condition and living routines."
      },
      {
        step: "02",
        title: "Personalized Care Plan",
        description: "Building a tailored care roadmap suited for each individual elder and family condition."
      },
      {
        step: "03",
        title: "Assistant Matching",
        description: "Selecting the ideal Health Assistant matching personality, expertise, and living area."
      },
      {
        step: "04",
        title: "Companionship & Reporting",
        description: "Conducting weekly care visits and sending direct health metric reports to family."
      }
    ];
    translated.careProcesses.forEach((item, idx) => {
      if (enProcesses[idx]) {
        item.step = enProcesses[idx].step;
        item.title = enProcesses[idx].title;
        item.description = enProcesses[idx].description;
      }
    });
  }

  // 6. Service Packages
  if (translated.servicePackages) {
    const enPackages = [
      {
        name: "TOUCH Package",
        tag: "Trial Package",
        price: "299,000 VND / session",
        description: "Great starting choice for families to experience ANTCARE's home care service.",
        features: [
          "1 Home Health Assistant session (~80 mins)",
          "5 basic health parameter checks",
          "15-min Active Ageing exercise",
          "Medication box check & expiry audit",
          "Handwritten gift card & fresh flower",
          "Post-session Zalo report to family"
        ]
      },
      {
        name: "PEACE OF MIND Package",
        tag: "Most Recommended",
        price: "690,000 VND / session",
        description: "Comprehensive home care with printed health profile & 15-point safety audit.",
        features: [
          "All benefits included in TOUCH package",
          "First color-printed health record for parents",
          "15-point home safety & fall prevention audit",
          "Weekly fridge A4 medication chart",
          "Before & after session photo report"
        ]
      },
      {
        name: "FULFILLMENT Package",
        tag: "VIP Comprehensive",
        price: "1,290,000 VND / session",
        description: "Complete health monitoring & continuous follow-up consultation for family.",
        features: [
          "All benefits in PEACE OF MIND package",
          "Second visit after 2 weeks to re-measure metrics",
          "20-min phone consultation with family",
          "Priority membership upgrade evaluation"
        ]
      }
    ];
    translated.servicePackages.forEach((item, idx) => {
      if (enPackages[idx]) {
        item.name = enPackages[idx].name;
        item.tag = enPackages[idx].tag;
        item.price = enPackages[idx].price;
        item.description = enPackages[idx].description;
        item.features = enPackages[idx].features;
      }
    });
  }

  // 7. Founder Story
  if (translated.founderStory) {
    translated.founderStory.title = "Story of ANT — Caring for the Nest";
    translated.founderStory.subtitle = "Dedicated to those who cared for us";
    translated.founderStory.quote = "“ANTCARE was born from a daughter's desire: to ensure parents are always cared for with love, dignity, and scientific standard.”";
    translated.founderStory.content = "Just as ants diligently care for their nest, ANTCARE's team of Health Assistants accompanies your parents with patience, affection, and professional expertise every single week.";
  }

  // 8. FAQ
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
