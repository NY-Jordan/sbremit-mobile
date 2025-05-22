/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter_400Regular",
        'inter-medium': "Inter_500Medium",
        'inter-semibold': "Inter_600SemiBold",
        'inter-bold': "Inter_700Bold",
        'inter-extrabold': "Inter_800ExtraBold",
      },
    },
  },
  plugins: [],
}