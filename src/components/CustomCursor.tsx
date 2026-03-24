"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
	const dotRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!window.matchMedia("(pointer: fine)").matches) {
			return;
		}

		const dot = dotRef.current;
		const ring = ringRef.current;
		if (!dot || !ring) {
			return;
		}

		const state = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
			targetX: window.innerWidth / 2,
			targetY: window.innerHeight / 2,
			visible: false,
			interactive: false,
			nativeZone: false,
			pressed: false,
		};

		let frameId = 0;

		const render = () => {
			state.x += (state.targetX - state.x) * 0.18;
			state.y += (state.targetY - state.y) * 0.18;

			const ringScale = state.pressed ? 0.84 : state.interactive ? 1.32 : 1;
			const dotScale = state.pressed ? 1.6 : state.interactive ? 1.18 : 1;
			const opacity = state.visible && !state.nativeZone ? 1 : 0;

			dot.style.transform = `translate3d(${state.targetX}px, ${state.targetY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
			dot.style.opacity = `${opacity}`;

			ring.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
			ring.style.opacity = `${opacity}`;
			ring.style.borderColor = state.interactive ? "rgba(129, 140, 248, 0.95)" : "rgba(56, 189, 248, 0.78)";
			ring.style.background = state.interactive ? "rgba(129, 140, 248, 0.12)" : "rgba(56, 189, 248, 0.08)";

			frameId = window.requestAnimationFrame(render);
		};

		const handlePointerMove = (event: PointerEvent) => {
			state.targetX = event.clientX;
			state.targetY = event.clientY;
			state.visible = true;
			state.nativeZone = Boolean(
				event.target instanceof Element && event.target.closest("[data-native-cursor]"),
			);
			state.interactive = Boolean(
				event.target instanceof Element &&
				event.target.closest("a, button, [role='button'], input, textarea, select, summary, iframe, object"),
			);
		};

		const handlePointerDown = () => {
			state.pressed = true;
		};

		const handlePointerUp = () => {
			state.pressed = false;
		};

		const handlePointerLeave = () => {
			state.visible = false;
		};

		frameId = window.requestAnimationFrame(render);
		window.addEventListener("pointermove", handlePointerMove, { passive: true });
		window.addEventListener("pointerdown", handlePointerDown, { passive: true });
		window.addEventListener("pointerup", handlePointerUp, { passive: true });
		window.addEventListener("pointerleave", handlePointerLeave);
		window.addEventListener("blur", handlePointerLeave);

		return () => {
			window.cancelAnimationFrame(frameId);
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerdown", handlePointerDown);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointerleave", handlePointerLeave);
			window.removeEventListener("blur", handlePointerLeave);
		};
	}, []);

	return (
		<div aria-hidden className="custom-cursor">
			<div ref={ringRef} className="custom-cursor-ring" />
			<div ref={dotRef} className="custom-cursor-dot" />
		</div>
	);
}
