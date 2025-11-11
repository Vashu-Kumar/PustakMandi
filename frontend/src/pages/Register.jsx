import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        username: '',       
        email: '',
        password: '',
        role: 'user'     //  Include role if required by backend
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
      await axios.post('http://localhost:8080/PustakMandi/api/auth/register', user);
            alert('Registration successful!');
            navigate('/PustakMandi/login');
        } catch (err) {
            console.error("❌ Registration Error:", err.response?.data || err.message);
            alert("Registration Failed: " + (err.response?.data?.message || "Unknown error"));
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
            backgroundColor: '#fff',
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
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
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
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Register</button>
                <div style={styles.link}>
                    Already registered?
                    <Link to="/PustakMandi/login" style={styles.linkAnchor}>Login here</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
