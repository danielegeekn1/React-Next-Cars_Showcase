"use client";
import { showMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
const ShowMoreCars = ({ pageNumber, isNext }: showMoreProps) => {
	const router = useRouter();
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPathName = updateSearchParams("limit", `${newLimit}`);
		router.push(newPathName);
	};
	return (
		<div className="w-full flex flex-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					title="show more"
					btnType="button"
					btnStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMoreCars;
