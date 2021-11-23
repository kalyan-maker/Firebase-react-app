import styled from "styled-components";

export const VideoSection = styled.div`
  max-width: 400px;
  height: fit-content;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  padding-bottom: 1rem;
  &:hover {
    box-shadow: 0 0 15px 0 #e5e5e5;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    margin: 0.5rem 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .qmeta {
    display: flex;
    justify-content: space-between;
    padding-right: 6px;
  }
  .qmeta p {
    font-size: 15px;
    font-weight: 400;
`;
