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
    tagline: "Comprehensive first aid and CPR skills to confidently handle medical emergencies and save lives.",
    overview: [
      "This all-in-one awareness program combines essential First Aid skills with CPR training, equipping participants to respond effectively to a wide range of medical emergencies — from wounds and fractures to cardiac arrest.",
      "The program is entirely hands-on: participants practice wound care, bandaging, emergency positioning and high-quality chest compressions on real equipment, guided by certified trainers with genuine emergency-care experience.",
    ],
    whoShouldAttend: [
      "Employees and designated workplace first aiders",
      "Teachers, school staff and childcare providers",
      "Hotel, restaurant and facility teams",
      "Security personnel and fitness professionals",
      "Parents, caregivers and individuals",
    ],
    learn: [
      "Assessing an emergency scene safely",
      "Wound care, bleeding control and bandaging",
      "Responding to burns, fractures and sprains",
      "Recognizing cardiac arrest and delivering CPR",
      "High-quality chest compressions — depth, rate and recoil",
      "Recovery position and casualty handling",
      "When and how to escalate to emergency services",
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
    tagline: "Essential first aid and CPR fundamentals for quick and effective emergency response.",
    overview: [
      "Designed for those who want a focused introduction to life-saving skills, this program covers the essential basics of first aid and CPR in a concise, practical format.",
      "Participants gain the confidence to handle common emergencies — from minor injuries to cardiac events — through guided practice and scenario-based learning.",
    ],
    whoShouldAttend: [
      "New employees and onboarding groups",
      "Office and admin staff",
      "Parents and home caregivers",
      "Volunteers and community groups",
      "Anyone new to first aid and emergency response",
    ],
    learn: [
      "Basic wound care and bandaging techniques",
      "Recognizing and responding to common emergencies",
      "Fundamentals of CPR for adults and children",
      "Using the recovery position correctly",
      "Managing fainting, seizures and sudden illness",
      "When to call emergency services",
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
    tagline: "Master CPR, defibrillator use and choking response — the critical skills for cardiac and airway emergencies.",
    overview: [
      "This focused awareness program covers the three most time-critical emergency interventions: CPR, AED defibrillation and choking response. When seconds matter, these skills make the difference between life and death.",
      "Every participant practices on CPR mannequins and AED trainer units in realistic scenarios, building muscle memory and confidence under pressure. Training follows current international guidelines.",
    ],
    whoShouldAttend: [
      "Corporate teams and workplace emergency responders",
      "HR, admin and HSE professionals",
      "Teachers, school staff and sports coaches",
      "Gym trainers and fitness professionals",
      "Hotels, malls, gyms and public venues",
    ],
    learn: [
      "Recognizing cardiac arrest and heart attack warning signs",
      "High-quality chest compressions and rescue breathing",
      "AED operation, pad placement and safety precautions",
      "Abdominal thrusts and back blows for choking",
      "Infant and child choking response techniques",
      "Integrating CPR with AED for maximum survival chances",
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
    tagline: "Prevent, detect and respond to fire emergencies with life-saving awareness and practical drills.",
    overview: [
      "Fire can spread through a building in minutes. This awareness program equips participants with the knowledge to prevent fires, detect hazards early, and respond safely during a fire emergency — potentially saving lives and property.",
      "The program covers fire extinguisher operation, evacuation procedures, and emergency assembly protocols, ensuring every participant knows exactly what to do when an alarm sounds.",
    ],
    whoShouldAttend: [
      "All employees as part of workplace safety training",
      "Facility managers and maintenance teams",
      "HSE and compliance officers",
      "Hotel, hospital and educational institution staff",
      "Security and floor warden teams",
    ],
    learn: [
      "Understanding fire triangle and common ignition sources",
      "Workplace fire hazard identification and prevention",
      "Types of fire extinguishers and their correct use",
      "Emergency evacuation planning and procedures",
      "Fire alarm systems and response protocols",
      "Roles and responsibilities during a fire emergency",
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
    slug: "stress-management-awareness",
    title: "Stress Management Awareness Program",
    shortTitle: "Stress Management",
    category: "wellbeing",
    tagline: "Recognize, manage and reduce workplace stress for better health, productivity and well-being.",
    overview: [
      "Chronic stress silently undermines health, productivity and team morale. This awareness program helps participants understand the science of stress, recognize its early warning signs, and adopt practical coping strategies.",
      "Through interactive exercises and evidence-based techniques, participants learn to manage daily pressures, build resilience and create a healthier work-life balance that lasts beyond the training room.",
    ],
    whoShouldAttend: [
      "Employees at all levels across organizations",
      "HR and people management teams",
      "Managers and team leaders",
      "Healthcare and frontline workers",
      "Anyone experiencing workplace or personal stress",
    ],
    learn: [
      "Understanding stress — causes, types and physiological effects",
      "Identifying personal stress triggers and patterns",
      "Evidence-based relaxation and breathing techniques",
      "Time management and prioritization strategies",
      "Building emotional resilience and coping skills",
      "Creating a sustainable work-life balance plan",
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
    tagline: "Foster mental health awareness, empathy and supportive conversations in the workplace.",
    overview: [
      "Mental health challenges affect one in four people — yet most go unrecognized at work. This awareness program builds understanding of common mental health conditions, reduces stigma, and equips participants with basic counselling skills.",
      "Participants learn to recognize signs of distress in colleagues, initiate supportive conversations, and guide individuals toward professional help when needed — creating a psychologically safer workplace for everyone.",
    ],
    whoShouldAttend: [
      "HR professionals and people managers",
      "Team leaders and supervisors",
      "Peer support volunteers and well-being champions",
      "Healthcare and social service workers",
      "Anyone interested in supporting mental well-being at work",
    ],
    learn: [
      "Understanding common mental health conditions",
      "Recognizing signs of emotional distress in others",
      "Active listening and empathetic communication skills",
      "How to initiate a supportive conversation",
      "Setting healthy boundaries while offering support",
      "Guiding colleagues toward professional mental health resources",
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
    tagline: "Holistic wellness through balanced nutrition, mindful meditation and rejuvenating yoga practices.",
    overview: [
      "True well-being goes beyond the absence of illness — it demands a balanced approach to nutrition, mental calm and physical vitality. This wellness awareness program integrates diet guidance, meditation techniques and yoga practices into a single transformative session.",
      "Participants leave with practical knowledge they can apply immediately — from healthier meal planning and mindful eating habits to breathing exercises and gentle yoga sequences that reduce tension and boost energy throughout the day.",
    ],
    whoShouldAttend: [
      "Employees seeking a healthier lifestyle",
      "Corporate wellness program participants",
      "HR and well-being teams organizing health initiatives",
      "Healthcare and fitness professionals",
      "Anyone interested in holistic health and self-care",
    ],
    learn: [
      "Fundamentals of balanced nutrition and meal planning",
      "Understanding macronutrients, micronutrients and hydration",
      "Introduction to mindfulness and guided meditation",
      "Breathing techniques for stress reduction and focus",
      "Gentle yoga sequences for flexibility and relaxation",
      "Building sustainable daily wellness habits",
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
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
