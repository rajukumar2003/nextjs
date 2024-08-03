
export default function ({children}: { children:React.ReactNode}) {

    return (
        <div>
            <div className=" font-serif text-xl text-red-500 pt-4 text-center">
                Join Now!! To get exclusive $$deals$$
            </div>
            {children}
        </div>
    )
}