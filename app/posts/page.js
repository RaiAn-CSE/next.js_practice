import Link from 'next/link';
import React from 'react';
import getAllPost from '../lib/getAllPost';

export const metadata = {
    title: 'All Posts',
    description: 'A list of all posts.',
};


// Page component
export default async function Posts() {
    const allData = await getAllPost();

    // console.log(allData);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">All Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allData.map((post) => (
                    <div key={post.id} className="p-4 bg-white rounded-lg shadow-md">
                        <Link href={`/posts/${post.id}`} className="cursor-pointer text-xl font-semibold border p-2 rounded-sm">
                            {
                                post.title.length > 20
                                    ? `${post.title.slice(0, post.title.slice(0, 20).lastIndexOf(" "))}...`
                                    : post.title
                            }
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
