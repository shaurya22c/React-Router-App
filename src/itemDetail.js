import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({match}) {

    useEffect(()=> {
        fetchItem();
        console.log(match);
    }, []);

const [item, setItem]= useState({
  images: {}
});

  const fetchItem= async ()=> {
    const fetchItem= await fetch(`https://fakestoreapi.com/products/${match.params.id}`);  
    const item= await fetchItem.json();
    setItem(item);
    console.log(item);
  };  
  return (
    <div>
     <h1>{item.title}</h1>
     <img src= {item.image} alt= ""/>
    </div>
  );
}

export default ItemDetail;
