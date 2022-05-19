import { useRouter } from 'next/router';
import Link from 'next/link';
export default function BlogCard(props) {
   const router = useRouter();

   return(
   <div className="col-12 d-flex justify-content-center mb-3">
      <div className="card" style={{width: "48rem"}}>
         <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
            <p className="card-text">{props.content}</p>
            <Link href="/[id]/edit" as={`/${props.id}/edit`}>
               <button type="button" className="btn btn-outline-primary">Edit</button>
             </Link>
         </div>
       </div>
    </div>
   )
}