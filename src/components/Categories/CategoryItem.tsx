import { Link } from "react-router-dom";
import { Button, Container, Image, Info, Title } from "./style";
import { CategoryItemProps } from "./type";

const CategoryItem = ({ item }: CategoryItemProps) => {
    return (
        <Container>
            <Link to={`/products/${item?.cat}`}>
            <Image src={item?.img} />
            <Info>
                <Title>{item?.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;