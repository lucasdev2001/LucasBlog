import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import dbConnect from '../lib/dbConnect';
import BlogPost from '../models/BlogPost';
import Script from 'next/script'

function Home( { data }) {

  return (
    <>
    <NavBar />
      <Header />
      <main>
        <div className="container-fluid p-5">
        <div className="row">
        {data.map((data)=>{
          return(<BlogCard title={data.title} subtitle = {data.subtitle} content={data.content} key={data._id}  id={data._id}/>)
        })}
        </div>
        </div>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}


export async function getServerSideProps() {
  await dbConnect();
  const result = await BlogPost.find({});
  const datarev = result.map((doc)=>{
    const datarev = doc.toObject()
    datarev._id = datarev._id.toString()
    return datarev;
  })
  const data = datarev.reverse()

  return { props: { data } }
}


export default Home;