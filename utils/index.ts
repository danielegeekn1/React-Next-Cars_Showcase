import { carProps } from "@/types";

export async function fetchCars() {
	const headers = {
		"X-RapidAPI-Key": "d9b543a720mshba713e48411c80ep16526ejsn3196eb93f73d",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};
	const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera";
	const res = await fetch(url, {
		headers: headers,
	});
	const result = await res.json();
	return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};
export async function generateCarsImg(car: carProps, angle?: string) {
	const url = new URL("https://cdn.imagin.studi/getImage");
	const { make, year, model } = car;
	url.searchParams.append("customer", process.env.CUSTOMER_KEY || "");
	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split("")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	url.searchParams.append("angle", `${angle}`);
	return `${url}`;
}
