import { useEffect, useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { empty, setInState } from "../../lib"
import http  from "../../http"
import { Loading, SubmitButton } from "../../components"
import { useNavigate, useParams } from "react-router-dom"

export const Edit = () => {

    const [form, setForm] = useState({})
    const [customer, setCustomer] = useState({})
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(false)

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        setLoadingPage(true)
        http.get(`cms/students/${params.id}`)
            .then(({data}) => setStudent(data))
            .catch(() => {})
            .finally(() => setLoadingPage(false))
    }, [])

    useEffect(() => {
        if (!empty(student)){
            setForm({
                name: student.name,
                bio: student.bio,
                status: student.status
            })
        }
    }, [student])

    const handleSubmit = ev => {
        ev.preventDefault()
        setLoading(true)

        http.patch(`cms/students/${params.id}`, form)
            .then(() => navigate('/students'))
            .catch(() =>{})
            .finally(() => setLoading(false))
    }

    return <Container className="bg-white my-3 py-3 rounded-2 shadow-sm">
    <Row>
        <Col xs="12">
            <Row>
                <Col sm="6" className="mx-auto">
                    <h1>Edit Student</h1>
                </Col>
            </Row>
            <Row>
                <Col sm="6" className="mx-auto">
                    {loadingPage ? <Loading /> : <Form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control name="name" id="name" defaultValue={form.name}
                            onChange={ev => setInState(ev, form, setForm)}
                            required />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control name="email" id="email" defaultValue={customer?.email}
                            readOnly plaintext/>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="bio">Bio</Form.Label>
                            <textarea className="form-control" name="bio" id="bio" defaultValue={form.bio}
                            onChange={ev => setInState(ev, form, setForm)}
                            required />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="status">Status</Form.Label>
                            <Form.Select name="status" id="status" 
                            onChange={ev => setInState(ev, form, setForm)} value={form.status} required>
                                <option value="true" >Active</option>
                                <option value="false" >Inactive</option>
                            </Form.Select>

                        </div>
                        <div className="mb-3">
                            <SubmitButton loading={loading} icon="fa-save" 
                            label="Save" />  
                        </div>
                    </Form>}
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
}
