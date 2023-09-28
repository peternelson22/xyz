import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=''>
        <label>Email</label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button type='button'>Submit</button>
    </form>
  );
};
export default Login;
