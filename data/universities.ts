/**
 * University directory. Names, Korean names, and official links are maintained
 * from the institutions' own sites. City identifies the primary campus city;
 * verify campus and program availability on the official site.
 */
export interface University {
  id: string;
  name: string;
  koreanName: string;
  city: string;
  type: "National" | "Private" | "Science and technology";
  description: string;
  officialWebsite: string;
  /** Internal profile when one exists; otherwise link to the institution. */
  href: string;
  /** Display decoration only; it is not a ranking or quality signal. */
  gradient: string;
}

export const universities: University[] = [
  { id: "snu", name: "Seoul National University", koreanName: "\uC11C\uC6B8\uB300\uD559\uAD50", city: "Seoul", type: "National", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://en.snu.ac.kr/index.html", href: "/universities/seoul-national", gradient: "from-blue-700 to-indigo-800" },
  { id: "korea-university", name: "Korea University", koreanName: "\uACE0\uB824\uB300\uD559\uAD50", city: "Seoul", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.korea.ac.kr/en/index.do", href: "/universities/korea-university", gradient: "from-blue-800 to-sky-700" },
  { id: "yonsei", name: "Yonsei University", koreanName: "\uC5F0\uC138\uB300\uD559\uAD50", city: "Seoul", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.yonsei.ac.kr/", href: "/universities/yonsei", gradient: "from-sky-700 to-blue-900" },
  { id: "kaist", name: "KAIST", koreanName: "\uD55C\uAD6D\uACFC\uD559\uAE30\uC220\uC6D0", city: "Daejeon", type: "Science and technology", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.kaist.ac.kr/en/", href: "/universities/kaist", gradient: "from-cyan-700 to-blue-800" },
  { id: "postech", name: "POSTECH", koreanName: "\uD3EC\uD56D\uACF5\uACFC\uB300\uD559\uAD50", city: "Pohang", type: "Science and technology", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.postech.ac.kr/eng/", href: "/universities/postech", gradient: "from-blue-700 to-cyan-800" },
  { id: "skku", name: "Sungkyunkwan University", koreanName: "\uC131\uADE0\uAD00\uB300\uD559\uAD50", city: "Seoul / Suwon", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.skku.edu/eng/", href: "/universities/skku", gradient: "from-indigo-700 to-blue-800" },
  { id: "hanyang", name: "Hanyang University", koreanName: "\uD55C\uC591\uB300\uD559\uAD50", city: "Seoul / Ansan", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.hanyang.ac.kr/web/eng", href: "/universities/hanyang", gradient: "from-sky-700 to-indigo-800" },
  { id: "kyung-hee", name: "Kyung Hee University", koreanName: "\uACBD\uD76C\uB300\uD559\uAD50", city: "Seoul / Yongin", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.khu.ac.kr/eng/user/main/view.do", href: "https://www.khu.ac.kr/eng/user/main/view.do", gradient: "from-blue-800 to-indigo-700" },
  { id: "sogang", name: "Sogang University", koreanName: "\uC11C\uAC15\uB300\uD559\uAD50", city: "Seoul", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.sogang.ac.kr/", href: "https://www.sogang.ac.kr/", gradient: "from-indigo-700 to-sky-800" },
  { id: "ewha", name: "Ewha Womans University", koreanName: "\uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50", city: "Seoul", type: "Private", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.ewha.ac.kr/ewhaen/index.do", href: "/universities/ewha", gradient: "from-blue-700 to-rose-700" },
  { id: "chungnam", name: "Chungnam National University", koreanName: "\uCDA9\uB0A8\uB300\uD559\uAD50", city: "Daejeon", type: "National", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://plus.cnu.ac.kr/html/en/", href: "https://plus.cnu.ac.kr/html/en/", gradient: "from-sky-800 to-indigo-700" },
  { id: "chungbuk", name: "Chungbuk National University", koreanName: "\uCDA9\uBD81\uB300\uD559\uAD50", city: "Cheongju", type: "National", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.chungbuk.ac.kr/english/index.do", href: "https://www.chungbuk.ac.kr/english/index.do", gradient: "from-blue-800 to-cyan-700" },
  { id: "pusan", name: "Pusan National University", koreanName: "\uBD80\uC0B0\uB300\uD559\uAD50", city: "Busan", type: "National", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.pusan.ac.kr/eng/Main.do", href: "https://www.pusan.ac.kr/eng/Main.do", gradient: "from-indigo-700 to-blue-900" },
  { id: "kyungpook", name: "Kyungpook National University", koreanName: "\uACBD\uBD81\uB300\uD559\uAD50", city: "Daegu", type: "National", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://en.knu.ac.kr/", href: "https://en.knu.ac.kr/", gradient: "from-blue-700 to-indigo-900" },
  { id: "gist", name: "Gwangju Institute of Science and Technology (GIST)", koreanName: "\uAD11\uC8FC\uACFC\uD559\uAE30\uC220\uC6D0", city: "Gwangju", type: "Science and technology", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.gist.ac.kr/kr/main.html", href: "https://www.gist.ac.kr/kr/main.html", gradient: "from-cyan-700 to-indigo-800" },
  { id: "unist", name: "Ulsan National Institute of Science and Technology (UNIST)", koreanName: "\uC6B8\uC0B0\uACFC\uD559\uAE30\uC220\uC6D0", city: "Ulsan", type: "Science and technology", description: "Official university information, admissions, and academic departments.", officialWebsite: "https://www.unist.ac.kr/", href: "https://www.unist.ac.kr/", gradient: "from-sky-700 to-blue-900" },
];
