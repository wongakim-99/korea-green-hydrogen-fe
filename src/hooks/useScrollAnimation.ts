'use client';

import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

// Make the hook generic to accept any HTMLElement type
export function useScrollAnimation<T extends HTMLElement>(
  options?: ScrollAnimationOptions
): [MutableRefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, triggerOnce = true } = options || {};

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce]);

  return [ref, isVisible];
}
