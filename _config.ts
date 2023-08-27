import lume from "lume/mod.ts"
import esbuild from "lume/plugins/esbuild.ts"
import jsx_preact from "lume/plugins/jsx_preact.ts"
import tailwindcss from "lume/plugins/tailwindcss.ts"
import postcss from "lume/plugins/postcss.ts"

const site = lume({
	src: "./src",
	server: {
		page404: "/404/index.html",
	},
})

site.use(esbuild())
site.use(jsx_preact())
site.use(tailwindcss())
site.use(postcss())

site.copy("assets")

export default site
