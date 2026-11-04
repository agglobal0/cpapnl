/**
 * SEO utility — sets all head meta, canonical, og, twitter tags per page.
 * Call inside useEffect on each page component.
 */
export interface PageSEOMeta {
  title: string;           // 50-60 chars
  description: string;     // 140-155 chars
  canonical: string;       // full https://cpapnl.com/path
  ogImage?: string;        // absolute URL
}

export function setPageSEO({ title, description, canonical, ogImage }: PageSEOMeta): void {
  // Title
  document.title = title;

  // Helper to set/create meta
  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      const parts = selector.match(/\[([^\]]+)="([^"]+)"\]/);
      if (parts) el.setAttribute(parts[1], parts[2]);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  // Helper to set/create link
  const setLink = (rel: string, value: string) => {
    let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement('link');
      el.rel = rel;
      document.head.appendChild(el);
    }
    el.href = value;
  };

  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[name="title"]', 'content', title);
  setLink('canonical', canonical);

  // Open Graph
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  if (ogImage) setMeta('meta[property="og:image"]', 'content', ogImage);

  // Twitter
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
  if (ogImage) setMeta('meta[name="twitter:image"]', 'content', ogImage);
}

