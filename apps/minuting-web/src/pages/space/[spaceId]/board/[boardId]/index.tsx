import { useGetMinutesByBoard } from '../../../../../query/minutes';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

const Viewer = dynamic(() => import('../../../../../minutes/Viewer'), {
  ssr: false,
});

const SpaceDashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: fit-content;

  background: #ffffff;
  border-radius: 1.2rem;

  padding: 1.5rem 2rem;
  margin-right: 3rem;
  margin-top: 3rem;

  box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
`;

function BoardPage() {
  const router = useRouter();
  const { spaceId, boardId } = router.query;
  const { data } = useGetMinutesByBoard(Number(spaceId), Number(boardId));

  if (!data) return null;

  const { list } = data;

  return (
    <>
      <Head>
        <title>미뉴팅 - 회의록 조회</title>
      </Head>
      <h1>회의록 조회</h1>
      {list.map((minutes) => {
        const { id, title } = minutes;
        return (
          <SpaceDashboardDiv
            key={id}
            onClick={() =>
              router.push(`/space/${spaceId}/board/${boardId}/${id}`)
            }
          >
            <h1>{title}</h1>
          </SpaceDashboardDiv>
        );
      })}
    </>
  );
}

export default BoardPage;
