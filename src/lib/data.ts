
import type { College, EntranceExam, CourseInfo } from './types';

export const colleges: College[] = [
  {
    id: 'iit-bombay',
    name: 'IIT Bombay',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'university campus',
    location: 'Mumbai, Maharashtra',
    ranking: 1,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Merit-cum-Means Scholarship', 'Inspire Scholarship'],
    courses: [
      { name: 'Computer Science', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Mechanical Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Aerospace Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' }
    ],
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
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Merit-cum-Means Scholarship', 'Alumni Funded Scholarships'],
    courses: [
      { name: 'Textile Technology', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Computer Science', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Biochemical Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Mathematics and Computing', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' }
    ],
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
    feeStructure: 'Approx. ₹30,000 - ₹70,000 per year (Course-dependent). Research programs have different fee structures.',
    scholarships: ['KVPY Fellowship', 'IISc Scholarships'],
    courses: [
      { name: 'Physics', fee: 'Approx. ₹40,000 per year (B.S. Research)' },
      { name: 'Biology', fee: 'Approx. ₹40,000 per year (B.S. Research)' },
      { name: 'Materials Engineering', fee: 'Fee varies by program level' },
      { name: 'Aerospace Engineering (Research)', fee: 'Fee varies by program level' }
    ],
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
    feeStructure: 'Approx. ₹2.0 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Central Sector Scholarship', 'State Government Scholarships'],
    courses: [
      { name: 'Naval Architecture', fee: 'Approx. ₹2.0 Lakhs per year (B.Tech)' },
      { name: 'Ocean Engineering', fee: 'Approx. ₹2.0 Lakhs per year (B.Tech)' },
      { name: 'Aerospace Engineering', fee: 'Approx. ₹2.0 Lakhs per year (B.Tech)' },
      { name: 'Engineering Physics', fee: 'Approx. ₹2.0 Lakhs per year (B.Tech)' }
    ],
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
    ranking: 10,
    feeStructure: 'Approx. ₹5.0 Lakhs per year. Fees vary by program.',
    scholarships: ['Merit Scholarships', 'Merit-cum-Need Scholarships'],
    courses: [
      { name: 'Computer Science', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Electronics & Communication', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Mechanical Engineering', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Pharmacy', fee: 'Approx. ₹4.5 Lakhs per year (B.Pharm)' },
      { name: 'Masters in Computer Applications', fee: 'Contact university for MCA fees' }
    ],
    placements: {
      averagePackage: '₹18 LPA',
      overview: 'BITS Pilani offers excellent placements across its campuses, with a strong alumni network.',
    },
    about: 'Birla Institute of Technology & Science, Pilani is a private deemed university in Pilani, India. It focuses primarily on higher education and research in engineering and sciences.',
    website: 'https://www.bits-pilani.ac.in/'
  },
  {
    id: 'iit-kanpur',
    name: 'IIT Kanpur',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'historic campus',
    location: 'Kanpur, Uttar Pradesh',
    ranking: 5,
    feeStructure: 'Approx. ₹2.15 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Various Merit and Need-based scholarships'],
    courses: [
      { name: 'Aerospace Engineering', fee: 'Approx. ₹2.15 Lakhs per year (B.Tech)' },
      { name: 'Biological Sciences and Bioengineering', fee: 'Approx. ₹2.15 Lakhs per year (B.Tech)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹2.15 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹2.15 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹23 LPA',
      overview: 'IIT Kanpur is known for its strong research focus and excellent placement opportunities.',
    },
    about: 'Indian Institute of Technology Kanpur is a public technical university located in Kanpur, Uttar Pradesh, India. It was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act.',
    website: 'https://www.iitk.ac.in/'
  },
  {
    id: 'iit-kharagpur',
    name: 'IIT Kharagpur',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'large campus',
    location: 'Kharagpur, West Bengal',
    ranking: 6,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Merit-cum-Means, Alumni funded scholarships'],
    courses: [
      { name: 'Agriculture and Food Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Architecture and Regional Planning', fee: 'Approx. ₹2.2 Lakhs per year (B.Arch)' },
      { name: 'Biotechnology', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Mining Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹20 LPA',
      overview: 'Being the oldest IIT, it has a vast alumni network and consistent placement records.',
    },
    about: 'The Indian Institute of Technology Kharagpur is a public technical university established by the government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance.',
    website: 'https://www.iitkgp.ac.in/'
  },
  {
    id: 'iit-roorkee',
    name: 'IIT Roorkee',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'heritage building',
    location: 'Roorkee, Uttarakhand',
    ranking: 7,
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Institute Merit Scholarship, Inspire Scholarship'],
    courses: [
      { name: 'Architecture', fee: 'Approx. ₹2.1 Lakhs per year (B.Arch)' },
      { name: 'Pulp and Paper Technology', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Earthquake Engineering', fee: 'Fee varies by program level' },
      { name: 'Polymer Science and Technology', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹19 LPA',
      overview: 'IIT Roorkee offers diverse engineering programs and has a good placement record.',
    },
    about: 'Indian Institute of Technology Roorkee is a public technical university located in Roorkee, Uttarakhand, India. It is the oldest engineering institution in India, and was formerly known as Thomason College of Civil Engineering.',
    website: 'https://www.iitr.ac.in/'
  },
  {
    id: 'iit-guwahati',
    name: 'IIT Guwahati',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'scenic campus',
    location: 'Guwahati, Assam',
    ranking: 8,
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Various government and private scholarships'],
    courses: [
      { name: 'Design', fee: 'Approx. ₹2.1 Lakhs per year (B.Des)' },
      { name: 'Biosciences and Bioengineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Chemical Science and Technology', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Electronics and Electrical Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹18 LPA',
      overview: 'IIT Guwahati is known for its beautiful campus and growing prominence in research and placements.',
    },
    about: 'Indian Institute of Technology Guwahati is a public technical university established by the Government of India, located in Amingaon area, North Guwahati city, in the state of Assam in India. It is the sixth Indian Institute of Technology established in India.',
    website: 'https://www.iitg.ac.in/'
  },
  {
    id: 'nit-trichy',
    name: 'NIT Trichy',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'engineering college',
    location: 'Tiruchirappalli, Tamil Nadu',
    ranking: 9,
    feeStructure: 'Approx. ₹1.4 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Central Sector Scheme, State schemes'],
    courses: [
      { name: 'Metallurgical and Materials Engineering', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Instrumentation and Control Engineering', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Production Engineering', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹90,000 per year' }
    ],
    placements: {
      averagePackage: '₹12 LPA',
      overview: 'NIT Trichy is one of the top NITs with excellent academic and placement records.',
    },
    about: 'National Institute of Technology Tiruchirappalli, commonly referred to as NIT Trichy, is a public technical and research university near the city of Tiruchirappalli in Tamil Nadu, India.',
    website: 'https://www.nitt.edu/'
  },
  {
    id: 'jadavpur-university',
    name: 'Jadavpur University',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'old university',
    location: 'Kolkata, West Bengal',
    ranking: 11,
    feeStructure: 'Approx. ₹10,000 - ₹30,000 per year (Highly Subsidized). Fees vary significantly by course.',
    scholarships: ['State Government scholarships, University specific aids'],
    courses: [
      { name: 'Power Engineering', fee: 'Approx. ₹2,400 per year (B.E.)' },
      { name: 'Construction Engineering', fee: 'Approx. ₹2,400 per year (B.E.)' },
      { name: 'Printing Engineering', fee: 'Approx. ₹2,400 per year (B.E.)' },
      { name: 'Information Technology', fee: 'Approx. ₹2,400 per year (B.E.)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹30,000 total for 2 years' },
      { name: 'Bachelor of Computer Applications', fee: 'Contact university for BCA fees' }
    ],
    placements: {
      averagePackage: '₹10 LPA',
      overview: 'Jadavpur University is known for its strong engineering programs and affordable education with good placements.',
    },
    about: 'Jadavpur University is a public technical university located in Jadavpur, Kolkata, West Bengal, India. It has a long tradition of providing high-quality education at nominal costs.',
    website: 'http://www.jaduniv.edu.in/'
  },
  {
    id: 'vit-vellore',
    name: 'VIT Vellore',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern campus',
    location: 'Vellore, Tamil Nadu',
    ranking: 12,
    feeStructure: 'Approx. ₹1.98 Lakhs (Group A) to ₹3.95 Lakhs (Group B) per year for B.Tech. Other courses vary.',
    scholarships: ['GV School Development Programme (GVSDP)', 'STARS scheme'],
    courses: [
      { name: 'Information Technology', fee: 'Approx. ₹1.98 Lakhs per year (B.Tech Group A)' },
      { name: 'Computer Science and Engineering (Specialization in AI)', fee: 'Approx. ₹3.95 Lakhs per year (B.Tech Group B)' },
      { name: 'Electronics and Communication Engineering', fee: 'Approx. ₹1.98 Lakhs per year (B.Tech Group A)' },
      { name: 'Mechanical Engineering', fee: 'Approx. ₹1.98 Lakhs per year (B.Tech Group A)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.4 Lakhs per year' },
      { name: 'Bachelor of Computer Applications', fee: 'Approx. ₹1 Lakh per year' }
    ],
    placements: {
      averagePackage: '₹9 LPA',
      highestPackage: '₹1.02 CPA',
      topRecruiters: ['Microsoft', 'Amazon', 'Deloitte'],
      overview: 'VIT is known for its large student intake and good placement opportunities in IT and core sectors.',
    },
    about: 'Vellore Institute of Technology (VIT) is a private deemed university located in Vellore, Tamil Nadu, India. It has campuses in Vellore, Chennai, Amaravati and Bhopal.',
    website: 'https://vit.ac.in/'
  },
  {
    id: 'nit-surathkal',
    name: 'NIT Surathkal',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'coastal campus',
    location: 'Mangalore, Karnataka',
    ranking: 13,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Various central and state government scholarships'],
    courses: [
      { name: 'Mining Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Marine Structures', fee: 'Fee varies by program level' },
      { name: 'Computational and Data Science', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹95,000 per year' }
    ],
    placements: {
      averagePackage: '₹11 LPA',
      overview: 'NITK Surathkal is a premier NIT with a beautiful coastal campus and strong placement records.',
    },
    about: 'National Institute of Technology Karnataka, also known as NITK Surathkal, formerly Karnataka Regional Engineering College, is a public technical university at Surathkal, Mangalore.',
    website: 'https://www.nitk.ac.in/'
  },
  {
    id: 'anna-university',
    name: 'Anna University',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'state university',
    location: 'Chennai, Tamil Nadu',
    ranking: 14,
    feeStructure: 'Approx. ₹50,000 - ₹60,000 per year (Govt. Quota for B.E./B.Tech). Fees vary by course and college type.',
    scholarships: ['BC/MBC Scholarships, SC/ST Scholarships'],
    courses: [
      { name: 'Geo-Informatics', fee: 'Approx. ₹55,000 per year (B.E.)' },
      { name: 'Automobile Engineering', fee: 'Approx. ₹55,000 per year (B.E.)' },
      { name: 'Manufacturing Engineering', fee: 'Approx. ₹55,000 per year (B.E.)' },
      { name: 'Electronics and Instrumentation Engineering', fee: 'Approx. ₹55,000 per year (B.E.)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹41,000 per year (Govt. Quota)' }
    ],
    placements: {
      averagePackage: '₹7 LPA',
      overview: 'Anna University is a large technical university with many affiliated colleges. Placements vary by college.',
    },
    about: 'Anna University is a public state university located in Chennai, Tamil Nadu, India. The main university campus is located in Guindy, Chennai.',
    website: 'https://www.annauniv.edu/'
  },
  {
    id: 'iit-hyderabad',
    name: 'IIT Hyderabad',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'new iit campus',
    location: 'Hyderabad, Telangana',
    ranking: 15,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech). Other courses may vary.',
    scholarships: ['Institute SC/ST Scholarship, MCM scholarship'],
    courses: [
      { name: 'Artificial Intelligence', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Engineering Science', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Biomedical Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Materials Science and Metallurgical Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹20 LPA',
      overview: 'IIT Hyderabad is one of the newer IITs but has quickly established a reputation for quality education and research.',
    },
    about: 'Indian Institute of Technology Hyderabad is a public technical university located in Sangareddy district, Telangana, India. IITH is known for its academic strength, research, publications and proximity to IT and industrial hubs.',
    website: 'https://www.iith.ac.in/'
  },
  {
    id: 'nit-warangal',
    name: 'NIT Warangal',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'historic nit',
    location: 'Warangal, Telangana',
    ranking: 16,
    feeStructure: 'Approx. ₹1.3 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Scholarships for SC/ST/OBC/Minority students'],
    courses: [
      { name: 'Biotechnology', fee: 'Approx. ₹1.3 Lakhs per year (B.Tech)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.3 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹1.3 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹1.3 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹85,000 per year' }
    ],
    placements: {
      averagePackage: '₹10 LPA',
      overview: 'NIT Warangal is one of the oldest and most reputed NITs in India.',
    },
    about: 'National Institute of Technology, Warangal is a public technical and research university located in Warangal, India. It is recognised as an Institute of National Importance by the Government of India.',
    website: 'https://www.nitw.ac.in/'
  },
  {
    id: 'iit-indore',
    name: 'IIT Indore',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern architecture',
    location: 'Indore, Madhya Pradesh',
    ranking: 17,
    feeStructure: 'Approx. ₹2.3 Lakhs per year (B.Tech).',
    scholarships: ['Merit-cum-Means Scholarship, Central Sector Scholarships'],
    courses: [
      { name: 'Space Sciences and Engineering', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' },
      { name: 'Metallurgy Engineering and Materials Science', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹18 LPA',
      overview: 'IIT Indore has shown rapid growth in academic and research activities, leading to good placements.',
    },
    about: 'Indian Institute of Technology Indore, located in Indore, is an institute of national importance established by the Government of India in 2009.',
    website: 'https://www.iiti.ac.in/'
  },
  {
    id: 'iit-bhu',
    name: 'IIT (BHU) Varanasi',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'historic university',
    location: 'Varanasi, Uttar Pradesh',
    ranking: 18,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech).',
    scholarships: ['Various internal and external scholarships'],
    courses: [
      { name: 'Pharmaceutical Engineering & Technology', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Ceramic Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Mining Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Biochemical Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹17 LPA',
      overview: 'IIT (BHU) has a long history and offers a wide range of engineering programs.',
    },
    about: 'The Indian Institute of Technology (BHU) Varanasi is a public technical university located in Varanasi, Uttar Pradesh, India. Founded in 1919 as the Banaras Engineering College, it became an IIT in 2012.',
    website: 'https://iitbhu.ac.in/'
  },
  {
    id: 'ict-mumbai',
    name: 'ICT Mumbai',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'chemical technology',
    location: 'Mumbai, Maharashtra',
    ranking: 19,
    feeStructure: 'Approx. ₹85,000 per year (B.Tech). Varies for other courses.',
    scholarships: ['Merit based, Industry sponsored scholarships'],
    courses: [
      { name: 'Chemical Engineering', fee: 'Approx. ₹85,000 per year (B.Tech)' },
      { name: 'Dyestuff Technology', fee: 'Approx. ₹85,000 per year (B.Tech)' },
      { name: 'Food Engineering and Technology', fee: 'Approx. ₹85,000 per year (B.Tech)' },
      { name: 'Pharmaceuticals Chemistry and Technology', fee: 'Approx. ₹85,000 per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹8 LPA',
      overview: 'Institute of Chemical Technology is a premier institute for chemical engineering and technology.',
    },
    about: 'Institute of Chemical Technology is a public deemed university in Mumbai, India. The institute also has campuses at Jalna, Marathwada and Bhubaneswar, Odisha. It is focused on training and research in fields of chemical engineering, chemical technology, and pharmacy.',
    website: 'https://www.ictmumbai.edu.in/'
  },
  {
    id: 'iit-ropar',
    name: 'IIT Ropar',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'new infrastructure',
    location: 'Rupnagar, Punjab',
    ranking: 20,
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech).',
    scholarships: ['MCM Scholarship, Institute Free Studentship'],
    courses: [
      { name: 'Biomedical Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Mathematics and Computing', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Mechanical Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹16 LPA',
      overview: 'IIT Ropar is among the newer IITs showing strong growth in placements and research output.',
    },
    about: 'Indian Institute of Technology Ropar is a public technical university located in Rupnagar, Punjab, India. It is one of the eight newer Indian Institutes of Technology established by the Ministry of Human Resource Development, Government of India.',
    website: 'https://www.iitrpr.ac.in/'
  },
  {
    id: 'iit-patna',
    name: 'IIT Patna',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'developing campus',
    location: 'Patna, Bihar',
    ranking: 21,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech).',
    scholarships: ['Various government scholarships'],
    courses: [
      { name: 'AI and Data Science', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Civil and Environmental Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Computer Science', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹15 LPA',
      overview: 'IIT Patna is steadily improving its academic and placement performance.',
    },
    about: 'Indian Institute of Technology Patna is a public technical university located in Bihta, Patna, India. It is recognized as an Institute of National Importance by the Government of India.',
    website: 'https://www.iitp.ac.in/'
  },
  {
    id: 'iiest-shibpur',
    name: 'IIEST Shibpur',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'historic engineering',
    location: 'Howrah, West Bengal',
    ranking: 22,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech).',
    scholarships: ['Merit-cum-Means, Institute specific'],
    courses: [
      { name: 'Aerospace Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Technology', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Mining Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹9 LPA',
      overview: 'Indian Institute of Engineering Science and Technology, Shibpur has a long legacy in engineering education.',
    },
    about: 'Indian Institute of Engineering Science and Technology, Shibpur is a public technical and research university located at Shibpur, Howrah district, West Bengal. It is recognised as an Institute of National Importance under MHRD by the Government of India.',
    website: 'https://www.iiests.ac.in/'
  },
  {
    id: 'nit-rourkela',
    name: 'NIT Rourkela',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'industrial area campus',
    location: 'Rourkela, Odisha',
    ranking: 23,
    feeStructure: 'Approx. ₹1.6 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Merit and need-based scholarships'],
    courses: [
      { name: 'Ceramic Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Food Process Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Industrial Design', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Biomedical Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹90,000 per year' }
    ],
    placements: {
      averagePackage: '₹10 LPA',
      overview: 'NIT Rourkela offers a wide range of engineering disciplines and has good industry connections.',
    },
    about: 'National Institute of Technology Rourkela, formerly Regional Engineering College Rourkela, is a publicly funded institute of higher learning for engineering, science and technology located in the steel city of Rourkela, Odisha, India.',
    website: 'https://www.nitrkl.ac.in/'
  },
  {
    id: 'iit-gandhinagar',
    name: 'IIT Gandhinagar',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sustainable campus',
    location: 'Gandhinagar, Gujarat',
    ranking: 24,
    feeStructure: 'Approx. ₹2.3 Lakhs per year (B.Tech).',
    scholarships: ['Financial aid provided by the institute'],
    courses: [
      { name: 'Society and Culture', fee: 'Fee varies, check website' }, // This is likely a humanities program
      { name: 'Earth Sciences', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' },
      { name: 'Mechanical Engineering', fee: 'Approx. ₹2.3 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹14 LPA',
      overview: 'IIT Gandhinagar focuses on interdisciplinary learning and has a growing placement record.',
    },
    about: 'Indian Institute of Technology Gandhinagar is a public technical university located in Gandhinagar, Gujarat, India. It has been declared to be an Institute of National Importance by the Government of India.',
    website: 'https://iitgn.ac.in/'
  },
  {
    id: 'thapar-patiala',
    name: 'Thapar Institute (Patiala)',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'private engineering college',
    location: 'Patiala, Punjab',
    ranking: 25,
    feeStructure: 'Approx. ₹4.5 Lakhs per year (B.E./B.Tech). BCA/MCA fees differ.',
    scholarships: ['Merit based scholarships'],
    courses: [
      { name: 'Biotechnology', fee: 'Approx. ₹4.5 Lakhs per year (B.E.)' },
      { name: 'Civil Engineering (with specialization)', fee: 'Approx. ₹4.5 Lakhs per year (B.E.)' },
      { name: 'Computer Science and Business Systems', fee: 'Approx. ₹4.5 Lakhs per year (B.E.)' },
      { name: 'Mechatronics', fee: 'Approx. ₹4.5 Lakhs per year (B.E.)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹2.0 Lakhs per year' },
      { name: 'Bachelor of Computer Applications', fee: 'Approx. ₹1.8 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹10 LPA',
      overview: 'Thapar Institute of Engineering and Technology is a well-regarded private engineering institution.',
    },
    about: 'Thapar Institute of Engineering and Technology is a private deemed-to-be-university, in Patiala, Punjab, India. It was founded in 1956 by Karam Chand Thapar.',
    website: 'https://www.thapar.edu/'
  },
  {
    id: 'amrita-coimbatore',
    name: 'Amrita Vishwa Vidyapeetham (Coimbatore)',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'spiritual campus',
    location: 'Coimbatore, Tamil Nadu',
    ranking: 26,
    feeStructure: 'Approx. ₹3.5 Lakhs per year (B.Tech). BCA/MCA fees may differ.',
    scholarships: ['Amrita Entrance Examination based scholarships'],
    courses: [
      { name: 'Aerospace Engineering', fee: 'Approx. ₹3.5 Lakhs per year (B.Tech)' },
      { name: 'Automation and Robotics Engineering', fee: 'Approx. ₹3.5 Lakhs per year (B.Tech)' },
      { name: 'Cyber Security', fee: 'Approx. ₹3.5 Lakhs per year (B.Tech)' },
      { name: 'Electronics and Computer Engineering', fee: 'Approx. ₹3.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.5 Lakhs per year' },
      { name: 'Bachelor of Computer Applications', fee: 'Approx. ₹1.2 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹7.5 LPA',
      overview: 'Amrita University has multiple campuses and offers a wide range of programs with decent placements.',
    },
    about: 'Amrita Vishwa Vidyapeetham is a private deemed university based in Coimbatore, Tamil Nadu, India. It is a multi-campus, multi-disciplinary teaching and research university.',
    website: 'https://www.amrita.edu/'
  },
  {
    id: 'srm-chennai',
    name: 'SRM IST (Chennai)',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'large private campus',
    location: 'Chennai, Tamil Nadu',
    ranking: 27,
    feeStructure: 'Approx. ₹2.5 - ₹4.5 Lakhs per year (B.Tech depending on specialization). BCA/MCA fees differ.',
    scholarships: ['SRMJEEE Rank based, Socio-economic scholarships'],
    courses: [
      { name: 'Automobile Engineering with specialization in Electric Vehicles', fee: 'Approx. ₹3.0 Lakhs per year (B.Tech)' },
      { name: 'Nanotechnology', fee: 'Approx. ₹4.5 Lakhs per year (B.Tech)' },
      { name: 'Genetic Engineering', fee: 'Approx. ₹3.5 Lakhs per year (B.Tech)' },
      { name: 'Software Engineering', fee: 'Approx. ₹4.0 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹2.0 Lakhs per year' },
      { name: 'Bachelor of Computer Applications', fee: 'Approx. ₹1.5 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹6 LPA',
      overview: 'SRM Institute of Science and Technology is a large private university with a high volume of placements.',
    },
    about: 'SRM Institute of Science and Technology, is a private deemed university located in Kattankulathur, Chengalpattu, Tamil Nadu, India, near Chennai. It was founded in 1985 as SRM Engineering College in Kattankulathur.',
    website: 'https://www.srmist.edu.in/'
  },
  {
    id: 'nit-calicut',
    name: 'NIT Calicut',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'kerala campus',
    location: 'Kozhikode, Kerala',
    ranking: 28,
    feeStructure: 'Approx. ₹1.4 Lakhs per year (B.Tech). B.Arch/MCA fees differ.',
    scholarships: ['National and State level scholarships'],
    courses: [
      { name: 'Architecture', fee: 'Approx. ₹1.4 Lakhs per year (B.Arch)' },
      { name: 'Engineering Physics', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Materials Science and Engineering', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Production Engineering', fee: 'Approx. ₹1.4 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹90,000 per year' }
    ],
    placements: {
      averagePackage: '₹9.5 LPA',
      overview: 'NIT Calicut is a prominent engineering college in Kerala with good academic standards.',
    },
    about: 'National Institute of Technology Calicut, formerly Regional Engineering College Calicut, is a public technical university and an institute of national importance governed by the NIT Act passed by the Parliament of India.',
    website: 'https://nitc.ac.in/'
  },
  {
    id: 'iit-dhanbad',
    name: 'IIT (ISM) Dhanbad',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mining institute',
    location: 'Dhanbad, Jharkhand',
    ranking: 29,
    feeStructure: 'Approx. ₹2.2 Lakhs per year (B.Tech).',
    scholarships: ['Merit-cum-Means, Alumni scholarships'],
    courses: [
      { name: 'Mining Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Petroleum Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Environmental Science and Engineering', fee: 'Approx. ₹2.2 Lakhs per year (B.Tech)' },
      { name: 'Applied Geology', fee: 'Fee varies, check website' }
    ],
    placements: {
      averagePackage: '₹16 LPA',
      overview: 'Formerly Indian School of Mines, it excels in mining and earth sciences related engineering fields.',
    },
    about: 'Indian Institute of Technology (Indian School of Mines), Dhanbad is a public technical university located in Dhanbad, India. It has main focus on Mining and Mineral Engineering.',
    website: 'https://www.iitism.ac.in/'
  },
  {
    id: 'manipal-mit',
    name: 'Manipal Institute of Technology',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'international campus feel',
    location: 'Manipal, Karnataka',
    ranking: 30,
    feeStructure: 'Approx. ₹4.0 Lakhs per year (B.Tech). BCA/MCA fees differ.',
    scholarships: ['Merit-based scholarships for top rankers in MET'],
    courses: [
      { name: 'Data Science and Engineering', fee: 'Approx. ₹4.0 Lakhs per year (B.Tech)' },
      { name: 'Mechatronics Engineering', fee: 'Approx. ₹4.0 Lakhs per year (B.Tech)' },
      { name: 'Aeronautical Engineering', fee: 'Approx. ₹4.0 Lakhs per year (B.Tech)' },
      { name: 'Biomedical Engineering', fee: 'Approx. ₹4.0 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹2.5 Lakhs per year' },
      { name: 'Bachelor of Computer Applications', fee: 'Approx. ₹1.8 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹8 LPA',
      overview: 'MIT Manipal is a well-known private engineering college with a diverse student population.',
    },
    about: 'Manipal Institute of Technology is a private constituent institution of Manipal Academy of Higher Education that specializes in engineering. MIT contains 17 academic departments and awards undergraduate, graduate and post graduate degrees.',
    website: 'https://manipal.edu/mit.html'
  },
  {
    id: 'coep-pune',
    name: 'COEP Technological University (Pune)',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'historic pune college',
    location: 'Pune, Maharashtra',
    ranking: 31,
    feeStructure: 'Approx. ₹90,000 per year (B.Tech). MCA fees differ.',
    scholarships: ['Government of Maharashtra scholarships'],
    courses: [
      { name: 'Metallurgy and Material Technology', fee: 'Approx. ₹90,000 per year (B.Tech)' },
      { name: 'Instrumentation and Control', fee: 'Approx. ₹90,000 per year (B.Tech)' },
      { name: 'Production Engineering (Sandwich)', fee: 'Approx. ₹90,000 per year (B.Tech)' },
      { name: 'Robotics and Artificial Intelligence', fee: 'Approx. ₹90,000 per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹70,000 per year' }
    ],
    placements: {
      averagePackage: '₹9 LPA',
      overview: 'College of Engineering, Pune is one of the oldest engineering colleges in Asia with a strong reputation.',
    },
    about: 'COEP Technological University, formerly College of Engineering, Pune, is a unitary public university of the government of Maharashtra, situated in Pune, Maharashtra, India. Established in 1854, it is one of the oldest engineering colleges in Asia.',
    website: 'https://www.coep.org.in/'
  },
  {
    id: 'iiit-hyderabad',
    name: 'IIIT Hyderabad',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'it focused institute',
    location: 'Hyderabad, Telangana',
    ranking: 32,
    feeStructure: 'Approx. ₹3.6 Lakhs per year. Fees vary by program specialization.',
    scholarships: ['Pratibha scholarship (State govt.), Financial assistance schemes'],
    courses: [
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹3.6 Lakhs per year (B.Tech)' },
      { name: 'Electronics and Communication Engineering', fee: 'Approx. ₹3.6 Lakhs per year (B.Tech)' },
      { name: 'Computational Linguistics', fee: 'Fee varies, check website' },
      { name: 'Computer Science and Human Sciences', fee: 'Fee varies, check website' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹2.8 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹30 LPA (CSE)',
      overview: 'International Institute of Information Technology, Hyderabad is renowned for its strong focus on CS and IT related research and education.',
    },
    about: 'International Institute of Information Technology, Hyderabad is an autonomous university, founded as a not-for-profit public private partnership in 1998. It is one of the top Computer Science institutes in the country.',
    website: 'https://www.iiit.ac.in/'
  },
  {
    id: 'nit-kurukshetra',
    name: 'NIT Kurukshetra',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'north india nit',
    location: 'Kurukshetra, Haryana',
    ranking: 33,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Central and State Government schemes'],
    courses: [
      { name: 'Industrial Engineering & Management', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Information Technology', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Production and Industrial Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹88,000 per year' }
    ],
    placements: {
      averagePackage: '₹9 LPA',
      overview: 'NIT Kurukshetra is a well-established NIT in North India with good placements.',
    },
    about: 'National Institute of Technology, Kurukshetra is a public technical and research university located in Kurukshetra, Haryana, India. It is recognized as an Institute of National Importance by the Indian government.',
    website: 'https://nitkkr.ac.in/'
  },
  {
    id: 'mnnit-allahabad',
    name: 'MNNIT Allahabad',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'up nit campus',
    location: 'Prayagraj, Uttar Pradesh',
    ranking: 34,
    feeStructure: 'Approx. ₹1.6 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Various government scholarships for reserved categories'],
    courses: [
      { name: 'Biotechnology', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹92,000 per year' }
    ],
    placements: {
      averagePackage: '₹11 LPA',
      overview: 'Motilal Nehru National Institute of Technology Allahabad is a prominent NIT with strong academic programs.',
    },
    about: 'Motilal Nehru National Institute of Technology Allahabad, formerly Motilal Nehru Regional Engineering College, is a public technical university located in Prayagraj, Uttar Pradesh, India.',
    website: 'http://www.mnnit.ac.in/'
  },
  {
    id: 'svnit-surat',
    name: 'SVNIT Surat',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'gujarat nit campus',
    location: 'Surat, Gujarat',
    ranking: 35,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Scholarships for meritorious and economically weaker students'],
    courses: [
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Computer Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹85,000 per year' }
    ],
    placements: {
      averagePackage: '₹8.5 LPA',
      overview: 'Sardar Vallabhbhai National Institute of Technology, Surat is a respected NIT in Western India.',
    },
    about: 'Sardar Vallabhbhai National Institute of Technology, Surat, commonly known as National Institute of Technology, Surat, is an institute of national importance imparting higher education in engineering and technology.',
    website: 'https://www.svnit.ac.in/'
  },
  {
    id: 'iiit-bangalore',
    name: 'IIIT Bangalore',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'tech hub institute',
    location: 'Bengaluru, Karnataka',
    ranking: 36,
    feeStructure: 'Approx. ₹5 Lakhs per year (Integrated M.Tech). Fees vary significantly by specific program.',
    scholarships: ['Merit-based scholarships, Industry sponsored scholarships'],
    courses: [
      { name: 'Integrated M.Tech in CSE', fee: 'Approx. ₹5 Lakhs per year' },
      { name: 'Integrated M.Tech in ECE', fee: 'Approx. ₹5 Lakhs per year' },
      { name: 'Master of Science by Research', fee: 'Fee varies, check website' },
      { name: 'PhD Programs', fee: 'Fee varies, check website' }
    ],
    placements: {
      averagePackage: '₹25 LPA',
      overview: 'International Institute of Information Technology Bangalore is known for its postgraduate programs and strong industry ties.',
    },
    about: 'International Institute of Information Technology Bangalore is a private technology university located in Bangalore, India. The university is a DNB and Deemed University, and is promoted by the Government of Karnataka and the IT industry.',
    website: 'https://www.iiitb.ac.in/'
  },
  {
    id: 'nit-nagpur',
    name: 'VNIT Nagpur',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'maharashtra nit campus',
    location: 'Nagpur, Maharashtra',
    ranking: 37,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech). B.Arch/MCA fees differ.',
    scholarships: ['Central and State scholarships'],
    courses: [
      { name: 'Mining Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Metallurgical and Materials Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Architecture', fee: 'Approx. ₹1.5 Lakhs per year (B.Arch)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹87,000 per year' }
    ],
    placements: {
      averagePackage: '₹8 LPA',
      overview: 'Visvesvaraya National Institute of Technology, Nagpur is a well-established NIT.',
    },
    about: 'Visvesvaraya National Institute of Technology Nagpur, also referred to as NIT Nagpur, is a public technical university located in the central Indian city of Nagpur, Maharashtra.',
    website: 'https://vnit.ac.in/'
  },
  {
    id: 'iit-ropar-alt',
    name: 'IIT Ropar (Alternate Entry)',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'punjab iit campus',
    location: 'Rupnagar, Punjab',
    ranking: 38,
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech).',
    scholarships: ['MCM Scholarship, Institute Free Studentship'],
    courses: [
      { name: 'Civil Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering (VLSI Design and Technology)', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering (AI)', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Mechanical Engineering (Manufacturing)', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' }
    ],
    placements: {
      averagePackage: '₹16.5 LPA',
      overview: 'IIT Ropar offers specialized tracks and shows consistent growth in industry collaborations.',
    },
    about: 'Indian Institute of Technology Ropar, a newer IIT, is rapidly establishing itself with innovative programs and research focus. It is located in Punjab, India.',
    website: 'https://www.iitrpr.ac.in/'
  },
  {
    id: 'pec-chandigarh',
    name: 'PEC Chandigarh',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'chandigarh engineering',
    location: 'Chandigarh',
    ranking: 39,
    feeStructure: 'Approx. ₹2 Lakhs per year (B.E.). MCA fees differ.',
    scholarships: ['Merit scholarships, Post-matric scholarships'],
    courses: [
      { name: 'Aerospace Engineering', fee: 'Approx. ₹2 Lakhs per year (B.E.)' },
      { name: 'Materials and Metallurgical Engineering', fee: 'Approx. ₹2 Lakhs per year (B.E.)' },
      { name: 'Production and Industrial Engineering', fee: 'Approx. ₹2 Lakhs per year (B.E.)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹2 Lakhs per year (B.E.)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.5 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹10.5 LPA',
      overview: 'Punjab Engineering College (Deemed to be University), Chandigarh, has a rich history and strong alumni network.',
    },
    about: 'Punjab Engineering College is a public technical institution in Chandigarh, India. Founded in 1921, it is one of the oldest engineering institutes in the country.',
    website: 'https://pec.ac.in/'
  },
  {
    id: 'iiit-allahabad',
    name: 'IIIT Allahabad',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'information technology institute',
    location: 'Prayagraj, Uttar Pradesh',
    ranking: 40,
    feeStructure: 'Approx. ₹1.8 Lakhs per year (B.Tech). Fees for other programs may vary.',
    scholarships: ['Various state and central government scholarships'],
    courses: [
      { name: 'Information Technology', fee: 'Approx. ₹1.8 Lakhs per year (B.Tech)' },
      { name: 'Electronics and Communication Engineering', fee: 'Approx. ₹1.8 Lakhs per year (B.Tech)' },
      { name: 'IT (Business Informatics)', fee: 'Approx. ₹1.8 Lakhs per year (B.Tech)' },
      { name: 'Robotics and Automation', fee: 'Fee varies, check website' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.2 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹20 LPA',
      overview: 'Indian Institute of Information Technology, Allahabad focuses on IT and related areas with excellent placement records.',
    },
    about: 'Indian Institute of Information Technology, Allahabad is a public university located in Jhalwa, Prayagraj district, in Uttar Pradesh state in India. It is one of the twenty-five IIITs listed by the MHRD.',
    website: 'https://www.iiita.ac.in/'
  },
  {
    id: 'nit-jalandhar',
    name: 'NIT Jalandhar',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'punjab nit',
    location: 'Jalandhar, Punjab',
    ranking: 41,
    feeStructure: 'Approx. ₹1.7 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Scholarship schemes for various categories'],
    courses: [
      { name: 'Textile Technology', fee: 'Approx. ₹1.7 Lakhs per year (B.Tech)' },
      { name: 'Industrial & Production Engineering', fee: 'Approx. ₹1.7 Lakhs per year (B.Tech)' },
      { name: 'Instrumentation & Control Engineering', fee: 'Approx. ₹1.7 Lakhs per year (B.Tech)' },
      { name: 'Bio Technology', fee: 'Approx. ₹1.7 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹95,000 per year' }
    ],
    placements: {
      averagePackage: '₹8 LPA',
      overview: 'Dr. B. R. Ambedkar National Institute of Technology Jalandhar is a public engineering university located in Jalandhar, Punjab, India.',
    },
    about: 'Dr. B. R. Ambedkar National Institute of Technology Jalandhar, formerly Regional Engineering College Jalandhar, is a public technical university located in Jalandhar, Punjab, India.',
    website: 'https://www.nitj.ac.in/'
  },
  {
    id: 'daiict-gandhinagar',
    name: 'DAIICT Gandhinagar',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ict university',
    location: 'Gandhinagar, Gujarat',
    ranking: 42,
    feeStructure: 'Approx. ₹1.8 Lakhs per year (B.Tech ICT). BCA/MCA fees differ.',
    scholarships: ['Merit and Merit-cum-Means scholarships'],
    courses: [
      { name: 'Information and Communication Technology (ICT)', fee: 'Approx. ₹1.8 Lakhs per year (B.Tech)' },
      { name: 'ICT with minor in Computational Science', fee: 'Approx. ₹1.8 Lakhs per year (B.Tech)' },
      { name: 'Mathematics and Computing', fee: 'Approx. ₹1.8 Lakhs per year (B.Tech)' },
      { name: 'Electronics and VLSI Design', fee: 'Fee varies for M.Tech' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.5 Lakhs per year' },
      { name: 'Bachelor of Computer Applications', fee: 'Approx. ₹1.2 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹15 LPA',
      overview: 'Dhirubhai Ambani Institute of Information and Communication Technology is known for its specialized programs in ICT.',
    },
    about: 'Dhirubhai Ambani Institute of Information and Communication Technology is a private self-financed university located in Gandhinagar, Gujarat, India. It is named after the Indian entrepreneur and philanthropist Dhirubhai Ambani.',
    website: 'https://www.daiict.ac.in/'
  },
  {
    id: 'nit-silchar',
    name: 'NIT Silchar',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'assam nit',
    location: 'Silchar, Assam',
    ranking: 43,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Various scholarships for eligible students'],
    courses: [
      { name: 'Civil Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Electronics and Communication Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Mechanical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹88,000 per year' }
    ],
    placements: {
      averagePackage: '₹7.5 LPA',
      overview: 'National Institute of Technology Silchar is an Institute of National Importance located in Silchar, Assam, India.',
    },
    about: 'National Institute of Technology Silchar is one of the 31 NITs of India and was established in 1967 as a Regional Engineering College in Silchar. In 2002, it was upgraded to the status of National Institute of Technology.',
    website: 'http://www.nits.ac.in/'
  },
  {
    id: 'nit-jaipur',
    name: 'MNIT Jaipur',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'rajasthan nit',
    location: 'Jaipur, Rajasthan',
    ranking: 44,
    feeStructure: 'Approx. ₹1.6 Lakhs per year (B.Tech). B.Arch/MCA fees differ.',
    scholarships: ['Government and Institute scholarships'],
    courses: [
      { name: 'Architecture', fee: 'Approx. ₹1.6 Lakhs per year (B.Arch)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹90,000 per year' }
    ],
    placements: {
      averagePackage: '₹10 LPA',
      overview: 'Malaviya National Institute of Technology Jaipur is a public technical university located in Jaipur, India with a focus on science, engineering and management.',
    },
    about: 'Malaviya National Institute of Technology Jaipur is a public technical university located in Jaipur, India. Established in 1963 as Malaviya Regional Engineering College Jaipur, it became a National Institute of Technology in 2002.',
    website: 'https://www.mnit.ac.in/'
  },
  {
    id: 'bits-hyderabad',
    name: 'BITS Hyderabad',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'bits campus south',
    location: 'Hyderabad, Telangana',
    ranking: 45,
    feeStructure: 'Approx. ₹5.0 Lakhs per year. Fees vary by program.',
    scholarships: ['Merit Scholarships, Merit-cum-Need Scholarships based on BITSAT score'],
    courses: [
      { name: 'Chemical Engineering', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Civil Engineering', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Computer Science', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Electronics & Instrumentation', fee: 'Approx. ₹5.0 Lakhs per year (B.E.)' },
      { name: 'Masters in Computer Applications', fee: 'Contact university for MCA fees' }
    ],
    placements: {
      averagePackage: '₹17 LPA',
      overview: 'BITS Pilani, Hyderabad Campus offers similar quality education and placement opportunities as the Pilani campus.',
    },
    about: 'Birla Institute of Technology & Science, Pilani – Hyderabad Campus is a private deemed university campus located in Hyderabad, Telangana, India. It is one of the four constituent campuses of BITS Pilani.',
    website: 'https://www.bits-pilani.ac.in/hyderabad/'
  },
  {
    id: 'nit-bhopal',
    name: 'MANIT Bhopal',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mp nit campus',
    location: 'Bhopal, Madhya Pradesh',
    ranking: 46,
    feeStructure: 'Approx. ₹1.5 Lakhs per year (B.Tech). B.Plan/MCA fees differ.',
    scholarships: ['Scholarships based on merit and category'],
    courses: [
      { name: 'Planning', fee: 'Approx. ₹1.5 Lakhs per year (B.Plan)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering', fee: 'Approx. ₹1.5 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹88,000 per year' }
    ],
    placements: {
      averagePackage: '₹8 LPA',
      overview: 'Maulana Azad National Institute of Technology Bhopal is an Institute of National Importance under Ministry of Education, Government of India.',
    },
    about: 'Maulana Azad National Institute of Technology Bhopal, also known as NIT Bhopal, is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of the group of NITs.',
    website: 'http://www.manit.ac.in/'
  },
  {
    id: 'iiit-gwalior',
    name: 'IIITM Gwalior',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'management tech institute',
    location: 'Gwalior, Madhya Pradesh',
    ranking: 47,
    feeStructure: 'Approx. ₹1.7 Lakhs per year (IPG - M.Tech). Fees for other programs vary.',
    scholarships: ['Financial assistance schemes'],
    courses: [
      { name: 'Integrated B.Tech (IT) and MBA', fee: 'Approx. ₹1.7 Lakhs per year' },
      { name: 'Integrated B.Tech (IT) and M.Tech (IT)', fee: 'Approx. ₹1.7 Lakhs per year' },
      { name: 'PhD Programs', fee: 'Fee varies, check website' },
      { name: 'Management Development Programs', fee: 'Fee varies, check website' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.1 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹14 LPA',
      overview: 'Indian Institute of Information Technology and Management Gwalior offers unique integrated programs in IT and Management.',
    },
    about: 'Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior, commonly known as the Indian Institute of Information Technology and Management Gwalior, is an autonomous institute set up by Ministry of Human Resource Development, Government of India.',
    website: 'https://www.iiitm.ac.in/'
  },
  {
    id: 'nit-durgapur',
    name: 'NIT Durgapur',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'west bengal nit',
    location: 'Durgapur, West Bengal',
    ranking: 48,
    feeStructure: 'Approx. ₹1.6 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Multiple scholarship options available'],
    courses: [
      { name: 'Biotechnology', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Chemical Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Computer Science and Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Metallurgical and Materials Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹90,000 per year' }
    ],
    placements: {
      averagePackage: '₹7 LPA',
      overview: 'National Institute of Technology Durgapur is an institute of national importance in Durgapur, West Bengal, India.',
    },
    about: 'National Institute of Technology Durgapur, formerly Regional Engineering College, Durgapur, is a public technical university in the city of Durgapur in West Bengal, India. It is among the oldest NITs.',
    website: 'https://nitdgp.ac.in/'
  },
  {
    id: 'dtu-delhi',
    name: 'DTU Delhi',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'delhi tech university',
    location: 'New Delhi, Delhi',
    ranking: 49,
    feeStructure: 'Approx. ₹2.1 Lakhs per year (B.Tech). MCA fees differ.',
    scholarships: ['Merit cum Means EWS Scholarship, various private scholarships'],
    courses: [
      { name: 'Automotive Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Engineering Physics', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Software Engineering', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Mathematics and Computing', fee: 'Approx. ₹2.1 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹1.8 Lakhs per year' }
    ],
    placements: {
      averagePackage: '₹13 LPA',
      overview: 'Delhi Technological University, formerly Delhi College of Engineering, is a state university in New Delhi, India.',
    },
    about: 'Delhi Technological University, formerly known as the Delhi College of Engineering, is a state university in New Delhi, India. It was established in 1941 as Delhi Polytechnic.',
    website: 'http://dtu.ac.in/'
  },
  {
    id: 'nit-patna',
    name: 'NIT Patna',
    logoUrl: 'https://placehold.co/100x100.png',
    campusPhotoUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'bihar nit campus',
    location: 'Patna, Bihar',
    ranking: 50,
    feeStructure: 'Approx. ₹1.6 Lakhs per year (B.Tech). B.Arch/MCA fees differ.',
    scholarships: ['Post Matric Scholarships, Bihar Student Credit Card Scheme'],
    courses: [
      { name: 'Architecture', fee: 'Approx. ₹1.6 Lakhs per year (B.Arch)' },
      { name: 'Civil Engineering with specialization in Construction Technology', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Computer Science & Engineering with specialization in Data Science', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Electrical Engineering with specialization in Power System Engineering', fee: 'Approx. ₹1.6 Lakhs per year (B.Tech)' },
      { name: 'Masters in Computer Applications', fee: 'Approx. ₹90,000 per year' }
    ],
    placements: {
      averagePackage: '₹7.5 LPA',
      overview: 'National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna.',
    },
    about: 'National Institute of Technology Patna is a public technical university located in Patna, Bihar, India. It was renamed from Bihar College of Engineering Patna in 2004. It is an Institute of National Importance.',
    website: 'https://www.nitp.ac.in/'
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
    relevantColleges: ['iit-bombay', 'iit-delhi', 'iit-madras', 'iit-kanpur', 'iit-kharagpur', 'iit-roorkee', 'iit-guwahati', 'iit-hyderabad', 'iit-indore', 'iit-bhu', 'iit-ropar', 'iit-patna', 'iit-gandhinagar', 'iit-dhanbad']
  },
  {
    id: 'bitsat',
    name: 'BITSAT 2024',
    date: 'Session 2: June 24-28, 2024',
    description: 'BITS Admission Test for integrated first-degree programmes of BITS Pilani campuses in Pilani, Goa, and Hyderabad.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'university entrance exam',
    relevantColleges: ['bits-pilani', 'bits-hyderabad']
  },
  {
    id: 'jee-main',
    name: 'JEE Main 2025',
    date: 'Session 1: Jan 2025 (Tentative)',
    description: 'For admission to NITs, IIITs, and other Centrally Funded Technical Institutions (CFTIs), and as eligibility for JEE Advanced.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'students writing exam',
    relevantColleges: ['nit-trichy', 'nit-surathkal', 'nit-warangal', 'nit-calicut', 'nit-rourkela', 'mnnit-allahabad', 'svnit-surat', 'nit-kurukshetra', 'nit-jaipur', 'nit-bhopal', 'nit-nagpur', 'nit-jalandhar', 'nit-silchar', 'nit-durgapur', 'nit-patna', 'iiit-hyderabad', 'iiit-bangalore', 'iiit-allahabad', 'iiit-gwalior', 'pec-chandigarh', 'dtu-delhi', 'iiest-shibpur']
  },
  {
    id: 'gate',
    name: 'GATE 2025',
    date: 'Applications: Aug 2024 (Tentative)',
    description: 'Graduate Aptitude Test in Engineering for Master\'s programs and PSU recruitment.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'student studying computer',
    relevantColleges: ['iit-bombay', 'iit-delhi', 'iisc-bangalore', 'iit-madras', 'iit-kanpur', 'iit-kharagpur', 'iit-roorkee', 'iit-guwahati', 'nit-trichy', 'nit-warangal', 'jadavpur-university', 'anna-university']
  },
  {
    id: 'viteee',
    name: 'VITEEE 2025',
    date: 'April 2025 (Tentative)',
    description: 'Vellore Institute of Technology Engineering Entrance Examination for admission to B.Tech programmes.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'exam paper check',
    relevantColleges: ['vit-vellore']
  },
  {
    id: 'tancet',
    name: 'TANCET 2025 (MCA)',
    date: 'March 2025 (Tentative)',
    description: 'Tamil Nadu Common Entrance Test for admission to M.B.A., M.C.A. & M.E./M.Tech./M.Arch./M.Plan. degree programmes offered at University Departments, Constituent colleges of Anna University, Annamalai University and Government & Government Aided Colleges in Tamil Nadu.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'exam results',
    relevantColleges: ['anna-university', 'nit-trichy', 'vit-vellore']
  },
  {
    id: 'nimcet',
    name: 'NIMCET 2025',
    date: 'June 2025 (Tentative)',
    description: 'NIT MCA Common Entrance Test, a National Level Test for admission into Master of Computer Applications programme in participating NITs.',
    bannerImageUrl: 'https://placehold.co/800x300.png',
    dataAiHint: 'computer lab exam',
    relevantColleges: ['nit-trichy', 'nit-warangal', 'nit-surathkal', 'nit-calicut', 'mnnit-allahabad', 'nit-kurukshetra', 'nit-rourkela', 'nit-jaipur', 'nit-bhopal', 'nit-jalandhar', 'nit-durgapur', 'nit-patna']
  }
];

export const getCollegeById = (id: string): College | undefined => colleges.find(c => c.id === id);
export const getExamById = (id: string): EntranceExam | undefined => entranceExams.find(e => e.id === id);
