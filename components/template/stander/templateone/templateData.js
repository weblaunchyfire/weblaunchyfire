export const products = [
  {
    category: "Nutrition",
    name: "Whey Protein Elite",
    price: "₹2,499",
    oldPrice: "₹3,100",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Apparel",
    name: "Pro Gym T-Shirt",
    price: "₹799",
    oldPrice: "₹999",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Gear",
    name: "Leather Lifting Belt",
    price: "₹1,299",
    oldPrice: "₹1,800",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Recovery",
    name: "Foam Roller Pro",
    price: "₹649",
    oldPrice: "₹900",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
];

export const aboutStats = [
  ["500+", "Happy Clients"],
  ["12", "Expert Staff"],
  ["6+", "Years Active"],
  ["4.9", "Google Rating"],
];

export function splitBrand(business) {
  const prefix = business.brandPrefix || "";
  const name = business.brandName || business.name || "Elite Studio";
  return `${prefix} ${name}`.trim();
}

export function serviceDescription(name, index) {
  const copy = [
    `Bespoke programs designed around your customer's goals and timeline.`,
    `Premium facilities and guided support for reliable everyday performance.`,
    `Focused expertise, careful planning, and polished delivery for every level.`,
    `Restorative sessions that bring flexibility, confidence, and total care.`,
    `Custom guidance created by certified specialists for stronger results.`,
    `Follow-up support that keeps every enquiry connected and moving forward.`,
  ];

  return copy[index] || `${name} with clear details, quick enquiry, and a direct contact path.`;
}

export function waLink(phone, text) {
  const cleanPhone = String(phone || "+91 98765 43210").replace(/[^\d]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
