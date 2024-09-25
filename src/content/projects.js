//projects start
import myImage from './ecom.png';
import myp from './weather.png';
import myc from './cnt.PNG';
import chat from './chat.png';
import student from './student.png';
const projects = [
  {
    name: "Ecommerce_website in Reactjs",
    description:
      "Reaponsive website user can login and log out and watch trending product, watch products according to price high to low or low to high,add to cart and buy the product",
    stack: ["React", "HTML", "CSS", "BOOTSTRAP"],
    img: myImage,
   
  },
  {
    name: "Weather",
    description:
    
      " User can add any city name and get weather update, i use Axios for get the weather api ",
    stack: ["React", "HTML", "CSS", "BOOTSTRAP"],
    
    img: myp,
    
  },
  {
    name: "Ecommerce_website in Django",
    description:
      "Admin can add product,remove and update and user can buy and add to cart ",
    stack: ["HTML", "CSS", "BOOTSTRAP","Django","SQLite"],
    img: myImage,
    
    
  },
  {
    name: "Contact Management in React",
    description:
    
      " User can add information and also watch his previous data which we store ",
    stack: ["React", "HTML", "CSS", "BOOTSTRAP"],
    
    img: myc,
    
  },
  {
    name: "CRUD in Express.js and Mongodb",
    description:
    
      " User can add information and also watch and delete his previous data which we store ",
    stack: ["ExpressJs","MongoDb", "HTML", "CSS", "BOOTSTRAP"],
    
    img: student,
    
  },
  {
    name: "Real Time Chat",
    description:
    
      " Users can chats with each others in real time and I use socket.io for this development",
    stack: ["ReactJs","Express", "HTML", "CSS", "BOOTSTRAP"],
    
    img: chat,
    
  },
];

//projects end
export default projects;
