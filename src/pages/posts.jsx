import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../slices/postsSlice';

export default function Posts() {
    const {posts, status, error} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchPosts())
      }
    }, [status, dispatch])

    if (status == 'loading') {
      return (
        <p>Завантаження даних...</p>
      )
    }

    if (status == 'Failed') {
      return (
        <p>Помилка завантаження даних</p>
      )
    }
    return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}