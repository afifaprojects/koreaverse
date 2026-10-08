export interface City {
  id: string;
  name: string;
  koreanName: string;
  region: string;
  description: string;
  attractions: string[];
  category: "Capital" | "Coastal city" | "Island" | "Historic city" | "Regional city";
  gradient: string;
  href: string;
}

/** General destination guide. Check the linked official tourism source for current details. */
export const cities: City[] = [
  { id: "seoul", name: "Seoul", koreanName: "\uC11C\uC6B8", region: "Seoul", description: "South Korea's capital, with royal heritage sites, museums, markets, and contemporary neighborhoods.", attractions: ["Gyeongbokgung Palace", "Bukchon Hanok Village", "N Seoul Tower"], category: "Capital", gradient: "from-blue-700 to-indigo-900", href: "/cities#seoul" },
  { id: "busan", name: "Busan", koreanName: "\uBD80\uC0B0", region: "Busan", description: "A major southeastern port city known for its coast, markets, and cultural districts.", attractions: ["Haeundae Beach", "Jagalchi Market", "Gamcheon Culture Village"], category: "Coastal city", gradient: "from-sky-700 to-cyan-800", href: "/cities#busan" },
  { id: "incheon", name: "Incheon", koreanName: "\uC778\uCC9C", region: "Incheon", description: "A port city west of Seoul, with historic neighborhoods, islands, and the Songdo district.", attractions: ["Incheon Chinatown", "Songdo Central Park", "Wolmido"], category: "Coastal city", gradient: "from-indigo-700 to-blue-900", href: "/cities#incheon" },
  { id: "daegu", name: "Daegu", koreanName: "\uB300\uAD6C", region: "Daegu", description: "A metropolitan city in southeastern Korea with urban markets and nearby mountain scenery.", attractions: ["Seomun Market", "Apsan Park", "Palgongsan"], category: "Regional city", gradient: "from-blue-800 to-rose-800", href: "/cities#daegu" },
  { id: "daejeon", name: "Daejeon", koreanName: "\uB300\uC804", region: "Daejeon", description: "A central metropolitan city and transport hub in South Korea.", attractions: ["Daejeon O-World", "Hanbat Arboretum", "Yuseong Hot Springs"], category: "Regional city", gradient: "from-blue-700 to-cyan-900", href: "/cities#daejeon" },
  { id: "gwangju", name: "Gwangju", koreanName: "\uAD11\uC8FC", region: "Gwangju", description: "A southwestern metropolitan city with a notable modern history and arts scene.", attractions: ["Asia Culture Center", "May 18th National Cemetery", "Mudeungsan National Park"], category: "Regional city", gradient: "from-indigo-800 to-sky-800", href: "/cities#gwangju" },
  { id: "ulsan", name: "Ulsan", koreanName: "\uC6B8\uC0B0", region: "Ulsan", description: "A southeastern metropolitan city on the coast, with parks and coastal scenery.", attractions: ["Daewangam Park", "Taehwagang National Garden", "Jangsaengpo Whale Culture Village"], category: "Coastal city", gradient: "from-cyan-800 to-blue-900", href: "/cities#ulsan" },
  { id: "jeju", name: "Jeju", koreanName: "\uC81C\uC8FC", region: "Jeju Special Self-Governing Province", description: "An island destination known for volcanic landscapes, coastal trails, and distinctive local culture.", attractions: ["Hallasan National Park", "Seongsan Ilchulbong", "Jeju Olle Trail"], category: "Island", gradient: "from-emerald-800 to-teal-900", href: "/cities#jeju" },
  { id: "suwon", name: "Suwon", koreanName: "\uC218\uC6D0", region: "Gyeonggi Province", description: "A city south of Seoul, home to the UNESCO-listed Hwaseong Fortress.", attractions: ["Hwaseong Fortress", "Hwaseong Haenggung Palace", "Gwanggyo Lake Park"], category: "Historic city", gradient: "from-blue-800 to-indigo-800", href: "/cities#suwon" },
  { id: "gyeongju", name: "Gyeongju", koreanName: "\uACBD\uC8FC", region: "North Gyeongsang Province", description: "The former capital of Silla, with historic sites and cultural heritage.", attractions: ["Bulguksa Temple", "Daereungwon Tomb Complex", "Donggung Palace and Wolji Pond"], category: "Historic city", gradient: "from-amber-800 to-rose-900", href: "/cities#gyeongju" },
];

export const officialTourismUrl = "https://english.visitkorea.or.kr/";
