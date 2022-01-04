export const ROUTES = {
  HOME: {
    path: '/',
    name: 'Home'
  },
  HISTORY: {
    path: '/history',
    name: 'History'
  },
  ABOUT: {
    path: '/about',
    name: 'About'
  },
  SINGIN: {
    path: '/singin',
    name: 'Signin'
  },
  LOGIN: {
    path: '/login',
    name: 'Login'
  },
  RESETPASSWORD: {
    path: '/resetpassword',
    name: 'ResetPassword'
  },
  NEWPASSWORD: {
    path: '/newpassword',
    name: 'NewPassword'
  },
  ERROR: {
    path: '/error',
    name: 'Error'
  },
};

export const TIME_ZONES = {
  ISRAEL: {
    zone: 'Asia/Jerusalem',
    name: 'Israel',
  },
  RUSSIA_VLADIVOSTOK: {
    zone: 'Asia/Vladivostok',
    name: 'Vladivostok',
  },
  US_NEW_YORK: {
    zone: 'America/New_York',
    name: 'New York',
  },
};

export const DATE_TIME_FORMAT = 'HH:mm, DD.MM.YYYY';


export const TODO_STATUS = {
  DONE: 'DONE',
  ACTIVE: 'ACTIVE',
}

export const PERMISSION = {
  ADMIN: 'admin',
  REGULAR: 'regular'
}


export const CLOCK_UPDATE = 1000;

export const API = 'http://dev.local:3001/api';