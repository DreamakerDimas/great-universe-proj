import React, {useCallback} from 'react';
import styles from './TagsBranch.module.sass';

const TagsBranch = (props) => {
  const { branch, select, childs, pathArr, editTag, addTag, removeTag} = props;

  const editTagHandler = useCallback(() => {
    // editTag()
  }, []);
  
  const addTagHandler = useCallback(() => {
    // editTag()
  }, []);
  
  const removeTagHandler = useCallback(()  => {
    // editTag()
  }, []);

  return (
    <li>
      <div className={styles.arrow}>{'>'}</div>
      <div
        className={tagNameContainer}
        onClick={() => select({ tagData: branch, tagChain: pathArr })}
      >
        {branch.name}
      </div>
      <div className={styles.buttonsContainer}>
        <div 
        className={styles.editTagButton}
        onClick={editTagHandler}
          >{'edit'}</div>
        <div className={styles.addTagButton}
        onClick={addTagHandler}
        >{'+'}</div>
        <div className={styles.addTagButton}
        onClick={removeTagHandler}
        >{'-'}</div>
      </div>
      
      {childs.length > 0 && <div className={styles.childsContainer}>
      <ul>{childs.map((child) => child)}
      </ul>
      </div>}
      
    </li>
  );
};

export default TagsBranch;
