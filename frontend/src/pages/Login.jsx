import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // ✅ for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };
    const handleLogin = async (evt) => {
        evt.preventDefault();
        try {
            const payload = {
                email: credentials.email,
                password: credentials.password
            };

            const response = await axios.post('http://localhost:8080/PustakMandi/api/auth/login', payload);
            const { token, user } = response.data;

            // ✅ Save token & user
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            alert(`Welcome back, ${user.username || user.name || 'user'}!`);

            // ✅ Navigate to home page after successful login
            navigate('/PustakMandi/home');

        } catch (err) {
            alert(err.response?.data?.message || 'Login failed. Please check your credentials.');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
        },
        form: {
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '90%',
            maxWidth: '400px',
            textAlign: 'center',
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
        },
        link: {
            marginTop: '15px',
            fontSize: '14px',
            color: '#333',
        },
        linkAnchor: {
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginLeft: '5px',
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
                <div style={styles.link}>
                    New user?
                    <Link to="/PustakMandi/register" style={styles.linkAnchor}>Register here</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
