import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
        <div className="p-4">
            <nav>
                <ul className="flex gap-6">
                    <li className="cursor-pointer"><Link href='/about/mission'>Mission</Link></li>
                    <li className="cursor-pointer"><Link href='/about/vision'>Vision</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
}
