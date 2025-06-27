import { Link, useNavigate } from 'react-router';
import { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {signInUser, googleLogIn} = use(AuthContext)

    

     const handleLogin = (e) => {
        e.preventDefault();

        const passwordValid = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!passwordValid.test(password)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Password',
                text: 'Password must be at least 6 characters with one uppercase and one lowercase letter.',
            });
            return;
        }

        signInUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    timer: 1500,
                    showConfirmButton: false,
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message || 'Please check your credentials.',
                });
            });
    };

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in with Google',
                    text: 'Welcome!',
                    timer: 1500,
                    showConfirmButton: false,
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Google Login Failed',
                    text: error.message || 'Please try again later.',
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-base-100">
                <h2 className="text-2xl font-bold text-center text-red-500">Login to Blood Collection</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-error w-full text-white">
                        Login
                    </button>
                </form>
                <div className="divider">OR</div>
                <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
                <p className="text-sm text-center">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-red-500 hover:underline">
                        Register here
                    </Link>
                </p>
                 
            </div>
        </div>
    );
};

export default Login;
