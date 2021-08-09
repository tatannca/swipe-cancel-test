import React from 'react'
import { css } from '@emotion/react';

const swipeTitle = css`
  font-size: 20px;
  text-align: center;
`;
const swipePossible = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  color: #fff;
  padding: 100px 0;
  font-weight: bold;
`;
const swipeImpossible = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  color: #fff;
  padding: 100px 0;
  font-weight: bold;
`;

function App() {

  return (
    <div>
      <h1 css={swipeTitle}>スワイプキャンセルテスト</h1>
      <div css={swipePossible}>スワイプ可能範囲</div>
      <div css={swipeImpossible}>スワイプ不可範囲</div>
    </div>
  )
}

export default App
