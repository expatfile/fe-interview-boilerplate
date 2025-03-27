export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice" });
    }, 2000);
  });
};
