import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
			<div className="flex max-md:flex-col lg:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="/logo.svg"
						alt="footer_logo"
						width={120}
						height={18}
						className="object-contain"
					/>
					<p className="text-base text-gray-700">
						Carhub 2023 - All rights reserved &copy;
					</p>
				</div>
				<div className="footer__links">
					{footerLinks.map((footerLink) => (
						<div key={footerLink.title} className="footer__link">
							<h3 className="font-bold">{footerLink.title}</h3>
							{footerLink.links.map((singleFooterLink) => (
								<Link
									key={singleFooterLink.title}
									href={singleFooterLink.url}
									className="text-gray-500"
								>
									{singleFooterLink.title}
								</Link>
							))}
						</div>
					))}
				</div>
				<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 lg:px-16 px-6 py-10">
					<p>@2023 CarHub all rights reserved</p>
					<div className="footer__copyrights-link">
						<Link href="/" className="text-gray-500">
							Privacy Policy
						</Link>
						<Link href="/" className="text-gray-500">
							Terms of use
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
