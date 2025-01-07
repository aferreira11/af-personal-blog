'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from "@/components/sidebar"

function shouldShowSidebar(pathname: string) {
  return pathname.startsWith('/blog') || pathname.startsWith('/projects');
}

export function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = shouldShowSidebar(pathname);
  const shouldRemoveTopPadding = pathname === '/' || pathname === '/about';

  return (
    <div className={`flex ${showSidebar ? 'gap-10' : ''} ${shouldRemoveTopPadding ? 'pb-8' : 'py-8'}`}>
      <main className={`${showSidebar ? 'flex-1' : 'w-full'}`}>
        {children}
      </main>
      {showSidebar && (
        <div className="hidden w-[300px] lg:block">
          <Sidebar />
        </div>
      )}
    </div>
  );
} 