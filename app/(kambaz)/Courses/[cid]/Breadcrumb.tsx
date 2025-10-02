"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  cid: string;
}

export default function CourseBreadcrumb({ cid }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Extract the current page from the pathname
  const getPageName = () => {
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];
    
    // Handle different page types
    if (pathname.includes('/Home')) return 'Home';
    if (pathname.includes('/Modules')) return 'Modules';
    if (pathname.includes('/Assignments') && !pathname.includes('/Assignments/')) return 'Assignments';
    if (pathname.includes('/Assignments/') && parts[parts.length - 1] !== 'Assignments') return `Assignment ${lastPart}`;
    if (pathname.includes('/Grades')) return 'Grades';
    if (pathname.includes('/Quizzes')) return 'Quizzes';
    if (pathname.includes('/People')) return 'People';
    if (pathname.includes('/Piazza')) return 'Piazza';
    if (pathname.includes('/Zoom')) return 'Zoom';
    
    // Default case - if we're just in the course root
    if (pathname === `/Courses/${cid}`) return null;
    
    return null;
  };

  const currentPage = getPageName();
  const isOnCoursePage = currentPage !== null;

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/Dashboard" className="text-decoration-none text-primary">
            Dashboard
          </Link>
        </li>
        <li className={`breadcrumb-item ${!isOnCoursePage ? 'active' : ''}`}>
          {isOnCoursePage ? (
            <Link href={`/Courses/${cid}/Home`} className="text-decoration-none text-primary">
              {cid}
            </Link>
          ) : (
            <span aria-current="page">{cid}</span>
          )}
        </li>
        {isOnCoursePage && (
          <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
          </li>
        )}
      </ol>
    </nav>
  );
}