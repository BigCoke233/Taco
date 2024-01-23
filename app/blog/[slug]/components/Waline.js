import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';
import '@waline/client/style';

export const Waline = (props) => {
  const walineInstanceRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if containerRef.current is a valid DOM element
    if (containerRef.current instanceof Element) {
      walineInstanceRef.current = init({
        el: containerRef.current,
        ...props,
      });
    }

    return () => walineInstanceRef.current?.destroy();
  }, [props]);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, [props]);

  return <div ref={containerRef} />;
};