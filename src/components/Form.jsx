import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    devSpecialization: '',
    devExperience: '',
    devDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, password, devSpecialization, devExperience, devDescription } = formData;
    if (!name || !username || !password || !devSpecialization || !devExperience || !devDescription) {
      alert('Per favore compila tutti i campi');
      return;
    }
    if (devExperience < 0) {
      alert('L\'esperienza non può essere negativa');
      return;
    }
    console.log('Form:', formData);
  }


  return (
    <form onSubmit={handleSubmit} className='form-control'>
      <section>
        <label htmlFor="name"><strong>Inserisci nome e cognome:</strong></label>
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Nome e Cognome'
          className='form-control'
        />
      </section>
      <section>
        <label htmlFor="username"><strong>Inserisci il tuo username:</strong></label>
        <input
          type="text"
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Inserisci il tuo username'
          className='form-control'
        />
      </section>
      <section>
        <label htmlFor="password"><strong>Inserisci la password:</strong></label>
        <input
          type="password"
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Inserisci la password'
          className='form-control'
        />
      </section>
      <section>
        <label htmlFor="devSpecialization"><strong>Seleziona la tua specializzazione:</strong></label>
        <select
          name='devSpecialization'
          value={formData.devSpecialization}
          onChange={handleChange}
          placeholder='Scegli la tua specializzazione'
          className='form-select'
        >
          <option value="">-- Seleziona specializzazione --</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
      </section>
      <section>
        <label htmlFor="devExperience"><strong>Inserisci gli anni di esperienza:</strong></label>
        <input
          name='devExperience'
          type="number"
          value={formData.devExperience}
          onChange={handleChange}
          placeholder='Inserisci gli anni di esperienza'
          className='form-control'
        />
      </section>
      <section>
        <label htmlFor="devDescription"><strong>Inserisci una breve descrizione di te:</strong></label>
        <textarea
          name='devDescription'
          value={formData.devDescription}
          onChange={handleChange}
          placeholder='Inserisci una breve descrizione di te'
          className='form-control'
        />
      </section>
      <div className='text-center mb-4'>
        <button type='submit' className='btn btn-primary w-25'>Invia</button>
      </div>
    </form>
  )
}

export default Form
