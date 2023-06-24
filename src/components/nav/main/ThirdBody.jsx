import React from 'react'


export const ThirdBody = () => {
  const scndcard=[
    {
      title:"Period doubts for",
      head:"Pergnancy",
      picture:"https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
      desc:"CONSULT NOW"
    },
    {
      title:"Acne, Pimple, or",
      head:" skin issues",
      picture:"https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
      desc:"CONSULT NOW"
    },
    {
      title:"Performance",
      head:"Issues in bed",
      picture:"https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      desc:"CONSULT NOW"
    },
    {
      title:"Child not Feeling",
      head:"Well",
      picture:"https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      desc:"CONSULT NOW"
    },
    {
      title:"Cold, Cough or",
      head:"Fever",
      picture:"https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      desc:"CONSULT NOW"
    },
    {
      title:"Depression or",
      head:"anxiety",
      picture:"https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
      desc:"CONSULT NOW"
    }
  ]
  return (

    <div className='third-head'>
        <div className='third-main'>
        <div>
            <h2 className='third-text1'>Consult top doctors online for any health concern</h2>
            <span className='third-text'>Private online consultations with verified doctors in all specialists</span>
        </div>
        <div className='third-box'>
            <span>View All Specialities</span>
        </div>
        </div>
        <div className='scnd-head'>
        {
          scndcard.map((allitem)=>(

            <div className='scnd-card-main'>
              <img className='card-img-size' src={allitem.picture} alt="" />
                <div className='scnd-card-text'> 
                <h4>{allitem.title}</h4> 
              <h4>{allitem.head}</h4>
                </div>
             <div className='scnd-card-text1'>
              <p className='third-card-name'>{allitem.desc}</p>
              </div>
            </div>
          ))
        }
        </div>
    </div>
    
  )
}
