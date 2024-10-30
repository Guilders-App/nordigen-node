/**
 * Filter false values from object
 * @param {Object} obj
 * @returns A new object with truthy values
 */
export const filterObject = (
  obj: Record<string, any> | null | undefined
): Record<string, any> => {
  return Object.keys(obj || {}).reduce(
    (acc: Record<string, any>, key: string) => {
      if (obj?.[key]) {
        acc[key] = obj[key];
      }
      return acc;
    },
    {}
  );
};
