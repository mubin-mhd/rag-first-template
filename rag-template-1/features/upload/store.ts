import { UploadFile } from './types';

export interface UploadState {
  files: UploadFile[];
  isUploading: boolean;
}

export const initialUploadState: UploadState = {
  files: [],
  isUploading: false,
};
