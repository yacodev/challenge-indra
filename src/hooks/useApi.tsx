import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../models/userModels';

interface UseApiInterface {
  url: string;
  execute?: boolean;
}

export const useApi = ({ url, execute = true }: UseApiInterface) => {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<User>();

  useEffect(() => {
    execute && getData();
  }, []);

  const getData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setError('');
        setData(response?.data);
      })
      .catch((error) => {
        setError(error?.message);
      });
  };
  return { data, error, getData };
};
