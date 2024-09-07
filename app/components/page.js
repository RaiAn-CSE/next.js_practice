"use client";

export default function Btn({ btnName }) {

    // console.log(btnName);

    return (
        <div className="mt-6">
            <button onClick={() => console.log("I have clicked here")} className="mt-6 rounded-sm py-1 px-3 bg-green-500">
                {btnName}
            </button>
        </div>
    )
}

