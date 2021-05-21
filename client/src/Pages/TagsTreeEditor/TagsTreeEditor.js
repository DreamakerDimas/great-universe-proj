import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTags, selectTag } from '../../actions/tagsEditor';
import TagsTree from '../../components/TagsTree/TagsTree';
import styles from './TagsTreeEditor.module.sass';

// only for admin, moderator !!!
const TagsTreeEditor = ({ selectTag, getAllTags, tagsEditorStore }) => {
  const { loading, tagsTree } = tagsEditorStore;

  useEffect(() => {
    getAllTags();
  }, []);

  // add user data waiter (globally) !!!

  return (
    <div className={styles.mainContainer}>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <TagsTree tagsTree={tagsTree} select={selectTag} />
          {/* in to TagsTree - props: tagsTree, select */}
          <div>Tag Description</div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { tagsEditorStore } = state;
  return { tagsEditorStore };
};

const mapDispatchToProps = (dispatch) => ({
  selectTag: (data) => dispatch(selectTag(data)),
  getAllTags: () => dispatch(getAllTags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsTreeEditor);
