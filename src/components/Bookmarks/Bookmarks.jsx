import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2">
            <div className='text-center m-4 py-8 px-6 bg-blue-300 '>
                <h3 className='text-4xl'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-green-700 text-center bg-white py-4 mx-4">Bookmarked blocks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                key={bookmark.id} 
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;