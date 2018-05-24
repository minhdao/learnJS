/**
 * [scream converts text to upper case and add '!' at the end]
 * @param  {[string]} text [text input]
 * @return {[string]}      [no return]
 */
export const scream = (text) => {
  text = text.toUpperCase();
  return `${text}!`;
};