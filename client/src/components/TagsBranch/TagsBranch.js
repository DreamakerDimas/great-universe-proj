import React, {useCallback, useMemo, useState} from 'react';
import styles from './TagsBranch.module.sass';
import EditTag from '../TagsActions/EditTag';
import CreateTag from '../TagsActions/CreateTag';
import DeleteTagConfirm from '../TagsActions/DeleteTagConfirm';
import ArrowIcon from '../Common/ArrowIcon/ArrowIcon';

const TagsBranch = (props) => {
  const {branch, select, childs, pathArr, displayModalHandler, hideModalHandler, isEditorMode} = props;

  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const isEmpty = useMemo(() => childs.length === 0, [childs]);

  const editTagHandler = useCallback(() => {
    if (!isEditorMode) return;
    displayModalHandler(<EditTag pathArr={pathArr} closeModal={hideModalHandler} />);
  }, [isEditorMode]);

  const addTagHandler = useCallback(() => {
    if (!isEditorMode) return;
    displayModalHandler(<CreateTag pathArr={pathArr} closeModal={hideModalHandler} /> );
  }, [isEditorMode]);

  const removeTagHandler = useCallback(() => {
    if (!isEditorMode) return;
    displayModalHandler(<DeleteTagConfirm pathArr={pathArr} closeModal={hideModalHandler} />);
  }, [isEditorMode]);

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
            {!isEmpty && <ArrowIcon isActive={showContent}/>}
          </div>

          <div
            className={styles.tagName}
            onClick={() => select({tagData: branch, tagChain: pathArr})}
          >
            {branch.name}
          </div>

          {isEditorMode && showButtons && <div className={styles.buttonsContainer}>
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
          {!isEmpty && <div className={styles.childsContainer}>
            <ul>{childs.map((child) => child)}
            </ul>
          </div>}
        </div>}
      </div>

    </li>
  );
};

export default TagsBranch;
