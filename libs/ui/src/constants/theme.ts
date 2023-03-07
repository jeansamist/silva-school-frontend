export let documentWidth = window.innerWidth;
export let documentHeight = window.innerHeight;
window.addEventListener("resize", () => {
  documentWidth = window.innerWidth;
  documentHeight = window.innerHeight;
});

export const COLORS = {
  primary: "#6f53f4",
  primaryOpact: "#6e53f46b",
  primaryVariant1: "#4b4bc4",
  primaryVariant1Opact: "#4b4bc462",
  color: "#050506",
  colorLight: "#fff",
  colorDark: "#050506",
  colorInfo: "#b8b8ba",
  // documentBackground: "#f2f0ff",
  documentBackground: "#efeef3",
  backgroundDark: "#140e2d",
  disabledBackground: "#b8b8ba",
  cardBackground: "#fff",
  inputBackground: "#fff",
  border: "#e1e1ee",
  shadow: "#f2f0ff",
  greyVariant: "#eef0f3",
  red: "#f25353",
  green: "#41cf7c",
  yellow: "#feb32b",
};
export const BASESIZE = 16;
export const SIZES = {
  fontSize: BASESIZE,
  h1: BASESIZE * 2.5,
  h2: BASESIZE * 2,
  h3: BASESIZE * 1.5,
  h4: BASESIZE * 1.25,
  h5: BASESIZE * 1,
  h6: BASESIZE * 0.75,
  body1: BASESIZE,
  body2: BASESIZE * 0.8,
  body3: BASESIZE * 0.7,
  body4: BASESIZE * 0.6,
  borderRadius: BASESIZE * 0.5,
  sidebarWidth: BASESIZE * 20,
};

export default { documentWidth, documentHeight, COLORS, BASESIZE, SIZES };
