import { NextFont } from "next/dist/compiled/@next/font";
import { createContext, Context } from "react";

const defaultfont: NextFont = {
  className: "",
  style: {
      fontFamily: ""
  }
}

export const SerifContext: Context<NextFont> = createContext(defaultfont)
export const SansContext: Context<NextFont> = createContext(defaultfont)
