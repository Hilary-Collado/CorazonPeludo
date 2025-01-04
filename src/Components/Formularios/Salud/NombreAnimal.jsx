import React, { useState } from 'react';

const NombreAnimal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Lista estática de nombres de animales (simulación)
  const animalNames = [
    'Leslie Alexander',
    'Dries Vincent',
    'Lindsay Walton',
    'Leonard Krasner',
    'Floyd Miles',
    'Emma Dorsey',
    'Blake Reid',
  ];

  // Manejar cambios en el input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filtrar nombres según el término de búsqueda
    if (value.length > 0) {
      const filtered = animalNames.filter((animal) =>
        animal.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredAnimals(filtered);
    } else {
      setFilteredAnimals(animalNames); // Mostrar todo si no hay búsqueda
    }
  };

  // Mostrar u ocultar el dropdown
  const handleInputClick = () => {
    setShowDropdown(true);
    setFilteredAnimals(animalNames); // Mostrar todos inicialmente
  };

  // Manejar selección de un elemento
  const handleItemClick = (animal) => {
    setSearchTerm(animal);
    setShowDropdown(false); // Ocultar el dropdown
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <label htmlFor="animalInput" style={{ display: 'block', marginBottom: '5px' }}>
        Assigned to
      </label>
      <input
        id="animalInput" type="text" className='form-control input-'
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder="Escribe un nombre..."
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {showDropdown && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            maxHeight: '150px',
            overflowY: 'auto',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 10,
          }}
        >
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(animal)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #ddd',
                  backgroundColor: searchTerm === animal ? '#e5e5e5' : 'transparent',
                }}
              >
                {animal}
              </li>
            ))
          ) : (
            <li
              style={{
                padding: '8px',
                textAlign: 'center',
                color: '#999',
              }}
            >
              No hay resultados
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default NombreAnimal