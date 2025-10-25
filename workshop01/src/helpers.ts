export function getRandomChoice<T>(arr: T[]) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // Handle empty or non-array inputs
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
