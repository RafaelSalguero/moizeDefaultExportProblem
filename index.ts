import moize from "moize";
const f = (x: number) => x;
const f2 = moize(f);
