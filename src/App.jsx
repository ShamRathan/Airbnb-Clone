import { useState } from 'react';
import './App.css';
import Select from "react-select";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import DatePickerComponent from './Components/DatePickerComponent';
import IconComponent from './Components/IconComponent';
import React from 'react';
import Card from './Components/Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const cardData = [
  { images: ['/photo/1i.png', '/photo/1ii.png'], user: { name: 'Villa' }, description: 'Ambathur, Rs: 5900/Day' },
  { images: ['/photo/2i.png', '/photo/2ii.png'], user: { name: 'Stark Resorts' }, description: 'Velacherry, Rs:3500/Person' },
  { images: ['/photo/3i.png', '/photo/3ii.png'], user: { name: 'SR HomeStay' }, description: 'Anna Nagar, Rs:4500/Day' },
  { images: ['/photo/4i.png', '/photo/4ii.png'], user: { name: 'Home in Chennai' }, description: 'Kilpauk, Rs:2450/night' },
  { images: ['/photo/5i.png', '/photo/5ii.png'], user: { name: 'Flat in Chennai' }, description: 'Adayar, Rs:2300/persosn' },
  { images: ['/photo/6i.png', '/photo/6ii.png'], user: { name: 'Park Residency' }, description: 'Nungambakkam, Rs:6980/day' },
  { images: ['/photo/7i.png', '/photo/7ii.png'], user: { name: 'Home in Chennai' }, description: 'Vadapalani, Rs:4399/day' },
  { images: ['/photo/8i.png', '/photo/8ii.png'], user: { name: 'Villa in Chennai' }, description: 'Porur, Rs:1999/day' },
  { images: ['/photo/9i.png', '/photo/9ii.png'], user: { name: 'Guest House in Chennai' }, description: 'ECR, Rs:9999/Day' },
  { images: ['/photo/10i.png', '/photo/10ii.png'], user: { name: 'Tiny Home' }, description: 'Moagapier, Rs:5000/Day' },
  { images: ['/photo/11i.png', '/photo/11ii.png'], user: { name: 'Place to Stay' }, description: 'Valasaravakkam, Rs:2999/Person' },
  { images: ['/photo/12i.png', '/photo/12ii.png'], user: { name: 'KPR Apartments' }, description: 'Iyapanthangal, Rs:8000/Day' },

  // Add more card data as needed
];
const options=[
  { value:"Chennai",label:"Chennai"},
  { value:"Kerala",label:"Kerala"},
  { value:"Bangalore",label:"Bangalore"},
  { value:"Pune",label:"Pune"},
  { value:"Mumbai",label:"Mumbai"},
];

const options2=[
  { value:"1",label:"1"},
  { value:"2",label:"2"},
  { value:"3",label:"3"},
  { value:"4",label:"4"},
  { value:"5",label:"5"},
  { value:"6",label:"6"},
];
function App(){

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    toast.info(`Selected Location: ${option.label}`, {
      position: "bottom-right"
    });
  };
  const[selectedAns,setSelectedAns]= useState(null);
  const handleChange2=(selectedAns)=>
  {
    setSelectedAns(selectedAns);
    toast.info(`Selected Person: ${selectedAns.label}`, {
      position: "bottom-right"
    });
  };
  
  
  

return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className='buttons'>
      <img src='logo20.png' alt='logo'></img>
      <button className='button1'>Stays</button>
      <button className='button2'>Experience</button>
      <button className='button3'>Airbnb your Home</button>
      <TbWorld style={{ fontSize: '30px'}}/>
      <IoMdMenu style={{ fontSize: '30px'}}/><CgProfile style={{ fontSize: '30px'}} /></div>
      <div class="searches">
        <label>Enter the City:</label>
        <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
      <ToastContainer/>

  <label>Enter Dates:</label>
  <DatePickerComponent />
  <label>Enter No.of Persons:</label>
  <Select
    options={options2}
    value={selectedAns}
    onChange={handleChange2}
  /></div>
      <IconComponent/>
      <div className="card-container">
      {cardData.map((data, index) => (
        <Card 
          key={index}
          images={data.images}
          user={data.user}
          description={data.description}
        />
      ))}
    </div>
    <div className="footer">
    <p>© 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
    <TbWorld style={{ fontSize: '25px'}}/>
    <FaRupeeSign style={{ fontSize: '25px'}} />
    <BsFacebook style={{ fontSize: '25px'}} />
    <FaSquareTwitter  style={{ fontSize: '25px'}}/>
    <FaSquareInstagram style={{ fontSize: '25px'}}/>
  </div>
  </div>  
  

  );
}

export default App;
