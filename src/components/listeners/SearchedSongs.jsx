import React from 'react'
import { useSearchSongs } from './hook/listenerHooks';
import SongCard from './SongCard';
import TrendingSongsSkeleton from './TrendingSongsSkeleton';
import SearchSongsSkeleton from './SearchSongsSkeleton';

const SearchedSongs = ({data,isPending,search}) => {
    
    if(isPending) return <SearchSongsSkeleton/>
    
    
  return (
    <div>
        <h1 className='text-2xl p-4'>Results for "{search}"</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.data?.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
      </div>
  )
}

export default SearchedSongs
