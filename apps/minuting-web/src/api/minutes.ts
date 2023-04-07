import { client } from '../api-config/client';
import { IPostMinute } from '../types/minutes';

export const getMinutesByBoard = async (spaceId: number, boardId: number) => {
  const response = await client.get(
    `/spaces/${spaceId}/boards/${boardId}/minutes`,
  );
  return response.data;
};

export const getMinutesDetail = async (
  spaceId: number,
  minutesId: number,
  boardId: number,
) => {
  const response = await client.get(
    `/spaces/${spaceId}/boards/${boardId}/minutes/${minutesId}`,
  );
  return response.data;
};

export const postMinute = async (
  spaceId: number,
  boardId: number,
  minuteData: IPostMinute,
) => {
  const response = await client.post(
    `/spaces/${spaceId}/boards/${boardId}/minutes`,
    minuteData,
  );
  return response.data;
};

export const updateMinute = async (
  spaceId: number,
  boardId: number,
  minutesId: number,
  minuteData: IPostMinute,
) => {
  const response = await client.put(
    `/spaces/${spaceId}/boards/${boardId}/minutes/${minutesId}`,
    minuteData,
  );
  return response.data;
};

export const deleteMinute = async (params: {
  spaceId: number;
  boardId: number;
  minutesId: number;
}) => {
  const { spaceId, boardId, minutesId } = params;
  const response = await client.delete(
    `/spaces/${spaceId}/boards/${boardId}/minutes/${minutesId}`,
  );
  return response.data;
};
