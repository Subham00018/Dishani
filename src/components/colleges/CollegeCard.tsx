
import Image from 'next/image';
import Link from 'next/link';
import type { College } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpenCheck, TrendingUp, CheckSquare, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CollegeCardProps {
  college: College;
  isSelectedForCompare: boolean;
  onCompareSelect: (collegeId: string) => void;
  compareDisabled: boolean;
}

export function CollegeCard({ college, isSelectedForCompare, onCompareSelect, compareDisabled }: CollegeCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={college.campusPhotoUrl}
            alt={`Campus of ${college.name}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={college.dataAiHint || "university campus"}
          />
           {college.ranking && <Badge className="absolute top-2 right-2" variant="default">Rank #{college.ranking}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-start gap-3 mb-3">
            {college.logoUrl && (
                 <Image src={college.logoUrl} alt={`${college.name} logo`} width={40} height={40} className="rounded-md mt-1" data-ai-hint="university logo"/>
            )}
            <div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                 <Link href={`/colleges/${college.id}`} className="hover:underline">
                    {college.name}
                 </Link>
                </CardTitle>
                <CardDescription className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="mr-1 h-4 w-4" /> {college.location}
                </CardDescription>
            </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{college.about}</p>

        <div className="space-y-2 text-sm mb-3"> {/* Increased space-y for sections */}
          <div> {/* Courses section */}
            <div className="flex items-center text-muted-foreground mb-1">
              <BookOpenCheck className="mr-2 h-4 w-4 text-accent shrink-0" />
              <span className="font-medium text-foreground">Courses:</span>
            </div>
            <ul className="list-disc list-inside pl-4 space-y-0.5 text-xs text-muted-foreground">
              {college.courses.map((course, index) => (
                <li key={index} className="leading-tight">{course}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center text-muted-foreground pt-1"> {/* Added pt-1 for slight separation */}
            <TrendingUp className="mr-2 h-4 w-4 text-accent" />
            <span className="font-medium text-foreground mr-1">Placements:</span> {college.placements.averagePackage ? `Avg. ${college.placements.averagePackage}` : 'Strong record'}
          </div>
        </div>

      </CardContent>
      <CardFooter className="p-4 bg-muted/50 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
        <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none">
          <Link href={`/colleges/${college.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          variant={isSelectedForCompare ? "default" : "secondary"}
          size="sm"
          onClick={() => onCompareSelect(college.id)}
          disabled={!isSelectedForCompare && compareDisabled}
          className="flex-1 sm:flex-none"
        >
          <CheckSquare className="mr-2 h-4 w-4" />
          {isSelectedForCompare ? 'Selected' : 'Compare'}
        </Button>
      </CardFooter>
    </Card>
  );
}
