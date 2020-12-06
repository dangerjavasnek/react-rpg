/** @module api */
import CONFIG from '../config/config.json';
import mockApi from './mockApi';
import api from './api';

export default CONFIG.mockApi ? mockApi : api;
