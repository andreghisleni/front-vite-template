import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';
import { FaRegCopy } from 'react-icons/fa';

import CopyToClipboard from 'react-copy-to-clipboard';

import { toast } from 'react-toastify';
import { Container, Error, Copy } from './styles';

interface Props<T> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
  copy?: boolean;
  border?: boolean;
  label?: string;
  multiline?: T;
}
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Props<false>;
type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> &
  Props<true>;

const Input: React.FC<InputProps | TextAreaProps> = ({
  name,
  containerStyle = {} as React.CSSProperties,
  icon: Icon,
  copy = false,
  border = true,
  label,
  multiline = false,

  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  const defValue = useMemo(() => {
    if (defaultValue as Date) {
      return defaultValue.split('T')[0];
    }
    return defaultValue;
  }, [defaultValue]);

  const copied = useCallback(() => {
    toast.success('Copied to clipboard', {
      delay: 1000,
    });
  }, []);

  const props = {
    name,
    onFocus: () => setIsFocused(true),
    onBlur: handleInputBlur,
    id: fieldName,
    ref: inputRef,
    defaultValue: defValue,
    ...rest,
  };

  return (
    <Container
      maxWidth={containerStyle.maxWidth}
      isFocused={isFocused}
      isFilled={isField}
      isErrored={!!error}
      border={border}
      multiline={multiline}
    >
      {label && <label htmlFor={fieldName}>{label}</label>}
      <div className={`${rest.disabled} ? ' disabled' : ''`}>
        {Icon && <Icon size={16} />}

        {multiline ? (
          <textarea {...(props as TextAreaProps)} />
        ) : (
          <input {...(props as InputProps)} />
        )}
        {!multiline && copy && (
          <CopyToClipboard text={`${inputRef.current?.value}`} onCopy={copied}>
            <Copy>
              <FaRegCopy />
            </Copy>
          </CopyToClipboard>
        )}
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </div>
    </Container>
  );
};

export default Input;
