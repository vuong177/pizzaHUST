import { Box } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

export default function MainPage() {
  const classes = useStyles();

  const [isActive, setIsActive] = useState(0);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ margin: 'auto 0' }}
        />

        <img src={process.env.PUBLIC_URL + 'banner.png'} alt="" />
      </Box>
      <Box className={classes.body}>
        <span id='category'>Thực đơn</span>
        <Box className={classes.category}>
          {category.map((item) => (
            <div key={item.id}>
              <NavLink to={item.link} className={classes.item}>
                <div className={classes.circle}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 9.002C7.69825 9.002 7.88838 8.92324 8.02856 8.78306C8.16875 8.64288 8.2475 8.45275 8.2475 8.2545C8.2475 8.05625 8.16875 7.86612 8.02856 7.72594C7.88838 7.58575 7.69825 7.507 7.5 7.507C7.30175 7.507 7.11162 7.58575 6.97144 7.72594C6.83125 7.86612 6.7525 8.05625 6.7525 8.2545C6.7525 8.45275 6.83125 8.64288 6.97144 8.78306C7.11162 8.92324 7.30175 9.002 7.5 9.002V9.002ZM11.223 10.255C11.223 10.4532 11.1442 10.6434 11.0041 10.7836C10.8639 10.9237 10.6737 11.0025 10.4755 11.0025C10.2773 11.0025 10.0871 10.9237 9.94694 10.7836C9.80675 10.6434 9.728 10.4532 9.728 10.255C9.728 10.0567 9.80675 9.86662 9.94694 9.72644C10.0871 9.58625 10.2773 9.5075 10.4755 9.5075C10.6737 9.5075 10.8639 9.58625 11.0041 9.72644C11.1442 9.86662 11.223 10.0567 11.223 10.255ZM7.504 13.508C7.60262 13.508 7.70028 13.4886 7.7914 13.4508C7.88251 13.4131 7.9653 13.3578 8.03504 13.288C8.10477 13.2183 8.16009 13.1355 8.19783 13.0444C8.23558 12.9533 8.255 12.8556 8.255 12.757C8.255 12.6584 8.23558 12.5607 8.19783 12.4696C8.16009 12.3785 8.10477 12.2957 8.03504 12.226C7.9653 12.1562 7.88251 12.1009 7.7914 12.0632C7.70028 12.0254 7.60262 12.006 7.504 12.006C7.30482 12.006 7.1138 12.0851 6.97296 12.226C6.83212 12.3668 6.753 12.5578 6.753 12.757C6.753 12.9562 6.83212 13.1472 6.97296 13.288C7.1138 13.4289 7.30482 13.508 7.504 13.508V13.508ZM4 3.956C4 2.861 4.895 1.934 6.03 2.004C10.477 2.278 14.377 3.774 17.432 6.691C18.299 7.518 18.128 8.869 17.229 9.559C15.83 10.639 14.4216 11.7067 13.004 12.762V14.502C13.004 15.219 12.449 16.002 11.504 16.002C11.323 16.002 11.156 15.972 11.006 15.922V16.005C11.006 16.718 10.45 17.496 9.503 17.496C8.749 17.496 8.252 17 8.077 16.446C7.529 16.856 6.93 17.302 6.395 17.7C5.405 18.437 4 17.73 4 16.5V3.956ZM11.005 14.502C11.005 14.761 11.2 15.002 11.504 15.002C11.809 15.002 12.004 14.759 12.004 14.502V12.508C12.0041 12.4292 12.0228 12.3515 12.0586 12.2813C12.0944 12.2111 12.1463 12.1503 12.21 12.104C12.99 11.538 14.318 10.529 15.494 9.63C12.801 7.067 9.026 5.546 5 5.514V16.499C5.00028 16.5915 5.02622 16.6821 5.07493 16.7608C5.12365 16.8394 5.19323 16.903 5.27594 16.9445C5.35865 16.986 5.45124 17.0037 5.54341 16.9956C5.63558 16.9876 5.72371 16.9541 5.798 16.899C6.584 16.313 7.511 15.623 8.207 15.101C8.28128 15.0453 8.36962 15.0114 8.4621 15.003C8.55458 14.9947 8.64755 15.0123 8.73061 15.0538C8.81366 15.0953 8.88351 15.1591 8.93233 15.2381C8.98114 15.3171 9.007 15.4081 9.007 15.501V16.005C9.007 16.252 9.197 16.497 9.503 16.497C9.56852 16.4986 9.63369 16.487 9.69467 16.463C9.75564 16.439 9.81118 16.403 9.85798 16.3571C9.90479 16.3112 9.94192 16.2564 9.96717 16.1959C9.99242 16.1355 10.0053 16.0705 10.005 16.005V14.502C10.005 14.3694 10.0577 14.2422 10.1514 14.1484C10.2452 14.0547 10.3724 14.002 10.505 14.002C10.6376 14.002 10.7648 14.0547 10.8586 14.1484C10.9523 14.2422 11.005 14.3694 11.005 14.502V14.502ZM16.619 8.767C17.084 8.41 17.119 7.774 16.741 7.413C13.884 4.686 10.221 3.263 5.969 3.001C5.45 2.969 5 3.395 5 3.956V4.514C9.327 4.547 13.402 6.201 16.297 9.014L16.619 8.767Z"
                    />
                  </svg>
                </div>
                <span>{item.name}</span>
                <div className={classes.arrow}>
                  {/* {!isActive && (
                    <img
                      srcSet={process.env.PUBLIC_URL + 'arrowRight.png 2x'}
                      alt=""
                    />
                  )} */}
                  {!isActive && (
                    <img
                      srcSet={process.env.PUBLIC_URL + 'arrowBottom.png 2x'}
                      alt=""
                    />
                  )}
                </div>
              </NavLink>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const category = [
  {
    id: 1,
    name: 'Pizza',
    link: 'pizza',
  },
  {
    id: 2,
    name: 'Mỳ Ý',
    link: 'pizza1',
  },
  {
    id: 3,
    name: 'Gà BBQ',
    link: 'pizza2',
  },
  {
    id: 4,
    name: 'Salad',
    link: 'pizza3',
  },
  {
    id: 5,
    name: 'Khoai tây chiên',
    link: 'pizza4',
  },
  {
    id: 6,
    name: 'Đồ uống',
    link: 'pizza5',
  },
];
