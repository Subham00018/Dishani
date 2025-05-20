'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { EntranceExam } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EntranceExamBannerProps {
  exams: EntranceExam[];
}

export function EntranceExamBanner({ exams }: EntranceExamBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === exams.length - 1 ? 0 : prevIndex + 1));
  }, [exams.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? exams.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (exams.length <= 1) return;
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide, exams.length]);

  if (!exams || exams.length === 0) {
    return null;
  }

  const currentExam = exams[currentIndex];

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <Card className="w-full border-0 rounded-lg">
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={currentExam.bannerImageUrl}
            alt={currentExam.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={currentExam.dataAiHint || "exam education"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <Badge variant="secondary" className="absolute top-4 left-4 text-sm px-3 py-1">{currentExam.date}</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">{currentExam.name}</h2>
            <p className="text-sm md:text-base text-primary-foreground/90 line-clamp-2 mb-4">{currentExam.description}</p>
        </div>
      </Card>

      {exams.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground rounded-full"
            aria-label="Previous exam"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground rounded-full"
            aria-label="Next exam"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}
       <div className="absolute bottom-4 right-4 flex space-x-1 z-10">
            {exams.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-4' : 'bg-primary-foreground/50 hover:bg-primary-foreground/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
    </div>
  );
}
