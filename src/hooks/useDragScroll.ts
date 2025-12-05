import { useCallback, useEffect, useRef } from 'react';

export const useDragScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // 스크롤 속도 조절
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current) return;

    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = 'auto';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!scrollRef.current) return;

    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.userSelect = 'auto';
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;

    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  // touchmove는 non-passive event listener로 등록
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !scrollRef.current) return;

      e.preventDefault();
      const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // passive: false로 등록하여 preventDefault 가능하게 함
    element.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return {
    scrollRef,
    dragHandlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
};
