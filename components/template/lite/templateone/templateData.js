export const defaultBusiness = {
  brandPrefix: "Zero",
  brandName: "Daddy",
  kicker: "A classic business style",
  title: "Build Trust, Get Leads, Grow Faster.",
  description: "A polished website layout for local businesses with services, gallery, timing, contact, and WhatsApp leads.",
  aboutKicker: "About Business",
  aboutTitle: "Where Quality Meets Results",
  about:
    "A premium local business website designed to explain your services clearly, build trust fast, and help customers contact you without friction.",
  services: ["Core Service", "Premium Service", "Consultation", "Booking Support", "Customer Care", "WhatsApp Leads"],
  stats: [
    ["6+", "Years of Excellence"],
    ["12", "Expert Team"],
    ["98%", "Customer Satisfaction"],
  ],
  timing: "Mon - Sat: 9am - 8pm\nSunday: 10am - 2pm",
  address: "Your business address, city, state",
  phone: "+91 98765 43210",
  mapNote: "Perfect for local businesses that need calls, enquiries, bookings, and WhatsApp leads.",
};

export const galleryColors = ["#351608", "#123d19", "#101247", "#333900", "#430848", "#064344"];

export const coachingHeroImages = [
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80",
];

export function getFontFamily(font) {
  if (font === "Serif") return "Georgia, 'Times New Roman', serif";
  if (font === "Mono") return "'Roboto Mono', 'SFMono-Regular', Consolas, monospace";
  if (font === "Display") return "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  if (font === "Rounded") return "'Trebuchet MS', 'Segoe UI', system-ui, sans-serif";
  if (font === "Editorial") return "Georgia, Cambria, 'Times New Roman', serif";
  if (font === "Luxury") return "Garamond, Georgia, 'Times New Roman', serif";
  if (font === "Clean") return "'Segoe UI', Inter, system-ui, sans-serif";
  if (font === "Bold") return "Arial, Helvetica, sans-serif";
  if (font === "Human") return "Verdana, Geneva, sans-serif";
  if (font === "Tech") return "'SFMono-Regular', Consolas, 'Roboto Mono', monospace";
  if (font === "Warm") return "'Trebuchet MS', Verdana, sans-serif";
  if (font === "Formal") return "'Times New Roman', Georgia, serif";
  if (font === "Groove") return "Tahoma, Geneva, sans-serif";
  if (font === "Compact") return "'Arial Narrow', Arial, sans-serif";
  if (font === "Airy") return "'Gill Sans', 'Segoe UI', system-ui, sans-serif";
  return "Inter, system-ui, sans-serif";
}

export function getHeadingFont(font) {
  if (font === "Mono") return "'Roboto Mono', 'SFMono-Regular', Consolas, monospace";
  if (font === "Inter") return "Inter, system-ui, sans-serif";
  if (font === "Display") return "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  if (font === "Rounded") return "'Trebuchet MS', 'Segoe UI', system-ui, sans-serif";
  if (font === "Editorial") return "Georgia, Cambria, 'Times New Roman', serif";
  if (font === "Luxury") return "Garamond, Georgia, 'Times New Roman', serif";
  if (font === "Clean") return "'Segoe UI', Inter, system-ui, sans-serif";
  if (font === "Bold") return "Arial, Helvetica, sans-serif";
  if (font === "Human") return "Verdana, Geneva, sans-serif";
  if (font === "Tech") return "'SFMono-Regular', Consolas, 'Roboto Mono', monospace";
  if (font === "Warm") return "'Trebuchet MS', Verdana, sans-serif";
  if (font === "Formal") return "'Times New Roman', Georgia, serif";
  if (font === "Groove") return "Tahoma, Geneva, sans-serif";
  if (font === "Compact") return "'Arial Narrow', Arial, sans-serif";
  if (font === "Airy") return "'Gill Sans', 'Segoe UI', system-ui, sans-serif";
  return "Georgia, 'Times New Roman', serif";
}
