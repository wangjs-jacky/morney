import Icon from "components/Icon"
import Layout from "components/Layout"
import Nav from "components/Nav"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"

const TagList = styled.ol`
    font-size: 16px;
    backgroundColor: #FFFFFF;
    
    > li {
        display: block;
        width: 100%;
        line-height: 20px;
        padding: 12px 16px;
        border-bottom: 1px solid #d5d5d9;
        > a {
            display: block;
            width: 100%;
            display: flex;
            flex-grow: 1;
            justify-content: space-between;
            align-items:center;
        }
    }
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background: #f60;
    color: #FFF;
    padding: 10px;
    font-size:16px;
`

const Space = styled.div`
    height: 16px;
`

export default () => {
    const { tags, setTags } = useTags()
    return (
        <Fragment>
            <Layout>
                <TagList>
                    {
                        tags.map(tag =>
                            <li key={tag.id}>
                                <Link to={'/tags/'+ tag}>
                                    <span className="oneLine">
                                        {tag.name}
                                    </span>
                                    <Icon name="right"></Icon>
                                </Link>
                            </li>
                        )
                    }
                    <Space />
                    <Space />
                    <Space />
                    <Center>
                        <Button>新增标签</Button>
                    </Center>
                </TagList>

            </Layout>
            <Nav />
        </Fragment>
    )
}