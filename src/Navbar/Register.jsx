import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {

    const {createUser,googleLogIn}= use(AuthContext)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const { name, email, photoURL, password, confirmPassword } = formData;

        // ✅ Check all fields
        if (!name || !email || !photoURL || !password || !confirmPassword) {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Fields',
                text: 'Please fill out all fields.',
            });
            return;
        }

        // ✅ Check password match
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Password Mismatch',
                text: 'Passwords do not match!',
            });
            return;
        }

        // ✅ Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'warning',
                title: 'Weak Password',
                html: `
                    Password must contain:<br />
                    • At least 6 characters<br />
                    • At least one uppercase letter<br />
                    • At least one lowercase letter<br />
                    • At least one number
                `,
            });
            return;
        }


        createUser(email, password)
            .then((result) => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You can now login!',
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate('/login');
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message || 'Something went wrong.',
                });
            });
    };

     const handleGoogleLogIn = () => {
            googleLogIn()
                .then(result => {
                    console.log(result);
                    Swal.fire({
                        icon: 'success',
                        title: 'Register with Google',
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
                        title: 'Google Resister Failed',
                        text: error.message || 'Please try again later.',
                    });
                });
        };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-base-100">
                <h2 className="text-2xl font-bold text-center text-red-500">Create Your Account</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                            value={formData.photoURL}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-error w-full text-white">
                        Register
                    </button>
                </form>

                <div className="divider">OR</div>
                <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                    </button>
                </div>

                <p className="text-sm text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-red-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
