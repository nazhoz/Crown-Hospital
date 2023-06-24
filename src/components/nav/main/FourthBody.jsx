import React from 'react'

const FourthBody = () => {
    const thirdcard=[
        {
            title:"Dentist",
            pic:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
            content:"Teething trobule?"
        },
        {
            title:"Gynecologist/Obstrician",
            pic:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
            content:"Explore for women,s health,"
        },
        {
            title:"Dietian/Nutrition",
            pic:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
            content:"Get guidance on eating right,"
        },
        {
            title:"Psyiotherapist",
            pic:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
            content:"Pulled a muscle?"
        },
    ]
  return (
    <div className='fourth-head'>
        <div className='fourth-content'> 
                <h2 className='four-text'>Book an appointment for an in-clinic consultation</h2>
                <span className='four-text1'>Find experienced doctors across all specialties</span>    
        </div>
        <div className='third-card-items'>
            {
                thirdcard.map((carditem)=>(
                    <div>
                        <img className='third-card-img' src={carditem.pic} alt="" />
                        <div className='third-card-text'>
                        <h3 className='third-card-text2'>{carditem.title}</h3>
                        <span className='third-card-text1'>{carditem.content}</span>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FourthBody