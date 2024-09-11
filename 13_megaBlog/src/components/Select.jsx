import React from 'react'
import { useId } from 'react'

function Select(
    {
        options,
        label,
        className='',
        ...props
    }, ref) {
        const id=useId()
        return(
            <div className='w-full'>
                {
                    label && <label htmlFor={id} className='inline-block mb-1 pl-1'>
                        {label}
                    </label>
                }
                <select 
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus: bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
                ref={ref}
                {...props} 
                id={id}>
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                        ))}
                </select>
            </div>

        )
    }

export default React.forwardRef(Select)
//another syntax to use forwardRef