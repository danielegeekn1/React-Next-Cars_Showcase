import { MouseEventHandler } from "react";

export interface CustomBtnProps {
	title: string;
	btnStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: "button" | "submit";
}
export interface searchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}
