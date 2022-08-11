module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        images: {
            domains: ["picsum.photos"],
        },
    };
    return nextConfig;
};
