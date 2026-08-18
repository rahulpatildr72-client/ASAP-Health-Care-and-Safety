/**
 * Single source of truth for all training programs.
 * Course cards, /courses, /courses/[slug] pages and the contact form's
 * course dropdown all render from this file.
 */

export type Course = {
  slug: string;
  title: string;
  /** Short description used on cards and meta descriptions. */
  tagline: string;
  overview: string[];
  whoShouldAttend: string[];
  learn: string[];
  duration: string;
  modes: string[];
  certification: string;
  /** lucide-react icon key resolved in components/CourseCard.tsx */
  icon: "cross" | "heart" | "zap" | "wind" | "shield" | "building";
  image: string;
  imageAlt: string;
};

export const COURSES: Course[] = [
  {
    slug: "first-aid-training",
    title: "First Aid Training",
    tagline: "Practical skills to respond to common medical emergencies with confidence.",
    overview: [
      "Accidents and sudden illness rarely announce themselves. Our First Aid Training gives participants the practical skills and calm confidence to manage the critical minutes before professional medical help arrives.",
      "The program is fully hands-on: participants practice wound care, bandaging and emergency positioning on real equipment, guided by trainers with genuine emergency-care experience.",
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
      "Managing fainting, seizures and sudden illness",
      "Recovery position and casualty handling",
      "When and how to escalate to emergency services",
    ],
    duration: "Half-day to full-day formats (customizable)",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "cross",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands-on bandaging practice during a first aid training session",
  },
  {
    slug: "cpr-training",
    title: "CPR Training",
    tagline: "Recognize cardiac emergencies and perform effective, high-quality CPR.",
    overview: [
      "When the heart stops, survival is decided in minutes — and almost always by a bystander, not a doctor. Our CPR Training teaches participants to recognize cardiac arrest and deliver effective chest compressions and rescue breaths until help arrives.",
      "Every participant practices repeatedly on CPR mannequins with instructor feedback, building the muscle memory that real emergencies demand. Training follows current American Heart Association guidelines.",
    ],
    whoShouldAttend: [
      "Corporate teams and workplace emergency responders",
      "HR, admin and HSE professionals",
      "Teachers and school staff",
      "Gym trainers and sports coaches",
      "Anyone who wants to be ready to save a life",
    ],
    learn: [
      "Recognizing cardiac arrest and heart attack warning signs",
      "Activating the emergency response chain",
      "High-quality chest compressions — depth, rate and recoil",
      "Rescue breathing techniques",
      "Adult, child and infant CPR differences",
      "Working with a second rescuer",
    ],
    duration: "Approximately 3–6 hours depending on format",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "heart",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Participant performing chest compressions on a CPR training mannequin",
  },
  {
    slug: "aed-training",
    title: "AED Training",
    tagline: "Use an Automated External Defibrillator safely and without hesitation.",
    overview: [
      "An AED can restart a heart — but only if someone nearby is confident enough to use it. This program removes the fear factor, taking participants step-by-step through safe and effective defibrillator use.",
      "Participants practice with AED trainer units in realistic scenarios, learning to combine defibrillation with CPR for the best chance of survival.",
    ],
    whoShouldAttend: [
      "Organizations that have installed or plan to install AEDs",
      "Facility, security and reception teams",
      "Hotels, malls, gyms and public venues",
      "Schools and healthcare support staff",
      "Workplace emergency response teams",
    ],
    learn: [
      "How an AED works and when to use one",
      "Safe pad placement on adults and children",
      "Following AED voice prompts under pressure",
      "Integrating AED use with CPR",
      "Safety precautions and special situations",
      "AED maintenance and readiness basics",
    ],
    duration: "Approximately 2–4 hours; often combined with CPR training",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "zap",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Trainer demonstrating AED pad placement during a workshop",
  },
  {
    slug: "choking-response",
    title: "Choking Response",
    tagline: "Effective, age-appropriate techniques for choking emergencies.",
    overview: [
      "Choking can turn fatal in under five minutes — faster than any ambulance. This focused program teaches participants to recognize airway obstruction and respond immediately with the correct technique for the person in front of them.",
      "Special attention is given to infants and children, making this training especially valuable for schools, families and hospitality teams.",
    ],
    whoShouldAttend: [
      "Parents, grandparents and caregivers",
      "Teachers, school and daycare staff",
      "Restaurant and hotel service teams",
      "Corporate cafeteria and facility staff",
      "Anyone responsible for children or elderly people",
    ],
    learn: [
      "Recognizing mild vs. severe airway obstruction",
      "Abdominal thrusts for adults",
      "Back blows and chest thrusts",
      "Infant and child choking response",
      "Responding when a casualty becomes unresponsive",
      "Choking prevention basics",
    ],
    duration: "Approximately 2–3 hours; often combined with CPR training",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "wind",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Instructor demonstrating choking response technique to a training group",
  },
  {
    slug: "health-safety-training",
    title: "Health & Safety Training",
    tagline: "Build a stronger culture of workplace safety and emergency preparedness.",
    overview: [
      "Safe workplaces are built, not assumed. This program helps organizations build a genuine culture of safety — where hazards are spotted early, emergencies are planned for, and every employee knows their role when something goes wrong.",
      "Content is tailored to your environment, from office spaces to industrial floors, and can support statutory first-aider and safety-compliance requirements.",
    ],
    whoShouldAttend: [
      "HSE and compliance teams",
      "HR and administration departments",
      "Facility and operations managers",
      "Supervisors and floor leaders",
      "Employee safety committees",
    ],
    learn: [
      "Workplace hazard identification and prevention",
      "Emergency planning and evacuation readiness",
      "First aid preparedness and kit management",
      "Roles and responsibilities during an emergency",
      "Incident reporting and near-miss culture",
      "Building lasting safety habits across teams",
    ],
    duration: "Half-day to multi-day formats depending on scope",
    modes: ["Onsite", "Classroom", "Live Online"],
    certification:
      "Participants receive a certificate of completion after successfully finishing the program.",
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Workplace team attending a health and safety training session",
  },
  {
    slug: "corporate-training",
    title: "Customized Corporate Training",
    tagline: "Programs designed around your organization's people, environment and risks.",
    overview: [
      "No two organizations face the same risks. Our corporate programs are built around yours — combining First Aid, CPR, AED, choking response and safety modules into a session designed for your teams, your facilities and your schedule.",
      "We train at your premises or online, across single sites or national teams, with programs sized from a single batch to company-wide rollouts.",
    ],
    whoShouldAttend: [
      "Corporate companies of every size",
      "HR, Admin and L&D teams planning training programs",
      "HSE departments meeting compliance requirements",
      "Multi-site organizations needing consistent training",
      "Hotels, schools, hospitals and industrial facilities",
    ],
    learn: [
      "A program mix tailored to your risk profile",
      "Hands-on emergency response practice for every participant",
      "Scenario drills based on your actual workplace",
      "Emergency roles and escalation for your teams",
      "Refresher planning to keep skills sharp",
      "Certification for successful participants",
    ],
    duration: "Fully flexible — from focused half-day sessions to multi-batch rollouts",
    modes: ["Onsite", "Live Online", "Blended"],
    certification:
      "Participants receive appropriate certification after successful completion; certificates can reference your organization's program.",
    icon: "building",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Corporate team during a customized emergency response workshop",
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
