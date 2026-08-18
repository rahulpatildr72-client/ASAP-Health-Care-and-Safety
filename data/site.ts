/**
 * Site-wide content and configuration.
 * Everything a non-developer might need to edit lives here or in data/courses.ts.
 */

/* PLACEHOLDER — set the real production domain before deploying. */
export const SITE_URL = "https://www.asaphealthsafety.in";

export const SITE_NAME = "ASAP Healthcare & Safety";

export const SITE_TAGLINE =
  "Professional First Aid, CPR, AED and Health & Safety Training designed to build confident lifesavers in workplaces, institutions and communities.";

export const CONTACT = {
  phone: "+91 99677 30940",
  phoneHref: "tel:+919967730940",
  /* PLACEHOLDER — replace with the real WhatsApp business number (digits only, country code first). */
  whatsapp: "91XXXXXXXXXX",
  email: "info@preciouslifemedihelp.com",
  location: "Goregaon West, Mumbai, Maharashtra, India",
  onlineNote: "Live online training available worldwide",
};

/* PLACEHOLDER — replace with your Web3Forms access key (https://web3forms.com). */
export const WEB3FORMS_KEY = "YOUR_WEB3FORMS_KEY";

/* ⚠ CLIENT TO CONFIRM — figures taken from the existing business website; verify before launch. */
export const STATS = [
  { value: 30000, suffix: "+", label: "People Trained" },
  { value: 28, suffix: "+", label: "Countries Reached" },
  { value: 250, suffix: "+", label: "Corporate Clients" },
  { value: 10, suffix: "+ Years", label: "Training Excellence" },
];

export const WHY_US = [
  {
    icon: "award",
    title: "Certified Professionals",
    description: "Training delivered by experienced medical professionals and certified instructors.",
  },
  {
    icon: "hand",
    title: "Practical Learning",
    description:
      "Participants practice on mannequins and real equipment until response becomes reflex — competence is demonstrated hands-on, not assumed.",
  },
  {
    icon: "sliders",
    title: "Customized Programs",
    description: "Every session can be adapted to your organization's environment and risks.",
  },
  {
    icon: "laptop",
    title: "Online & Onsite",
    description: "Flexible learning options for teams at one site or across many locations.",
  },
  {
    icon: "siren",
    title: "Real-World Emergency Skills",
    description: "Focused on practical response and calm decision-making, not only theory.",
  },
  {
    icon: "badge",
    title: "Professional Certification",
    description: "Participants receive appropriate certification after successful completion.",
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Choose Your Program",
    description: "Select the training that fits your team or your personal needs.",
  },
  {
    number: "02",
    title: "Schedule Your Session",
    description: "Choose online, onsite or classroom training at a time that works for you.",
  },
  {
    number: "03",
    title: "Learn & Practice",
    description: "Learn essential concepts and practice real emergency response techniques hands-on.",
  },
  {
    number: "04",
    title: "Get Certified",
    description: "Complete the program and receive your certification where applicable.",
  },
];

/* ⚠ CLIENT TO CONFIRM — credentials referenced from the existing business website.
   Do not present as verified until the client confirms and supplies official logos. */
export const CREDENTIALS = [
  {
    title: "AHA Guidelines",
    description: "CPR and First Aid programs based on the latest American Heart Association guidelines.",
  },
  {
    title: "International Approval",
    description: "Internationally recognized training center — accreditation details to be confirmed.",
  },
  {
    title: "Safety Council Membership",
    description: "Professional safety-body memberships — details to be confirmed by the client.",
  },
  {
    title: "Certified Instructors",
    description: "Sessions led by BLS instructors certified by recognized international bodies.",
  },
];

/* ⚠ CLIENT TO CONFIRM — founder details referenced from the existing business website. */
export const FOUNDER = {
  name: "Dr. Geeta Fernandes",
  role: "Founder & Lead Trainer",
  qualifications: [
    "Medical graduate, Mumbai University",
    "22+ years in medical & accidental emergency care",
    "BLS Instructor certified by the American Heart Association",
    "Trained participants across 28+ countries",
  ],
  story:
    "After more than two decades of working with medical and accidental emergencies, Dr. Fernandes saw the same pattern again and again: in the critical minutes before professional help arrives, it is the people nearby who decide the outcome. She founded this organization with one goal — to increase the survival rates of victims of life-threatening emergencies by making premium-quality, affordable First Aid and CPR training accessible to everyone, everywhere.",
  vision:
    "To increase the survival rates of victims of life-threatening medical and accidental emergencies, so that everyone feels safe and secure.",
  mission:
    "To make affordable, premium-quality, high-standard First Aid & CPR training easily available to every human being across the world.",
};

/**
 * "Who We Train" audience segments — each maps existing programs to a segment's
 * needs (no new service claims). Inspired by audience-segmented training sites.
 */
