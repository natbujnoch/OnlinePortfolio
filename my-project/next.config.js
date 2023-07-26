/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
  
module.exports = {
    
    async redirects() {
      return [
        //triggers maintenance mode
        // {
        //   source: "/((?!maintenance).*)",
        //   destination: "/maintenance.html",
        //   permanent: false, 
        // },
        //triggers normal mode
        {
            source: "/maintenance.html",
            destination: "/",
            permanent: false,
          },
      ];
    },
  };