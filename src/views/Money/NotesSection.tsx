import { useRef, useState } from "react";
import styled from "styled-components";

const _NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NotesSection: React.FC = (props) => {
  const [notes, setNotes] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (inputRef.current !== null) {
      setNotes(inputRef.current.value)
    }
  }

  console.log(notes)
  return (
    <_NotesSection>
      <label>
        <span>备注</span>
        <input type="text"
          placeholder="在这里添加备注"
          defaultValue={notes}
          ref={inputRef}
          onBlur={onBlur} />
      </label>
    </_NotesSection>
  )
}

export { NotesSection }