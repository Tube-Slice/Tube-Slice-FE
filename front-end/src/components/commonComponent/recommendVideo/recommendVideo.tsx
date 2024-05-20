import React from 'react';

import styles from './styles';

import ViewCountIcon from '@assets/common/recommendVideoComponent/ViewCount.svg';

import { dummyData } from './exampleData';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

const RecommendVideo: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);

  const handleClick = (address: string) => {
    window.open(`${address}`, '_blank');
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.Nickname>{userinfo.userName}</styles.Nickname>님을 위한
        추천영상이에요
      </styles.Header>
      <styles.VideoWrapper>
        {dummyData.map((data, index) => (
          <styles.Recommend key={index}>
            <styles.Thumbnail
              src={data.thumbnail}
              alt={data.title}
              onClick={() => handleClick(data.address)}
            />
            <styles.VideoInfo>
              <div>{data.title}</div>
              <styles.ViewCountWrapper>
                <img src={ViewCountIcon} />
                <div>{data.viewCount}</div>
              </styles.ViewCountWrapper>
            </styles.VideoInfo>
          </styles.Recommend>
        ))}
      </styles.VideoWrapper>
    </styles.Container>
  );
};
export default RecommendVideo;
