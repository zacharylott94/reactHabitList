//This factory function returns a simple object that helps organize data
export function ItemState(desc = "Description", state = false, count = 0) {
  return {
    desc,
    state,
    count
  };
}
