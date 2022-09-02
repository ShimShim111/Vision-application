import { RootState } from "../store";
export const selectLike = (state: RootState) => state.like.likeStore;
