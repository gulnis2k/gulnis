"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface StaggerRevealProps {
  children: React.ReactNode;
  staggerAmount?: number;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  triggerOffset?: string;
}

export default function StaggerReveal({
  children,
  staggerAmount = 0.15,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 50,
  className = "",
  triggerOffset = "top 85%",
}: StaggerRevealProps) {
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

    if (container.current) {
      const childElements = container.current.children;
      
      gsap.fromTo(
        childElements,
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
          stagger: staggerAmount,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: triggerOffset,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, { scope: container });

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
