import Layout from '../components/Layout';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { CategorySection } from './Money/CategorySection';
import { NotesSection } from './Money/NotesSection';
import { NumberPadSection } from './Money/NumberPadSection';
import Nav from 'components/Nav';
import { useState } from 'react';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0 // 这个是num类型，而在之前组件中定义的是一个字符
  })
  return (
    <MyLayout>
      <TagsSection
        value={selected.tags}
        onChange={(tags) => {
          setSelected({
            ...selected,
            tags
          }
          )
        }}>
      </TagsSection>
      <NotesSection
        notes={selected.note}
        onChange={(note) => {
          setSelected({
            ...selected,
            note
          })
        }}>
      </NotesSection>
      <CategorySection
        category={selected.category}
        onChange={(category) => {
          setSelected({
            ...selected,
            category
          })
        }}>
      </CategorySection>
      <NumberPadSection
        amount={selected.amount}
        onChange={(amount) => {
          setSelected({
            ...selected,
            amount
          })
        }}></NumberPadSection>
      <Nav />
    </MyLayout>
  );
}

export default Money;