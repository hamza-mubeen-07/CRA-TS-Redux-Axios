import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';

const Login: FC = () => {
  return <Button className={styles.testClass}> Login </Button>;
};

export default Login;
