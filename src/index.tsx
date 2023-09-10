export const layout = "main.tsx"

interface AboutProps {
	levitate: boolean
}

const About = (props: AboutProps) => (
	<div
		class={`window mt-24 ${props.levitate ? "levitate" : ""} w-full`}
		id="about-holder"
	>
		<div class="title-bar p-2">
			<div class="title-bar-text text-xl">
				Starmoon
				<span class="flicker">_</span> - About Me
			</div>
		</div>
		<div class="window-body text-black p-4" id="about">
			<h1 class="m-0 text-2xl invisible">
				Hi =), <br /> I'm Lucy!{" "}
				<span class="text-xl text-gray-700 pl-4 invisible">she / her</span>
			</h1>
			<p class="m-0 py-2 text-xl invisible">
				21 yo Dreambreak/Jungle/Breakcore artist :3 <br />
				I make experimental music too <br />
			</p>
		</div>
	</div>
)

interface Album {
	name: string
	price: string
	cover: string
}

const MusicAlbums = () => {
	const albums: Album[] = [
		{
			name: "Starmoon",
			price: "free (or: €2.99)",
			cover: "/assets/albums/starmoon.png",
		},
		{
			name: "Breakcore Yassification",
			price: "free (or €2.99)",
			cover: "/assets/albums/breakcore_yassification.jpg",
		},
		{
			name: "Ashley",
			price: "free (or: €1.99)",
			cover: "/assets/albums/ashley.png",
		},
	]

	return (
		<>
			{albums.map((album) => {
				return (
					<>
						<div class="flex flex-col gap-4 md:gap-0 p-8 z-99 isolate">
							<img
								src={album.cover}
								class="max-w-full md:h-80 md:w-80 rounded-xl m-auto"
							/>
							<h1 class="m-0 mt-4 md:mt-8 uppercass text-4xl font-semibold md:text-white">
								{album.name}
							</h1>
							<p class="m-0 uppercase text-2xl font-thin md:text-white">
								{album.price}
							</p>
						</div>
					</>
				)
			})}
		</>
	)
}

const Socials = () => {
	return (
		<div class="flex flex-col gap-2 text-center hover:shadow-2xl">
			<i class="ri-discord-fill text-8xl"></i>
			<p class="m-0 text-2xl">Discord</p>
		</div>
	)
}

const Waves = () => (
	<svg
		width="100%"
		height="16rem"
		viewBox="0 0 1000 1000"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		overflow="auto"
		shape-rendering="auto"
		fill="#ffffff"
		class="-mt-[16rem]"
	>
		<defs>
			<path
				id="wavepath"
				d="M 0 2000 0 500 Q 150 364 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
			/>
			<path id="motionpath" d="M -600 0 0 0" />
		</defs>
		<g>
			<use xlinkHref="#wavepath" y="-226" fill="#000000">
				<animateMotion
					dur="20s"
					repeatCount="indefinite"
				>
					<mpath xlinkHref="#motionpath" />
				</animateMotion>
			</use>
		</g>
	</svg>
)

const TiltedSpikes = () => {
	return <div class="flex h-16 w-full" id="tilted-spikes">{" "}</div>
}

export default function () {
	return (
		<>
			<section class="flex flex-col min-h-[48rem] waves pb-80" id="landing">
				{" "}
				<div class="flex w-full h-32" id="checker">{" "}</div>
				<img
					src="/assets/pastel_pink_server.png"
					class="h-48 w-48 absolute left-0 top-0"
					id="pastel-circle"
				/>
				<img
					src="/assets/pastel_pink_server_bg.png"
					class="h-48 w-48 absolute left-0 top-0"
					id="pastel-circle-bg"
				/>
				<div class="flex w-full h-16 mt-32" id="signals">{" "}</div>
				<div class="hidden md:grid grid-cols-2 justify-items-end gap-24 px-40 -mt-52">
					<About levitate={true} />
					<img
						src="/assets/starmoon_gal_outline.png"
						class="h-[150%] window bg-transparent levitate"
						id="lucy-frame"
					/>
				</div>
				<div class="flex flex-col md:hidden p-4">
					<img
						src="/assets/starmoon_gal_outline.png"
						class="w-full window bg-transparent levitate mt-4 -mb-24"
					/>
					<About levitate={false} />
				</div>
			</section>
			<Waves />
			<section
				class="flex flex-col items-center justify-center md:px-40 z-20"
				id="music-showcase"
			>
				<h1 class="text-[3rem] md:text-[6rem] m-0 p-4 -mt-48 md:-mt-24 text-center z-99">
					Here is some music I have made!
				</h1>
				<div class="flex flex-row justify-between items-center h-[32rem] md:h-[64rem] -mt-48 w-full z-0 isolate">
				</div>
				<div class="hidden md:flex flex-row justify-between items-center h-[32rem] md:h-[64rem] -mt-[64rem] w-full z-0 isolate backdrop-blur-xl">
					<MusicAlbums />
				</div>
				<br />
				<div class="flex flex-col gap-4 -mt-48 md:hidden w-full mb-16">
					<MusicAlbums />
				</div>
			</section>
			<section class="flex flex-col h-[32rem]" id="connections">
				<div class="flex flex-col w-full h-full">
					<TiltedSpikes />
					<div class="flex flex-col md:flex-row flex-1 justify-between items-center p-4 md:px-64">
						<Socials />
					</div>
				</div>
			</section>
			<footer class="flex flex-col min-h-[4rem] p-4 md:p-8 md:px-40 text-center text-xl">
				<p>
					© 2023 Website by LePichu, Content by/for Starmoon, made with 💜 and
					Estrogen Patches. All Rights Reserved, licensed under MIT License and
					Source Available on{" "}
					<a class="inline text-white no-underline visited:text-white" target="_blank" href="https://github.com/LePichu/Starmoon">
						<i class="ri-github-fill opacity-50 hover:opacity-100 text-4xl transition-all">
						</i>
					</a>.
				</p>
			</footer>
		</>
	)
}
