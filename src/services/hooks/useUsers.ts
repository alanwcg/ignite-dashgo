import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface Response {
  users: User[];
}

export interface GetUsersResponse {
  users: User[];
  totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get<Response>('/users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number, options: UseQueryOptions<GetUsersResponse>) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
    ...options,
  });
}