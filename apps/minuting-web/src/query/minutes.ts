import { useQuery } from 'react-query';
import { getMinutesByBoard, getMinutesDetail } from '../api/minutes';

type TMinutesByBoardResponse = {
  error: {
    code: number;
    reason: string;
  };
  list: {
    contents: string;
    id: number;
    title: string;
  }[];
};

export const useGetMinutesByBoard = (spaceId: number, boardId: number) => {
  return useQuery<TMinutesByBoardResponse>(
    ['minutes'],
    () => getMinutesByBoard(spaceId, boardId),
    {
      enabled: Boolean(spaceId && boardId),
    },
  );
};

type TMinutesDetailResponse = {
  error: {
    code: number;
    reason: string;
  };
  value: {
    contents: string;
    createdAt: string;
    id: number;
    title: string;
    updatedAt: string;
  };
};

export const useGetMinutesDetail = (
  spaceId: number,
  minutesId: number,
  boardId: number,
) => {
  return useQuery<TMinutesDetailResponse>(
    ['minutesDetail'],
    () => getMinutesDetail(spaceId, minutesId, boardId),
    {
      enabled: Boolean(spaceId && minutesId && boardId),
    },
  );
};
