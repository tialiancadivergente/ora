"use client";

export default function SecondSection() {
	return (
		<section
			className={`
				w-full
				min-h-[800px]
				md:min-h-[961px]

				bg-[url('/images/segunda-dobra-mobile.webp')]
				md:bg-[url('/images/ora/v1/segunda_dobra_desktop.webp')]

				bg-no-repeat
				bg-cover
				bg-center

				md:bg-[length:100%_100%]
			`}
		>
			Nova dobra aqui
		</section>
	);
}