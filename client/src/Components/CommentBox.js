import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

const CommentBox = ({comments}) => {
    return(
        <Comment.Group>
            <Header as='h3' dividing>Comments</Header>
            {comments.map(comment => {
                return(
                    <Comment>
                        <Comment.Content>
                            <Comment.Author>{comment.name}</Comment.Author>
                            <Comment.Text>
                                {comment.text}
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>
                )
            })}
        </Comment.Group>
    )
};

export default CommentBox;