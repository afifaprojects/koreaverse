export interface Faq {
  question: string;
  answer: string;
  sourceLabel: string;
  sourceUrl: string;
}

/** General answers with official starting points; current notices take precedence. */
export const faqs: Faq[] = [
  {
    question: "How do I apply for the GKS Scholarship?",
    answer: "GKS application tracks, documents, schedules, eligible universities, and departments are set out in each degree program's annual guideline. Check the current notice before preparing an application.",
    sourceLabel: "Study in Korea: GKS notices",
    sourceUrl: "https://www.studyinkorea.go.kr/en/plan/scholarship.do",
  },
  {
    question: "Do I need TOPIK to study in Korea?",
    answer: "Language requirements depend on the university, department, degree, and language of instruction. Check the current admission guide for your specific program.",
    sourceLabel: "Study in Korea: university search",
    sourceUrl: "https://www.studyinkorea.go.kr/en/search.do",
  },
  {
    question: "How much does it cost to study in Korea?",
    answer: "Tuition differs by institution and program, and living costs depend on personal circumstances. Check the current university fee schedule and make a budget for your intended city and housing.",
    sourceLabel: "Study in Korea: study expenses",
    sourceUrl: "https://www.studyinkorea.go.kr/en_US/plan/abroadExpenses.do",
  },
  {
    question: "Can international students work part-time while studying?",
    answer: "Permission and eligibility depend on the student's status and current rules. Check the official guidance and ask your university's international student office before working.",
    sourceLabel: "Study in Korea: part-time work guidance",
    sourceUrl: "https://www.studyinkorea.go.kr/en/work/aboutForeignerEmploymentSystem.do?tab=part-time",
  },
  {
    question: "What GPA do I need for a scholarship?",
    answer: "There is no single GPA threshold for every scholarship. Requirements differ by program, degree, and annual notice; use the current official guideline for the award you plan to apply for.",
    sourceLabel: "Study in Korea: GKS notices",
    sourceUrl: "https://www.studyinkorea.go.kr/en/plan/scholarship.do",
  },
  {
    question: "How long does a Korean student visa take to process?",
    answer: "Processing times and required documents can depend on your location and circumstances. Contact the Korean embassy or consulate responsible for your application and consult the official visa portal for current information.",
    sourceLabel: "Korea Visa Portal",
    sourceUrl: "https://www.visa.go.kr/",
  },
];
