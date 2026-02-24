import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets';
import Footer from '../components/Footer';
import Moment from 'moment'
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Blog = () => {
  const {id} = useParams();
  const {axios} = useAppContext();
  
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`/api/blog/${id}`);
      
      if (response.data && response.data.success) {
        setData(response.data.blog);
      } else {
        toast.error(response.data?.message || 'Blog not found');
      }
    } catch(error) {
      console.error('Error fetching blog:', error);
      toast.error('Failed to load blog');
    } finally {
      setLoading(false);
    }
  }

  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id });
      
      if (data && data.success) {
        setComments(data.comments || []);
      } else {
        setComments([]);
      }
    } catch(error) {
      console.error('Error fetching comments:', error);
      setComments([]);
    }
  }

  const addComment = async (e) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const { data } = await axios.post('/api/blog/add-comment', {
        blog: id,
        name: name.trim(),
        content: content.trim()
      });
      
      if (data && data.success) {
        toast.success(data.message || 'Comment added successfully!');
        setName('');
        setContent('');
        fetchComments();
      } else {
        toast.error(data?.message || 'Failed to add comment');
      }
    } catch(error) { 
      console.error('Error adding comment:', error);
      toast.error('Failed to add comment');
    }
  }

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id])

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return (
      <div className='relative min-h-screen flex items-center justify-center'>
        <Navbar/>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Blog not found</h2>
          <p className='text-gray-600'>The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()} 
            className='mt-4 bg-primary text-white px-6 py-2 rounded hover:scale-105 transition-all'
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-10 opacity-50'/>
      <Navbar/>

      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>
          Nirmal Bisht
        </p>
      </div>

      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} className='rounded-3xl mb-5' alt={data.title}/>

        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}></div>

        {/* Comment Section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Comments ({comments.length})</p>
          <div className='flex flex-col gap-4'>
            {comments.length > 0 ? (
              comments.map((item, index) => (
                <div key={item._id || index} className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'>
                  <div className='flex items-center gap-2 mb-2'>
                    <img src={assets.user_icon} className='w-6' alt="User"/>
                    <p className='font-medium'>{item.name}</p>
                  </div>
                  <p className='text-sm max-w-md ml-8'>{item.content}</p>
                  <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>
                    {Moment(item.createdAt).fromNow()}
                  </div>
                </div>
              ))
            ) : (
              <p className='text-gray-500 text-sm'>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>

        {/* Add Comment Section*/}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add your comment</p>
          <form className='flex flex-col items-start gap-4 max-w-lg' onSubmit={addComment}>
            <input 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              type="text" 
              placeholder='Name' 
              required 
              className='w-full p-2 border border-gray-300 rounded outline-none' 
            />
            <textarea 
              onChange={(e) => setContent(e.target.value)} 
              value={content}
              className='w-full p-2 border border-gray-300 rounded outline-none h-48' 
              placeholder="Comment" 
              required
            ></textarea>
            <button type='submit' className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>
              Submit
            </button>
          </form>
        </div>

        {/* Share Buttons */}
        <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>Share this article on Social Media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} width={50} alt="Share on Facebook" />
            <img src={assets.twitter_icon} width={50} alt="Share on Twitter" />
            <img src={assets.googleplus_icon} width={50} alt="Share on Google Plus" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Blog