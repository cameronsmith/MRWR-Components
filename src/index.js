import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Cameron"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          comment="The newest comment!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Dave"
          timeAgo="Today at 2:00PM"
          avatar={faker.image.avatar()}
          comment="2nd comment!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Mike"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
          comment="3rd comment!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
