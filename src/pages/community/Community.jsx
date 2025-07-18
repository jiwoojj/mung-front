import React from 'react';
import S from './style';
import CommunityInputContainer from './CommunityInputContainer';
import CommunitySelect from './CommunitySelect';
import CommunityNoText from './CommunityNoText';
import Accordion from '../../components/accordion/Accordion';
import ButtonWithInput from '../../components/input/ButtonWithInput';
import BasicButton from '../../components/button/BasicButton';
import Header from '../../components/layout/header/Header';


// 사진 업로드
// search select 스타일 적용 질문
// 하트아이콘, 댓글 아이콘 파일

const Community = () => {
  

  return (
    < >
      <S.Background >
        <S.Wrapper>
          <CommunitySelect/>
          <CommunityInputContainer/>
          <CommunityNoText/>
          <S.MoreTextButton roundButton="medium" variant="filled">더보기</S.MoreTextButton>
          {/* <S.MoreTextBoxWrapper>
            <S.MoreTextBox>더보기</S.MoreTextBox>
          </S.MoreTextBoxWrapper> */}
        </S.Wrapper>
      </S.Background>
    </>
  );
};    

export default Community;