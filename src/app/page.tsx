'use client'

import { useChat } from 'ai/react'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === 'user' ? ' 👨‍💻 User: ' : ' 🤖 AI: '}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit} className=''>
        <input
          name='prompt'
          value={input}
          className=' text-slate-700 fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl'
          placeholder='Say something...'
          onChange={handleInputChange}
        />
        {/* <button type='submit'>Submit</button> */}
      </form>
    </div>
  )
}
