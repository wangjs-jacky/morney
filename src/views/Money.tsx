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

const Money = () => {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0 // 这个是num类型，而在之前组件中定义的是一个字符
  })
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (
    <MyLayout>
      <TagsSection
        value={selected.tagIds}
        onChange={(tags) => {
          onChange({ tagIds: tags })
        }}>
      </TagsSection>
      <NotesSection
        notes={selected.note}
        onChange={(note) => {
          onChange({ note })
        }}>
      </NotesSection>
      <CategorySection
        category={selected.category}
        onChange={(category) => {
          onChange({ category })
        }}>
      </CategorySection>
      <NumberPadSection
        amount={selected.amount}
        onChange={(amount) => {
          onChange({ amount })
        }}>

      </NumberPadSection>
      <Nav />
    </MyLayout>
  );
}

export default Money;