import React, { Fragment } from 'react';

const Image = (props) => {

    const {webformatURL, likes, previewURL, tags, views } = props.image;
    
    return ( 
        <Fragment>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                <div className='card'>
                    <img src={previewURL} alt={tags} className='card-img-top'/>
                    <div className='card-body'>
                        <p className='card-text'>{tags}</p>
                        <p className='card-text'>{likes} Me gusta</p>
                        <p className='card-text'>{views} Vistas</p>

                        <a target='_blank' rel='noreferrer' href={webformatURL}
                           className='btn btn-primary btn block'>Ver Imagen</a>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Image;