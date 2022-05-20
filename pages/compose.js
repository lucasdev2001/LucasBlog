import { useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import Script from 'next/script'

export default function Compose() {
    const router = useRouter();
    const [form,setForm] = useState({
        title: String,
        subtitle: String,
        content: String,
    });

    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setForm({
            ...form,
            [name]:value,
        
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(form);
        document.getElementById("spinner").removeAttribute("hidden");
       

    }


    const postData = async (form) => {
        try {
            const res = await fetch('api/blogPosts', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
              });
            router.push("/")
        } catch (error) {
            console.log(error);
        }

      
        
        
      }


    return (
        <>
            <div  className="d-flex justify-content-center bg-dark">
            <div  className="row container-fluid  bg-dark">
                <div  className="col-12">
                <NavBar />
                </div>
                <div  className="col-12">
                    <header>
                        <div  className="container-fluid text-center text-light hidden">
                            <h1  className="display-2" ><em>Now, let your imagination take flight</em></h1>
                            <figure>
                                <blockquote  className="blockquote">
                                    <p><em> "Start writing, no matter what. The water does not flow until the faucet is turned on."</em>
                                    </p>
                                </blockquote>
                                <figcaption  className="blockquote-footer">
                                    Louis L’Amour 
                                </figcaption>
                            </figure>
                        </div>
                        
                    </header>
                </div>
                <div  className="col-12">
                    <main>
                        <div  className="container-fluid">
                        <Form Change ={handleChange} Sub = {handleSubmit} hidden ={ true } buttonMessage = {"All done !"} />
                        </div>
                    </main>
                    <div className="d-flex justify-content-center"><div  className="spinner-border text-success" hidden  role="status" id='spinner'></div></div>
                </div>
                <div  className="col-12">
                    <footer  className="p-5 mb-5">
                        <div  className="container-fluid bg-dark p-5 mb-5">
                            <hr  className="text-light" />
                        </div>
                    </footer>
                </div>
            </div>
        </div>
            
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    )
}