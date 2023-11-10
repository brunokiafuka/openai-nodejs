import 'dotenv/config'
import { openai, genNewMessage } from './config/openai.js'
import { formatUserMessage } from './utils/formatUserMessage.js'
import { rl } from './utils/readline.js';

async function main() {
    const history = [
        {
            role: 'system',
            content: `You are a helpful AI assistant. Answer the user's questions to the best of you ability.`,
        },
    ]
    const start = () => {
        rl.question('You: ', async (userInput) => {
            if (userInput.toLowerCase() === 'exit') {
                rl.close()
                return
            }

            const userMessage = formatUserMessage(userInput)
            const response = await genNewMessage(history, userMessage)

            history.push(userMessage, response)
            console.log(`\n\nAI: ${response.content}\n\n`)
            start()
        })
    }

    console.log('\n\nAI: How can I help you today?\n\n')
    start()

}

console.log('==== YOUR AI COOL CHAT ====')
main();