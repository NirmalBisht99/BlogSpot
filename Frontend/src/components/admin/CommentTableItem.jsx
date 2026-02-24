import React from 'react'
import { assets } from '../../assets/assets';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';
import Moment from 'moment';

const CommentTableItem = ({comment, fetchComments, index}) => {
  const { axios } = useAppContext();

  const deleteComment = async() => {
    const confirm = window.confirm("Are you sure you want to delete this comment?");
    if (!confirm) return;
    
    try {
      const { data } = await axios.post('/api/admin/delete-comment', {id: comment._id});
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch(error) {
      console.error('Error deleting comment:', error);
      toast.error('Failed to delete comment');
    }
  }

  const toggleApproval = async() => {
    try {
      // FIXED: Changed from /api/admin/toggle-approval to /api/admin/approve-comment
      const { data } = await axios.post('/api/admin/approve-comment', {id: comment._id});
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch(error) {
      console.error('Error toggling approval:', error);
      toast.error('Failed to update approval');
    }
  }

  return (
    <tr className='border-y border-gray-300'>
      <td className='px-6 py-4'>
        <div className='flex flex-col gap-1'>
          <p className='font-medium text-gray-800'>{comment.blog?.title || 'Blog Title'}</p>
          <p className='text-xs text-gray-600'>By: {comment.name}</p>
          <p className='text-sm text-gray-500 mt-1'>{comment.content}</p>
        </div>
      </td>
      <td className='px-6 py-4 max-sm:hidden'>
        {Moment(comment.createdAt).format('MMM DD, YYYY')}
      </td>
      <td className='px-6 py-4 flex gap-2'>
        <button 
          onClick={toggleApproval}
          className={`border px-3 py-1 rounded text-xs cursor-pointer ${
            comment.isApproved ? 'text-orange-600 border-orange-600' : 'text-green-600 border-green-600'
          }`}
        >
          {comment.isApproved ? 'Unapprove' : 'Approve'}
        </button>
        <img 
          src={assets.cross_icon} 
          className='w-8 hover:scale-110 transition-all cursor-pointer' 
          alt="Delete" 
          onClick={deleteComment}
        />
      </td>
    </tr>
  )
}

export default CommentTableItem