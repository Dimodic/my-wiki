import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, gitConfig } from '@/lib/layout.shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout 
      tree={source.getPageTree()} 
      {...baseOptions()}
      sidebar={{
        footer: (
          <a 
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/edit/${gitConfig.branch}/content/docs/index.mdx`}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-fd-muted-foreground hover:text-fd-foreground"
          >
            Edit on GitHub
          </a>
        )
      }}
    >
      {children}
    </DocsLayout>
  );
}
