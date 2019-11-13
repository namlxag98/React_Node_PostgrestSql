import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name, product_price, image) =>(
        axios.post('/add',{product_name, product_price, image}).then((response) => response.data));

const getProductData = () => axios.get('/getdata01').then((res) => res.data );
class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state ={
          product_name: '',
          product_price: '',
          image: ''
        }
    }

    isChange = (event) =>{
        let name= event.target.name;
        let value= event.target.value;
        // console.log(name );
        // console.log(value );

        this.setState({
            [name]:value
        })
        //day dl len state
    }

    handleClick =() =>{
        console.log(JSON.stringify(this.state));
        var {product_name,product_price,image}=this.state;
        var dataTemp =[];
        var item ={};
        item.product_name=product_name;
        item.product_price=product_price;
        item.image=image;
        dataTemp=this.state.data;
        console.log(dataTemp);
        
        // dataTemp = this.state.push(item);
        addProductAction(product_name,product_price,image).then((response)=>{
            console.log(response);
        })
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                    <form >
                        <div className="form-group">
                        <label htmlFor="product_name">Tên sản phẩm</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập tên sản phẩm" aria-describedby="name_text" />
                        <small id="name_text" className="text-muted">Nhập text</small>
                        </div>

                        <div className="form-group">
                        <label htmlFor="product_price">Giá sản phẩm</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="product_price" id="product_price" className="form-control" placeholder="Nhập giá sản phẩm" aria-describedby="name_text" />
                        <small id="name_text" className="text-muted">Nhập text</small>
                        </div>

                        <div className="form-group">
                        <label htmlFor="image">Link ảnh sản phẩm</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="image" id="image" className="form-control" placeholder="Nhập link ảnh sản phẩm" aria-describedby="name_text" />
                        <small id="name_text" className="text-muted">Nhập link ảnh</small>
                        </div>

                        <button onClick={()=>this.handleClick()} type="reset" className="btn btn-info">Thêm mới</button>
                    </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProduct;