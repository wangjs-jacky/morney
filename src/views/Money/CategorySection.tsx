
import { useState } from 'react';
import styled from 'styled-components';

const _CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = (props) => {
  const [category, setCategory] = useState<string>('+')
  const [categoryList] = useState<('+'|'-')[]>(['+', '-'])
  // hash 值对应
  const categoryMap = { '-': '支出', '+': '收入' }
  type X = typeof categoryMap
  type Y = keyof X
  return (
    <_CategorySection>
      <ul>
        {
          categoryList.map(c =>
            <li key={c}>{categoryMap[c]}</li>
          )
        }
      </ul>
    </_CategorySection>
  )
}

export { CategorySection }