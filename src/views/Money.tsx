import Layout from '../components/Layout';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { CategorySection } from './Money/CategorySection';
import { NotesSection } from './Money/NotesSection';
import { NumberPadSection } from './Money/NumberPadSection';
import Nav from 'components/Nav';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection></TagsSection>
      <NotesSection></NotesSection>
      <CategorySection></CategorySection>
      <NumberPadSection></NumberPadSection>
      <Nav />
    </MyLayout>
  );
}

export default Money;