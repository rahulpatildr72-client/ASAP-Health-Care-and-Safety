/**
 * Single source of truth for all training programs.
 * Course cards, /courses, /courses/[slug] pages and the contact form's
 * course dropdown all render from this file.
 */

export type CourseCategory = "emergency" | "wellbeing";

export type Course = {
  slug: string;
  title: string;
  /** Short label for the course (used in category lists) */
  shortTitle: string;
  /** Category grouping */
  category: CourseCategory;
  /** Short description used on cards and meta descriptions. */
  tagline: string;
  overview: string[];
  whoShouldAttend: string[];
  learn: string[];
  duration: string;
  modes: string[];
  certification: string;
  /** lucide-react icon key resolved in components/CourseCard.tsx */
  icon: "cross" | "heart" | "zap" | "wind" | "shield" | "building" | "flame" | "brain" | "smile" | "apple";
  image: string;
  imageAlt: string;
  /** Local image used on the homepage card grid */
  cardImage: string;
};

export const CATEGORY_META: Record<CourseCategory, { label: string; icon: "shield" | "leaf" }> = {
  emergency: { label: "Emergency & Safety Training", icon: "shield" },
  wellbeing: { label: "Health & Wellbeing Training", icon: "leaf" },
};

export const COURSES: Course[] = [
  {
    slug: "first-aid-cpr-training",
    title: "First Aid & CPR Training – Awareness Program",
    shortTitle: "First Aid & CPR Training",
    category: "emergency",
    tagline: "A comprehensive awareness program to respond effectively during common medical and emergency situations.",
    overview: [
      "A comprehensive awareness program designed to help participants understand how to respond during common medical and emergency situations. The training introduces essential First Aid and CPR concepts and promotes confidence in taking appropriate action before professional help arrives.",
    ],
    whoShouldAttend: [
      "Corporate teams, schools, institutions, community groups and individuals interested in emergency preparedness.",
    ],
    learn: [
      "Basics of First Aid and emergency response",
      "Assessing an emergency situation safely",
      "CPR awareness and response techniques",
      "Responding to unconsciousness and medical emergencies",
      "Managing bleeding, burns and common injuries",
      "Understanding fractures and accident-related injuries",
      "Responding to choking emergencies",
      "Knowing when to seek emergency medical assistance",
    ],
    duration: "6 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "cross",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands-on bandaging practice during a first aid and CPR training session",
    cardImage: "/first-aid-training.png",
  },
  {
    slug: "basic-first-aid-cpr",
    title: "Basic First Aid & CPR – Awareness Program",
    shortTitle: "Basic First Aid & CPR",
    category: "emergency",
    tagline: "A focused training program covering fundamental principles of First Aid and CPR awareness.",
    overview: [
      "A focused training program covering the fundamental principles of First Aid and CPR. Participants gain essential awareness of how to recognize an emergency and understand the immediate steps that may be required.",
    ],
    whoShouldAttend: [
      "Employees, students, educators, community members and individuals seeking basic emergency response awareness.",
    ],
    learn: [
      "Introduction to basic First Aid",
      "Recognizing situations that require immediate attention",
      "CPR awareness",
      "Responding to unconsciousness",
      "Managing common injuries and bleeding",
      "Basic awareness of burns and fractures",
      "Responding to choking situations",
      "Understanding when to contact emergency services",
    ],
    duration: "4 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "heart",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Participants practicing basic first aid and CPR techniques",
    cardImage: "/cpr-training.png",
  },
  {
    slug: "cpr-aed-choking",
    title: "CPR, AED & Choking – Awareness Program",
    shortTitle: "CPR, AED & Choking",
    category: "emergency",
    tagline: "Essential awareness of cardiac emergencies, CPR, AEDs and choking response.",
    overview: [
      "A focused program covering essential awareness of cardiac emergencies, CPR, AEDs and choking response. Participants gain a better understanding of the importance of quick and appropriate action during critical situations.",
    ],
    whoShouldAttend: [
      "Workplace teams, schools, organizations and individuals seeking focused emergency response awareness.",
    ],
    learn: [
      "Understanding cardiac emergencies",
      "Recognizing when CPR may be required",
      "CPR principles and awareness",
      "Understanding the role of an AED",
      "Basic awareness of AED-assisted emergency response",
      "Recognizing choking emergencies",
      "Understanding appropriate choking response",
      "Knowing when to seek emergency assistance",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "zap",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Trainer demonstrating CPR and AED techniques during a workshop",
    cardImage: "/aed-training.png",
  },
  {
    slug: "fire-safety-awareness",
    title: "Fire Safety Awareness Program",
    shortTitle: "Fire Safety Awareness",
    category: "emergency",
    tagline: "Understand fire risks, prevention practices and emergency evacuation preparedness.",
    overview: [
      "This program helps participants develop a better understanding of fire risks, prevention practices and emergency preparedness. The training focuses on promoting awareness and safer responses during fire-related emergencies.",
    ],
    whoShouldAttend: [
      "Corporate organizations, workplaces, educational institutions, residential communities and other groups.",
    ],
    learn: [
      "Common causes of fire",
      "Identifying potential fire hazards",
      "Everyday fire prevention practices",
      "Understanding basic fire classifications",
      "Introduction to fire safety equipment",
      "Awareness of fire extinguishers",
      "Safe evacuation procedures",
      "Emergency exits and assembly areas",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "flame",
    image:
      "https://images.unsplash.com/photo-1586953208270-767fc7e3f180?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fire safety training session with extinguisher demonstration",
    cardImage: "/fire-safety.png",
  },
  {
    slug: "ert-emergency-response-team",
    title: "ERT (Emergency Response Team) Training Program",
    shortTitle: "ERT (Emergency Response Team)",
    category: "emergency",
    tagline: "Build a trained workplace Emergency Response Team to handle fire, medical, and disaster crises.",
    overview: [
      "An Emergency Response Team (ERT) is the first line of defense during workplace disasters, fires, medical emergencies, and evacuations. This comprehensive program prepares designated responders with tactical skills, incident command procedures, and life-saving techniques.",
      "Participants engage in hands-on simulations, triage drills, incident leadership exercises, and emergency control procedures to ensure rapid, coordinated, and safe crisis management in any workplace facility.",
    ],
    whoShouldAttend: [
      "Designated Emergency Response Team (ERT) members",
      "Floor Wardens and Safety Marshals",
      "Facility, HSE and Maintenance Personnel",
      "Security Team Leads and Supervisors",
      "Corporate Crisis Management Teams",
    ],
    learn: [
      "Incident Command System (ICS) and ERT team roles",
      "High-stress emergency evacuation & search protocols",
      "Advanced casualty triage and stabilization",
      "Fire containment and emergency equipment handling",
      "Effective crisis communication and crowd control",
      "Post-incident reporting and debriefing procedures",
    ],
    duration: "8 Hours",
    modes: ["Onsite", "Classroom"],
    certification:
      "Participants receive a certified ERT Responder certificate upon completing theoretical and practical evaluations.",
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Emergency response team members undergoing crisis simulation training",
    cardImage: "/ert-training.png",
  },
  {
    slug: "posh-prevention-sexual-harassment",
    title: "POSH (Prevention of Sexual Harassment) Awareness Program",
    shortTitle: "POSH Awareness Program",
    category: "emergency",
    tagline: "Foster a safe, respectful, and compliant workplace through POSH Act awareness and IC committee guidance.",
    overview: [
      "Compliance with the POSH (Prevention of Sexual Harassment) Act is essential for building a safe, inclusive, and respectful workplace culture. This awareness program educates employees, managers, and Internal Committees (IC) on legal frameworks, rights, and responsibilities.",
      "Through real-life case studies, interactive scenario discussions, and practical guidelines, participants gain a clear understanding of appropriate workplace behavior, complaint redresses, and anti-harassment policies.",
    ],
    whoShouldAttend: [
      "All employees across corporate and industrial sectors",
      "HR Professionals and Internal Committee (IC) members",
      "Managers, Supervisors and Team Leaders",
      "Legal, Compliance and Risk Management Officers",
      "Educational and Institutional Administrative Staff",
    ],
    learn: [
      "Understanding the POSH Act legal framework and definitions",
      "Identifying sexual harassment and workplace misconduct",
      "Employee rights, duties, and reporting procedures",
      "Role and functioning of the Internal Committee (IC)",
      "Conducting fair, unbiased, and confidential investigations",
      "Building a respectful, zero-tolerance workplace culture",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a POSH Compliance & Awareness Certificate of completion.",
    icon: "building",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Corporate team participating in a POSH awareness workshop",
    cardImage: "/posh-awareness.png",
  },
  {
    slug: "stress-management-awareness",
    title: "Stress Management Awareness Program",
    shortTitle: "Stress Management",
    category: "wellbeing",
    tagline: "Practical approaches to understand stress, recognize triggers, and build positive coping habits.",
    overview: [
      "A practical awareness program that helps participants understand stress and its impact on everyday life and work. The session introduces simple approaches that can support healthier responses to daily pressure.",
    ],
    whoShouldAttend: [
      "Employees, managers, students, institutions and individuals interested in improving everyday wellbeing.",
    ],
    learn: [
      "Understanding stress and common triggers",
      "Recognizing signs of stress",
      "Understanding the impact of stress",
      "Simple relaxation techniques",
      "Breathing and mindfulness practices",
      "Managing daily responsibilities",
      "Developing positive coping habits",
      "Supporting a healthier work-life balance",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "brain",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stress management awareness session with guided relaxation exercises",
    cardImage: "/stress-management.png",
  },
  {
    slug: "counselling-mental-wellbeing",
    title: "Counselling & Mental Wellbeing Awareness Program",
    shortTitle: "Counselling & Mental Wellbeing",
    category: "wellbeing",
    tagline: "Encouraging emotional wellbeing, supportive communication, empathy, and positive environments.",
    overview: [
      "This awareness program encourages greater understanding of emotional and mental wellbeing. It focuses on supportive communication, empathy and the importance of creating a positive and understanding environment.",
    ],
    whoShouldAttend: [
      "Workplace teams, educational institutions, organizations, community groups and individuals.",
    ],
    learn: [
      "Understanding mental and emotional wellbeing",
      "Recognizing signs of emotional difficulty",
      "Supportive communication and empathy",
      "Active listening skills",
      "Creating a supportive environment",
      "Understanding the importance of seeking help",
      "Reducing stigma and misconceptions",
      "Promoting positive wellbeing practices",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "smile",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Counselling and mental wellbeing awareness training workshop",
    cardImage: "/counselling-wellbeing.png",
  },
  {
    slug: "diet-nutrition-meditation-yoga",
    title: "Diet & Nutrition, Meditation & Yoga – Wellness Awareness Program",
    shortTitle: "Diet & Nutrition, Meditation & Yoga",
    category: "wellbeing",
    tagline: "Holistic wellness exploring balanced nutrition, mindfulness, meditation, and yoga practices.",
    overview: [
      "A holistic wellness awareness program focused on healthy lifestyle choices. Participants explore the role of balanced nutrition, mindfulness, meditation and yoga in supporting overall wellbeing.",
    ],
    whoShouldAttend: [
      "Corporate teams, institutions, community groups and individuals interested in developing healthier lifestyle habits.",
    ],
    learn: [
      "Basics of balanced nutrition",
      "Developing healthier eating habits",
      "The importance of hydration",
      "Making healthier lifestyle choices",
      "Introduction to mindfulness",
      "Meditation awareness and practice",
      "Breathing and relaxation techniques",
      "Basic yoga awareness and wellbeing practices",
    ],
    duration: "3–4 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "apple",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wellness program with meditation, yoga and nutrition guidance",
    cardImage: "/wellness-program.png",
  },
  {
    slug: "female-healthcare-wellbeing",
    title: "Awareness of Female Healthcare & Wellbeing Program",
    shortTitle: "Female Healthcare & Wellbeing",
    category: "wellbeing",
    tagline: "Empowering women with essential health knowledge, self-care practices and wellness strategies for every life stage.",
    overview: [
      "Women face unique health challenges across different life stages — from reproductive health and hormonal changes to mental well-being and chronic disease prevention. This awareness program provides practical, evidence-based knowledge to help women take charge of their health proactively.",
      "Through expert-led sessions, interactive discussions and self-assessment exercises, participants gain clarity on preventive healthcare, nutrition, emotional resilience and workplace wellness — creating a culture of care and empowerment.",
    ],
    whoShouldAttend: [
      "All female employees across organizations",
      "HR and Diversity & Inclusion teams",
      "Corporate wellness program coordinators",
      "Healthcare and social service professionals",
      "Anyone interested in women's health awareness",
    ],
    learn: [
      "Understanding women's health across life stages",
      "Reproductive health, menstrual wellness and hormonal balance",
      "Breast health awareness and early screening importance",
      "Nutrition, bone health and chronic disease prevention",
      "Managing stress, anxiety and emotional well-being",
      "Building sustainable self-care and wellness routines",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "heart",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Women participating in a female healthcare and wellbeing awareness workshop",
    cardImage: "/female-healthcare.png",
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
