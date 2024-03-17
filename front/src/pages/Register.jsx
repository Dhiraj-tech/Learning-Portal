import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import http from "../http"

export const Register = () => {

    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = ev => {
        ev.preventDefault()
        setLoading(true)

        http.post('register', form)
            .then(() => navigate('/login'))
            .catch(() => {})
            .finally(() => setLoading(false))
    }


return <section className="form-container">

<form action="" method="post" enctype="multipart/form-data">
   <h3>register now</h3>
   <p>your name <span>*</span></p>
   <input type="text" name="name" placeholder="enter your name" required maxlength="50" className="box"/>
   <p>your email <span>*</span></p>
   <input type="email" name="email" placeholder="enter your email" required maxlength="50" className="box"/>
   <p>your password <span>*</span></p>
   <input type="password" name="pass" placeholder="enter your password" required maxlength="20" className="box"/>
   <p>confirm password <span>*</span></p>
   <input type="password" name="c_pass" placeholder="confirm your password" required maxlength="20" className="box"/>
   <p>select profile <span>*</span></p>
   <input type="file" accept="image/*" required className="box"/>
   <input type="submit" value="register new" name="submit" className="btn"/>
   <div className="mt-3 text-center">
    <p className="mb-0">Already a member ? <Link to="/login"> Sign In </Link></p>
</div>

</form>

</section>
}