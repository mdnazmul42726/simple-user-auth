import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const Resgistar = () => {
    const [signUpError, setSignUpError] = useState('');
    const [signUpSucc, setSignUpSucc] = useState('');
    const [showpassword, setShowPassword] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;
        setSignUpError('');
        setSignUpSucc('');

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignUpError('your password shoudd be at last 1 upercase latter');
            return;
        } else if (!checkbox) {
            setSignUpError('plase accstp our trams and conition');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then(result => {
            setSignUpSucc('Acount Create Sucsess!');
            sendEmailVerification(result.user).then(alert('check your inbox an verefy acc'));
            updateProfile(result.user, { displayName: name }).then(() => alert('upated')).catch(error => console.log(error))
        }).catch(error => setSignUpError(error.message))
    }

    return (
        <div>
            <div className="hero min-h-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-control mb-2">
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-2">
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <div className="flex">
                                        <input type={showpassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full" />
                                        <span className="cursor-pointer -ml-5 mt-4" onClick={() => setShowPassword(!showpassword)}>{showpassword ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-3">
                                    <input type="checkbox" name="checkbox" />
                                    <span>accept the terms and conditions</span>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value={'Sign UP'} className="btn btn-primary" />
                                </div>
                            </form>
                            {signUpError && <p className="text-red-800">{signUpError}</p>}
                            {signUpSucc && <p className="text-green-700">{signUpSucc}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resgistar;