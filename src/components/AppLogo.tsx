import { GraduationCap } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface AppLogoProps extends LucideProps {
  appName?: string;
  appNameClassName?: string;
}

export function AppLogo({ appName, className, appNameClassName, ...props }: AppLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className={cn('h-8 w-8 text-primary', className)} {...props} />
      {appName && (
        <span className={cn('text-xl font-bold text-primary', appNameClassName)}>
          {appName}
        </span>
      )}
    </div>
  );
}

// Helper cn function if not globally available (it should be from utils)
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');
