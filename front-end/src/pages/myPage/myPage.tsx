import React, { useEffect, useState } from 'react';

import {
  getMyPageInfo,
  getMyPageKeyword,
  getMyPagePost,
} from 'hooks/api/myPage';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import PostList from '@components/myPageComponent/postList/postList';

import styles from './styles';

const MyPage: React.FC = () => {
  const [profileData, setProfileData] = useState({});
  const [keywordsData, setKeywordsData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getMyPageInfo().then((res) => setProfileData(res));
  }, [profileData]);

  useEffect(() => {
    getMyPageKeyword().then((res) => setKeywordsData(res));
  }, [keywordsData]);

  useEffect(() => {
    getMyPagePost().then((res) => setPostData(res));
  }, [postData]);

  const options = [
    { label: '제목', value: 'Title' },
    { label: '내용', value: 'Content' },
    { label: '제목+내용', value: 'TitleContent' },
  ];

  return (
    <styles.Container>
      <styles.LeftContainer>
        <ProfileBox profileData={profileData} />
        <KeywordBox keywordsData={keywordsData} />
      </styles.LeftContainer>
      <styles.RightContainer>
        <SearchBar options={options} />
        <PostList postData={postData} />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default MyPage;
