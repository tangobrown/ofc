import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(192,157,108,0.18)] px-10 pb-[46px] pt-10 text-center">
      <div className="mb-[22px] flex justify-center gap-[22px] text-gold">
        <a href="#" aria-label="Facebook" className="hover:text-cream">
          <FacebookIcon size={16} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-cream">
          <InstagramIcon size={16} />
        </a>
      </div>
      <p className="font-body text-[12px] tracking-[0.08em] text-muted-2">
        © 2026 The Old Fashioned Cocktail Co. — All rights reserved.
      </p>
    </footer>
  );
}
