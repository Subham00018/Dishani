import type { College, EntranceExam } from './types';

export const colleges: College[] = [
  {
    id: 'iit-bombay',
    name: 'IIT Bombay',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university campus',
    location: 'Mumbai, Maharashtra',
    ranking: 1,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech)',
    scholarships: ['Merit-cum-Means Scholarship', 'Inspire Scholarship'],
    courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Aerospace Engineering'],
    placements: {
      averagePackage: '₹25 LPA',
      highestPackage: '₹3.67 CPA (International)',
      topRecruiters: ['Google', 'Microsoft', 'Samsung'],
      overview: 'IIT Bombay boasts excellent placement records with students receiving offers from top global companies.',
    },
    about: 'Indian Institute of Technology Bombay is a public technical and research university located in Powai, Mumbai. It is known for its flagship 4-year, 5-year, and 2-year programmes for which the entry is through the Joint Entrance Examination – Advanced and Graduate Aptitude Test in Engineering.',
    website: 'https://www.iitb.ac.in/'
  },
  {
    id: 'iit-delhi',
    name: 'IIT Delhi',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'college building',
    location: 'New Delhi, Delhi',
    ranking: 2,
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech)',
    scholarships: ['Merit-cum-Means Scholarship', 'Alumni Funded Scholarships'],
    courses: ['Textile Technology', 'Computer Science', 'Biochemical Engineering', 'Mathematics and Computing'],
    placements: {
      averagePackage: '₹24 LPA',
      highestPackage: '₹2 CPA (Domestic)',
      overview: 'IIT Delhi has a strong industry connection, leading to high placement rates in diverse sectors.',
    },
    about: 'Indian Institute of Technology Delhi is a public technical and research university located in Hauz Khas, Delhi. It is one of the oldest Indian Institutes of Technology in India.',
    website: 'https://home.iitd.ac.in/'
  },
  {
    id: 'iisc-bangalore',
    name: 'IISc Bangalore',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'research institute',
    location: 'Bengaluru, Karnataka',
    ranking: 3,
    feeStructure: 'Approx. ₹30,000 - ₹70,000 per year (Course-dependent)',
    scholarships: ['KVPY Fellowship', 'IISc Scholarships'],
    courses: ['Physics', 'Biology', 'Materials Engineering', 'Aerospace Engineering (Research)'],
    placements: {
      overview: 'IISc focuses on research and academia, with graduates often pursuing higher studies or R&D roles.',
    },
    about: 'The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management. It is located in Bengaluru, in the Indian state of Karnataka.',
    website: 'https://iisc.ac.in/'
  },
  {
    id: 'iit-madras',
    name: 'IIT Madras',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'tech campus',
    location: 'Chennai, Tamil Nadu',
    ranking: 4,
    feeStructure: 'Approx. ₹2.0 Lakhs per year (B.Tech)',
    scholarships: ['Central Sector Scholarship', 'State Government Scholarships'],
    courses: ['Naval Architecture', 'Ocean Engineering', 'Aerospace Engineering', 'Engineering Physics'],
    placements: {
      averagePackage: '₹22 LPA',
      overview: 'IIT Madras is known for its strong focus on innovation and entrepreneurship, reflected in its placement trends.',
    },
    about: 'Indian Institute of Technology Madras is a public technical and research university located in Chennai, Tamil Nadu and is one of the most prestigious institutes in India.',
    website: 'https://www.iitm.ac.in/'
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'private university',
    location: 'Pilani, Rajasthan',
    ranking: 10, // Example ranking
    feeStructure: 'Approx. ₹5.0 Lakhs per year',
    scholarships: ['Merit Scholarships', 'Merit-cum-Need Scholarships'],
    courses: ['Computer Science', 'Electronics & Communication', 'Mechanical Engineering', 'Pharmacy'],
    placements: {
      averagePackage: '₹18 LPA',
      overview: 'BITS Pilani offers excellent placements across its campuses, with a strong alumni network.',
    },
    about: 'Birla Institute of Technology & Science, Pilani is a private deemed university in Pilani, India. It focuses primarily on higher education and research in engineering and sciences.',
    website: 'https://www.bits-pilani.ac.in/'
  }
];

export const entranceExams: EntranceExam[] = [
  {
    id: 'jee-advanced',
    name: 'JEE Advanced 2024',
    date: 'Results: June 9, 2024',
    description: 'For admission to undergraduate courses leading to a Bachelor\'s, Integrated Master\'s or Bachelor-Master Dual Degree in Engineering, Sciences, or Architecture in the IITs.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'exam hall students',
    relevantColleges: ['iit-bombay', 'iit-delhi', 'iit-madras']
  },
  {
    id: 'bitsat',
    name: 'BITSAT 2024',
    date: 'Session 2: June 24-28, 2024',
    description: 'BITS Admission Test for integrated first-degree programmes of BITS Pilani campuses in Pilani, Goa, and Hyderabad.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'university entrance exam',
    relevantColleges: ['bits-pilani']
  },
  {
    id: 'gate',
    name: 'GATE 2025',
    date: 'Applications: Aug 2024 (Tentative)',
    description: 'Graduate Aptitude Test in Engineering for Master\'s programs and PSU recruitment.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'student studying computer',
    relevantColleges: ['iit-bombay', 'iit-delhi', 'iisc-bangalore', 'iit-madras']
  }
];

export const getCollegeById = (id: string): College | undefined => colleges.find(c => c.id === id);
export const getExamById = (id: string): EntranceExam | undefined => entranceExams.find(e => e.id === id);

