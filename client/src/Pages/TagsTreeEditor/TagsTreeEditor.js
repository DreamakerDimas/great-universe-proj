import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllTags, selectTag} from '../../actions/tagsEditor';
import TagsTree from '../../components/TagsTree/TagsTree';
import styles from './TagsTreeEditor.module.sass';

// only for admin, moderator !!!
const TagsTreeEditor = ({selectTag, getAllTags, tagsEditorStore}) => {
  const {loading, tagsTree} = tagsEditorStore;

  useEffect(() => {
    getAllTags();
  }, []);

  // add user data waiter (globally) !!!

  return (
    <div className={styles.mainContainer}>
      {loading && tagsTree.length === 0 ? (
        'Loading...'
      ) : (
        <>
          <TagsTree tagsTree={tagsTree} select={selectTag} />

          <div>Tag Description</div>

          <div className={styles.popUpContainer}>
            <div className={styles.formContainer}>

            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {tagsEditorStore} = state;
  return {tagsEditorStore};
};

const mapDispatchToProps = (dispatch) => ({
  selectTag: (data) => dispatch(selectTag(data)),
  getAllTags: () => dispatch(getAllTags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsTreeEditor);
