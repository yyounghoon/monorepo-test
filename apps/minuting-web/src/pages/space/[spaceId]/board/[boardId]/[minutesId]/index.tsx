import { useRouter } from 'next/router';
import { useGetMinutesDetail } from '../../../../../../query/minutes';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import styled from '@emotion/styled';

const Viewer = dynamic(() => import('../../../../../../minutes/Viewer'), {
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

function MinutesDetailPage() {
  const { spaceId, boardId, minutesId } = useRouter().query;
  const { data: minutes } = useGetMinutesDetail(
    Number(spaceId),
    Number(boardId),
    Number(minutesId),
  );

  if (!minutes) return null;

  const { title, id, contents, createdAt, updatedAt } = minutes.value;
  return (
    <>
      <Head>
        <title>미뉴팅 - 회의록 조회</title>
      </Head>
      <h1>회의록 조회</h1>
      <SpaceDashboardDiv>
        <h1>{title}</h1>
        <h3>{createdAt}</h3>
        <Viewer initialValue={contents}></Viewer>
      </SpaceDashboardDiv>
    </>
  );
}

export default MinutesDetailPage;
