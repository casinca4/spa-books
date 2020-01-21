import React from 'react';
// import MainContainer from 'MainContainer';


function Navigation(props) {
  console.log(props);
  const data = props.item.books;      // item weil in App so heißt
  console.log(data);

  const list = data.map(el => {
    return (
      <div  className="book">
        <div className="cover"><img  className="image" src={el.book_image} alt="hello" /></div>
        <p>{el.title}</p>
        {/* <p>{props.item.books}</p> */}
        {/* <MainContainer></MainContainer> */}
      </div>
    )
  })


  return (
    <div className="book-collection">
      {list}
    </div>
  )


}



export default Navigation;