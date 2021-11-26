import React,{useState,useEffect} from 'react'

const Colo = () => {

    const [color,setColor] = useState('blue')

    const isBGBlue = true
    const colorChanger = () =>{
        console.log('changed..')
        //const newColor = color  === 'blue' ? 'red' : 'blue';
        setColor( 'red')
    }

    return (
        <div className="color_Container">


               <div 
                style={{backgroundColor: isBGBlue? 'blue' : 'red'}}
                onClick={colorChanger}
               className="innerBlock">1</div>

               <div 
               style={{backgroundColor:'blue'}}
               className="innerBlock">2</div>
               <div className="innerBlock">3</div>
               <div className="innerBlock">4</div>

               
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>

               
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>

               
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>
               <div className="innerBlock"></div>

           
        </div>
    )
}

export default Colo
