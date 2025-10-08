import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/rootReduces';
import HomeScreen from '../modules/Home/Screens';
import PostDetailsScreen from '../modules/PostDetails/Screens';

export default function Root() {
  const selectedPostId = useSelector(
    (state: RootState) => state.selection.selectedPostId
  );
  return selectedPostId ? <PostDetailsScreen /> : <HomeScreen />;
}