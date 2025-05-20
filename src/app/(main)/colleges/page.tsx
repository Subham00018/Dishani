
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { colleges, entranceExams } from '@/lib/data';
import type { College, CourseInfo } from '@/lib/types';
import { EntranceExamBanner } from '@/components/colleges/EntranceExamBanner';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { Button } from '@/components/ui/button';
import { GitCompareArrows, Search, TrendingDown, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

// Helper function to shorten course names for display in suggestions
const shortenCourseName = (courseName: string): string => {
  const MAX_DISPLAY_LENGTH = 40; // Maximum characters to display in suggestion list
  let displayName = courseName;

  // Attempt to remove content in parentheses if it makes the name shorter and cleaner
  const parenthesisIndex = displayName.indexOf('(');
  if (parenthesisIndex > 0) {
    const partBeforeParenthesis = displayName.substring(0, parenthesisIndex).trim();
    // Only use this if it's significantly shorter or the part in parenthesis seems like a generic add-on
    if (partBeforeParenthesis.length < displayName.length - 5 && partBeforeParenthesis.length > 0) {
        displayName = partBeforeParenthesis;
    }
  }
  
  // If still too long after trying to remove parentheses content, or if no parentheses, truncate.
  if (displayName.length > MAX_DISPLAY_LENGTH) {
    displayName = displayName.substring(0, MAX_DISPLAY_LENGTH - 3).trimEnd() + '...';
  }
  
  return displayName;
};


export default function CollegesPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('ranking'); // 'ranking', 'name', 'coursesHighLow', 'coursesLowHigh'

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const newSuggestionsSet = new Set<string>();

    colleges.forEach(college => {
      if (college.name.toLowerCase().includes(lowerSearchTerm)) {
        newSuggestionsSet.add(college.name);
      }
      if (college.location.toLowerCase().includes(lowerSearchTerm)) {
        newSuggestionsSet.add(college.location);
      }
      college.courses.forEach((course: CourseInfo) => {
        if (course.name.toLowerCase().includes(lowerSearchTerm)) {
          newSuggestionsSet.add(shortenCourseName(course.name)); // Use shortened name for suggestions
        }
      });
    });

    const limitedSuggestions = Array.from(newSuggestionsSet).slice(0, 7); // Show max 7 suggestions
    setSuggestions(limitedSuggestions);
    setShowSuggestions(limitedSuggestions.length > 0);

  }, [searchTerm]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

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
    .filter((college) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      // Check against full college name, location, and full course names for filtering
      return college.name.toLowerCase().includes(lowerSearchTerm) ||
             college.location.toLowerCase().includes(lowerSearchTerm) ||
             college.courses.some((course: CourseInfo) => course.name.toLowerCase().includes(lowerSearchTerm));
    })
    .sort((a, b) => {
      if (sortBy === 'ranking') {
        return (a.ranking || Infinity) - (b.ranking || Infinity);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'coursesHighLow') {
        return (b.courses?.length || 0) - (a.courses?.length || 0);
      }
      if (sortBy === 'coursesLowHigh') {
        return (a.courses?.length || 0) - (b.courses?.length || 0);
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
              onFocus={() => {
                if (searchTerm.trim() && suggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              onBlur={() => {
                // Delay hiding to allow click on suggestion items
                setTimeout(() => setShowSuggestions(false), 150);
              }}
              className="pl-10 w-full"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-60 overflow-y-auto">
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer text-sm"
                      onMouseDown={() => handleSuggestionClick(suggestion)} // Use onMouseDown to ensure click registers before blur
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[220px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ranking">Sort by Ranking</SelectItem>
              <SelectItem value="name">Sort by Name (A-Z)</SelectItem>
              <SelectItem value="coursesHighLow">
                <div className="flex items-center">
                  <TrendingDown className="mr-2 h-4 w-4" /> Courses (High to Low)
                </div>
              </SelectItem>
              <SelectItem value="coursesLowHigh">
                 <div className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" /> Courses (Low to High)
                </div>
              </SelectItem>
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
