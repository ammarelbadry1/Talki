import styles from './styles/PasswordInput.module.css';
import { PiEyeBold } from 'react-icons/pi';
import { PiEyeClosed } from 'react-icons/pi';
import { useState } from 'react';


export const PasswordInput = (props) => {
  const {
    value,
    isFocused,
    isMouseOver,
    handleChange,
    handleFocus,
    handleBlur
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    isVisible
      ?setIsVisible(false)
      :setIsVisible(true);
  }

  return (
    <div className={`\
${styles.container} \
${isFocused? styles.focused: ''} \
${!isFocused && isMouseOver? styles.hovered: ''} \
`} onBlur={handleBlur} >
      <input
        type={isVisible? 'text': 'password'}
        className={styles.input}
        style={
          {backgroundColor: isFocused? 'var(--background-clr)': ''}
        }
        name='password'
        value={value}
        placeholder='••••••••'
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {
        value !== '' &&
        <span onClick={toggleVisibility}>
          {
            isVisible
            ?<PiEyeClosed className={styles.icon} title='hide' />
            :<PiEyeBold className={styles.icon} title='show' />
          }
        </span>
      }
    </div>
  );
}
