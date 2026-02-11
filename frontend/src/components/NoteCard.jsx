import { PenSquareIcon, Trash2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/utils.js'

function NoteCard({ note }) {
  return (
    <Link
      to={`/note/${note._id}`}
      className='card bg-white/5 backdrop-blur-md
        hover:bg-white/10 hover:-translate-y-1
        border  border-[#00FF9D]
        hover:shadow-[0_0_20px_rgba(0,255,157,0.15)]
        transition-all duration-300
        border-t-4 border-[#00FF9D]'
            >
      <div className='card-body'>
        <h3 className='card-title text-white'>
          {note.title}
        </h3>

        <p className='text-white/70 line-clamp-3'>
          {note.content}
        </p>

        <div className='card-actions justify-between items-center mt-4'>
          <span className='text-sm text-white/60'>
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className='flex items-center gap-2'>
            <PenSquareIcon className='size-4 text-white/70 hover:text-[#00FF9D]' />

            <button className='btn btn-ghost btn-xs text-error'>
              <Trash2 className='size-4'/>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard
