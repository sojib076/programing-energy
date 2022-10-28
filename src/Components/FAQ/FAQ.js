import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-3xl'> Some FAQ </h1>
            <div  className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                   Who are we?
                </div>
                <div className="collapse-content">
                    <p>
                        we are the best coures seller of 
                        the world.
                    </p>
                </div>
            </div>
            <div  className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                   Can you do freelancing after this course 
                </div>
                <div className="collapse-content">
                    <p> 
                         Yes, you can do freelancing after this course.
                         IF you are a good developer then you can do freelancing.
                         So, First you have to learn and then you can do freelancing.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                     How can I contact you?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} 
                         
                            You can contact me on my facebook page.
                            My facebook page link is given below.
                            https://www.facebook.com/

                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;