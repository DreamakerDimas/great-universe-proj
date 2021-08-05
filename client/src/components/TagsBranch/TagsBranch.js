import React, {useCallback, useMemo, useState} from 'react';
import styles from './TagsBranch.module.sass';
import EditTag from '../TagsActions/EditTag';
import CreateTag from '../TagsActions/CreateTag';
import DeleteTagConfirm from '../TagsActions/DeleteTagConfirm';
import ArrowIcon from '../Common/ArrowIcon/ArrowIcon';
import classNames from 'classnames';

const TagsBranch = (props) => {
  const {branch, select, childs, pathArr, displayModalHandler, hideModalHandler, isEditorMode} = props;

  // --- --- --- --- --- ---
  // --- --- render --- ---
  const [showContent, setShowContent] = useState(false);
  const [disableBodyRender, setDisableBodyRender] = useState(true);

  const [showButtons, setShowButtons] = useState(false);
  const [disableButtonsRenderer, setDisableButtonsRenderer] = useState(true);

  const isEmpty = useMemo(() => childs.length === 0, [childs]);
  // --- --- --- --- --- ---
  // --- --- --- --- --- ---

  // --- --- --- --- --- ---
  // --- --- actions --- ---
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
    if (showContent) {
      setShowContent(false);
      setTimeout(() => setDisableBodyRender(true), 300);
    } else {
      setShowContent(true);
      setDisableBodyRender(false);
    }
  }, [showContent]);

  const showButtonsHandler = useCallback(async () => {
    setShowButtons(true);
    setDisableButtonsRenderer(false);
  }, []);

  const hideButtonsHandler = useCallback(async () => {
    setShowButtons(false);
    await setTimeout(() => setDisableButtonsRenderer(true), 300);
  }, []);
  // --- --- --- --- --- ---
  // --- --- --- --- --- ---

  // --- --- --- --- --- ---
  // --- --- styles --- ---
  const branchBodyStyles = useMemo(() => classNames({
    [styles.branchBody]: true,
    [styles.activeBranchBody]: showContent,
  }), [showContent]);

  const branchContainerStyles = useMemo(() => classNames({
    [styles.branchContainer]: true,
    [styles.activeBranchContainer]: showContent,
  }), [showContent]);

  const buttonsContainerStyles = useMemo(() => classNames({
    [styles.buttonsContainer]: true,
    [styles.activeButtonsContainer]: showButtons,
  }), [showButtons]);
  // --- --- --- --- --- ---
  // --- --- --- --- --- ---

  return (
    <li className={branchContainerStyles}>
      <div className={styles.branchHeader}>
        <div
          className={styles.tagNameContainer}
          onMouseEnter={showButtonsHandler}
          onMouseLeave={hideButtonsHandler}
        >
          {/* Arrow */}
          <div className={styles.arrow} onClick={showContentToggle}>
            {!isEmpty && <ArrowIcon isActive={showContent}/>}
          </div>

          {/* Header */}
          <div
            className={styles.tagName}
            onClick={() => select({tagData: branch, tagChain: pathArr})}
          >
            {branch.name}
          </div>

          {/* Buttons */}
          {isEditorMode && !disableButtonsRenderer && <div className={buttonsContainerStyles}>
            <div className={styles.editTagButton} onClick={editTagHandler}>
              {'edit'}
            </div>
            <div className={styles.addTagButton} onClick={addTagHandler}>
              {'+'}
            </div>
            <div className={styles.removeTagButton} onClick={removeTagHandler}>
              {'-'}
            </div>
          </div>}
        </div>
      </div>

      {/* Content */}
      <div className={branchBodyStyles}>
        {!disableBodyRender &&
        <div>
          {!isEmpty && <div>
            <ul>
              {childs.map((child) => child)}
            </ul>
          </div>}
        </div>}
      </div>

    </li>
  );
};

export default TagsBranch;
