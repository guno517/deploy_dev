import { atom } from 'recoil';

// λκΈ μμ±
export const commentState = atom<Comment | null>({
  key: 'commentState',
  default: null,
});
