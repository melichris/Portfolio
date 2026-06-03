import React from 'react'
import './MyWork.css'
// import mywork_data from '../../assets/mywork_data'
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/work4.png'
import work5 from '../../assets/work5.png'
import work6 from '../../assets/work6.png'


const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <h1><hr /></h1>
            </div>
            {/* <div className="mywork-container">
                {mywork_data.map((work, index)=>{
                return <p key={index}></p>
            })}
                <img src="" alt="" />
            </div> */}
            <div className="mywork-container">
                <img src={work1} alt="" />
                <img src={work2} alt="" />
                <img src={work3} alt="" />
                <img src={work4} alt="" />
                <img src={work5} alt="" />
                <img src={work6} alt="" />
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <i className="bi bi-arrow-right" ></i>
            </div>
        </div>
    )
}

export default MyWork