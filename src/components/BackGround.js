import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Background () {
    return(
      <div style={{ display: "flex", flexDirection: "row" }}>
    <div>
        <Card style={{ width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          </Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          </Form>
        </Card>
    </div>
    <div >
      <img style={{ height: "428px", width: "20%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}  src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card image" />
    </div>
    </div>
    
)
}

export default Background;