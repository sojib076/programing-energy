import React from 'react';

const Blog = () => {
    return (
        <div className='lg:flex  ' >
            <div className="card w-80 bg-slate-400 text-primary-content ">
                <div className="card-body">
                    <h2 className="card-title">What is cors</h2>
                    <p> Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.
                        CORS is a W3C standard and is supported by all major browsers. CORS defines a way in which a browser and server can interact to determine whether or not it is safe to allow the cross-origin request.
                        Using CORS, a server can explicitly allow some cross-origin requests while rejecting others. CORS also relies on a mechanism by which browsers make a “preflight” request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. If the server does not respond to the preflight request, the actual request will not be sent.
                    </p>
                  
                </div>
            </div>
            <div className="card w-80 bg-slate-400 text-primary-content lg:mx-5 mt-2 ">
                <div className="card-body">
                    <h2 className="card-title"> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p> iam using firebase because it is easy to use 
                        and it is free for small projects.
                         there are manu options for authentication like
                            firebase,auth0,aws cognito,okta,etc.
                    </p>
                  
                </div>
            </div>
            <div className="card w-80 bg-slate-400 text-primary-content lg:mx-5 mt-2 ">
                <div className="card-body">
                    <h2 className="card-title"> How does the private route work?</h2>
                    <p>
                        private route is a route that is only accessible to authenticated users.
                        private route work by checking if the user is authenticated or not.
                        if the user is authenticated then the private route will be rendered.
                        if the user is not authenticated then the private route will be redirected to login page.
                        
                    </p>
                  
                </div>
            </div>
            <div className="card w-96 bg-slate-400 text-primary-content lg:mx-5 mt-2 ">
                <div className="card-body">
                    <h2 className="card-title"> What is Node? How does Node work?</h2>
                    
                        <p> 
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
                            Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
                            Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.
                        </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;