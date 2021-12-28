import Mock from 'mockjs';
import { login, refresh, data } from './test'

Mock.setup({
  timeout: '0'
});
Mock.mock(/\/api\/v1\/login/, login);
Mock.mock(/\/api\/v1\/refresh/, refresh);
Mock.mock(/\/api\/v1\/data/, data);
Mock.mock(/\/api\/v1\/data1/, data);
Mock.mock(/\/api\/v1\/data2/, data);