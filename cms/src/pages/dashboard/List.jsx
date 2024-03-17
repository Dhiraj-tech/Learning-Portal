import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import http from '../../http';
import { useSelector } from 'react-redux';

export const List = () => {

  const user = useSelector(st => st.user.value || '')

  const [students, setStudents] = useState(0);
  useEffect(() => {
    http.get('cms/students').then((response) => {
      setStudents(response.data);
    });
  }, []);
  const countstudent = students.length;


  const [contacts, setContacts] = useState(0);
  useEffect(() => {
    http.get('cms/contacts').then((response) => {
      setContacts(response.data);
    });
  }, []);
  const countcontact = contacts.length;



  return (
    <Container>
      <Row>
      <Col xs="12">
             <Row>
                <Col>
                    <h1 className='text-center mt-2'><u>Dashboard</u></h1>
               </Col>
           </Row>
       </Col>
       
        <Col xs="3" className="mt-3">
          <Card>
            <Card.Header>Total Students<i className="fa-solid fa-user-friends ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{countstudent}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
       
       

        <Col xs="3" className="mt-3">
          <Card>
            <Card.Header>Total Contacts<i className="fa-solid fa-user-friends ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{countcontact}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
       
      
      </Row>
    </Container>
  );
};


