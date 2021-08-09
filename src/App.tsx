import React, { useEffect, useRef } from 'react'
import { css } from '@emotion/react';

const swipeControlRange = 30;
const swipeTitle = css`
  font-size: 20px;
  text-align: center;
`;
const swipeImpossible = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  color: #fff;
  padding: 100px 0;
  font-weight: bold;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${swipeControlRange}px;
    height: 100%;
    background: coral;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${swipeControlRange}px;
    height: 100%;
    background: coral;
  }
`;

function App() {

  const container = useRef<HTMLDivElement>(null);

  const touchStartEvent = (e: any) => {
    if (e.pageX > 30 && e.pageX < window.innerWidth - 30) return;
    e.preventDefault();
    console.log(`touch start ${e.pageX}`);
  }

  // useEffect(() => {
  //   if (container.current) {
  //     container.current.addEventListener('touchstart', (e) => touchStartEvent(e));
  //   }

  //   return () => {
  //     if (container.current) {
  //       container.current.removeEventListener('touchstart', touchStartEvent);
  //     }
  //   }
  // }, [container.current]);

  return (
    <div
      ref={container}
      onTouchStart={touchStartEvent}
      onClick={touchStartEvent}
    >
      <h1 css={swipeTitle}>スワイプキャンセルテスト</h1>
      <div css={swipeImpossible}>スワイプ不可ブロック</div>
    </div>
  )
}

export default App
