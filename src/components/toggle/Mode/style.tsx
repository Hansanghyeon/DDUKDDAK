import styled from 'styled-components';

export const Wrap = styled.div`
  --input-height: 

  *:after, *:before {
    box-sizing:border-box;
    margin:0;
    padding:0;
    transition:.25s ease-in-out;
    outline:none;
  }
  position: relative;
  width: 180px;
  text-align: center;
`;

export const Input = styled.input`
  position:absolute;
  top:-5000px;
  height:0;
  width:0;
  opacity:0;
  border:none;
  outline:none;
`;

export const Label = styled.label`
  display:block;
  position:relative;
  padding:10px;
  box-sizing: border-box;
  margin-bottom:20px;
  font-size:12px;
  line-height:16px;
  width:100%;
  height:20px;
  border-radius:18px;
  cursor:pointer;
  background-color: #6A6A6A;
  box-shadow:inset 0 0 0 0px #6A6A6A,0 0 0 2px #6A6A6A;

  --btn-width: 50%;

  &:before {
    content:'';
    display: block;
    position: absolute;
    z-index: 1;
    line-height: 34px;
    text-indent: 40px;
    height: 20px;
    width: var(--btn-width);
    border-radius: 999px;
    top: 0px;
    left: 0px;
    right: auto;
    background: #EBEBEB;
  }
  ${Input}:checked + & {
    box-shadow:inset 0 0 0 20px #6A6A6A,0 0 0 2px #6A6A6A;
    &:before {
      left:calc(100% - var(--btn-width));
    }
  }
`;

export const LabelWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const LabelItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  user-select: none;
  font-size: 10px;
`;