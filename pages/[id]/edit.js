import { useRouter } from 'next/router';
import { useState } from 'react';
import dbConnect from '../../lib/dbConnect';
import BlogPost from '../../models/BlogPost';
import Form from '../../components/Form';
import NavBar from '../../components/NavBar';

export default function edit({ post }) {

    
    const router = useRouter();
    const {id} = router.query;
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

    const putData = async(form)=>{
        try {
            const res = await fetch(`../api/blogPosts/${id}`,{
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
       
        putData(form);
        e.preventDefault();
        
        

    }

    const handleDelete = async()=>{

   
   
        try {
           await fetch(`../api/blogPosts/${id}`, {
              method: 'DELETE',
            });

            router.push("/")
            
        } catch (error) {
           console.log(error);
        }
     
     }




    return (<>
    <NavBar />
        <header className="bg-dark p-5">
            <div  className="container-fluid text-center text-light">
                <h1  className="display-6 "><em>It's ok, everybody makes mistakes!</em></h1>
            </div>
        </header>
            <div className="container-fluid bg-dark p-5">
            
                <Form
                title = {post.title}
                subtitle = {post.subtitle}
                content = {post.content} Change = {handleChange}
                Sub = {handleSubmit}
                buttonMessage = {"Commit Changes"}
                delete = {handleDelete}
                     />

            </div>
                            

            <footer className="bg-dark footer mt-auto py-4 bg-light">
        <hr className="text-light p-5"></hr>
        
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>
    
    </>)
}


export async function getServerSideProps({params}) {
    await dbConnect();
    const post = await BlogPost.findById(params.id).lean();
    post._id = post._id.toString();

    return {props : { post }}
}