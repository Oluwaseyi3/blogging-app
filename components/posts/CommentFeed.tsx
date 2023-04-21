
interface CommentFeedProps{
    comments?: Record<string, any>[]
}

import CommentItem from "./CommentItem";

const CommentFeed: React.FC<CommentFeedProps> = ({comments =[]}) => {
    return ( 
        <>
        {comments.map((comment) => (
            <div key={comment.id}>
                <CommentItem  
                 key={comment.id}
                 data={comment}
                />
            </div>
        ))}
        </>
     );
}
 
export default CommentFeed;