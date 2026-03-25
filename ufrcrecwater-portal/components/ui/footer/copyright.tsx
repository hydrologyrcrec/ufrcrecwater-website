export default function Copyright(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <p className="text-black md:text-lg text-sm font-medium">&copy; {year}, UFRCREC Water.</p>
    )
}