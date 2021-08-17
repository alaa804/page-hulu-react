import React,{Fragment} from 'react';


const Categories = () => {
    return (
       <Fragment>
            <section className='categories'>
        <h4>Include in all plans..</h4>
        <div className='text-xl'>All The TV You Love</div>
        <div className='sub-text'>
            Stream full seasons of exclusive series,
            current-season episodes, hit movies, hulu Originals, kids shows,
            and more.
        </div>
        <div className='covers'>
            <div className='cover-1'>
                <div className='cover-grad'></div>
                <div className='cover-text'>
                    <div className='sub-title'>Past & current Seasons</div>
                    <h3> Tv Shows </h3>
                </div>
            </div>

            <div className='cover-2'>
                <div className='cover-grad'></div>
                <div className='cover-text'>
                    <div className='sub-title'>New & classNameics</div>
                    <h3> Movies </h3>
                </div>
            </div>

            <div className='cover-3'>
                <div className='cover-grad'></div>
                <div className='cover-text'>
                    <div className='sub-title'>Groundbreaking</div>
                    <h3>Hulu Originals</h3>
                </div>
            </div>

            <div className='cover-4'>
                <div className='cover-grad'></div>
                <div className='cover-text'>
                    <div className='sub-title'>Add-On</div>
                    <h3> Premiums</h3>
                </div>
            </div>
        </div>
      </section>
       </Fragment>
    )
}

export default Categories
