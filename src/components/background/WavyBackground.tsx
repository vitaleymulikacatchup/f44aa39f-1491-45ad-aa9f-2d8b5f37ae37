"use client";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cls } from "@/lib/utils";

interface WavyBackgroundProps {
  className?: string;
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  diagonal?: boolean;
}

const WavyBackground = ({
  className,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  diagonal = false,
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const getComputedColor = (varName: string) => {
    if (typeof window === "undefined") return "#000";
    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue(varName).trim();
  };

  const waveColors = [
    getComputedColor("--color-primary-cta"),
    getComputedColor("--color-accent"),
    getComputedColor("--color-secondary-cta"),
    getComputedColor("--color-primary-cta"),
    getComputedColor("--color-accent"),
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 60;
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 120;
        if (diagonal) {
          const diagonalOffset = (x / w) * h * 0.6;
          ctx.lineTo(x, y + h * 0.2 + diagonalOffset);
        } else {
          ctx.lineTo(x, y + h * 0.5);
        }
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = getComputedColor("--background");
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cls("fixed inset-0 -z-10 bg-background", className)}
      aria-hidden="true"
    >
      <canvas
        className="absolute inset-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
    </div>
  );
};

WavyBackground.displayName = "WavyBackground";

export default React.memo(WavyBackground);
