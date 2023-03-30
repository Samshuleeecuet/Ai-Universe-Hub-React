import React from 'react';

const SingleData = (props) => {
    const {id,image, features, name, published_in} = props.singleData;
    // console.log(props);

    return (
        <div class="card w-96 glass shadow-2xl">
        <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                    <h2 class="card-title">Features</h2>
                    {
                        features.map((feature,index)=> (<p className="text-left">{index+1}. {feature}</p>))
                    }
            </div>
                <hr className='border-2 border-info'/>
            <div className="card-body text-left">
                <h4 className="font-bold text-xl">{name}</h4>

                <div class="card-actions flex justify-between">
                <div className='flex'>
                    <span className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>
</span>
                    <span>{published_in}</span>
                </div>
                    <label onClick={()=>props.setUniqueId(id)}  htmlFor="my-modal-5" class="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</label>
                </div>
            </div>
        </div>
    );
};

export default SingleData;