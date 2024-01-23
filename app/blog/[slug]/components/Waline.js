import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';
import '@waline/client/style';

export const Waline = (props) => {
  const walineInstanceRef = useRef(null);
  const containerRef = React.createRef();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, [props]);

  return React.createElement('div', { ref: containerRef });
};