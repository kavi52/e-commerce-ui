import { ChangeEvent } from "react";

export type SelectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => void;

export type Sort = 'newest' | 'asc' | 'desc'
