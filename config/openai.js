import OpenAI from 'openai'

export const openai = new OpenAI();

/**
 * Generates a messages as part of the chat conversation
 * @param {{ role: string, content: string }[]} prevMessages - previously sent messages in memory
 * @param {{ role: string, content: string }}  newMessage - a new new message to be sent a an participant 
 * 
 */
export const genNewMessage = async (prevMessages, newMessage) => {
    const completion = await openai.chat.completions.create({
        messages: [...prevMessages, newMessage],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message
}