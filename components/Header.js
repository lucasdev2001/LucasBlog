import Link from 'next/link';
export default function Header() {


    const handleClick = ()=>{
        document.getElementById("spinner").removeAttribute("hidden");
    }


    return (
        <header className="bg-dark">
        <div className="container-fluid text-center text-white p-5">
            <h1 className="display-1">Luca's Blog</h1>
            <p className="lead mt-4">
                A simple demonstrational blog app powered by Next.jS, an REST API and MongoDB
            </p>
          
            <Link href="/compose"><button onClick={handleClick} type="button" className="btn btn-outline-light mt-5">write something</button></Link>
            <br /><br />
            <div className="d-flex justify-content-center"><div  className="spinner-border text-success" hidden role="status" id='spinner'></div></div>
            
        </div>
        
        
    </header>
    )
}