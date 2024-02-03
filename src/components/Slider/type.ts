export type SliderDirection = "left" | "right"

export interface ArrowProps {
    direction: SliderDirection;
}

export interface WrapperProps {
    slideIndex: number;
}

export interface SlideProps {
    bg: string;
}