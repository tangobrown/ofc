"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, LOGO_SRC, SOCIAL, BOOKING_URL, type NavItem } from "@/lib/nav";
import { FacebookIcon, InstagramIcon, ChevronDownIcon } from "./icons";

type NavVariant = "overlay" | "solid";

function isActive(item: NavItem, pathname: string): boolean {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  return (item.children ?? []).some((c) => c.href !== "/events" && c.href === pathname);
}

export default function Nav({ variant = "overlay" }: { variant?: NavVariant }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const wrapperCls =
    variant === "overlay"
      ? "absolute top-0 left-0 right-0 z-30"
      : "relative z-30 bg-nav-bg border-b border-[rgba(217,196,166,0.22)]";

  const links = NAV_ITEMS.slice(0, 3); // Home, Events, How It Works
  const rightLinks = NAV_ITEMS.slice(3); // Our Fleet, About, Contact

  return (
    <header className={wrapperCls}>
      <nav className="flex items-center justify-between px-6 py-[22px] md:px-[46px] font-ui">
        {/* Left: socials */}
        <div className="hidden flex-1 items-center gap-[18px] text-gold lg:flex">
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="opacity-85 hover:opacity-100"
          >
            <FacebookIcon size={21} />
          </a>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-85 hover:opacity-100"
          >
            <InstagramIcon size={21} />
          </a>
        </div>

        {/* Center: links + logo (desktop) */}
        <div className="hidden items-center gap-[26px] lg:flex">
          <NavGroup items={links} pathname={pathname} />
          <Link href="/" className="mx-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_SRC}
              alt="The Old Fashioned Cocktail Co."
              className="h-[90px] w-auto object-contain"
            />
          </Link>
          <NavGroup items={rightLinks} pathname={pathname} />
        </div>

        {/* Right: Instant Quote (desktop) */}
        <div className="hidden flex-1 justify-end lg:flex">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gold px-5 py-[11px] text-[14px] uppercase tracking-nav text-text-hi transition-colors hover:bg-gold hover:text-bg"
          >
            Instant Quote
          </a>
        </div>

        {/* Mobile: logo + hamburger */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link href="/" aria-label="Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_SRC} alt="The Old Fashioned Cocktail Co." className="h-[64px] w-auto object-contain" />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-gold"
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <MobileDrawer
          pathname={pathname}
          openGroup={openGroup}
          setOpenGroup={setOpenGroup}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </header>
  );
}

function NavGroup({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <>
      {items.map((item) => {
        const active = isActive(item, pathname);
        const base = `uppercase tracking-nav text-[14px] transition-colors hover:text-cream ${
          active ? "text-gold" : "text-text-hi"
        }`;
        if (!item.children) {
          return (
            <Link key={item.label} href={item.href} className={base}>
              {item.label}
            </Link>
          );
        }
        return (
          <div key={item.label} className="group relative flex items-center">
            <Link href={item.href} className={`${base} inline-flex items-center gap-1`}>
              {item.label}
              <ChevronDownIcon className="h-3 w-3" />
            </Link>
            {/* Dropdown */}
            <div className="invisible absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-[220px] border border-[rgba(217,196,166,0.3)] bg-nav-bg py-2 shadow-xl">
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`block whitespace-nowrap px-5 py-[10px] text-[12px] uppercase tracking-nav transition-colors hover:bg-[rgba(217,196,166,0.08)] hover:text-cream ${
                      pathname === c.href ? "text-gold" : "text-text-hi"
                    }`}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function MobileDrawer({
  pathname,
  openGroup,
  setOpenGroup,
  onClose,
}: {
  pathname: string;
  openGroup: string | null;
  setOpenGroup: (g: string | null) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] overflow-y-auto bg-nav-bg px-8 py-8 font-ui">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-[12px] uppercase tracking-nav text-gold">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="text-2xl leading-none text-gold"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item, pathname);
            if (!item.children) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block py-3 text-[13px] uppercase tracking-nav ${
                      active ? "text-gold" : "text-text-hi"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const expanded = openGroup === item.label;
            return (
              <li key={item.label} className="border-b border-[rgba(217,196,166,0.12)]">
                <button
                  type="button"
                  onClick={() => setOpenGroup(expanded ? null : item.label)}
                  aria-expanded={expanded}
                  className={`flex w-full items-center justify-between py-3 text-[13px] uppercase tracking-nav ${
                    active ? "text-gold" : "text-text-hi"
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                </button>
                {expanded && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={onClose}
                          className={`block py-2 text-[12px] uppercase tracking-nav ${
                            pathname === c.href ? "text-gold" : "text-body-dim"
                          }`}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex border-2 border-gold px-5 py-3 text-[14px] uppercase tracking-nav text-text-hi transition-colors hover:bg-gold hover:text-bg"
        >
          Instant Quote
        </a>
      </div>
    </div>
  );
}
