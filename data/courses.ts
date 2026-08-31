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
  /** Optional secondary showcase image displayed on the course detail page */
  secondaryImage?: string;
};

export const CATEGORY_META: Record<CourseCategory, { label: string; icon: "shield" | "leaf" }> = {
  emergency: { label: "Emergency & Safety Training", icon: "shield" },
  wellbeing: { label: "Health & Wellbeing Training", icon: "leaf" },
};

export const COURSES: Course[] = [
  {
    slug: "first-aid-cpr-training",
    title: "First Aid & CPR Training Program",
    shortTitle: "First Aid & CPR Training",
    category: "emergency",
    tagline: "A comprehensive program to respond effectively during common medical and emergency situations.",
    overview: [
      "A comprehensive program designed to help participants understand how to respond during common medical and emergency situations. The training introduces essential First Aid and CPR concepts and promotes confidence in taking appropriate action before professional help arrives.",
    ],
    whoShouldAttend: [
      "Corporate teams, schools, institutions, community groups and individuals interested in emergency preparedness.",
    ],
    learn: [
      "Basics of First Aid and emergency response",
      "Assessing an emergency situation safely",
      "CPR response techniques",
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
    title: "Basic First Aid & CPR Program",
    shortTitle: "Basic First Aid & CPR",
    category: "emergency",
    tagline: "A focused training program covering fundamental principles of First Aid and CPR.",
    overview: [
      "A focused training program covering the fundamental principles of First Aid and CPR. Participants gain essential knowledge of how to recognize an emergency and understand the immediate steps that may be required.",
    ],
    whoShouldAttend: [
      "Employees, students, educators, community members and individuals seeking basic emergency response skills.",
    ],
    learn: [
      "Introduction to basic First Aid",
      "Recognizing situations that require immediate attention",
      "CPR techniques",
      "Responding to unconsciousness",
      "Managing common injuries and bleeding",
      "Basic response to burns and fractures",
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
    title: "CPR, AED & Choking Program",
    shortTitle: "CPR, AED & Choking",
    category: "emergency",
    tagline: "Essential training on cardiac emergencies, CPR, AEDs and choking response.",
    overview: [
      "A focused program covering essential skills for cardiac emergencies, CPR, AEDs and choking response. Participants gain a clear understanding of quick and appropriate action during critical situations.",
    ],
    whoShouldAttend: [
      "Workplace teams, schools, organizations and individuals seeking focused emergency response skills.",
    ],
    learn: [
      "Understanding cardiac emergencies",
      "Recognizing when CPR is required",
      "CPR principles and practice",
      "Understanding the role of an AED",
      "AED-assisted emergency response",
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
    title: "Fire Safety Program",
    shortTitle: "Fire Safety Program",
    category: "emergency",
    tagline: "Understand fire risks, prevention practices and emergency evacuation preparedness.",
    overview: [
      "This program helps participants develop a better understanding of fire risks, prevention practices and emergency preparedness. The training focuses on promoting safe responses during fire-related emergencies.",
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
      "Handling fire extinguishers",
      "Safe evacuation procedures",
      "Emergency exits and assembly areas",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "flame",
    image: "/fire-safety.webp",
    imageAlt: "Fire safety training program session",
    cardImage: "/fire-safety.webp",
  },
  {
    slug: "ert-emergency-response-team",
    title: "Emergency Response Team (ERT) Program",
    shortTitle: "ERT Program",
    category: "emergency",
    tagline: "Understanding emergency preparedness, team responsibilities and coordinated response during workplace emergencies.",
    overview: [
      "An Emergency Response Team plays an important role in helping organizations prepare for unexpected incidents. This program provides participants with an understanding of emergency preparedness, team responsibilities and coordinated response during different types of workplace emergencies.",
    ],
    whoShouldAttend: [
      "Emergency Response Team members, safety officers, workplace managers, supervisors and employees responsible for emergency preparedness.",
    ],
    learn: [
      "Understanding the role and purpose of an Emergency Response Team",
      "Basic emergency preparedness principles",
      "Identifying potential workplace emergencies",
      "Roles and responsibilities of ERT members",
      "Emergency communication and coordination",
      "Evacuation procedures",
      "Responding effectively during emergency situations",
      "Importance of teamwork and clear communication",
      "Understanding emergency equipment and resources",
      "Post-emergency reporting and review",
    ],
    duration: "Customizable",
    modes: ["Onsite", "Classroom"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Emergency response team members undergoing crisis simulation training",
    cardImage: "/ert-training.png",
  },
  {
    slug: "posh-prevention-sexual-harassment",
    title: "POSH – Prevention of Sexual Harassment Program",
    shortTitle: "POSH Program",
    category: "emergency",
    tagline: "Understanding workplace behaviour, professional boundaries and the importance of preventing sexual harassment.",
    overview: [
      "A safe and respectful workplace is essential for every organization. This program is designed to help participants understand workplace behaviour, professional boundaries and the importance of preventing sexual harassment. The program promotes respect and responsible conduct while encouraging the creation of a safer and more inclusive working environment.",
    ],
    whoShouldAttend: [
      "Employees, managers, supervisors, HR teams, organizational leaders and workplace professionals.",
    ],
    learn: [
      "Understanding the importance of a respectful workplace",
      "Understanding sexual harassment and inappropriate workplace behaviour",
      "Understanding professional boundaries",
      "Recognizing inappropriate conduct and behaviour",
      "The importance of respect, dignity and inclusion",
      "Understanding individual responsibilities in the workplace",
      "Understanding reporting and support mechanisms",
      "Creating a safe and positive workplace culture",
      "Prevention through responsible behaviour",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "building",
    image: "/posh-awareness.webp",
    imageAlt: "POSH training program session",
    cardImage: "/posh-awareness.webp",
  },
  {
    slug: "stress-management-awareness",
    title: "Stress Management Program",
    shortTitle: "Stress Management",
    category: "wellbeing",
    tagline: "Practical approaches to understand stress, recognize triggers, and build positive coping habits.",
    overview: [
      "A practical program that helps participants understand stress and its impact on everyday life and work. The session introduces simple approaches that can support healthier responses to daily pressure.",
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
    imageAlt: "Stress management session with guided relaxation exercises",
    cardImage: "/stress-management.png",
  },
  {
    slug: "counselling-mental-wellbeing",
    title: "Counselling & Mental Wellbeing Program",
    shortTitle: "Counselling & Mental Wellbeing",
    category: "wellbeing",
    tagline: "Encouraging emotional wellbeing, supportive communication, empathy, and positive environments.",
    overview: [
      "This program encourages greater understanding of emotional and mental wellbeing. It focuses on supportive communication, empathy and the importance of creating a positive and understanding environment.",
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
    imageAlt: "Counselling and mental wellbeing training workshop",
    cardImage: "/counselling-wellbeing.png",
  },
  {
    slug: "diet-nutrition-meditation-yoga",
    title: "Diet & Nutrition, Meditation & Yoga – Wellness Program",
    shortTitle: "Diet & Nutrition, Meditation & Yoga",
    category: "wellbeing",
    tagline: "Holistic wellness exploring balanced nutrition, mindfulness, meditation, and yoga practices.",
    overview: [
      "A holistic wellness program focused on healthy lifestyle choices. Participants explore the role of balanced nutrition, mindfulness, meditation and yoga in supporting overall wellbeing.",
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
      "Meditation techniques and practice",
      "Breathing and relaxation techniques",
      "Basic yoga practices for wellbeing",
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
    secondaryImage: "/diet-nutrition.webp",
  },
  {
    slug: "female-healthcare-wellbeing",
    title: "Female Healthcare & Wellbeing Program",
    shortTitle: "Female Healthcare & Wellbeing",
    category: "wellbeing",
    tagline: "Encouraging better understanding of female health, self-care and wellbeing across different stages of life.",
    overview: [
      "Women's health and wellbeing are important aspects of overall personal and workplace wellness. This program is designed to encourage better understanding of female health, self-care and wellbeing across different stages of life. The program promotes health and encourages participants to develop healthy habits while understanding the importance of timely support and professional healthcare guidance when needed.",
    ],
    whoShouldAttend: [
      "Women employees, female students, women's groups, organizations, institutions and individuals interested in female health and wellbeing.",
    ],
    learn: [
      "Understanding the importance of female health and wellbeing",
      "Understanding common women's health concerns",
      "Importance of balanced nutrition and healthy lifestyle habits",
      "Physical and emotional wellbeing",
      "Stress management and self-care practices",
      "Importance of regular health check-ups",
      "Understanding the value of preventive healthcare",
      "Reproductive and menstrual health guidance",
      "Supporting wellbeing in the workplace and everyday life",
      "Knowing when to seek appropriate professional healthcare support",
    ],
    duration: "2–3 Hours",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "heart",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Women participating in a female healthcare and wellbeing training workshop",
    cardImage: "/female-healthcare.png",
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
