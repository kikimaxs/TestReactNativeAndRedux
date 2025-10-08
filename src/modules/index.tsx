import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '@reduxjs/toolkit/query';
import Home from './Home/Screens';
import PostDetails from './PostDetails/Screens';

export default function Root() {
const selectedPostId = useSelector(
    (state: RootState) => state.selection.selectedPostId
);
    return selectedPostId ? <PostDetails/> : <Home/>;
}
