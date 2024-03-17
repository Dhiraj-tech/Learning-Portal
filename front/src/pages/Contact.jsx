import "@fortawesome/fontawesome-free/css/all.min.css"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import http from "../http"
import { setInState } from "../lib"

export const Contact = () => {

    const [form, setForm] = useState({})
    const [loading, setLoading] = useState()

    const navigate = useNavigate()

    const handleSubmit = ev => {
        ev.preventDefault()
        setLoading(true)

        http.post('contacts', form)
            .then(() => {
                navigate('/contacts')
            })
            .catch((err) =>{ console.error(err)})
            .finally(() => setLoading(false))
    }
       

//     return <section className="contact-section">
//     <div className="container">
//         <div className="row align-items-center mt-5">
//             <div className="col-lg-6">
//                 <div className="section-title mt-4 mt-lg-0">
//                     <h3 className="title">Get in touch</h3>
//                     <p className="text-muted">Start working with Jobcy that can provide everything you need to generate
//                         awareness, drive traffic, connect.</p>
//                     <Form onSubmit={handleSubmit} className="contact-form mt-4" name="myForm" id="myForm">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="mb-3">
//                                     <Form.Label htmlFor="name" className="form-label">Name</Form.Label>
//                                     <Form.Control name="name" id="name" className="form-control"
//                                         placeholder="Enter your name" onChange={ev => setInState(ev, form, setForm)}
//                                         required />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
//                                     <Form.Control type="email" className="form-control" id="email" name="email"
//                                         placeholder="Enter your email" onChange={ev => 
//                                         setInState(ev, form, setForm)} required />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <Form.Label htmlFor="subject" className="form-label">Subject</Form.Label>
//                                     <Form.Control className="form-control" id="subject" name="subject" 
//                                         placeholder="Enter your subject" onChange={ev => 
//                                         setInState(ev, form, setForm)} required />
//                                 </div>
//                             </div>
//                             <div className="col-lg-12">
//                                 <div className="mb-3">
//                                     <Form.Label htmlFor="meassage" className="form-label">Your Message</Form.Label>
//                                     <textarea className="form-control" id="meassage" placeholder="Enter your message" name="message" rows="3" onChange={ev => 
//                                     setInState(ev, form, setForm)} required />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="text-start">
//                             <button loading={loading} type="submit" id="submit" name="submit" className="btn btn-primary"> Send Message</button>
//                         </div>
//                     </Form>
//                 </div>
//             </div>
//             <div className="col-lg-5 ms-auto order-first order-lg-last">
//                 <div className="text-center">
//                     <img src="contact.png" alt="" className="img-fluid" />
//                 </div>
//                 <div className="mt-4 pt-3">
//                     <div className="d-flex text-muted align-items-center mt-2">
//                         <div className="flex-shrink-0 fs-22 text-primary">
//                             <i className="fa-solid fa-location-dot"></i>
//                         </div>
//                         <div className="flex-grow-1 ms-2">
//                             <p className="mb-0">Basundhara, kathmandu, Nepal</p>
//                         </div>
//                     </div>
//                     <div className="d-flex text-muted align-items-center mt-2">
//                         <div className="flex-shrink-0 fs-22 text-primary">
//                             <i className="fa-solid fa-message"></i>
//                         </div>
//                         <div className="flex-grow-1 ms-2">
//                             <p className="mb-0">dhirajroy542@gmail.com</p>
//                         </div>
//                     </div>
//                     <div className="d-flex text-muted align-items-center mt-2">
//                         <div className="flex-shrink-0 fs-22 text-primary">
//                             <i className="fa-solid fa-phone"></i>
//                         </div>
//                         <div className="flex-grow-1 ms-2">
//                             <p className="mb-0">+977-9823240837</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
        
//     </div>
    
// </section>

return <section className="contact">

<div className="row">

   <div className="image">
      <img src="images/contact-img.svg" alt=""/>
   </div>

   <form action="" method="post">
      <h3>get in touch</h3>
      <input type="text" placeholder="enter your name" name="name" required maxlength="50" className="box"/>
      <input type="email" placeholder="enter your email" name="email" required maxlength="50" className="box"/>
      <input type="number" placeholder="enter your number" name="number" required maxlength="50" className="box"/>
      <textarea name="msg" className="box" placeholder="enter your message" required maxlength="1000" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" className="inline-btn" name="submit"/>
   </form>

</div>

<div className="box-container">

   <div className="box">
      <i className="fas fa-phone"></i>
      <h3>phone number</h3>
      <a href="tel:1234567890">123-456-7890</a>
      <a href="tel:1112223333">111-222-3333</a>
   </div>
   
   <div className="box">
      <i className="fas fa-envelope"></i>
      <h3>email address</h3>
      <a href="mailto:shaikhanas@gmail.com">shaikhanas@gmail.come</a>
      <a href="mailto:anasbhai@gmail.com">anasbhai@gmail.come</a>
   </div>

   <div className="box">
      <i className="fas fa-map-marker-alt"></i>
      <h3>office address</h3>
      <a href="#">flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104</a>
   </div>

</div>

</section>

}
