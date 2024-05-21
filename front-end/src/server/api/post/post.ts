import { GetAxiosInstance } from '@axios/axios.method';
import {
  PostCommentResponse,
  PostDataResponse,
  PostListResponse,
} from '@server/responseType/post/post';

// 게시글 정보 가져오기 /v1/posts/${postId}
export const getPostDetailData = async (postId: number) => {
  try {
    const res = await GetAxiosInstance<PostDataResponse>(`/v1/posts/${postId}`);

    return res.data.result;
  } catch (error) {
    console.log('게시글 가져오기 에러', error);

    throw error;
  }
};

// 게시글의 댓글 목록 가져오기 /v1/posts/${postId}/comments
export const getPostCommentData = async (postId: number) => {
  try {
    const res = await GetAxiosInstance<PostCommentResponse>(
      `/v1/posts/${postId}/comments`,
    );

    return res.data.result;
  } catch (error) {
    console.log('게시글의 댓글 가져오기 에러', error);

    throw error;
  }
};

// 게시판 페이지 최신순 게시글 반환 /v1/posts/recent
export const getPostRecentData = async () => {
  try {
    const res = await GetAxiosInstance<PostListResponse>(`/v1/posts/recent`);

    return res.data.result;
  } catch (error) {
    console.log('게시글 최신순 반환 에러', error);

    throw error;
  }
};

// 게시판 페이지 좋아요순 게시글 반환 /v1/posts/popular
export const getPostPopularData = async () => {
  try {
    const res = await GetAxiosInstance<PostListResponse>(`/v1/posts/popular`);

    return res.data.result;
  } catch (error) {
    console.log('게시글 좋아요순 반환 에러', error);

    throw error;
  }
};