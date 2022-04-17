import React from 'react'

const Box = (props) => {
  return (
    <section className="body-font max-w-md">
        <div className="container px-16 py-16 mx-auto">
            <div className="flex flex-wrap m-4">
                <div className="p-4">
                    <div className="h-full rounded-xl shadow-xl bg-gradient-to-r from-indigo-400 to-blue-400 overflow-hidden">
                        <div className="p-6">
                            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                                {props.title}
                            </h1>
                            <p class="leading-relaxed mb-3">{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Box