
export interface CourseInfo {
  name: string;
  fee?: string; // e.g., "₹2.2 Lakhs per year", "Fee varies"
  duration?: string; // Optional: e.g., "4 Years", can be added later
}

export interface College {
  id: string;
  name: string;
  logoUrl?: string;
  campusPhotoUrl: string;
  dataAiHint?: string;
  location: string;
  ranking?: number;
  feeStructure: string; // Overall fee note for the college
  scholarships: string[];
  courses: CourseInfo[]; // Changed from string[]
  placements: {
    averagePackage?: string;
    highestPackage?: string;
    topRecruiters?: string[];
    overview: string;
  };
  about: string;
  website?: string;
  eligibility: string;
  hostelInfo: string;
}

export interface EntranceExam {
  id: string;
  name: string;
  date: string;
  description: string;
  bannerImageUrl: string;
  dataAiHint?: string;
  relevantColleges?: string[]; // IDs of colleges
}
