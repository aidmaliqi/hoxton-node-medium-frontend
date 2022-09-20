import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

export function Post() {
  const params = useParams();
  const [postData, setPostData] = useState <any>();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`)
      .then((resp) => resp.json())
      .then((productsFromSerer) => setPostData(productsFromSerer));
  }, []);
  return(
    <>
    
<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"//postData.img.img
  />
  <CardBody>
    <CardTitle tag="h5">
      {postData.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
     {postData.paragraphs.text}
    </CardText>
    <Button onClick={() => (
      fetch(`http://localhost:3000/posts/${params.id}`), {
        method : "PATCH",
        headers : { 'Content-type': 'application/json; charset=UTF-8'},
        body : JSON.stringify({
          "claps" : postData.claps + 1
        })
      }
    )
      
    }>
      Like
    </Button>


  </CardBody>
</Card>


<ul>{postData.commnetText.map((item : any) => (
<li>
  {item.text}
</li>
))}
</ul>
    </>
  )
}
