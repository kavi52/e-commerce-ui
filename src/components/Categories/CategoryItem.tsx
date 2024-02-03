import { Button, Container, Image, Info, Title } from "./style";
import { CategoryItemProps } from "./type";

const CategoryItem = ({ item }: CategoryItemProps) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;