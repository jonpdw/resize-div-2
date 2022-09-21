import { Resizable } from 'react-resizable';
import { useState } from 'react'

export default function App() {
  const [state, setState] = useState({
    width: 200,
    height: 200,
  });

  const onResize = (event, { element, size, handle }) => {
    setState({ width: size.width, height: size.height });
  };

  return (
    <Resizable height={state.height} width={state.width} onResize={onResize} resizeHandles={['ne']}>
      <div className="box" style={{ width: state.width + 'px', height: state.height + 'px' }}>
        <span>Contents</span>
      </div>
    </Resizable>
  );
}