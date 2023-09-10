import { JSX } from "npm:preact"

interface Props {
	children: JSX.Element
}

export default function (props: Props) {
	return (
		<>
			<html lang="en">
				<head>
					<meta charSet="UTF-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>

					<link rel="icon" href="/assets/starmoon_gal_outline.png" />
					<link rel="stylesheet" href="/font.css" />
					<link rel="stylesheet" href="/index.css" />

					<title>Starmoon's Website~!</title>
				</head>
				<body>
					<main>
						{props.children}
					</main>
				</body>
			</html>
		</>
	)
}
