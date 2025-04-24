import { useState } from 'react';

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
  const [valid, setValid] = useState({
    username: '',
    password: '',
    devDescription: ''
  });

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const validUsername = (username) => {
    const validLength = username.length >= 6 && username.length <= 15;
    const isAlphanumeric = [...username].some(c => letters.includes(c)) &&
      [...username].some(c => numbers.includes(c)) &&
      [...username].some(c => symbols.includes(c));

    if (!username.trim()) {
      return { error: 'Lo username è obbligatorio' };
    }
    if (!validLength) {
      return { error: 'Lo username deve essere lungo tra 6 e 15 caratteri' };
    }
    if (!isAlphanumeric) {
      return { error: 'Lo username deve contenere almeno una lettera, un numero e un simbolo' };
    }
    return { valid: 'Username valido' };
  };

  const validPassword = (password) => {
    const hasLetter = [...password].some(letter => letters.includes(letter));
    const hasNumber = [...password].some(number => numbers.includes(number));
    const hasSymbol = [...password].some(symbol => symbols.includes(symbol));
    const validLength = password.length >= 8;

    if (!validLength) {
      return { error: 'La password deve essere lunga almeno 8 caratteri' };
    }
    if (!hasLetter || !hasNumber || !hasSymbol) {
      return { error: 'La password deve contenere almeno una lettera, un numero e un simbolo' };
    }
    return { valid: 'Password valida' };
  };

  const validDescription = (description) => {
    if (!description.trim()) {
      return { error: 'La descrizione è obbligatoria' };
    }
    const length = description.trim().length;
    if (length < 100) {
      return { error: 'La descrizione deve essere lunga almeno 100 caratteri' };
    }
    if (length > 500) {
      return { error: 'La descrizione deve essere lunga massimo 500 caratteri' };
    }
    return { valid: 'Descrizione valida' };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Esegui la validazione in tempo reale
    if (name === 'username') {
      setValid((prevValid) => ({
        ...prevValid,
        username: validUsername(value)
      }));
    } else if (name === 'password') {
      setValid((prevValid) => ({
        ...prevValid,
        password: validPassword(value)
      }));
    } else if (name === 'devDescription') {
      setValid((prevValid) => ({
        ...prevValid,
        devDescription: validDescription(value)
      }));
    }
  };

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
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-control'>
      {/* Nome */}
      <section>
        <label htmlFor="name"><strong>Inserisci nome e cognome:</strong></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome e Cognome"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}
      </section>

      {/* Username */}
      <section>
        <label htmlFor="username"><strong>Inserisci il tuo username:</strong></label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Inserisci il tuo username"
          className="form-control"
        />
        {valid.username && valid.username.error && <p className="text-danger">{valid.username.error}</p>}
        {valid.username && valid.username.valid && <p className="text-success">{valid.username.valid}</p>}
      </section>

      {/* Password */}
      <section>
        <label htmlFor="password"><strong>Inserisci la password:</strong></label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Inserisci la password"
          className="form-control"
        />
        {valid.password && valid.password.error && <p className="text-danger">{valid.password.error}</p>}
        {valid.password && valid.password.valid && <p className="text-success">{valid.password.valid}</p>}
      </section>

      {/* Specializzazione */}
      <section>
        <label htmlFor="devSpecialization"><strong>Seleziona la tua specializzazione:</strong></label>
        <select
          name="devSpecialization"
          value={formData.devSpecialization}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">-- Seleziona specializzazione --</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
        {errors.devSpecialization && <p className="text-danger">{errors.devSpecialization}</p>}
      </section>

      {/* Esperienza */}
      <section>
        <label htmlFor="devExperience"><strong>Inserisci gli anni di esperienza:</strong></label>
        <input
          type="number"
          name="devExperience"
          value={formData.devExperience}
          onChange={handleChange}
          placeholder="Inserisci gli anni di esperienza"
          className="form-control"
        />
        {errors.devExperience && <p className="text-danger">{errors.devExperience}</p>}
      </section>

      {/* Descrizione */}
      <section>
        <label htmlFor="devDescription"><strong>Inserisci una breve descrizione di te:</strong></label>
        <textarea
          name="devDescription"
          value={formData.devDescription}
          onChange={handleChange}
          placeholder="Inserisci una breve descrizione di te"
          className="form-control"
        />
        {valid.devDescription && valid.devDescription.error && <p className="text-danger">{valid.devDescription.error}</p>}
        {valid.devDescription && valid.devDescription.valid && <p className="text-success">{valid.devDescription.valid}</p>}
      </section>

      <div className="text-center mb-4">
        <button type="submit" className="btn btn-primary w-25">Invia</button>
      </div>
    </form>
  );
};

export default Form;
