import { Code2, FileText } from "lucide-react";

import LineWaves from "@/components/LineWaves";

const authors = [
	{
		name: "Subrahmanyam BHVSP",
		href: "https://www.linkedin.com/in/drpandit69/",
		affiliation: "1",
	},
	{
		name: "Appana Saketh Krishna Rao",
		href: "https://www.linkedin.com/in/appana-saketh-krishna-rao-1760322a4/",
		affiliation: "2",
	},
	{
		name: "Sukriti Tiwari",
		href: "https://www.linkedin.com/in/sukriti-tiwari3/",
		affiliation: "2",
	},
	{
		name: "Dr. Neeraj Choudhary",
		href: "https://www.linkedin.com/in/n28neeraj/",
		affiliation: "2",
	},
];

export default function Home() {
	return (
		<main className="relative isolate min-h-screen overflow-hidden bg-[#02050d] text-white">
			<div className="absolute inset-0">
				<LineWaves
					speed={0.3}
					innerLineCount={32}
					outerLineCount={36}
					warpIntensity={1}
					rotation={-45}
					edgeFadeWidth={0}
					colorCycleSpeed={1}
					brightness={0.14}
					color1="#38bdf8"
					color2="#818cf8"
					color3="#14b8a6"
					enableMouseInteraction
					mouseInfluence={2}
				/>
			</div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,rgba(2,5,13,0.24)_0%,rgba(2,5,13,0.76)_56%,rgba(2,5,13,0.96)_100%)]" />

			<div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-18 lg:px-12">
				<header className="text-center">
					<h1 className="font-heading mx-auto max-w-5xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
						<span className="block">Generate, Verify and Select:</span>
						<span className="mt-3 block text-white/90">
							Evolutionary Fitness Shaping for Safe Clinical Text Generation
						</span>
					</h1>
					<div className="mt-8 grid gap-3 text-lg font-medium text-white/90 sm:grid-cols-2 sm:text-xl">
						{authors.map((author) => (
							<a
								key={author.name}
								className="transition hover:text-white"
								href={author.href}
								target="_blank"
								rel="noreferrer"
							>
								{author.name}
								<sup className="ml-1 text-sm text-white/56">{author.affiliation}</sup>
							</a>
						))}
					</div>
					<div className="mt-6 space-y-2 text-sm text-white/62 sm:text-base">
						<p>
							<sup className="mr-2 text-xs">1</sup>
							Interdisciplinary Advanced Research Centre for Transformative Technologies (IARCT
							<sup>2</sup>), Mahindra University.
						</p>
						<p>
							<sup className="mr-2 text-xs">2</sup>
							Department of Computer Science and Engineering, Mahindra University.
						</p>
					</div>
				</header>

				<section className="mt-14 border-t border-white/10 pt-10">
					<p className="text-sm font-medium uppercase tracking-[0.22em] text-white/46">Overview</p>
					<div className="mt-5 max-w-none space-y-5 text-base leading-8 text-white/76 sm:text-lg">
						<p>
							Generate–Verify–Select (GVS) is an inference-time framework for safe clinical text
							generation, designed for Brief Hospital Course and Discharge Instructions. Rather than trusting
							a single model output, GVS produces a diverse candidate pool and applies explicit safety checks
							for medication hallucinations, numeric inconsistencies, negation flips, and sentence-level
							contradictions.
						</p>
						<p>
							Final selection is driven by evolutionary fitness shaping: a Differential Evolution-tuned
							linear fitness function balances quality and safety at inference time. On Discharge Me, GVS
							improves official scores to 0.323 for BHC and 0.378 for DI while reducing medication
							hallucinations to 9.2–11.1% and roughly halving numeric and negation errors, without
							retraining the base generators.
						</p>
					</div>
				</section>

				<section className="mt-10 border-t border-white/10 pt-10">
					<div className="mx-auto max-w-[450px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-black/22 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:hidden">
						<iframe
							className="block aspect-[9/16] w-full"
							src="/diagram-mobile.html"
							title="Generate Verify Select mobile diagram"
							loading="lazy"
						/>
					</div>
					<div
						className="hidden overflow-x-auto rounded-[1.5rem] border border-white/12 bg-black/22 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:block"
						data-native-cursor
					>
						<div className="min-w-[920px]">
							<object
								className="block aspect-[2/1] w-full rounded-[1rem]"
								data="/diagram.svg"
								type="image/svg+xml"
								aria-label="Generate Verify Select diagram"
								data-native-cursor
							>
								<p className="p-6 text-sm text-white/70">
									The diagram could not be embedded here. Open{" "}
									<a className="underline underline-offset-4" href="/diagram.svg" target="_blank" rel="noreferrer">
										the SVG directly
									</a>
									.
								</p>
							</object>
						</div>
					</div>
				</section>

				<section className="mt-10 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
					<div className="group rounded-[1.5rem] border border-white/12 bg-black/26 p-5 transition hover:border-white/22 hover:bg-black/34">
						<div className="flex items-start gap-4">
							<div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
								<Code2 className="h-6 w-6" />
							</div>
							<div>
								<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/46">Code</p>
								<p className="mt-2 text-xl font-semibold text-white">Coming Soon</p>
								<p className="mt-2 text-sm text-white/58">Repository and implementation details will be added here.</p>
							</div>
						</div>
					</div>

					<div className="group rounded-[1.5rem] border border-white/12 bg-black/26 p-5 transition hover:border-white/22 hover:bg-black/34">
						<div className="flex items-start gap-4">
							<div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-emerald-200">
								<FileText className="h-6 w-6" />
							</div>
							<div>
								<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/46">Paper Link</p>
								<p className="mt-2 text-xl font-semibold text-white">Coming Soon</p>
								<p className="mt-2 text-sm text-white/58">The publication link will appear here once it is available.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
