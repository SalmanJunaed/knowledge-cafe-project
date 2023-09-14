import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    // console.log(blog);
    const {title, cover,author, author_img, reading_time, posted_date,hashtags} = blog;
    return (
        <div>
            <img className='w-2/3' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className=''>  
                {/* we have to map though we have multiple data */}
                {
                hashtags.map((hash, idx) => <span key={idx}><a href="#">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;