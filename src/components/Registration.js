import React, { useState, useEffect } from 'react';
import '../styles/Registration.css'

const initialState = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
}


const passwordVerifError = {
    isLengthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    confirmPassword: false
}


const Registration = () => {
    const [newUser, setNewUser] = useState(initialState)
    const [passwordError, setPasswordError] = useState(passwordVerifError)

    useEffect(() => { }, [newUser])

    const handleOnChange = e => {
        const { name, value } = e.target

        setNewUser({ ...newUser, [name]: value })

        if (name === "password") {
            const isLengthy = value.length > 8;
            const hasUpper = /[A-Z]/.test(value)
            const hasLower = /[a-z]/.test(value)
            const hasNumber = /[0-9]/.test(value)

            setPasswordError({ ...passwordError, isLengthy, hasUpper, hasLower, hasNumber })
        }

        if (name === "confirmPassword") {
            setPasswordError({ ...passwordError, confirmPassword: newUser.password === value })
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        console.log(newUser);
    }

    return (
        <form className="registration" onSubmit={handleOnSubmit} >
            <div className="registrationForm" >
                <label>Nom</label>
                <input
                    type="text"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={handleOnChange}
                    placeholder="  Entrez votre nom"
                />
            </div>

            <div className="registrationForm" >
                <label>Prénom</label>
                <input
                    type="text"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={handleOnChange}
                    placeholder="  Entrez votre prénom"
                />
            </div>

            <div className="registrationForm" >
                <label>Adresse mail</label>
                <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleOnChange}
                    placeholder="  Entrez votre mail"
                />
            </div>

            <div className="registrationForm" >
                <label>Numéro de téléphone</label>
                <input
                    type="number"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleOnChange}
                    placeholder="  Entrez votre numéro"
                />
            </div>

            <div className="registrationForm" >
                <label>Mot de passe</label>
                <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleOnChange}
                    placeholder="  Entrez votre mot de passe"
                />
            </div>

            <div className="registrationForm" >
                <label>Confirmer mot de passe</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={newUser.confirmPassword}
                    onChange={handleOnChange}
                    placeholder="  Confirmer mot de passe"
                />
            </div>

            <ul>
                <li
                    className={
                        passwordError.isLengthy ? "textPasswordValid" : "textPasswordError"
                    }
                >
                    Min 8 caractères
                </li>
                <li
                    className={
                        passwordError.hasUpper ? "textPasswordValid" : "textPasswordError"
                    }
                >
                    Au moins une majuscule
                </li>
                <li
                    className={
                        passwordError.hasLower ? "textPasswordValid" : "textPasswordError"
                    }
                >
                    Au moins une minuscule
                </li>
                <li
                    className={
                        passwordError.hasNumber ? "textPasswordValid" : "textPasswordError"
                    }
                >
                    Au moins un nombre
                </li>
            </ul>

            <div>
                <button className='registrationBtn' type="submit" disabled={Object.values(passwordError).includes(false)} >
                    Continuer
                </button>
            </div>
            <a href="/login" className="registrationLink" >Déja inscrit? </a>
        </form>
    );
};

export default Registration;