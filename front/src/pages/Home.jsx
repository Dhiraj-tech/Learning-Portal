import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
    <header class="header">
   
   <section class="flex">
      <form action="search.html" method="post" class="search-form">
         <input type="text" name="search_box" required placeholder="search courses..." maxlength="200"/>
         <button type="submit" class="fas fa-search"></button>
      </form>
   </section>

</header>  


      <section className="home-grid">
        <h1 className="heading">quick options</h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              <a href="#">
                <i className="fas fa-code"></i>
                <span>development</span>
              </a>
              <a href="#">
                <i className="fas fa-chart-simple"></i>
                <span>business</span>
              </a>
              <a href="#">
                <i className="fas fa-pen"></i>
                <span>design</span>
              </a>
              <a href="#">
                <i className="fas fa-chart-line"></i>
                <span>marketing</span>
              </a>
              <a href="#">
                <i className="fas fa-music"></i>
                <span>music</span>
              </a>
              <a href="#">
                <i className="fas fa-camera"></i>
                <span>photography</span>
              </a>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span>software</span>
              </a>
              <a href="#">
                <i className="fas fa-vial"></i>
                <span>science</span>
              </a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              <a href="#">
                <i className="fab fa-html5"></i>
                <span>HTML</span>
              </a>
              <a href="#">
                <i className="fab fa-css3"></i>
                <span>CSS</span>
              </a>
              <a href="#">
                <i className="fab fa-js"></i>
                <span>javascript</span>
              </a>
              <a href="#">
                <i className="fab fa-react"></i>
                <span>react</span>
              </a>
              <a href="#">
                <i className="fab fa-php"></i>
                <span>PHP</span>
              </a>
              <a href="#">
                <i className="fab fa-bootstrap"></i>
                <span>bootstrap</span>
              </a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">become a tutor</h3>
            <p className="tutor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam?
            </p>
            <Link to="/register" className="inline-btn">
              get started
            </Link>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-3.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-2.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-4.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-3.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JS tutorial</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-5.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-4.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete Boostrap tutorial</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-6.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-5.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JQuery tutorial</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-7.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-6.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete SASS tutorial</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>
        </div>

        <div className="more-btn">
          <Link to="/course" className="inline-option-btn">
            view all courses
          </Link>
        </div>
      </section>
    </>
  );
};
