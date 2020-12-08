import { instance } from '@api/instance';

export const fetchTodo = () => instance({
  method: 'get',
  url:'/todos',
})