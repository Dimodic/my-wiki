import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { LayoutDashboard, BookOpen } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout 
      tree={source.getPageTree()} 
      {...baseOptions()}
      sidebar={{
        banner: (
          <RootToggle
            options={[
              {
                title: 'Раздел КНАД',
                description: 'Документация по КНАД',
                url: '/docs/КНАД',
                icon: <LayoutDashboard className="size-4" />,
              },
              {
                title: 'Общая Wiki',
                description: 'Базовые инструкции',
                url: '/docs',
                icon: <BookOpen className="size-4" />,
              },
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
