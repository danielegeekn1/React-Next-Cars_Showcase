import { MouseEventHandler } from "react";

export interface CustomBtnProps {
	title: string;
	btnStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}
