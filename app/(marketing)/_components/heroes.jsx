import Image from "next/image";

export const Heroes = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-5xl">
			<div className="flex items-center space-x-4">
				<div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
					<Image
						alt="hero1"
						src="/hero1.jpg"
						fill
						className="object-cover rounded-3xl"
					/>
				</div>
				<div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
					<Image
						alt="hero2"
						src="/hero2.jpg"
						fill
						className="object-cover rounded-3xl"
					/>
				</div>
			</div>
		</div>
	);
};
