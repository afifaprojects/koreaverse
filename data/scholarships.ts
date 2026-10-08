export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: "Government";
  degreeLevel: string[];
  eligibility: string[];
  funding: string;
  description: string;
  officialWebsite: string;
  gradient: string;
}

/** Only named, verifiable programs belong here; yearly terms must be checked at source. */
export const scholarships: Scholarship[] = [
  {
    id: "gks",
    name: "Global Korea Scholarship (GKS)",
    provider: "National Institute for International Education (NIIED), Republic of Korea",
    type: "Government",
    degreeLevel: ["Associate", "Bachelor's", "Master's", "Doctoral"],
    eligibility: ["Eligibility differs by degree, track, and annual application guideline.", "Check the current official notice before applying."],
    funding: "Benefits and terms are defined in the current annual guideline.",
    description: "A Korean government scholarship program for international students. Tracks, fields, participating universities, and requirements vary by annual notice.",
    officialWebsite: "https://www.studyinkorea.go.kr/en/plan/scholarship.do",
    gradient: "from-blue-700 to-indigo-900",
  },
  {
    id: "koica-sp",
    name: "KOICA Scholarship Program (CIAT)",
    provider: "Korea International Cooperation Agency (KOICA)",
    type: "Government",
    degreeLevel: ["Master's", "Doctoral"],
    eligibility: ["Programs target participants from KOICA partner countries.", "Requirements depend on the specific program and current notice."],
    funding: "Consult the current program notice for benefits and terms.",
    description: "KOICA's scholarship program offers postgraduate opportunities through specific programs. The current notice defines participating countries, fields, institutions, and selection requirements.",
    officialWebsite: "https://www.koica.go.kr/ciat/7806/subview.do",
    gradient: "from-sky-700 to-blue-900",
  },
];
