
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getCollegeById } from '@/lib/data';
import type { College, CourseInfo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Award, BookOpenCheck, Briefcase, DollarSign, ExternalLink, Globe, MapPin, Users, LocateIcon, Banknote, ShieldCheck, BedDouble } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function CollegeDetailsPage() {
  const params = useParams();
  const collegeId = typeof params.id === 'string' ? params.id : '';
  const [college, setCollege] = useState<College | null | undefined>(undefined); // undefined for loading state

  useEffect(() => {
    if (collegeId) {
      const foundCollege = getCollegeById(collegeId);
      setCollege(foundCollege);
    }
  }, [collegeId]);

  if (college === undefined) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-1/4 mb-4" />
        <Skeleton className="h-72 w-full mb-8" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-40 w-full" />)}
          </div>
          <div className="space-y-6">
            <Skeleton className="h-60 w-full" />
            <Skeleton className="h-40 w-full" /> {/* Skeleton for Location card */}
          </div>
        </div>
      </div>
    );
  }

  if (college === null) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold">College not found</h1>
        <Button asChild className="mt-4">
          <Link href="/colleges">Back to Colleges</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="relative h-72 md:h-96 w-full group">
        <Image
          src={college.campusPhotoUrl}
          alt={`Campus of ${college.name}`}
          layout="fill"
          objectFit="cover"
          className="brightness-75 group-hover:brightness-100 transition-all duration-500"
          data-ai-hint={college.dataAiHint || "university campus large"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12">
          <div className="flex items-center mb-2">
            {college.logoUrl && (
              <Image src={college.logoUrl} alt={`${college.name} logo`} width={60} height={60} className="rounded-lg mr-4 border-2 border-primary-foreground" data-ai-hint="university logo detail"/>
            )}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">{college.name}</h1>
              <div className="flex items-center text-primary-foreground/90 mt-1">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-lg">{college.location}</span>
              </div>
            </div>
          </div>
          {college.ranking && <Badge variant="secondary" className="text-md px-3 py-1">National Rank: #{college.ranking}</Badge>}
        </div>
         <Button asChild variant="outline" className="absolute top-6 left-6 bg-background/80 hover:bg-background">
            <Link href="/colleges">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Colleges
            </Link>
          </Button>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><Globe className="mr-3 h-6 w-6 text-primary" />About {college.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src={college.campusPhotoUrl}
                    alt={`Campus of ${college.name}`}
                    width={800}
                    height={450}
                    className="rounded-lg shadow-md w-full object-cover aspect-video"
                    data-ai-hint={college.dataAiHint || "university campus building"}
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed">{college.about}</p>
                {college.website && (
                  <Button asChild variant="link" className="px-0 mt-4 text-primary">
                    <a href={college.website} target="_blank" rel="noopener noreferrer">
                      Visit Official Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><BookOpenCheck className="mr-3 h-6 w-6 text-primary" />Courses Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 list-inside">
                  {college.courses.map((course: CourseInfo, index: number) => (
                    <li key={index} className="text-muted-foreground">
                       <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-accent shrink-0 mt-1"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        <div className="flex-1">
                            <span className="font-medium text-foreground">{course.name}</span>
                            {course.fee && (
                                <div className="flex items-center text-xs text-muted-foreground mt-0.5">
                                    <Banknote className="mr-1 h-3 w-3" /> {course.fee}
                                </div>
                            )}
                        </div>
                       </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><Award className="mr-3 h-6 w-6 text-primary" />Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                 {college.scholarships.length > 0 ? (
                    <ul className="space-y-2">
                    {college.scholarships.map((scholarship, index) => (
                        <li key={index} className="flex items-start text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4 text-accent shrink-0 mt-1"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                        {scholarship}
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p className="text-muted-foreground">Details on specific scholarships are typically available on the college's official website or admissions office.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><ShieldCheck className="mr-3 h-6 w-6 text-primary" />Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{college.eligibility}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><BedDouble className="mr-3 h-6 w-6 text-primary" />Hostel Facility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{college.hostelInfo}</p>
              </CardContent>
            </Card>

          </div>

          <div className="space-y-8 md:sticky md:top-24 self-start">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><LocateIcon className="mr-3 h-6 w-6 text-primary" />Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-3">{college.location}</p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(college.name + ", " + college.location)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View on Map <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><DollarSign className="mr-3 h-6 w-6 text-primary" />Fee Structure Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">{college.feeStructure}</p>
                <p className="text-sm text-muted-foreground mt-1">Note: Specific course fees are listed under "Courses Offered". Fees are subject to change. Please refer to the official college website for the most up-to-date information.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><Briefcase className="mr-3 h-6 w-6 text-primary" />Placements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{college.placements.overview}</p>
                {college.placements.averagePackage && <p><strong className="text-foreground">Average Package:</strong> {college.placements.averagePackage}</p>}
                {college.placements.highestPackage && <p><strong className="text-foreground">Highest Package:</strong> {college.placements.highestPackage}</p>}
                {college.placements.topRecruiters && college.placements.topRecruiters.length > 0 && (
                  <div>
                    <strong className="text-foreground">Top Recruiters:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {college.placements.topRecruiters.map(recruiter => (
                        <Badge key={recruiter} variant="secondary">{recruiter}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
