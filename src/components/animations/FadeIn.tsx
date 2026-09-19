"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  triggerOffset?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 1,
  direction = "up",
  distance = 50,
  className = "",
  triggerOffset = "top 85%", // Start animation when the top of the element hits 85% from top of viewport
}: FadeInProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = distance;
        break;
      case "down":
        y = -distance;
        break;
      case "left":
        x = distance;
        break;
      case "right":
        x = -distance;
        break;
      case "none":
        break;
    }

    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        x: x,
        y: y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: triggerOffset,
          toggleActions: "play none none reverse", // Plays on enter, reverses on leave back
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
