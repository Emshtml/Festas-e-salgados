export const theme = {
  colors: {
    primary: "#7A1C1C",
    secondary: "#D4AF37",
    background: "#FFF6E9",
    white: "#FFFFFF",
    dark: "#220909",
  },

  gradients: {
    hero:
      "bg-gradient-to-br from-[#7A1C1C] via-[#5A1010] to-[#220909]",
  },

  shadows: {
    card: "shadow-xl hover:shadow-2xl",
    premium: "shadow-[0_25px_80px_rgba(0,0,0,0.35)]",
  },

  radius: {
    xl: "rounded-3xl",
    premium: "rounded-[40px]",
  },

  animations: {
    hover: "hover:scale-105 transition duration-300",
    smooth: "transition-all duration-500",
  },

  typography: {
    title:
      "text-5xl lg:text-7xl font-black leading-tight",
    subtitle:
      "text-xl text-zinc-200 leading-relaxed",
  },

  buttons: {
    primary:
      "bg-[#D4AF37] text-[#7A1C1C] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-xl",

    secondary:
      "border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7A1C1C] transition duration-300",
  },

  cards: {
    glass:
      "bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl",
  },
};
