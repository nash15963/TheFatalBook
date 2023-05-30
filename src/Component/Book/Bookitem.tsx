"use client";

import './Style/Book.css'
import React, { useState } from 'react'
import { animated, useSpring } from '@react-spring/web';

const Bookitem = () => {
    const [isrotate, setIsRotate] = useState(false) ;
    // const transformProps = useSpring({ transform: isrotate ? 'translateX(50%)' : 'translateX(0)' });

    const transformProps = useSpring({ 
        from: { transform: isrotate ? 'translateX(0)' : 'translateX(50%)' },
        to: { transform: isrotate ? 'translateX(50%)' : 'translateX(0)' } ,
        delay: 0
    });

    const flipProps = useSpring({
        transform : isrotate ? 'rotateY(-180deg)' : 'rotateY(0deg)',
        delay: 1000
    })

    const openBook = () => {
        setIsRotate(!isrotate)
    }

  return (
    <div style={{ width:1000, height: 700, backgroundColor: 'gray', display:'flex', alignItems:'center', justifyContent:'center', margin:'10px auto' }}>
        <animated.div className='book' onClick={openBook} style={{ cursor:'pointer',...transformProps }}>
            
            {/* <div className='paper flipped'> */}
            {/* <div className={ isrotate?'paper flipped':'paper' } id='p1'> */}
            <div className='paper' id='p1'>
                <animated.div className='front' style={flipProps}>
                    <div id='f1' className='front-content'>
                        <p>命運之書</p>
                    </div>
                </animated.div>
                <animated.div className='back' style={flipProps}>
                    <div id='b1' className='back-content'>
                        <p>抖內我</p>
                    </div>
                </animated.div>
            </div>
            <div className= 'paper' id='p2'>
                <animated.div className='front'>
                    <div id='f2' className='front-content'>
                        <p>明天會下雨</p>
                    </div>
                </animated.div>
            </div>
        </animated.div>
    </div>
  )
}

export default Bookitem