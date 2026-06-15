export const pricing = {
  preview: "₹99",
  basic: "₹4,999",
  pro: "₹9,999",
};

export const categories = [
  {
    id: "clinic-doctor",
    name: "Clinic/Doctor",
    icon: "heart",
    subcategories: [
      { id: "clinic", name: "Clinic" },
      { id: "doctor", name: "Doctor" },
      { id: "diagnostic", name: "Diagnostic" },
      { id: "dental", name: "Dental" },
    ],
  },
  {
    id: "coaching-centre",
    name: "Coaching Centre",
    icon: "book",
    subcategories: [
      { id: "tuition", name: "Tuition" },
      { id: "exam-prep", name: "Exam Prep" },
      { id: "language", name: "Language Class" },
      { id: "computer", name: "Computer Training" },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant",
    icon: "utensils",
    subcategories: [
      { id: "restaurant", name: "Restaurant" },
      { id: "fine-dining", name: "Fine Dining" },
      { id: "fast-food", name: "Fast Food" },
      { id: "cloud-kitchen", name: "Cloud Kitchen" },
    ],
  },
  {
    id: "gym-fitness",
    name: "Gym/Fitness",
    icon: "dumbbell",
    subcategories: [
      { id: "gym", name: "Gym" },
      { id: "yoga", name: "Yoga" },
      { id: "trainer", name: "Trainer" },
      { id: "fitness-studio", name: "Fitness Studio" },
    ],
  },
  {
    id: "beauty-parlor",
    name: "Beauty Parlor",
    icon: "sparkles",
    subcategories: [
      { id: "salon", name: "Salon" },
      { id: "beauty-parlor", name: "Beauty Parlor" },
      { id: "spa", name: "Spa" },
      { id: "makeup", name: "Makeup Artist" },
    ],
  },
  {
    id: "cafe",
    name: "Cafe",
    icon: "coffee",
    subcategories: [
      { id: "cafe", name: "Cafe" },
      { id: "bakery", name: "Bakery" },
      { id: "dessert", name: "Dessert Shop" },
      { id: "tea-snacks", name: "Tea & Snacks" },
    ],
  },
  {
    id: "interior-construction",
    name: "Interior/Construction",
    icon: "building",
    subcategories: [
      { id: "interior", name: "Interior Design" },
      { id: "construction", name: "Construction" },
      { id: "architect", name: "Architect" },
      { id: "contractor", name: "Contractor" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "home",
    subcategories: [
      { id: "property-dealer", name: "Property Dealer" },
      { id: "broker", name: "Broker" },
      { id: "developer", name: "Developer" },
      { id: "rental", name: "Rental" },
    ],
  },
  {
    id: "school-college",
    name: "School/College",
    icon: "school",
    subcategories: [
      { id: "school", name: "School" },
      { id: "college", name: "College" },
      { id: "preschool", name: "Preschool" },
      { id: "institute", name: "Institute" },
    ],
  },
  {
    id: "ngo-foundation",
    name: "NGO/Foundation",
    icon: "heart",
    subcategories: [
      { id: "ngo", name: "NGO" },
      { id: "foundation", name: "Foundation" },
      { id: "charity", name: "Charity" },
      { id: "community", name: "Community" },
    ],
  },
  {
    id: "retail-shop",
    name: "Retail Shop",
    icon: "shopping-bag",
    subcategories: [
      { id: "retail-shop", name: "Retail Shop" },
      { id: "fashion", name: "Fashion Store" },
      { id: "electronics", name: "Electronics" },
      { id: "grocery", name: "Grocery" },
    ],
  },
];

const businessTemplateData = {
  "clinic-doctor": {
    name: "Clinic Care",
    accent: "#16a3a1",
    theme: { bg: "#f4fbfa", surface: "#ffffff", panel: "#e4f5f3", card: "#ffffff", ink: "#123231", muted: "#607675", soft: "#dff2ef", line: "rgba(18,50,49,.12)" },
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    icon: "heart",
    brandPrefix: "Clinic",
    brandName: "Care",
    kicker: "A classic clinic style",
    title: "Trusted Care, Clear Appointments.",
    description: "A modern clinic website for doctors, services, timings, patient trust, and direct appointment leads.",
    aboutKicker: "About Clinic",
    aboutTitle: "Where Care Meets Confidence",
    about: "Designed for clinics and doctors who need a clear, trustworthy website with services, timings, contact details, and easy appointment enquiries.",
    services: ["Doctor Consultation", "Health Checkup", "Diagnostics", "Dental Care", "Online Appointment", "Emergency Contact"],
    mapNote: "Perfect for clinics, doctors, dental clinics, diagnostics, and healthcare practices.",
  },
  "coaching-centre": {
    name: "Coaching Edge",
    accent: "#f59e0b",
    theme: { bg: "#fff8ec", surface: "#ffffff", panel: "#fff0d2", card: "#ffffff", ink: "#302315", muted: "#7b6a53", soft: "#fde8b8", line: "rgba(48,35,21,.12)" },
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
    icon: "book",
    brandPrefix: "Coaching",
    brandName: "Edge",
    kicker: "A classic education style",
    title: "Better Learning, Better Results.",
    description: "A focused coaching website for courses, batches, faculty, results, admission enquiries, and WhatsApp leads.",
    aboutKicker: "About Coaching",
    aboutTitle: "Where Guidance Meets Results",
    about: "Built for coaching centres that want to show courses, batch timings, success stories, and help students enquire quickly.",
    services: ["Tuition Classes", "Exam Prep", "Mock Tests", "Doubt Clearing", "Online Classes", "Admission Enquiry"],
    mapNote: "Perfect for tuition centres, exam coaching, language classes, and training institutes.",
  },
  restaurant: {
    name: "Urban Dining",
    accent: "#ef4444",
    theme: { bg: "#fff7f3", surface: "#ffffff", panel: "#ffe5dc", card: "#ffffff", ink: "#331a16", muted: "#7a625d", soft: "#ffd8cc", line: "rgba(51,26,22,.12)" },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    icon: "utensils",
    brandPrefix: "Urban",
    brandName: "Dining",
    kicker: "A classic restaurant style",
    title: "Serve Taste, Fill Tables.",
    description: "A premium restaurant website for menu highlights, photos, opening hours, location, and booking enquiries.",
    aboutKicker: "About Restaurant",
    aboutTitle: "Where Taste Meets Hospitality",
    about: "Made for restaurants that need a rich visual presence with menu, gallery, location, timing, and direct reservation enquiries.",
    services: ["Dine-In", "Table Booking", "Takeaway", "Cloud Kitchen", "Party Orders", "Menu Showcase"],
    mapNote: "Perfect for restaurants, fast food counters, fine dining places, and cloud kitchens.",
  },
  "gym-fitness": {
    name: "FitPro Studio",
    accent: "#ff6726",
    theme: { bg: "#fff8f1", surface: "#ffffff", panel: "#ffe7d8", card: "#ffffff", ink: "#2b1c16", muted: "#78665c", soft: "#ffd9c1", line: "rgba(43,28,22,.12)" },
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
    icon: "dumbbell",
    brandPrefix: "Fit",
    brandName: "Pro Studio",
    kicker: "A classic gym style",
    title: "Transform Your Body, Elevate Your Life.",
    description: "A strong fitness website for services, trainers, membership enquiries, gallery, timing, and WhatsApp leads.",
    aboutKicker: "About FitPro",
    aboutTitle: "Where Discipline Meets Results",
    about: "Built for gyms and fitness studios that want to show services, build trust, and convert visitors into trial and membership enquiries.",
    services: ["Personal Training", "Cardio Zone", "Strength Training", "Yoga & Zumba", "Nutrition Plans", "Body Transformation"],
    timing: "Mon - Sat: 5am - 10pm\nSunday: 7am - 2pm",
    mapNote: "Perfect for gyms, fitness studios, yoga brands, and local training centers.",
  },
  "beauty-parlor": {
    name: "Glow Beauty",
    accent: "#ec4899",
    theme: { bg: "#fff5fb", surface: "#ffffff", panel: "#ffe1f1", card: "#ffffff", ink: "#341827", muted: "#806878", soft: "#ffd6eb", line: "rgba(52,24,39,.12)" },
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
    icon: "sparkles",
    brandPrefix: "Glow",
    brandName: "Beauty",
    kicker: "A classic beauty style",
    title: "Look Fresh, Feel Confident.",
    description: "A polished beauty website for services, packages, gallery, booking, timings, and WhatsApp enquiries.",
    aboutKicker: "About Beauty",
    aboutTitle: "Where Style Meets Care",
    about: "Created for salons and beauty parlors that want to display services, packages, client trust, and booking options beautifully.",
    services: ["Hair Styling", "Facial Care", "Bridal Makeup", "Spa Therapy", "Nail Art", "Beauty Packages"],
    mapNote: "Perfect for beauty parlors, salons, spas, makeup artists, and self-care studios.",
  },
  cafe: {
    name: "Cafe Corner",
    accent: "#d97706",
    theme: { bg: "#fff9f0", surface: "#ffffff", panel: "#f5e2c9", card: "#ffffff", ink: "#302115", muted: "#796a5a", soft: "#eed4b1", line: "rgba(48,33,21,.12)" },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    icon: "coffee",
    brandPrefix: "Cafe",
    brandName: "Corner",
    kicker: "A classic cafe style",
    title: "Fresh Brews, Warm Moments.",
    description: "A cozy cafe website for menu items, photos, timing, location, orders, and WhatsApp enquiries.",
    aboutKicker: "About Cafe",
    aboutTitle: "Where Taste Meets Comfort",
    about: "Designed for cafes and bakeries that want to show their menu, ambience, gallery, and help customers find or order quickly.",
    services: ["Coffee Menu", "Bakery Items", "Desserts", "Snacks", "Online Orders", "Party Platters"],
    mapNote: "Perfect for cafes, bakeries, dessert shops, tea shops, and snacks counters.",
  },
  "interior-construction": {
    name: "BuildSpace Studio",
    accent: "#f97316",
    theme: { bg: "#fbfaf6", surface: "#ffffff", panel: "#eee7db", card: "#ffffff", ink: "#27231d", muted: "#756e63", soft: "#e6ded0", line: "rgba(39,35,29,.12)" },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    icon: "building",
    brandPrefix: "Build",
    brandName: "Space",
    kicker: "A classic project style",
    title: "Design Better Spaces, Win Better Projects.",
    description: "A sharp website for interiors, construction, project galleries, service details, and consultation leads.",
    aboutKicker: "About Studio",
    aboutTitle: "Where Planning Meets Finish",
    about: "Built for interior and construction brands that need to showcase projects, explain services, and capture serious project enquiries.",
    services: ["Interior Design", "Construction", "Renovation", "Architecture", "Project Planning", "Site Consultation"],
    mapNote: "Perfect for interior designers, builders, architects, contractors, and renovation teams.",
  },
  "real-estate": {
    name: "Prime Realty",
    accent: "#22c55e",
    theme: { bg: "#f4fbf6", surface: "#ffffff", panel: "#ddf4e4", card: "#ffffff", ink: "#15301f", muted: "#607466", soft: "#d3efdd", line: "rgba(21,48,31,.12)" },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    icon: "home",
    brandPrefix: "Prime",
    brandName: "Realty",
    kicker: "A classic property style",
    title: "Show Properties, Close More Leads.",
    description: "A focused real estate website for listings, property enquiries, location trust, and WhatsApp follow-ups.",
    aboutKicker: "About Realty",
    aboutTitle: "Where Property Meets Trust",
    about: "Made for property dealers and real estate brands that want to show services, build trust, and get buyer or rental enquiries.",
    services: ["Property Listing", "Site Visit", "Rental Support", "Buying Support", "Documentation", "WhatsApp Enquiry"],
    mapNote: "Perfect for real estate agencies, brokers, developers, property dealers, and rental services.",
  },
  "school-college": {
    name: "Bright Campus",
    accent: "#3b82f6",
    theme: { bg: "#f4f8ff", surface: "#ffffff", panel: "#dfeeff", card: "#ffffff", ink: "#15243b", muted: "#647086", soft: "#d5e7ff", line: "rgba(21,36,59,.12)" },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
    icon: "school",
    brandPrefix: "Bright",
    brandName: "Campus",
    kicker: "A classic campus style",
    title: "Build Trust With Parents And Students.",
    description: "A clean education website for admissions, facilities, gallery, timings, contact, and enquiry leads.",
    aboutKicker: "About Campus",
    aboutTitle: "Where Learning Meets Character",
    about: "Designed for schools and colleges that want to show facilities, admission details, activities, and make enquiries easy.",
    services: ["Admissions", "Facilities", "Academic Programs", "Events", "Transport Info", "Parent Enquiry"],
    mapNote: "Perfect for schools, colleges, preschools, institutes, and educational campuses.",
  },
  "ngo-foundation": {
    name: "Hope Foundation",
    accent: "#e11d48",
    theme: { bg: "#fff6f7", surface: "#ffffff", panel: "#ffe1e7", card: "#ffffff", ink: "#351722", muted: "#7e6570", soft: "#ffd3dc", line: "rgba(53,23,34,.12)" },
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    icon: "heart",
    brandPrefix: "Hope",
    brandName: "Foundation",
    kicker: "A classic NGO style",
    title: "Share Your Cause, Grow Your Impact.",
    description: "A warm NGO website for mission, programs, gallery, contact, volunteer interest, and donation enquiries.",
    aboutKicker: "About Foundation",
    aboutTitle: "Where Compassion Meets Action",
    about: "Created for NGOs and foundations that need to explain their mission, show work, and help supporters connect quickly.",
    services: ["Community Work", "Education Support", "Health Camps", "Volunteer Signup", "Donation Enquiry", "Impact Stories"],
    mapNote: "Perfect for NGOs, foundations, charities, social groups, and community organizations.",
  },
  "retail-shop": {
    name: "Retail Hub",
    accent: "#a855f7",
    theme: { bg: "#faf6ff", surface: "#ffffff", panel: "#efe1ff", card: "#ffffff", ink: "#28173b", muted: "#72627f", soft: "#e6d4fb", line: "rgba(40,23,59,.12)" },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    icon: "shopping-bag",
    brandPrefix: "Retail",
    brandName: "Hub",
    kicker: "A classic shop style",
    title: "Show Products, Bring Customers In.",
    description: "A practical retail website for products, offers, shop timing, location, and WhatsApp product enquiries.",
    aboutKicker: "About Shop",
    aboutTitle: "Where Products Meet Service",
    about: "Built for retail shops that want to show products, offers, timing, location, and get customers to message directly.",
    services: ["Product Showcase", "Daily Offers", "Home Delivery", "New Arrivals", "Bulk Orders", "WhatsApp Orders"],
    mapNote: "Perfect for retail shops, fashion stores, electronics shops, grocery stores, and local outlets.",
  },
};

const subcategoryVisuals = {
  clinic: { image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80", accent: "#14b8a6" },
  doctor: { image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80", accent: "#0ea5e9" },
  diagnostic: { image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=80", accent: "#6366f1" },
  dental: { image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80", accent: "#06b6d4" },
  tuition: { image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80", accent: "#f59e0b" },
  "exam-prep": { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80", accent: "#2563eb" },
  language: { image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80", accent: "#db2777" },
  computer: { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80", accent: "#7c3aed" },
  restaurant: { image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80", accent: "#ef4444" },
  "fine-dining": { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80", accent: "#b91c1c" },
  "fast-food": { image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80", accent: "#f97316" },
  "cloud-kitchen": { image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80", accent: "#dc2626" },
  gym: { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80", accent: "#ff6726" },
  yoga: { image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=80", accent: "#16a34a" },
  trainer: { image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1400&q=80", accent: "#dc2626" },
  "fitness-studio": { image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80", accent: "#7c2d12" },
  salon: { image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80", accent: "#ec4899" },
  "beauty-parlor": { image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1400&q=80", accent: "#db2777" },
  spa: { image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80", accent: "#0f766e" },
  makeup: { image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80", accent: "#be185d" },
  cafe: { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80", accent: "#d97706" },
  bakery: { image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80", accent: "#b45309" },
  dessert: { image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80", accent: "#e11d48" },
  "tea-snacks": { image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=80", accent: "#65a30d" },
  interior: { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80", accent: "#f97316" },
  construction: { image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80", accent: "#ca8a04" },
  architect: { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80", accent: "#475569" },
  contractor: { image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80", accent: "#ea580c" },
  "property-dealer": { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80", accent: "#22c55e" },
  broker: { image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80", accent: "#059669" },
  developer: { image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80", accent: "#0284c7" },
  rental: { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80", accent: "#65a30d" },
  school: { image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80", accent: "#3b82f6" },
  college: { image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80", accent: "#2563eb" },
  preschool: { image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80", accent: "#f59e0b" },
  institute: { image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80", accent: "#7c3aed" },
  ngo: { image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80", accent: "#e11d48" },
  foundation: { image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80", accent: "#dc2626" },
  charity: { image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1400&q=80", accent: "#be123c" },
  community: { image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80", accent: "#16a34a" },
  "retail-shop": { image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80", accent: "#a855f7" },
  fashion: { image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=80", accent: "#db2777" },
  electronics: { image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1400&q=80", accent: "#2563eb" },
  grocery: { image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80", accent: "#16a34a" },
};

const standerTheme = {
  bg: "#282927",
  surface: "#2d2f2d",
  panel: "#2d2f2d",
  card: "#242523",
  ink: "#fffaf1",
  muted: "#d6cdb9",
  soft: "#3e403d",
  line: "rgba(255,255,255,.14)",
};

const generatedTemplates = categories.flatMap((category) => {
  const data = businessTemplateData[category.id];

  return category.subcategories.flatMap((subcategory) => {
    const visual = subcategoryVisuals[subcategory.id] || {};
    const baseTemplate = {
      category: category.id,
      subcategory: subcategory.id,
      image: visual.image || data.image,
      icon: data.icon || category.icon,
      accent: visual.accent || data.accent || "#ff6726",
      tagline: `${category.name} website with services, gallery, timing, contact, and WhatsApp CTA.`,
      business: data,
      theme: data.theme,
    };

    return [{
      id: `${category.id}-${subcategory.id}-classic`,
      ...baseTemplate,
      name: `${data.name} ${subcategory.name}`,
      originalPrice: "₹6,999",
      price: "₹2,999",
      style: "Classic Light",
      font: "Serif",
      layout: {
        custom: "fitpro",
      },
    }, {
      id: `${category.id}-${subcategory.id}-stander-template-one`,
      ...baseTemplate,
      name: `${data.name} ${subcategory.name} Standard`,
      originalPrice: "₹7,999",
      price: "₹4,999",
      style: "Standard Template One",
      font: "Luxury",
      theme: standerTheme,
      layout: {
        custom: "standerTemplateOne",
      },
    }];
  });
});

const primeTheme = { bg: "#f5f2ec", surface: "#ffffff", panel: "#e8e3d9", card: "#ffffff", ink: "#0d0d0d", muted: "#6b6459", soft: "#c4a882", line: "rgba(13,13,13,.12)" };

const primeTemplates = categories.flatMap((category) => {
  const data = businessTemplateData[category.id];

  return category.subcategories.map((subcategory) => {
    const visual = subcategoryVisuals[subcategory.id] || {};

    return {
      id: `${category.id}-${subcategory.id}-prime-template-one`,
      category: category.id,
      subcategory: subcategory.id,
      name: `${data.name} ${subcategory.name} Prime`,
      originalPrice: "₹12,000",
      price: "₹9,999",
      style: "Prime Template One",
      image: visual.image || data.image,
      icon: data.icon || category.icon,
      accent: "#c4a882",
      font: "Luxury",
      tagline: `Premium ${category.name} website with portfolio, process, awards, contact, and WhatsApp CTA.`,
      business: {
        ...data,
        name: `${data.name} ${subcategory.name} Prime`,
        description: `A premium editorial layout for ${subcategory.name.toLowerCase()} businesses with strong presentation, trust sections, and quick lead capture.`,
      },
      theme: primeTheme,
      layout: {
        custom: "primeTemplateOne",
      },
    };
  });
});

export const templates = [...generatedTemplates, ...primeTemplates];

export function getCategory(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

export function getSubcategory(categoryId, subcategoryId) {
  const category = getCategory(categoryId);
  return (
    category.subcategories.find((subcategory) => subcategory.id === subcategoryId) ||
    category.subcategories[0]
  );
}

export function getCategoryName(id) {
  return getCategory(id)?.name || "";
}

export function getSubcategoryName(categoryId, subcategoryId) {
  return getSubcategory(categoryId, subcategoryId)?.name || "";
}

export function getTemplate(id) {
  return templates.find((template) => template.id === id);
}

export function getTemplates({ category, subcategory } = {}) {
  return templates.filter((template) => {
    if (category && template.category !== category) return false;
    if (subcategory && template.subcategory !== subcategory) return false;
    return true;
  });
}
