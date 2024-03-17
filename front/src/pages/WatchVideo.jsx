import { Link } from "react-router-dom";

export const WatchVideo = () => {
    return <>
    <section className="watch-video">

    <div className="video-container">
       <div className="video">
          <video src="images/vid-1.mp4" controls poster="images/post-1-1.png" id="video"></video>
       </div>
       <h3 className="title">complete HTML tutorial (part 01)</h3>
       <div className="info">
          <p className="date"><i className="fas fa-calendar"></i><span>22-10-2022</span></p>
          <p className="date"><i className="fas fa-heart"></i><span>44 likes</span></p>
       </div>
       <div className="tutor">
          <img src="images/pic-2.jpg" alt=""/>
          <div>
             <h3>john deo</h3>
             <span>developer</span>
          </div>
       </div>
       <form action="" method="post" className="flex">
          <Link to="/playlist" className="inline-btn">view playlist</Link>
          <button><i className="far fa-heart"></i><span>like</span></button>
       </form>
       <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
       </p>
    </div>
 
 </section>
 
 <section className="comments">
 
    <h1 className="heading">2 comments</h1>
 
    <form action="" className="add-comment">
       <h3>add comments</h3>
       <textarea name="comment_box" placeholder="enter your comment" required maxlength="1000" cols="30" rows="10"></textarea>
       <input type="submit" value="add comment" className="inline-btn" name="add_comment"/>
    </form>
 
    <h1 className="heading">user comments</h1>
         <div className="bg-white p-3">
            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="images/pic-1.jpg" width="40"/>
               <div className="after-image">
                  <span className="d-block font-weight-bold name">shaikh anas</span>
                  <span className="date text-black-50">Shared publicly - Jan 2023</span>
               </div>
            </div>
            <div className="mt-2">
               <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
         </div>

         <div className="bg-white p-3">
            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="images/pic-2.jpg" width="40"/>
               <div className="after-image">
                  <span className="d-block font-weight-bold name">john deo</span>
                  <span className="date text-black-50">Shared publicly - Jan 2023</span>
               </div>
            </div>
            <div className="mt-2">
               <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
         </div>
          
 </section>
 </>
}