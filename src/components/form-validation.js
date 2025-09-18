import React, { useState } from 'react';
import Prompt from './prompt';

function FormValidation() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            console.log('Form submitted:', formData);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        setErrors({});
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div style={{ padding: '1rem', fontFamily: 'Arial', textAlign: 'center' }}>
                <h2 style={{ color: 'green' }}>Form Submitted Successfully!</h2>
                <p>Welcome, {formData.name}!</p>
                <button 
                    onClick={resetForm}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#339af0',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Submit Another Form
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial', maxWidth: '400px', margin: '0 auto' }}>
            <Prompt
                title="Form Validation Component"
                list={[
                    'Create a registration form with name, email, password, confirm password',
                    'Real-time validation with error messages',
                    'Email format validation',
                    'Password confirmation matching',
                    'Form submission only when valid',
                    'Success state after submission'
                ]}
                concepts="useState, Form Handling, Validation, Controlled Components"
            />

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: errors.name ? '2px solid red' : '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    {errors.name && <p style={{ color: 'red', margin: '0.25rem 0', fontSize: '0.9rem' }}>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: errors.email ? '2px solid red' : '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    {errors.email && <p style={{ color: 'red', margin: '0.25rem 0', fontSize: '0.9rem' }}>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: errors.password ? '2px solid red' : '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    {errors.password && <p style={{ color: 'red', margin: '0.25rem 0', fontSize: '0.9rem' }}>{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: errors.confirmPassword ? '2px solid red' : '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    {errors.confirmPassword && <p style={{ color: 'red', margin: '0.25rem 0', fontSize: '0.9rem' }}>{errors.confirmPassword}</p>}
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '0.75rem',
                        backgroundColor: '#51cf66',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormValidation;
