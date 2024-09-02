import { notFound } from 'next/navigation';
import React from 'react';

const BlogPage = ({params}) => {

    console.log(params,"params")
    const {id,title,description} = params;

    console.log(id);
    if (id ==="3"){
        notFound();
    }


    return (
        <div className='p-4'>
            <h2>Blog id is: {id}</h2>
            {/* <p>Blog Title: {title}</p>
            <p>Blog description: {description}</p> */}
        </div>
    );
};

export default BlogPage;