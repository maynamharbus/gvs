	import type { NextConfig } from "next";
	
	const nextConfig: NextConfig = {
	  // Disable linting and TypeScript errors during builds (optional)
  
	  typescript: {
	    ignoreBuildErrors: true,
	  },
	  
	
	  output: "export", 
	  
	  // Optional: Define your basePath if deploying to a subdirectory

 	  // Optional: Add trailing slashes for better compatibility with static hosting
	  trailingSlash: true,
	  
	  
	};	
	export default nextConfig;


// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
