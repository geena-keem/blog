import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 2px solid ${palette.red[7]};
  padding-top: 2rem;

  p {
    color: ${palette.red[7]};
    letter-spacing: 2px;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.red[7]};

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    color: ${palette.red[7]};
    background: ${palette.orange[1]};
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
    &::placeholder {
      color: ${palette.red[4]};
    }
  }

  button {
    /* color: ${palette.orange[1]}; */
    color: white;
    background: ${palette.red[7]};
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: 1px solid ${palette.orange[1]};
    &:hover {
      color: ${palette.red[7]};
      background: ${palette.orange[1]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.red[7]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
// Hook을 사용하여 태그 추가/삭제 구현
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag> // 태그 클릭 시 삭제
));
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  // 태그 추가
  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 공백이라면 추가하지 않는다.
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않는다.
      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );

  // 태그 삭제
  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag],
  );

  return (
    <TagBoxBlock>
      <p>태그</p>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">ADD</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
