import getPost from '@/app/lib/getPost';
import React from 'react';

export default async function SinglePostPage({ params }) {
    // console.log(params, "params")
    const { id } = params;

    const postData = await getPost(id)
    // console.log(postData);
    const { title, body } = postData;

    console.log(body, "body");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{id} Posts Details:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-700">{body}</p>
                </div>
            </div>
        </div>
    )
}