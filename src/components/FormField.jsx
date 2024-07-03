import styles from './styles/FormField.module.css';
import { TextInput } from './TextInput';
import { PasswordInput } from './PasswordInput';
import { useState } from 'react';


export const FormField = (props) => {
  const {
    label,
    type,
    name,
    value,
    placeholder,
    handleChange
  } = props;
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <label
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`\
${styles.label} \
${isFocused? styles.focused: ''} \
${!isFocused && isMouseOver? styles.hovered: ''} \
`} >
        { label }
      </span>
      {
        type === 'text'
          ?<TextInput
             name={name}
             value={value}
             placeholder={placeholder}
             isFocused={isFocused}
             isMouseOver={isMouseOver}
             handleChange={handleChange}
             handleFocus={handleFocus}
             handleBlur={handleBlur}
           />
          :<PasswordInput
             value={value}
             isFocused={isFocused}
             isMouseOver={isMouseOver}
             handleChange={handleChange}
             handleFocus={handleFocus}
             handleBlur={handleBlur}
           />
      }
    </label>
  );
}
