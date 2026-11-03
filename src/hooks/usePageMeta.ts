import { useEffect } from "react";

export const SITE_NAME = "Lucas Ricci";

export function usePageMeta(
  title: string,
  description: string,
  noindex = false,
) {
  useEffect(() => {
    let robots = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    if (noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex, follow";
    } else {
      robots?.remove();
    }

    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description, noindex]);
}

