import { createId } from 'lib/createId'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTags } from 'useTags'

const _TagsSection = styled.section`
  background: #FFFFFF; 
  padding: 12px 16px;
  flex-grow: 1; 
  display:flex; 
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; 
       border-radius: 18px;
       display:inline-block; 
       padding: 3px 18px; 
       font-size: 14px; 
       margin: 8px 12px;
       &.selected{
         background: #f60;
       }
    }
  }
  > button{
    background:none; 
    border: none; 
    padding: 2px 4px;
    border-bottom: 1px solid #333; 
    color: #666;
    margin-top: 8px;
  }
`

// 现在开始接受props中的值，默认只有children属性，可以React.FC<类型>的方式指定。
type Props = {
  // value: string[],// 指定props的属性有一个selected变量，并且是string[]类型
  value: number[],
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  // const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  // const [selectedTags, setSelectedTags] = useState<string[]>([])
  const {tags, setTags} = useTags()
  const selectedTagIds = props.value
  const onAddTag = () => {
    const tagName = window.prompt("请输入tag")
    if (tagName !== null) {
      // setTags([...tags, tagName])
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }
  const toggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if (index >= 0) {
      // 如果tag已经存在selectedTags中，那过滤出seleedTags除tag外所有的数据
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }

  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? "selected" : ""
  return (
    <_TagsSection>
      <ol>
        {
          tags.map((tag: { id: number, name: string }) =>
            <li key={tag.id} onClick={() => { toggleTag(tag.id) }} className={getClass(tag.id)}>{tag.name}</li>
          )
        }
      </ol>
      <button onClick={() => onAddTag()}>新增标签</button>
    </_TagsSection>
  )
}

export { TagsSection }
