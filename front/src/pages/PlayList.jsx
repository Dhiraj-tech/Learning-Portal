import { Link } from "react-router-dom";

export const PlayList = () => {
    return <>
    <section className="playlist-details">
    
       <h1 className="heading">playlist details</h1>
    
       <div className="row">
    
          <div className="column">
             <form action="#" method="post" className="save-playlist">
                <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
             </form>
       
             <div className="thumb">
                <img src="thumb-1.png" alt=""/>
                <span>10 videos</span>
             </div>
          </div>
          <div className="column">
             <div className="tutor">
                <img src="pic-2.jpg" alt=""/>
                <div>
                   <h3>john deo</h3>
                   <span>21-10-2022</span>
                </div>
             </div>
       
             <div className="details">
                <h3>complete HTML tutorial</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
                <Link to="/teacherprofile" className="inline-btn">view profile</Link>
             </div>
          </div>
       </div>
    
    </section>
    
    <section className="playlist-videos">
    
       <h1 className="heading">playlist videos</h1>
    
       <div className="box-container">
    
          <Link className="box" to="/watchvideo">
             <i className="fas fa-play"></i>
             <img src="post-1-1.png" alt=""/>
             <h3>complete HTML tutorial (part 01)</h3>
          </Link>
    
          <Link className="box" to="/watchvideo">
             <i className="fas fa-play"></i>
             <img src="post-1-2.png" alt=""/>
             <h3>complete HTML tutorial (part 02)</h3>
         </Link>
    
         <Link className="box" to="/watchvideo">
             <i className="fas fa-play"></i>
             <img src="post-1-3.png" alt=""/>
             <h3>complete HTML tutorial (part 03)</h3>
          </Link>
    
          <Link className="box" to="/watchvideo">
             <i className="fas fa-play"></i>
             <img src="post-1-4.png" alt=""/>
             <h3>complete HTML tutorial (part 04)</h3>
         </Link>
    
         <Link className="box" to="/watchvideo">
             <i className="fas fa-play"></i>
             <img src="post-1-5.png" alt=""/>
             <h3>complete HTML tutorial (part 05)</h3>
         </Link>
    
         <Link className="box" to="/watchvideo">
             <i className="fas fa-play"></i>
             <img src="post-1-6.png" alt=""/>
             <h3>complete HTML tutorial (part 06)</h3>
         </Link>
    
       </div>
    
    </section>
    
    </>


}