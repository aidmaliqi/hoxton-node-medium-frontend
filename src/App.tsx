import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Post} from './components/Post'
import { Route, Routes } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
 
function App() {


  const [posts, setPosts] = useState<[] | any>([])


  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
    .then(resp => resp.json)
    .then((data) => {setPosts(data)}
      )
  }, [])

  return (
<>
    {posts.map((item : any)=> (
      <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale" //{item.img}
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        {item.title}
      </CardTitle>
      <CardText>
        <small className="text-muted">
          Last updated {item.date}
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
    ))}


    <Routes>
      <Route path="/Post/:id" element={<Post/>}></Route>
    </Routes>

  </>)
}

export default App
