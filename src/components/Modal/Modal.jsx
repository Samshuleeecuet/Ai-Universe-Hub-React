import React from 'react';

const Modal = (props) => {
    const {description,features,image_link,integrations
    } = props.singleData;
    console.log(integrations
        );
    return (
        <>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <div className="card flex bg-base-100">
                <div className="card-body flex-1">
                    <h2 className="card-title">{description? description :"Not Found"}</h2>
                    <div className="flex justify-between">
                        <div className="features">
                            <h1 className='text-3xl font-bold pb-4'>Features</h1>
                            {
                                Object.values(features || {}).map((value ,index)=>(<p className='text-left'>{index+1} {value.feature_name? value.feature_name:"Not Found"}</p>))
                            }
                        </div>
                        <div className="intregation">
                            <h1 className='text-3xl font-bold pb-4'>Intregation</h1>
                            {
                               integrations?integrations.map((value ,index)=>(<p className='text-left'>{index+1} {value}</p>)):"Not Found"}

                        </div>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                <figure className="flex-1"><img src= {image_link && image_link[0]} alt="Album"/></figure>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Modal;