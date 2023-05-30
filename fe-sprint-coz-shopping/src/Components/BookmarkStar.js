/*** 1.TODO: Button의 스타일 및 스토리를 구현하세요. ***/
import { css, styled } from 'styled-components';

const BookmarkStar = styled.button`
  /* 기본 스타일 제거*/
  border: none;
  outline: none;
  background-color: transparent;

  /* 레이아웃 */
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap || 0}px;

  /* 공통 스타일 */
  cursor: pointer;

  /* 버튼 크기를 설정하기 위해 패딩 값과 보더 값의 차이를 적용합니다 */
  padding: ${Spacing[8].value - PrimaryFocus.width.value}px
  ${Spacing[16].value - PrimaryFocus.width.value}px;
  border-style: ${SecondaryDefault.style.value};
  border-width: ${SecondaryDefault.width.value}px;

  /* 조건부 스타일 */
  ${(props) =>
    props.unClicked
      ? css`
          /* Primary 버튼 스타일 */
          color: {#fff};
          &:hover {
            color: ${Accent.value};
          }
        `
      : /*** 1-1.TODO: 클릭되면 노랗게 변함***/
        css`
          color: {yellow}`}
`;

export const Star = ({ unClicked }) => {
  return (
    <BookmarkStar unClicked={unClicked}>
    </BookmarkStar>
  );
};
