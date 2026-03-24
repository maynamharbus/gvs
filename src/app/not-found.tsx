import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import LineWaves from "@/components/LineWaves";

export default function NotFound() {
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

			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl items-center px-6 py-12 sm:px-10">
				<section className="w-full rounded-[2rem] border border-white/10 bg-black/24 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-10">
					<div className="flex items-center gap-3 text-cyan-200">
						<div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
							<SearchX className="h-6 w-6" />
						</div>
						<p className="text-sm font-medium uppercase tracking-[0.24em] text-white/56">404 Not Found</p>
					</div>

					<h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
						This page is not part of the Generate–Verify–Select site.
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
						The route you opened does not exist in this research paper microsite. Use the link below to return
						to the homepage.
					</p>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<Link
							href="/"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/16"
						>
							<ArrowLeft className="h-4 w-4" />
							Back To Home
						</Link>
					</div>

					<div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
						<div className="rounded-[1.5rem] border border-white/10 bg-black/22 p-5">
							<div className="flex items-start gap-4">
								<div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-white/80">
									<Home className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/46">Available Route</p>
									<p className="mt-2 text-xl font-semibold text-white">Homepage</p>
									<p className="mt-2 text-sm text-white/58">
										The paper overview, authors, diagram, and links all live on the main page.
									</p>
								</div>
							</div>
						</div>
						<div className="rounded-[1.5rem] border border-white/10 bg-black/22 p-5">
							<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/46">Path</p>
							<p className="mt-2 break-all text-sm text-white/72 sm:text-base">Unknown route requested</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
