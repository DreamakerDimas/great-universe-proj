import {TAGS_EDITOR_TYPES} from './types';
import {TagEntity} from '../common/entities';

interface CreateTag {
  code_name?: string,
  name?: string,
  child_tags?: [],
  related_tags?: [],
}

interface UpdateTag extends CreateTag {}

export interface SelectTagPayload {
  tagsChainArr: string[];
  tagData: TagEntity;
}

export interface CreateTagPayload {
  tagsChainArr: string[];
  tagData: CreateTag;
}

export interface UpdateTagPayload {
  tagsChainArr: string[];
  tagData: UpdateTag;
}

export interface DeleteTagPayload {
  tagsChainArr: string[];
}

export const selectTag = (data: SelectTagPayload) => ({
  type: TAGS_EDITOR_TYPES.SELECT_TAG,
  data,
});

export const getAllTags = () => ({
  type: TAGS_EDITOR_TYPES.GET_ALL_TAGS,
});

export const createTag = (data: CreateTagPayload) => ({
  type: TAGS_EDITOR_TYPES.CREATE_TAG,
  data,
});

export const updateTag = (data: UpdateTagPayload) => ({
  type: TAGS_EDITOR_TYPES.UPDATE_TAG,
  data,
});

export const deleteTag = (data: DeleteTagPayload) => ({
  type: TAGS_EDITOR_TYPES.DELETE_TAG,
  data,
});
