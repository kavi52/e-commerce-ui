import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
    height: 60px;
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

export const Logo = styled.h1`
  font-weight: bold;
  margin: 0px;
  ${mobile({ fontSize: "24px" })}
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`