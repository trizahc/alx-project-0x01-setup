import { useEffect, useState } from 'react';
import Link from 'next/link';
import PostModal from '@/components/common/PostModal';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleAddPost = (newPost: { title: string; body: string }) => {
    const newPostWithId: Post = {
      id: posts.length + 1,
      ...newPost,
    };
    setPosts([newPostWithId, ...posts]);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Post
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 bg-white rounded shadow">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-lg font-semibold hover:underline">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      )}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}
