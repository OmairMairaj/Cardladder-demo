import React, { Component } from 'react'
import '../App.css'
import jsonData from '../data/data.json';
import LineChart from '../components/Chart';

class Product extends Component{
    
    render(){
        console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
    // const {id} = useParams();
    // console.log(jsonData);
    console.log(id);
    const data = jsonData.find((d) => d._id == id);
    // console.log(data.thumb);

    return (
        <>
        <div className="product">
        <h1>PRODUCT</h1>
        </div>
        <div className="details">
            <div className="big-img">
                <img src={data.thumb} alt=""/>
            </div>
            <div className="box">
                <div className="row">
                    <h1>{data.product_name}</h1>
                    <span>${data.price}</span>
                </div>
                
                <p>{data.description}</p>

                <div className="desc">
                    <p>Card Number: {data.cardNumber}</p>
                    <p>Rarity: {data.rarity}</p>
                    <p>Card Type: {data.cardType}</p>
                    <p>Card Text: {data.cardText}</p>
                    <p>Attack: {data.attack}</p>
                    <p>{data.attackText}</p>
                </div>
            </div>
            {'\n'}
            <div className="sales-row">
                <div className="sales">
                    <h1>SALES</h1>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
            </div>
            <div className="chart">
                    <LineChart/>
            </div>
            
            
        </div>
        
        </>
    )
    }
}

export default Product;
