
'use client';

import Link from 'next/link';
import { colleges, entranceExams } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpenCheck, Users, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { EntranceExamBanner } from '@/components/colleges/EntranceExamBanner';

export default function DashboardHomePage() {
  const [totalColleges, setTotalColleges] = useState(0);
  const [uniqueCourses, setUniqueCourses] = useState(0);
  const [studentsUsing, setStudentsUsing] = useState("10,000+"); // Placeholder

  useEffect(() => {
    setTotalColleges(colleges.length);

    const coursesSet = new Set<string>();
    colleges.forEach(college => {
      college.courses.forEach(course => coursesSet.add(course));
    });
    setUniqueCourses(coursesSet.size);
    
    // In a real app, you might fetch this data or calculate it differently
    // For now, student count is static.
  }, []);

  const stats = [
    {
      title: "Colleges Listed",
      value: totalColleges.toLocaleString(),
      icon: GraduationCap,
      description: "Comprehensive profiles of top institutions.",
      color: "text-primary",
    },
    {
      title: "Unique Courses",
      value: uniqueCourses.toLocaleString(),
      icon: BookOpenCheck,
      description: "A wide variety of academic programs.",
      color: "text-accent",
    },
    {
      title: "Students Trust Us",
      value: studentsUsing,
      icon: Users,
      description: "Helping students make informed decisions.",
      color: "text-primary", // Example color, can be different
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
          Welcome to EduCompare India!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your ultimate guide to discovering, comparing, and choosing the best educational path. Explore detailed information on India's top colleges.
        </p>
      </section>

      <section className="mb-12">
        <EntranceExamBanner exams={entranceExams} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center py-8 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Find Your Perfect College?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Dive into our extensive database, compare your options side-by-side, and take the next step towards your future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/colleges">
              Explore Colleges <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/compare">
              Compare Colleges
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
