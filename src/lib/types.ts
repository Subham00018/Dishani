
export interface College {
  id: string;
  name: string;
  logoUrl?: string; // Optional, can use a default
  campusPhotoUrl: string;
  location: string;
  ranking?: number; // Optional
  feeStructure: string;
  scholarships: string[];
  courses: string[];
  placements: {
    averagePackage?: string;
    highestPackage?: string;
    topRecruiters?: string[];
    overview: string;
  };
  about: string;
  website?: string;
}

export interface EntranceExam {
  id: string;
  name: string;
  date: string;
  description: string;
  bannerImageUrl: string;
  relevantColleges?: string[]; // IDs of colleges
}
