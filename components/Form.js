export default function Form(props) {
    return (<>
                        <form onSubmit={props.Sub}>
                            <div>
                                <div  className="mb-3">
                    
                                    <input type="text"  className="form-control" id="title" placeholder="Title" onChange={props.Change} name="title" defaultValue={props.title} required />
                                </div>
                                <div  className="mb-3">
                    
                                    <input type="text"  className="form-control" id="subtitle" placeholder="Subtitle"  onChange={props.Change} name="subtitle" defaultValue={props.subtitle} required />
                                </div>
                                <div  className="mb-3">
                    
                                    <textarea  className="form-control" id="content" rows="11" placeholder="content"  onChange={props.Change} name="content" defaultValue={props.content} required></textarea>
                                </div>
                    
                            </div>
                            <div className='text-center'><button  type="submit" className="btn btn-outline-light m-2">{props.buttonMessage}</button></div>
                            <div className='text-center'><button type="submit" className="btn btn-outline-danger ml-2" hidden={props.hidden} onClick={props.delete}>Delete Post</button></div>
                            
                            
                        </form>
    </>)
}