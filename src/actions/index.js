export const TOGGLE_LIST = "TOGGLE_LIST";

export function toggleList(nameobj) {
  return {
    type: TOGGLE_LIST,
    nameobj,
  };
}
