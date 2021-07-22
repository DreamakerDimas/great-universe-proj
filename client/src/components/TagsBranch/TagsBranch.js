import React, {useCallback, useState} from 'react';
import styles from './TagsBranch.module.sass';
import EditTag from '../TagsActions/EditTag';
import CreateTag from '../TagsActions/CreateTag';
import DeleteTagConfirm from '../TagsActions/DeleteTagConfirm';
import ArrowIcon from '../Common/ArrowIcon/ArrowIcon';

const TagsBranch = (props) => {
  const {branch, select, childs, pathArr, editTag, addTag, removeTag,
    compStyles, displayModalHandler, hideModalHandler} = props;

  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const editTagHandler = useCallback(() => {
    displayModalHandler(<EditTag pathArr={pathArr} closeModal={hideModalHandler} />);
  }, []);

  const addTagHandler = useCallback(() => {
    displayModalHandler(<CreateTag pathArr={pathArr} closeModal={hideModalHandler} /> );
  }, []);

  const removeTagHandler = useCallback(() => {
    displayModalHandler(<DeleteTagConfirm pathArr={pathArr} closeModal={hideModalHandler} />);
  }, []);

  const showContentToggle = useCallback(() => {
    setShowContent((prev) => !prev);
  }, []);

  const showButtonsHandler = useCallback(() => {
    setShowButtons(true);
  }, []);

  const hideButtonsHandler = useCallback(() => {
    setShowButtons(false);
  }, []);

  return (
    <li className={styles.branchContainer}>
      <div className={styles.branchHeader}>
        <div className={styles.tagNameContainer} onMouseEnter={showButtonsHandler} onMouseLeave={hideButtonsHandler}>
          <div className={styles.arrow} onClick={showContentToggle}>
            <ArrowIcon isActive={showContent} />
          </div>

          <div
            className={styles.tagName}
            onClick={() => select({tagData: branch, tagChain: pathArr})}
          >
            {branch.name}
          </div>

          {showButtons && <div className={styles.buttonsContainer}>
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
          </div>}
        </div>
      </div>

      <div className={styles.branchBody}>
        {showContent &&
        <div>
          {childs.length > 0 && <div className={styles.childsContainer}>
            <ul>{childs.map((child) => child)}
            </ul>
          </div>}
        </div>}
      </div>

    </li>
  );
};

export default TagsBranch;
