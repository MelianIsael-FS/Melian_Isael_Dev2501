import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';

const PostCardContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const PostContent = styled.div`
  flex: 1;
`;

const PostActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PostCard = ({ avatar, title, description }) => (
  <PostCardContainer>
    <Avatar src={avatar} alt="Avatar" />
    <PostContent>
      <h2>{title}</h2>
      <p>{description}</p>
    </PostContent>
    <PostActions>
      <FaEdit />
      <FaTrash />
    </PostActions>
  </PostCardContainer>
);

export default PostCard;