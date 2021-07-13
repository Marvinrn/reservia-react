import React from 'react'
import Select from 'react-select'

const options = [
    { label: 'Économique', value: 'économique' },
    { label: 'Familial', value: 'familial' },
    { label: 'Romantique', value: 'romantique' },
    { label: 'Animaux autorisés', value: 'animaux autorisés' }
]

function DropDown({ label }) {

    function handleChange(value) {
        console.log(value)
    }

    return (
        <div>
            <h1>{label}</h1>
            <Select
                isMulti={true}
                options={options}
                onChange={handleChange}
            />
        </div>
    )
}

export default DropDown