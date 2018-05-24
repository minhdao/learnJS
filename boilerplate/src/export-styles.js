/**
 * There are 2 ways you can export
 *    name (can have as many as you like)
 *    default (only 1 default export per file)
 */
const func1 = () => {
  return `func1`;
};

const func2 = () => {
  return `func2`;
};

const name = 'Minh';

export { func1, func2, name as default };