export const AUDIENCES = [
  {
    icon: "building",
    title: "Corporates & Industries",
    description:
      "Emergency-ready teams for offices, plants and facilities — trained first aiders, floor-level responders and safety-compliant workplaces.",
    points: [
      "Onsite sessions scheduled around operations",
      "Designated first-aider training & certification",
      "Multi-site and shift-based rollouts",
    ],
    href: "/corporate",
    linkLabel: "Corporate Training",
  },
  {
    icon: "school",
    title: "Schools & Institutions",
    description:
      "Teachers and staff who know exactly what to do when a child is choking, injured or unwell — calm, practiced and immediate.",
    points: [
      "Child & infant emergency response focus",
      "Choking, injury and sudden-illness drills",
      "Sessions planned around the academic calendar",
    ],
    href: "/courses/first-aid-training",
    linkLabel: "First Aid Training",
  },
  {
    icon: "stethoscope",
    title: "Hospitals & Healthcare",
    description:
      "Sharper emergency response for clinics, care homes and healthcare support teams — CPR, AED and first-response skills kept current.",
    points: [
      "AHA-guideline based CPR & AED practice",
      "Refresher programs to keep skills sharp",
      "Support staff and non-clinical team training",
    ],
    href: "/courses/cpr-training",
    linkLabel: "CPR Training",
  },
  {
    icon: "users",
    title: "Communities & Individuals",
    description:
      "Parents, caregivers, fitness trainers and everyday people — because most emergencies happen at home, not at work.",
    points: [
      "No medical background needed",
      "Infant, child and adult techniques",
      "Live online sessions from anywhere",
    ],
    href: "/courses",
    linkLabel: "All Programs",
  },
] as const;

export const INDUSTRIES = [
  { icon: "building", title: "Corporate", description: "Offices, HR & admin teams" },
  { icon: "hotel", title: "Hospitality", description: "Hotels & restaurants" },
  { icon: "school", title: "Education", description: "Schools & institutions" },
  { icon: "stethoscope", title: "Healthcare", description: "Clinics & care providers" },
  { icon: "factory", title: "Industrial", description: "Plants & manufacturing" },
  { icon: "shield", title: "Security", description: "Security organizations" },
  { icon: "dumbbell", title: "Fitness", description: "Gyms & sports facilities" },
  { icon: "users", title: "Individuals", description: "Parents & caregivers" },
] as const;

/* PLACEHOLDER — replace with confirmed, permission-granted client names/logos. */
export const CLIENTS = [
  "Marriott",
  "Hyatt Centric",
  "JSW Group",
  "LG",
  "Edwards Lifesciences",
  "C&S Electric",
  "DKSH",
  "The Bombay Canteen",
  "Sarovar Portico",
  "Gateway School of Mumbai",
];

/* ⚠ REPLACE WITH REAL CLIENT-SUPPLIED TESTIMONIALS before launch. */
export const TESTIMONIALS = [
  {
    name: "HR Manager",
    company: "Hospitality Group, Mumbai",
    rating: 5,
    text: "The training was completely hands-on. Every member of our team practiced CPR on mannequins and left feeling genuinely confident about responding to an emergency.",
  },
  {
    name: "Safety Officer",
    company: "Manufacturing Company",
    rating: 5,
    text: "Practical, engaging and tailored to our factory environment. The trainer's real emergency experience made all the difference for our staff.",
  },
  {
    name: "School Administrator",
    company: "International School, Mumbai",
    rating: 5,
    text: "Our teachers now know exactly how to respond to choking and medical emergencies involving children. Clear, calm and highly professional training.",
  },
];

export const FAQS = [
  {
    question: "Who can attend First Aid & CPR training?",
    answer:
      "Anyone. No medical background is required — our programs are designed for employees, teachers, security staff, parents, caregivers and individuals alike.",
  },
  {
    question: "Do you provide corporate training?",
    answer:
      "Yes. We deliver customized onsite and online programs for corporate teams of every size, across industries.",
  },
  {
    question: "Is training available online?",
    answer:
      "Yes. We run live, instructor-led online sessions for First Aid, CPR, AED and choking response — ideal for distributed teams.",
  },
  {
    question: "Can training be conducted at our workplace?",
    answer:
      "Absolutely. We bring trainers, mannequins and equipment to your office, school, hotel or facility for fully hands-on sessions.",
  },
  {
    question: "How many participants can attend one batch?",
    answer:
      "Batch sizes are kept practical so everyone gets hands-on time. For larger teams we run multiple batches — contact us to plan your sessions.",
  },
  {
    question: "Do participants receive certificates?",
    answer:
      "Yes. Participants receive appropriate certification after successfully completing their training program.",
  },
  {
    question: "Can training be customized for our organization?",
    answer:
      "Yes. Content, duration and scenarios can be adapted to your industry, environment and specific risks.",
  },
];
