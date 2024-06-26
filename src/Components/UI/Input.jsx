const Input = ({label, id, ...props}) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input label={id} name={id} required {...props}/>
    </p>
  );
};

export default Input;
