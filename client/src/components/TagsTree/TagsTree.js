import React, {useCallback, useState} from 'react';
import TagsBranch from '../TagsBranch/TagsBranch';
import styles from './TagsTree.module.sass';
import Modal from '../Modal/Modal';
import CreateTag from '../TagsActions/CreateTag';

const TagsTree = ({tagsTree, select, isEditorMode}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInnerElem, setModalInnerElem] = useState(null);


  const displayModalHandler = useCallback((innerElem) => {
    setShowModal(true);
    setModalInnerElem(innerElem);
  }, []);

  const hideModalHandler = useCallback(() => {
    setShowModal(false);
    setModalInnerElem(null);
  }, []);

  const addRootTagHandler = useCallback(() => {
    displayModalHandler(<CreateTag pathArr={[]} closeModal={hideModalHandler} />);
  }, []);

  const renderBranch = (branch, pathArr) => {
    if (branch.child_tags.length === 0) {
      return (
        <TagsBranch
          // styles={styles.branchStyles}
          key={branch.code_name}
          branch={branch}
          select={select}
          childs={[]}
          pathArr={pathArr}
          displayModalHandler={displayModalHandler}
          hideModalHandler={hideModalHandler}
          isEditorMode={isEditorMode}
        />
      );
    }

    return (
      <TagsBranch
        // styles={styles.branchStyles} //? mb use state (color)
        key={branch.code_name}
        branch={branch}
        select={select}
        childs={branch.child_tags.map((tag) => {
          const newPathArr = [...pathArr, tag.code_name];
          return renderBranch(tag, newPathArr);
        })}
        pathArr={pathArr}
        displayModalHandler={displayModalHandler}
        hideModalHandler={hideModalHandler}
        isEditorMode={isEditorMode}
      />
    );
  };

  return (
    <div className={styles.treeContainer}>
      <ul className={styles.treeList}>
        {tagsTree.map((branch) => renderBranch(branch, [branch.code_name]))}
        <div className={styles.addBranch} onClick={addRootTagHandler}>Новая ветка</div>
      </ul>
      {showModal && <Modal InnerElement={modalInnerElem} hideModalHandler={hideModalHandler} />}
    </div>
  );
};

export default TagsTree;
