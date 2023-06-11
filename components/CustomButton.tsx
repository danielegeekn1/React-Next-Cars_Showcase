"use client";
import { CustomBtnProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
	title,
	btnStyles,
	handleClick,
	btnType,
}: CustomBtnProps) => {
	return (
		<button
			disabled={false}
			type={btnType || "button"}
			className={`custom-btn ${btnStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	);
};

export default CustomButton;
