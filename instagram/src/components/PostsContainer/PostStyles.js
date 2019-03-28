import styled from 'styled-components'

//PostHeader styling
const Header = styled.header `
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
`

const ThumbnailImg = styled.img `
  max-height: 100%;
  border-radius: 50%;
  margin-right: 10px;
`
//Post main content styling

const PostIcons = styled.div `
    display: flex;

    .likes {
      color: #256FA9
    }

`
export {Header, ThumbnailImg, PostIcons}
