export const adminStats = [
  { key: "revenue", label: "Revenue", value: "₹4,82,650", change: "+12.4%", up: true },
  { key: "orders", label: "Orders", value: "1,248", change: "+8.1%", up: true },
  { key: "products", label: "Products", value: "12", change: "Live", up: true },
  { key: "messages", label: "New messages", value: "18", change: "Today", up: false },
];

export const salesByDay = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 51 },
  { day: "Thu", value: 67 },
  { day: "Fri", value: 74 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 63 },
];

export const adminOrders = [
  {
    id: "ORD-10482",
    customer: "Riya Sharma",
    city: "Jaipur",
    items: 3,
    total: 1249,
    status: "Processing" as const,
    date: "22 Sep 2026",
  },
  {
    id: "ORD-10481",
    customer: "Amit Verma",
    city: "Delhi",
    items: 1,
    total: 249,
    status: "Shipped" as const,
    date: "22 Sep 2026",
  },
  {
    id: "ORD-10480",
    customer: "Neha Gupta",
    city: "Lucknow",
    items: 2,
    total: 898,
    status: "Delivered" as const,
    date: "21 Sep 2026",
  },
  {
    id: "ORD-10479",
    customer: "Kabir Singh",
    city: "Chandigarh",
    items: 4,
    total: 2140,
    status: "Pending" as const,
    date: "21 Sep 2026",
  },
  {
    id: "ORD-10478",
    customer: "Pooja Nair",
    city: "Bengaluru",
    items: 2,
    total: 678,
    status: "Delivered" as const,
    date: "20 Sep 2026",
  },
  {
    id: "ORD-10477",
    customer: "Rahul Mehta",
    city: "Ahmedabad",
    items: 1,
    total: 479,
    status: "Cancelled" as const,
    date: "20 Sep 2026",
  },
];

export const adminCustomers = [
  { id: "CUS-01", name: "Riya Sharma", email: "riya@email.com", orders: 6, spent: 6840, city: "Jaipur" },
  { id: "CUS-02", name: "Amit Verma", email: "amit@email.com", orders: 3, spent: 1890, city: "Delhi" },
  { id: "CUS-03", name: "Neha Gupta", email: "neha@email.com", orders: 8, spent: 9120, city: "Lucknow" },
  { id: "CUS-04", name: "Kabir Singh", email: "kabir@email.com", orders: 2, spent: 2560, city: "Chandigarh" },
  { id: "CUS-05", name: "Pooja Nair", email: "pooja@email.com", orders: 5, spent: 4210, city: "Bengaluru" },
];

export const adminMessages = [
  {
    id: "MSG-01",
    name: "Sanjay Patel",
    mobile: "+91 98765 43210",
    purpose: "Bulk / trade order",
    message: "Looking for wholesale rates on 5L mustard oil for our store chain.",
    date: "22 Sep 2026 · 10:24",
    unread: true,
  },
  {
    id: "MSG-02",
    name: "Meera Joshi",
    mobile: "+91 91234 56780",
    purpose: "Product enquiry",
    message: "Is cold-pressed mustard oil available in 1L packs in Pune?",
    date: "22 Sep 2026 · 09:12",
    unread: true,
  },
  {
    id: "MSG-03",
    name: "Arjun Desai",
    mobile: "+91 99887 66554",
    purpose: "Quality feedback",
    message: "Loved the aroma of Kachi Ghani. Please add a smaller travel pack.",
    date: "21 Sep 2026 · 18:40",
    unread: false,
  },
  {
    id: "MSG-04",
    name: "Fatima Khan",
    mobile: "+91 90123 44556",
    purpose: "Partnership",
    message: "Interested in featuring Monika oils in our kitchen studio series.",
    date: "21 Sep 2026 · 14:05",
    unread: false,
  },
];

export const adminBlogs = [
  { id: "BLG-01", title: "Why seed grade matters before the first press", tag: "Quality", status: "Published", date: "18 Sep 2026" },
  { id: "BLG-02", title: "Mustard, groundnut, sesame — picking the right bottle", tag: "Kitchen tips", status: "Published", date: "12 Sep 2026" },
  { id: "BLG-03", title: "From mill line to pantry shelf", tag: "Behind the brand", status: "Draft", date: "20 Sep 2026" },
];

export const adminRecipes = [
  { id: "RCP-01", title: "Classic mustard tadka dal", status: "Published", date: "15 Sep 2026" },
  { id: "RCP-02", title: "Crisp pakora evenings", status: "Published", date: "10 Sep 2026" },
  { id: "RCP-03", title: "Paratha with a mustard finish", status: "Draft", date: "19 Sep 2026" },
  { id: "RCP-04", title: "Season pickle jar", status: "Published", date: "05 Sep 2026" },
];

export const adminOffers = [
  { id: "OFF-01", title: "Family Pack Festival", discount: "18% off", status: "Active", ends: "30 Sep 2026" },
  { id: "OFF-02", title: "Combo Kitchen Set", discount: "20% off", status: "Active", ends: "15 Oct 2026" },
  { id: "OFF-03", title: "Monsoon Mustard Deal", discount: "15% off", status: "Scheduled", ends: "01 Nov 2026" },
];

export type OrderStatus = (typeof adminOrders)[number]["status"];
