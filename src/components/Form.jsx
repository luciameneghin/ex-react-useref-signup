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

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Compila il campo con il tuo nome e cognome";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Compila il campo con il tuo username";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Compila il campo con la password";
    }
    if (!formData.devSpecialization) {
      newErrors.devSpecialization = "Seleziona una specializzazione";
    }
    if (!formData.devExperience) {
      newErrors.devExperience = "Compila il campo con gli anni di esperienza";
    }
    if (!formData.devDescription.trim()) {
      newErrors.devDescription = "Compila il campo con una breve descrizione di te";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form:', formData);
      setMessage('Form compilato con successo!');
    } else {
      setMessage('');
    }
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
        {errors.name && <p className="text-danger">{errors.name}</p>}
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
        {errors.username && <p className="text-danger">{errors.username}</p>}
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
        {errors.password && <p className="text-danger">{errors.password}</p>}
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
        {errors.devSpecialization && <p className="text-danger">{errors.devSpecialization}</p>}
      </section>
      <section>
        <label htmlFor="devExperience"><strong>Inserisci gli anni di esperienza:</strong></label>
        <input
          name='devExperience'
          type="number"
          min={0}
          value={formData.devExperience}
          onChange={handleChange}
          placeholder='Inserisci gli anni di esperienza'
          className='form-control'
        />
        {errors.devExperience && <p className="text-danger">{errors.devExperience}</p>}
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
        {errors.devDescription && <p className="text-danger">{errors.devDescription}</p>}
      </section>
      <div className='text-center mb-4'>
        <button type='submit' className='btn btn-primary w-25' onClick={handleSubmit}>Invia</button>
        <p className="text-success mt-2">{message}</p>
      </div>
    </form>
  )
}

export default Form
