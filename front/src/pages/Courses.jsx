import { Link } from "react-router-dom";

export const Course = () => {
    return <>
    <header className="header">
   
    <section className="flex">
       <form action="search.html" method="post" className="search-form">
          <input type="text" name="search_box" required placeholder="search courses..." maxlength="200"/>
          <button type="submit" className="fas fa-search"></button>
       </form>
    </section>
 
 </header>  
    <section className="courses">

    <h1 className="heading">our courses</h1>
 
    <div className="box-container">
 
       <div className="box">
          <div className="tutor">
             <img src="pic-2.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-1.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete HTML tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-3.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-2.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete CSS tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-4.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-3.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete JS tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-5.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-4.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete Boostrap tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-6.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-5.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete JQuery tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-7.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-6.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete SASS tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-8.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-7.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete PHP tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-9.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-8.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete MySQL tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
       <div className="box">
          <div className="tutor">
             <img src="pic-1.jpg" alt=""/>
             <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
             </div>
          </div>
          <div className="thumb">
             <img src="thumb-9.png" alt=""/>
             <span>10 videos</span>
          </div>
          <h3 className="title">complete react tutorial</h3>
          <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
       </div>
 
    </div>
 
 </section>
 
 </>


}