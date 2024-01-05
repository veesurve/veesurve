"use client";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
				VEESURVE Experiences
			</h1>
			<h3 className="text-base sm:text-xl md:text-2xl font-medium">
				YOUR VISION. OUR COMMITMENT
			</h3>

			<Link href="/documents">
				<Button>
					Explore More
					<ArrowRight className="h-4 w-4 ml-2" />
				</Button>
			</Link>
		</div>
	);
};
