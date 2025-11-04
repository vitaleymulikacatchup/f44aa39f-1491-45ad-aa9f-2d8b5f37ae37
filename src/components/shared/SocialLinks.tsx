"use client";

import { memo } from "react";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  ariaLabel: string;
}

interface SocialLinksProps {
  socialLinks: SocialLink[];
  className?: string;
  iconClassName?: string;
}

const SocialLinks = memo<SocialLinksProps>(function SocialLinks({
  socialLinks,
  className = "",
  iconClassName = "",
}) {
  return (
    <div className={cls("flex items-center gap-4", className)}>
      {socialLinks.map((social, index) => {
        const SocialIcon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            onClick={social.onClick}
            aria-label={social.ariaLabel}
            className={cls(
              "card h-10 w-auto aspect-square rounded-theme flex items-center justify-center",
              iconClassName
            )}
          >
            <SocialIcon className="h-45/100 w-45/100 text-foreground" strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
});

SocialLinks.displayName = "SocialLinks";

export default SocialLinks;
