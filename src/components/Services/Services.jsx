import React from 'react'
import './Services.css'
// import Services_Data from '../../assets/services_data'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <h1><hr /></h1>
            </div>
            <div className="services-container">
                {/* {Services_Data.map((service,index) => {
                    return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p> */}
                <div className="services-format">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>"Web development is the process of building, programming....</p>

                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="services-format">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>"Web development is the process of building, programming....</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src="" alt="" />
                    </div>
                </div>
                 <div className="services-format">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>"Web development is the process of building, programming....</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src="" alt="" />
                    </div>
                </div>
                 <div className="services-format">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>"Web development is the process of building, programming....</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src="" alt="" />
                    </div>
                </div>
                 <div className="services-format">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>"Web development is the process of building, programming....</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src="" alt="" />
                    </div>
                </div>
                 <div className="services-format">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>"Web development is the process of building, programming....</p>
                    <div className="services-readmore">
                        <p>Read More </p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            {/* })} */}
        </div>
        // </div>
    )
}

export default Services