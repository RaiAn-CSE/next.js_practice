import Link from 'next/link';
import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div className="p-6">
            <nav>
                <ul className="flex gap-6">
                    <li className="cursor-pointer"><Link href='/blog/myBlog'>My Blog</Link></li>
                    <li className="cursor-pointer"><Link href='/blog/employeeBlog'>Employee Blog</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default BlogLayout;