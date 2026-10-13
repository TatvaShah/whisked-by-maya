import { Media, SectionHead } from "@/components/media";
import { has, site } from "@/lib/site";

export function Menu() {
  const m = site.menu;
  if (!m || !has(m.groups)) return null;
  const list = m.variant === "list";
  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <SectionHead eyebrow={m.label ?? "Menu"} title={m.title ?? "What we make"} intro={m.intro} />
      {m.groups.map((g) => (
        <div key={g.title} className="mt-12">
          {m.groups.length > 1 || g.title ? <h3 className="text-2xl sm:text-3xl">{g.title}</h3> : null}
          {g.note ? <p className="mt-1 text-sm text-muted">{g.note}</p> : null}
          {list ? (
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <p className="font-semibold text-ink">
                      {it.name}
                      {it.tag ? <span className="ml-2 rounded-pill bg-soft px-2 py-0.5 text-xs font-medium text-accent">{it.tag}</span> : null}
                    </p>
                    {it.description ? <p className="mt-1 text-sm leading-6 text-muted">{it.description}</p> : null}
                  </div>
                  {it.price ? <p className="shrink-0 font-semibold text-ink">{it.price}</p> : null}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <article key={it.name} className="overflow-hidden rounded-card border border-line bg-surface">
                  {it.image ? (
                    <div className="relative aspect-[4/3] bg-soft">
                      <Media img={it.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-display text-xl text-ink">{it.name}</h4>
                      {it.price ? <p className="shrink-0 font-semibold text-accent">{it.price}</p> : null}
                    </div>
                    {it.tag ? <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{it.tag}</p> : null}
                    {it.description ? <p className="mt-2 text-sm leading-6 text-muted">{it.description}</p> : null}
                    {it.href ? (
                      <a href={it.href} className="mt-3 inline-block text-sm underline decoration-line underline-offset-4 hover:text-accent">
                        See it on Instagram
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ))}
      {m.footnote ? <p className="mt-8 text-sm text-muted">{m.footnote}</p> : null}
    </section>
  );
}
