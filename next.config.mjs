import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true,
};

export default withPWAInit({
  pwa: {
    dest: "public",
  },
  ...nextConfig,
});
