const enum MAIN_LAYOUTS {
  Home = "Home",
  CV = "CV",
  Referals = "Referals",
}

export default MAIN_LAYOUTS;

export type KeysOfMainLayout = keyof typeof MAIN_LAYOUTS;
