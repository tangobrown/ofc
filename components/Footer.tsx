import { FacebookIcon, InstagramIcon } from "./icons";
import { SOCIAL } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(217,196,166,0.18)] px-10 pb-[46px] pt-10 text-center">
      <div className="mb-[22px] flex justify-center gap-[22px] text-gold">
        <a
          href={SOCIAL.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-cream"
        >
          <FacebookIcon size={18} />
        </a>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-cream"
        >
          <InstagramIcon size={18} />
        </a>
      </div>
      <p className="font-body text-[12px] tracking-[0.08em] text-muted-2">
        © 2026 The Old Fashioned Cocktail Co. — All rights reserved.
      </p>
    </footer>
  );
}
