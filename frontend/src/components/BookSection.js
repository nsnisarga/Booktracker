// 
import React from 'react'

const BookSection = ({data}) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-between align-items-center container-fluid flex-wrap">
      {data && data.map((item,index)=>(
      <div className="m-3" style={{width:"200px",height:"350px",border:"1px solid white",borderRadius:"20px"}}>
        <div><img style={{width:"200px",height:"210px",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
        className="img-fluid"src={item.image}alt="/"/>
        </div>
      <h6 style={{fontSize:"15px"}} className="px-2 my-1 text-white">{item.bookname.slice(0,20)}</h6>
      <h3 style={{fontsize:"30px",color:"red"}}className="mb-3 px-2">Rs.{item.price}</h3>
      <div className="d-flex justify-content-around align-items-center">
      <button className="btn btn-primary">UPDATE</button>
      <button className="btn btn-danger" >DELETE</button>
      </div>
      </div>
      ))}
    </div>
  );
};

export default BookSection