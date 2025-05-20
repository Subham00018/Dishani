
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { colleges, entranceExams } from '@/lib/data';
import type { College } from '@/lib/types';
import { EntranceExamBanner } from '@/components/colleges/EntranceExamBanner';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { Button } from '@/components/ui/button';
import { GitCompareArrows, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

export default function CollegesPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('ranking'); // 'ranking', 'name'

  const handleCompareSelect = (collegeId: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(collegeId)) {
        return prev.filter((id) => id !== collegeId);
      }
      if (prev.length < 2) {
        return [...prev, collegeId];
      }
      toast({
        title: "Limit Reached",
        description: "You can only select up to 2 colleges for comparison.",
        variant: "destructive",
      });
      return prev;
    });
  };

  const handleNavigateToCompare = () => {
    if (selectedForCompare.length === 2) {
      router.push(`/compare?ids=${selectedForCompare.join(',')}`);
    } else {
       toast({
        title: "Select Colleges",
        description: "Please select exactly two colleges to compare.",
        variant: "destructive",
      });
    }
  };

  const filteredColleges = colleges
    .filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'ranking') {
        return (a.ranking || Infinity) - (b.ranking || Infinity);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <EntranceExamBanner exams={entranceExams} />
      </section>

      <section>
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Top Colleges in India</h1>
          {selectedForCompare.length > 0 && (
            <Button 
              onClick={handleNavigateToCompare} 
              disabled={selectedForCompare.length !== 2}
              className="w-full md:w-auto"
            >
              <GitCompareArrows className="mr-2 h-4 w-4" />
              Compare Selected ({selectedForCompare.length}/2)
            </Button>
          )}
        </div>

        <div className="mb-8 p-4 bg-card rounded-lg shadow flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search colleges, locations, courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ranking">Sort by Ranking</SelectItem>
              <SelectItem value="name">Sort by Name (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                isSelectedForCompare={selectedForCompare.includes(college.id)}
                onCompareSelect={handleCompareSelect}
                compareDisabled={selectedForCompare.length >= 2 && !selectedForCompare.includes(college.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No colleges found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}

