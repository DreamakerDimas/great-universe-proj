import React, {useCallback, useState} from 'react';
import styles from './TagsBranch.module.sass';
import EditTag from '../TagsActions/EditTag';
import CreateTag from '../TagsActions/CreateTag';

const TagsBranch = (props) => {
  const {branch, select, childs, pathArr, editTag, addTag, removeTag,
    compStyles, displayModalHandler, hideModalHandler} = props;

  const [showContent, setShowContent] = useState(false);

  const editTagHandler = useCallback(() => {
    displayModalHandler(<EditTag pathArr={pathArr} closeModal={hideModalHandler} />);
  }, []);

  const addTagHandler = useCallback(() => {
    displayModalHandler(<CreateTag pathArr={pathArr} closeModal={hideModalHandler} /> );
  }, []);

  const removeTagHandler = useCallback(() => {
    // editTag()
  }, []);

  const showContentToggle = useCallback(() => {
    setShowContent((prev) => !prev);
  }, []);

  return (
    <li className={styles.branchContainer}>
      <div className={styles.branchHeader}>
        <div className={styles.tagNameContainer}>
          <div className={styles.arrow} onClick={showContentToggle}>{'>'}</div>

          <div
            className={styles.tagName}
            onClick={() => select({tagData: branch, tagChain: pathArr})}
          >
            {branch.name}
          </div>
        </div>

        {showContent && <>
          <div className={styles.buttonsContainer}>
            <div
              className={styles.editTagButton}
              onClick={editTagHandler}
            >{'edit'}</div>
            <div className={styles.addTagButton}
              onClick={addTagHandler}
            >{'+'}</div>
            <div className={styles.removeTagButton}
              onClick={removeTagHandler}
            >{'-'}</div>
          </div>

          {childs.length > 0 && <div className={styles.childsContainer}>
            <ul>{childs.map((child) => child)}
            </ul>
          </div>}

        </>}
      </div>

    </li>
  );
};

export default TagsBranch;
