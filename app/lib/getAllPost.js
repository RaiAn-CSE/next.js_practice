export default async function getAllPost() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=15",
        {
            // cache: "force-cache" //by default
            // cache: "no-store" // this make dynamic site but its not a best option
            next: {   // make this render SSG and also cache but auto update in 60 second
                revalidate: 60,
            }
        }
    );
    return result.json();
}