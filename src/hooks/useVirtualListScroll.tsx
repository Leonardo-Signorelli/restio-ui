import type React from "react";

import { useCallback, useRef, useState } from "react";

interface UseVirtualScrollOptions<T> {
  items: T[]; // The complete list of items
  itemHeight: number; // Height of each item in pixels
  containerHeight: number; // Height of the visible container
  overscan?: number; // Number of extra items to render above/below viewport
}

interface UseVirtualScrollResult<T> {
  // Only the items that should be rendered
  virtualItems: Array<{
    item: T; // The original item
    index: number; // The index in the original array
    offsetTop: number; // The top position of this item
  }>;
  // Props to apply to the scrollable container
  containerProps: {
    ref: React.RefObject<HTMLDivElement | null>;
    style: React.CSSProperties;
    onScroll: (event: React.UIEvent) => void;
  };
  // Props to apply to the inner content container
  innerProps: {
    style: React.CSSProperties;
  };
  // The current scroll information
  scrollInfo: {
    scrollTop: number;
    viewportHeight: number;
    totalHeight: number;
    startIndex: number;
    endIndex: number;
  };
  // The function to scroll to a specific index
  scrollToIndex: (index: number) => void;
}
/**
 * A custom hook to implement virtual scrolling for a list of items.
 *
 * @param items - The list of items to be displayed
 * @param itemHeight - Height of each item in pixels
 * @param containerHeight - Height of the visible container
 * @param overscan - Number of extra items to render above/below viewport
 */
export function useVirtualListScroll<T>({
  items,
  itemHeight,
  containerHeight,
  overscan = 5,
}: UseVirtualScrollOptions<T>): UseVirtualScrollResult<T> {
  // Track the scroll position
  const [scrollTop, setScrollTop] = useState(0);

  // Reference to the scrollable container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the total height of all items
  const totalHeight = items.length * itemHeight;

  // Calculate which items should be visible
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight) + overscan
  );

  // Create the array of virtual items that should be rendered
  const virtualItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    virtualItems.push({
      item: items[i],
      index: i,
      offsetTop: i * itemHeight,
    });
  }

  // Handle scroll events
  const handleScroll = useCallback((event: React.UIEvent) => {
    const scrollTop = (event.target as HTMLDivElement).scrollTop;
    setScrollTop(scrollTop);
  }, []);

  // Handle scroll to view element in the list with keyboard
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;

    const itemTop = index * itemHeight;
    const itemBottom = itemTop + itemHeight;
    const container = containerRef.current;
    const containerScrollTop = container.scrollTop;
    const containerBottom = containerScrollTop + containerHeight;

    if (itemTop < containerScrollTop) {
      container.scrollTop = itemTop;
    } else if (itemBottom > containerBottom) {
      container.scrollTop = itemBottom - containerHeight;
    }
  };

  return {
    virtualItems,
    containerProps: {
      ref: containerRef,
      style: {
        maxHeight: `${containerHeight}px`,
        overflowY: "auto",
        position: "relative",
        willChange: "transform",
      },
      onScroll: handleScroll,
    },
    innerProps: {
      style: {
        height: `${totalHeight}px`,
        position: "relative",
        width: "100%",
      },
    },
    scrollInfo: {
      scrollTop,
      viewportHeight: containerHeight,
      totalHeight,
      startIndex,
      endIndex,
    },
    scrollToIndex,
  };
}
