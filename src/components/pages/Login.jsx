import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useRef, useState } from "react";

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // validation

        signInWithEmailAndPassword(auth, email, password).then(result => console.log(result.user)).catch(error => setLoginError(error.code));

    };

    const hanleForgotPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            console.log('plase provite valii email adress');
            return
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            console.log('please give me a vali email address');
            return;
        }
        sendPasswordResetEmail(auth, email).then(() => alert('check your inbox')).catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero min-h-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover" onClick={hanleForgotPassword}>Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" />
                                </div>
                            </form>
                            <div className="">
                                {loginError && <p className="text-red-800">{loginError}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;