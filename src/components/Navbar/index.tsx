import React from 'react'
import { Center, Container, Language, Left, Logo, Right, SearchContainer, Wrapper } from './style'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge, IconButton, MenuItem, TextField } from '@material-ui/core'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>

                    <SearchContainer>
                        <TextField
                            id="navbar-search"
                            label="Search"
                            size='small'
                            variant="outlined"
                            InputProps={{
                                endAdornment: <Search />
                            }}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Fashion</Logo>
                </Center>
                <Right>
                    <MenuItem>
                        Register
                    </MenuItem>

                    <MenuItem>
                        Login
                    </MenuItem>

                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar