import React from 'react'

const Blogs = () => {

    const blogs = 
    [
        {
            "question": "What is useState and how does it work in React?",
            "answer": "useState is a built-in React Hook that allows functional components to manage state. It returns an array with two elements: the current state value and a function to update it. Example: const [count, setCount] = useState(0);. When setCount is called, it updates the state and triggers a re-render."
        },
        {
            "question": "What is the purpose of useEffect in React?",
            "answer": "useEffect handles side effects in functional components like API calls, subscriptions or DOM manipulations. It runs after rendering and can optionally clean up effects. Syntax: useEffect(() => { effect }, [dependencies]). It's useful for operations that interact with the outside world."
        },
        {
            "question": "What is a custom hook in React and when should you use one?",
            "answer": "A custom hook is a JavaScript function (prefixed with 'use') that contains reusable stateful logic. Use custom hooks when you need to share the same logic between multiple components, like form handling, API calls, or timers. Example: useFetch(), useLocalStorage()."
        },
        {
          "question": "Difference between controlled and uncontrolled components? Which one is better?",
          "answer": "Controlled components manage form data via React state (recommended for most cases). Uncontrolled components let the DOM manage form data via refs. Controlled components are generally better as they provide more predictability and control, though uncontrolled components can be simpler for basic cases."
        },
        {
            "question": "Tell us something about useFormStatus()",
            "answer": "useFormStatus() is an experimental React Hook that provides information about a form's submission status (like pending state or submitted data). It's useful for optimistic UI updates during form submissions. Note: This is currently an experimental API and may change."
        }
    ]




    return (
        <div className='max-w-screen-xl mx-auto mt-12 mb-12'>
            <div className=' flex flex-col items-center justify-center p-3'>
                {
                    blogs.map((blog, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg w-full px-10 py-7 mt-12">
                            <h2 className='text-base font-bold'>{blog.question}</h2>
                            <hr className='border border-dashed border-gray-300 mt-2 mb-2'/>
                            <p className='text-sm text-gray-900'>{blog.answer}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }

export default Blogs