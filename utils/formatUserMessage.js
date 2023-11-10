/**
 * Formats user input and returns an object with the user role
 * @param {string} userInput - user message to be formatted
 * @return {{ role: 'user', content: string }} 
 * 
 */
export const formatUserMessage = (userInput) => ({ role: 'user', content: userInput })