// components/ui/timeline.tsx
export function Timeline({ children }: { children: React.ReactNode }) {
    return (
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {children}
      </ol>
    );
  }
  
  export function TimelineItem({ children }: { children: React.ReactNode }) {
    return (
      <li className="mb-10 ms-6">
        {children}
      </li>
    );
  }
  
  export function TimelineMarker() {
    return (
      <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
         Add your icon here if needed 
      </span>
    );
  }
  
  export function TimelineContent({ children }: { children: React.ReactNode }) {
    return (
      <div className="ml-4">
        {children}
      </div>
    );
  }
  