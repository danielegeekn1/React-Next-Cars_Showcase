"use client";

import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (manufacturer === "" || model === "") {
			alert("please fill in the search bar");
		}
		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};
	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}

		const newPathName = `${
			window.location.pathname
		}?${searchParams.toString()}`;
		router.push(newPathName);
	};
	const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
		<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
			<Image
				src="magnifying-glass.svg"
				alt="magnify"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	);
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchBtn otherClasses="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					alt="model"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder="tiguan"
					className="searchbar__input"
				/>
				<SearchBtn otherClasses="sm:hidden" />
			</div>
			<SearchBtn otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
