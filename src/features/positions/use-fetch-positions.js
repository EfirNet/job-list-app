import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from './position-slice';

import data from '../../data/data.json';

export const useFetchPosiotions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
};
