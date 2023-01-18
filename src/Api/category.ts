import apiCreate from './api';

export const getCategory = () => apiCreate.get('/api/channels');
