import styles from './styles/TextInput.module.css';


export const TextInput = (props) => {
  const {
    name,
    value,
    placeholder,
    isFocused,
    isMouseOver,
    handleChange,
    handleFocus,
    handleBlur
  } = props;

  return (
    <input
      type='text'
      className={`\
${styles.input} \
${isFocused? styles.focused: ''} \
${!isFocused && isMouseOver? styles.hovered: ''} \
`}
      name={name}
      value={value}
      placeholder={placeholder}
      autoComplete='on'
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
