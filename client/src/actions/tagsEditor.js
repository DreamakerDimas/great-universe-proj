import { TAGS_EDITOR_TYPES } from './types';

export const selectTag = (data) => ({
  type: TAGS_EDITOR_TYPES.SELECT_TAG,
  data, // data = {tagData: {...}, tagChain: [strings of code_name]}
});

export const getAllTags = () => ({
  type: TAGS_EDITOR_TYPES.GET_ALL_TAGS,
});

export const createTag = (data) => ({
  type: TAGS_EDITOR_TYPES.CREATE_TAG,
  data,
});

export const updateTag = (data) => ({
  type: TAGS_EDITOR_TYPES.UPDATE_TAG,
  data,
});

export const deleteTag = (data) => ({
  type: TAGS_EDITOR_TYPES.DELETE_TAG,
  data,
});
