export default function Copyright(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <p className="text-white text-sm font-medium">Copyright &copy; {year} UFRCREC Water. All rights reserved</p>
    )
}