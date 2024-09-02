import Link from 'next/link';
import React from 'react';

const Blog = () => {

    const allData = [
        {
            id: 1,
            title: "This this Raian",
            description: "Hi there this is Raian. i am a front-end developer from bangladesh"
        },
        {
            id: 2,
            title: "This this Naima",
            description: "Hi there this is Naima. i am a front-end developer from bangladesh"
        }
    ]

    return (
        <div className="mt-6">
            <ul>
                {
                    allData.map((blog) => (
                        <li className="p-2 border-2" key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>
                                <button className="bg-green-300 py-1 px-3 rounded-lg">
                                    {blog?.title}
                                </button>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Blog;