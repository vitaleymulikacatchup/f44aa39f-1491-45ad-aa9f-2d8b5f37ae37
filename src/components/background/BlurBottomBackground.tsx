"use client";

import { memo } from "react";
import { cls } from "@/lib/utils";

const MASK_GRADIENT = "linear-gradient(to bottom, transparent, black 60%)";

interface BlurBottomBackgroundProps {
  className?: string;
}

const BlurBottomBackground = ({
  className = ""
}: BlurBottomBackgroundProps) => {
  return (
    <div
      className={cls(
        "fixed pointer-events-none backdrop-blur-xl opacity-100 w-full h-50 left-0 bottom-0 z-[500]",
        className
      )}
      style={{ maskImage: MASK_GRADIENT }}
      aria-hidden="true"
    />
  );
};

BlurBottomBackground.displayName = "BlurBottomBackground";

export default memo(BlurBottomBackground);
