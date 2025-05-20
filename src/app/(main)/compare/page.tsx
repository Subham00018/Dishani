'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getCollegeById, colleges as allCollegesData } from '@/lib/data';
import type { College } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, Award, BookOpenCheck, Briefcase, DollarSign, Globe, MapPin, Users, Info } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

function ComparePageContent() {
  const searchParams = useSearchParams();
  const [college1, setCollege1] = useState<College | null>(null);
  const [college2, setCollege2] = useState<College | null>(null);
  const [selectedId1, setSelectedId1] = useState<string | undefined>(undefined);
  const [selectedId2, setSelectedId2] = useState<string | undefined>(undefined);

  useEffect(() => {
    const idsParam = searchParams.get('ids');
    if (idsParam) {
      const [id1, id2] = idsParam.split(',');
      if (id1) {
        setSelectedId1(id1);
        setCollege1(getCollegeById(id1) || null);
      }
      if (id2) {
        setSelectedId2(id2);
        setCollege2(getCollegeById(id2) || null);
      }
    }
  }, [searchParams]);

  const handleCollege1Select = (id: string) => {
    setSelectedId1(id);
    setCollege1(getCollegeById(id) || null);
  };

  const handleCollege2Select = (id: string) => {
    setSelectedId2(id);
    setCollege2(getCollegeById(id) || null);
  };
  
  const comparisonFields = [
    {
      label: 'Logo', icon: Globe, render: (college: College | null) => college?.logoUrl ? <Image src={college.logoUrl} alt={`${college.name} Logo`} width={60} height={60} className="rounded-md mx-auto" data-ai-hint="college logo compare"/> : <Skeleton className="h-[60px] w-[60px] rounded-md mx-auto" />
    },
    { label: 'Location', icon: MapPin, key: 'location' },
    { label: 'Ranking', icon: Award, key: 'ranking', render: (college: College | null) => college?.ranking ? `#${college.ranking}` : 'N/A' },
    { label: 'Fee Structure', icon: DollarSign, key: 'feeStructure' },
    {
      label: 'Key Courses', icon: BookOpenCheck, render: (college: College | null) => college?.courses.slice(0, 3).join(', ') + (college && college.courses.length > 3 ? '...' : '') || 'N/A'
    },
    {
      label: 'Avg. Placement Package', icon: Briefcase, render: (college: College | null) => college?.placements.averagePackage || 'N/A'
    },
    {
      label: 'Highest Placement Package', icon: Briefcase, render: (college: College | null) => college?.placements.highestPackage || 'N/A'
    },
    {
      label: 'About', icon: Info, render: (college: College | null) => <p className="text-xs line-clamp-4">{college?.about || 'N/A'}</p>
    },
  ];


  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center"><ArrowLeftRight className="mr-3 h-8 w-8" />College Comparison</CardTitle>
          <p className="text-muted-foreground">Select two colleges to see their details side-by-side.</p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="college1-select" className="block text-sm font-medium text-foreground mb-1">Select College 1</label>
            <Select onValueChange={handleCollege1Select} value={selectedId1}>
              <SelectTrigger id="college1-select" className="w-full">
                <SelectValue placeholder="Choose College 1" />
              </SelectTrigger>
              <SelectContent>
                {allCollegesData.map((c) => (
                  <SelectItem key={c.id} value={c.id} disabled={c.id === selectedId2}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="college2-select" className="block text-sm font-medium text-foreground mb-1">Select College 2</label>
            <Select onValueChange={handleCollege2Select} value={selectedId2}>
              <SelectTrigger id="college2-select" className="w-full">
                <SelectValue placeholder="Choose College 2" />
              </SelectTrigger>
              <SelectContent>
                {allCollegesData.map((c) => (
                  <SelectItem key={c.id} value={c.id} disabled={c.id === selectedId1}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {(college1 || college2) ? (
        <Card className="overflow-hidden shadow-lg">
           <CardHeader>
             <CardTitle className="text-2xl">Comparison Details</CardTitle>
           </CardHeader>
           <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px] min-w-[150px] font-semibold text-muted-foreground">Feature</TableHead>
                    <TableHead className="font-semibold text-center text-foreground">{college1?.name || 'College 1'}</TableHead>
                    <TableHead className="font-semibold text-center text-foreground">{college2?.name || 'College 2'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFields.map((field) => (
                    <TableRow key={field.label}>
                      <TableCell className="font-medium text-foreground">
                        <div className="flex items-center">
                          <field.icon className="mr-2 h-4 w-4 text-primary" />
                          {field.label}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {field.render ? field.render(college1) : college1?.[field.key as keyof College] as string || 'N/A'}
                      </TableCell>
                      <TableCell className="text-center">
                        {field.render ? field.render(college2) : college2?.[field.key as keyof College] as string || 'N/A'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Alert className="border-accent text-accent">
          <Info className="h-5 w-5 text-accent" />
          <AlertTitle>Start Comparing!</AlertTitle>
          <AlertDescription>
            Please select two colleges from the dropdowns above to see their comparison.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-8">Loading comparison...</div>}>
      <ComparePageContent />
    </Suspense>
  );
}

